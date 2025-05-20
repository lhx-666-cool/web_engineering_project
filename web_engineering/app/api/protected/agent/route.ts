import {NextResponse} from "next/server";
import sqlite3 from "sqlite3";
import {open} from "sqlite";
import {agentType} from "@/ts/type";

async function openDb() {
  return open({
    filename: './assets/web.db', // 数据库文件路径，可以根据需要修改
    driver: sqlite3.Database
  });
}

export async function GET() {
  const db = await openDb();
  try {
    const data = await db.all('SELECT * FROM agent');
    return NextResponse.json(data);
  } catch (e) {
    console.log(e);
  }
}

export async function POST(req: Request) {
  const body = await req.json();
  const db = await openDb();
  try {
    const data = await db.run("INSERT INTO agent (name, desc, content, icon) VALUES (?, ?, ?, ?)", [body.name, body.desc, body.content, body.icon]);
    if (data.changes == 1) {
      return NextResponse.json({code: 200, message: 'success'});
    }else {
      return NextResponse.json({code: 500, message: 'error'}, {status: 500});
    }
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({code: 500, message: e.message}, {status: 500});
    }
    return NextResponse.json({code: 500, message: e}, {status: 500});
  }
}

export async function DELETE(req: Request) {
  const body = await req.json();
  const db = await openDb();
  try {
    const data = await db.run("DELETE FROM agent WHERE id = ?", [body.id]);
    if (data.changes == 1) {
      return NextResponse.json({code: 200, message: 'success'});
    }else {
      return NextResponse.json({code: 500, message: 'error'}, {status: 500});
    }
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({code: 500, message: e.message}, {status: 500});
    }
    return NextResponse.json({code: 500, message: e}, {status: 500});
  }
}

export async function getAgents(): Promise<agentType[]> {
  const db = await openDb();
  try {
    return await db.all('SELECT * FROM agent');
  } catch (e) {
    console.log(e);
  }
  return [];
}

export async function addAgent(agent: agentType): Promise<boolean> {
  const db = await openDb();
  try {
    await db.run("INSERT INTO agent (name, desc, content, icon) VALUES (?, ?, ?, ?)", [agent.name, agent.desc, agent.content, agent.icon]);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}