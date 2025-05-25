// app/api/chat/route.ts
import {NextRequest, NextResponse} from 'next/server';
import OpenAI from 'openai';
import {addUsage} from "@/app/api/protected/usage/usage";

const openai = new OpenAI({
  baseURL: 'https://newapi.hxzzz.asia/v1',
  apiKey: "sk-AnAvj3X1dubSa5449891B12731B04aEd94E5F01f8938C621",
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages = body.messages;
    const model = body.model || 'deepseek-ai/DeepSeek-V3';
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({message: 'Invalid messages provided'}, {status: 400});
    }
    const stream = await openai.chat.completions.create({
      model: model,
      stream: true,
      messages: messages,
    });
    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const event of stream) {
          const content = event.choices[0]?.delta?.content || '';
          if (content) {
            controller.enqueue(new TextEncoder().encode(content));
          }
        }
        controller.close();
      },
    });
    const userId = req.headers.get("X-Authenticated-UserId");
    await addUsage(userId as string, model);
    return new NextResponse(readableStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error: unknown) {
    console.error('Error calling OpenAI API:', error);
    if (error instanceof Error) {
      return NextResponse.json(
        {message: 'Internal Server Error', error: error.message},
        {status: 500}
      );
    }
  }
}