import {open} from 'sqlite';
import sqlite3 from 'sqlite3';

async function openDb() {
  return open({
    filename: './assets/web.db', // 数据库文件路径，可以根据需要修改
    driver: sqlite3.Database
  });
}

export async function addUsage(userId: string, model: string) {
  try {
    const db = await openDb();
    await db.run('INSERT INTO usage (userId, model) VALUES (?, ?)', [userId, model]);
  } catch (e) {
    console.error(e);
  }
}

export async function getModelUsage() {
  try {
    const db = await openDb();
    return await db.all('SELECT model, COUNT(*) AS count FROM usage GROUP BY model ORDER BY count DESC');
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function getUserUsage() {
  try {
    const db = await openDb();
    return await db.all('SELECT usage.userId, users.username, COUNT(*) AS count FROM usage JOIN users ON usage.userId = users.id GROUP BY usage.userId, users.username ORDER BY count DESC');
  } catch (e) {
    console.error(e);
    return [];
  }
}