import {open} from 'sqlite';
import sqlite3 from 'sqlite3';

async function openDb() {
  return open({
    filename: './assets/web.db', // 数据库文件路径，可以根据需要修改
    driver: sqlite3.Database
  });
}

export async function getTitleList(userId: string) {
  try {
    const db = await openDb();
    return await db.all('SELECT title, sessionId FROM history WHERE userId = ? ORDER BY "update" DESC', [userId]);
  } catch (e) {
    console.error(e);
    return [];
  }
}