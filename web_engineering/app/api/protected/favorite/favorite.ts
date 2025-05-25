import {agentType} from "@/ts/type";
import {open} from "sqlite";
import sqlite3 from "sqlite3";

async function openDb() {
  return open({
    filename: './assets/web.db', // 数据库文件路径，可以根据需要修改
    driver: sqlite3.Database
  });
}

export async function getAllFavorites(userId: string): Promise<agentType[]> {
  try {
    const db = await openDb();
    return await db.all(
      `SELECT agent.* -- 选择 agent 表的所有字段
       FROM favorites
                JOIN
            agent ON favorites.agentId = agent.id -- 根据 agentId 和 id 进行联接
       WHERE favorites.userId = ?`,
      [userId]
    );
  } catch (e) {
    if (e instanceof Error) {
      console.error("Error fetching favorites with agent info:", e);
      // 在发生错误时返回一个带有错误信息的响应
      return [];
    }
    // 对于非 Error 类型的异常，也返回一个通用的错误响应
    return [];
  }
}