// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

// 用于签名和验证 JWT 的密钥（与 pages/api/login.ts 中的保持一致）
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key_here'; // 替换为你自己的密钥

// 定义需要鉴权的路径前缀
const protectedRoutes = ['/admin', '/chat', '/profile', '/api/protected', '/api/user'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 判断当前路径是否是需要鉴权的路径
  const isProtectedRoute = protectedRoutes.some(prefix => pathname.startsWith(prefix));

  // 如果是需要鉴权的路径，则进行 token 验证
  if (isProtectedRoute) {
    const authToken = request.cookies.get('auth_token')?.value;

    if (authToken) {
      try {
        // 验证 JWT 并解码 payload
        const decoded = jwt.verify(authToken, JWT_SECRET) as { userId: number; username: string; role: number };

        // Token 有效，用户已登录
        const username = decoded.username; // 从解码后的 payload 中获取用户名
        const role = decoded.role; // 从解码后的 payload 中获取用户角色
        if (pathname === '/admin' && role === 0) {
          // 如果当前路径是登录页，重定向到主页
          const homeUrl = new URL('/', request.url);
          return NextResponse.redirect(homeUrl);
        }
        // 将用户名传递给后续的 API 接口或页面组件
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set('X-Authenticated-User', username);
        return NextResponse.next({
          request: {
            headers: requestHeaders,
          },
        });

      } catch (error: unknown) {
        // Token 无效或过期
        if (error instanceof Error) {
          console.log('JWT 验证失败:', error.message);
        } else {
          console.log('JWT 验证失败: 未知错误');
        }
        // 重定向到登录页
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('redirect', pathname);
        const response = NextResponse.redirect(loginUrl);
        // 同时清除无效的 token cookie
        response.cookies.delete('auth_token');
        return response;
      }
    } else {
      // 没有 token
      console.log('没有 token');
      // 重定向到登录页
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 如果是不需要鉴权的路径，则继续请求
  return NextResponse.next();
}

export const runtime = 'nodejs';

export const config = {
  matcher: [
    '/admin/:path*',
    '/profile/:path*',
    '/chat/:path*',
    '/api/user/:path*',
    '/api/protected/:path*',
    // 排除登录页、注册页等不需要鉴权的页面
    '/((?!api|_next/static|_next/image|favicon.ico|login|register).*)',
  ],
};