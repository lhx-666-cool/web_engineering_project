import {agentType} from "@/ts/type";
import {open} from "sqlite";
import sqlite3 from "sqlite3";

async function openDb() {
  return open({
    filename: './assets/web.db', // 数据库文件路径，可以根据需要修改
    driver: sqlite3.Database
  });
}

export async function getAgents(): Promise<agentType[]> {
  try {
    const db = await openDb();
    return await db.all('SELECT * FROM agent');
  } catch (e) {
    console.log(e);
  }
  return [];
}