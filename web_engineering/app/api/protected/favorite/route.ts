import {NextResponse} from "next/server";
import {open} from "sqlite";
import sqlite3 from "sqlite3";

async function openDb() {
  return open({
    filename: './assets/web.db', // 数据库文件路径，可以根据需要修改
    driver: sqlite3.Database
  });
}


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const db = await openDb();
    const userId = req.headers.get("X-Authenticated-UserId");
    if (body.agentId === null || body.agentId === undefined || userId === null || userId === undefined) {
      return NextResponse.json({code: 500, message: 'user id or agent id is null'}, {status: 500});
    }
    const data = await db.run("INSERT INTO favorites (userId, agentId) VALUES (?, ?)", [userId, body.agentId]);
    if (data.changes == 1) {
      return NextResponse.json({code: 200, message: 'success'});
    } else {
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
  try {
    const body = await req.json();
    const db = await openDb();
    const userId = req.headers.get("X-Authenticated-UserId");
    if (body.agentId === null || body.agentId === undefined || userId === null || userId === undefined) {
      return NextResponse.json({code: 500, message: 'user id or agent id is null'}, {status: 500});
    }
    const data = await db.run("DELETE FROM favorites WHERE userId = ? AND agentId = ?", [userId, body.agentId]);
    if (data.changes == 1) {
      return NextResponse.json({code: 200, message: 'success'});
    } else {
      return NextResponse.json({code: 500, message: 'error'}, {status: 500});
    }
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({code: 500, message: e.message}, {status: 500});
    }
    return NextResponse.json({code: 500, message: e}, {status: 500});
  }
}

