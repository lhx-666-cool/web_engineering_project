// pages/api/login.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// 打开数据库连接
async function openDb() {
  return open({
    filename: './assets/web.db', // 数据库文件路径，可以根据需要修改
    driver: sqlite3.Database
  });
}

// 用于签名和验证 JWT 的密钥（强烈建议使用一个更复杂、随机且保密的密钥，最好从环境变量中获取）
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key_here'; // 替换为你自己的密钥

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const { username, password } = await req.json();
    let db;
    try {
      db = await openDb();

      // 查询数据库进行用户验证
      const user = await db.get('SELECT id, username, role FROM users WHERE username = ? AND password = ?', [username, password]);

      if (user) {
        // 用户验证成功，生成 JWT
        const token = jwt.sign(
          { userId: user.id, username: user.username, role: user.role }, // 包含用户信息的 payload
          JWT_SECRET, // 签名密钥
          { expiresIn: '7d' } // token 有效期设置为 7 天
        );

        const response = NextResponse.json({ success: true, message: '登录成功', role: user.role });
        // 将 JWT 设置到 cookie 中
        response.cookies.set('auth_token', token, {
          httpOnly: true, // 建议使用 httpOnly 防止 XSS 攻击
          maxAge: 60 * 60 * 24 * 7, // cookie 有效期与 token 有效期一致
          path: '/', // 使 cookie 对整个站点有效
        });
        console.log('token', token);
        return response;
      } else {
        return NextResponse.json({ success: false, message: '用户名或密码错误' }, { status: 401 });
      }
    } catch (error) {
      console.error('Database error:', error);
      return NextResponse.json({ success: false, message: '服务器内部错误' }, { status: 500 });
    } finally {
      if (db) {
        await db.close(); // 关闭数据库连接
      }
    }
  } else {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }
}