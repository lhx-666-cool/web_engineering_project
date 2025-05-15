// pages/api/login.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

// 模拟的用户数据（在实际应用中会从数据库获取）
const users = [
  { id: 1, username: 'testuser', password: 'password123' },
  { id: 2, username: 'admin', password: 'adminpassword' },
];

// 用于签名和验证 JWT 的密钥（强烈建议使用一个更复杂、随机且保密的密钥，最好从环境变量中获取）
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key_here'; // 替换为你自己的密钥

export async function POST(req: NextRequest) {
  console.log('req.method', req.method)
  if (req.method === 'POST') {
    const { username, password } = await req.json();

    // 模拟用户验证
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      // 用户验证成功，生成 JWT
      const token = jwt.sign(
        { userId: user.id, username: user.username }, // 包含用户信息的 payload
        JWT_SECRET, // 签名密钥
        { expiresIn: '7d' } // token 有效期设置为 7 天
      );

      const response = NextResponse.json({ success: true, message: '登录成功' });
      // 将 JWT 设置到 cookie 中
      response.cookies.set('auth_token', token, {
        httpOnly: true, // 建议使用 httpOnly 防止 XSS 攻击
        maxAge: 60 * 60 * 24 * 7, // cookie 有效期与 token 有效期一致
        path: '/', // 使 cookie 对整个站点有效
        // 在生产环境中，请考虑 secure: true 和 sameSite: 'Strict'
        // secure: process.env.NODE_ENV === 'production',
        // sameSite: 'Strict',
      });
      console.log('token', token)
      return response;
    } else {
      return NextResponse.json({ success: false, message: '用户名或密码错误' }, { status: 401 });
    }
  } else {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }
}