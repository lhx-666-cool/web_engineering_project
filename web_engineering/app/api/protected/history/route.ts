import {NextRequest, NextResponse} from "next/server";
import {open} from "sqlite";
import sqlite3 from "sqlite3";

async function openDb() {
  return open({
    filename: './assets/web.db', // 数据库文件路径，可以根据需要修改
    driver: sqlite3.Database
  });
}

export async function GET(req: NextRequest) {
  try {
    const db = await openDb();
    const userId = req.headers.get("X-Authenticated-UserId");
    const data = await db.all('SELECT title, sessionId, message FROM history WHERE userId = ? ORDER BY "update" DESC', [parseInt(userId as string)]);
    return NextResponse.json({code: 200, message: 'success', data: data});
  } catch (e) {
    return NextResponse.json({code: 500, message: e}, {status: 500});
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const db = await openDb();
    const userId = req.headers.get("X-Authenticated-UserId");
    const update = new Date().getTime();
    const data = await db.all('SELECT (sessionId) FROM history WHERE sessionId = ?', [body.sessionId]);
    if (data.length === 0) {
      await db.run('INSERT INTO history (userId, title, sessionId, message, "update") VALUES (?, ?, ?, ?, ?)', [userId, body.title, body.sessionId, body.message, String(update)]);
    } else {
      await db.run('UPDATE history SET message = ?, "update" = ?, title = ? WHERE sessionId = ?', [body.message, update, body.title, body.sessionId]);
    }
    return NextResponse.json({code: 200, message: 'success'});
  } catch (e) {
    return NextResponse.json({code: 500, message: e}, {status: 500});
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const db = await openDb();
    const userId = req.headers.get("X-Authenticated-UserId");
    const data = await db.run('DELETE FROM history WHERE sessionId = ? AND userId = ?', [body.sessionId, userId]);
    if (data.changes == 1) {
      return NextResponse.json({code: 200, message: 'success'});
    } else {
      return NextResponse.json({code: 500, message: 'error'}, {status: 500});
    }
  } catch (e) {
    return NextResponse.json({code: 500, message: e}, {status: 500});
  }
}

