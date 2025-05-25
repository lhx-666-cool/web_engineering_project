import {NextResponse} from 'next/server';

export async function GET(request: Request) {
  const username = request.headers.get('X-Authenticated-User');
  const role = request.headers.get('X-Authenticated-Role');
  if (username) {
    return NextResponse.json({username, role});
  } else {
    // 如果没有用户名头，表示用户未认证或不在受保护路由
    return NextResponse.json({error: 'User not authenticated'}, {status: 401});
  }
}