import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

// 打开数据库连接
async function openDb() {
    return open({
        filename: './assets/web.db', // 数据库文件路径，可以根据需要修改
        driver: sqlite3.Database
    });
}


export async function POST(req: NextRequest) {
    if (req.method === 'POST') {
        const {username, password} = await req.json();
        let db;
        try {
            db = await openDb();

            // register
            const user = await db.get('SELECT id, username, role FROM users WHERE username = ?', [username]);
            if (user) {
                return NextResponse.json({success: false, message: '用户已存在'}, {status: 400});
            } else {
                await db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
                return NextResponse.json({success: true, message: '注册成功'}, {status: 200});
            }
        } catch (error) {
            console.error('Database error:', error);
            return NextResponse.json({success: false, message: '服务器内部错误'}, {status: 500});
        } finally {
            if (db) {
                await db.close(); // 关闭数据库连接
            }
        }
    } else {
        return NextResponse.json({message: 'Method Not Allowed'}, {status: 405});
    }
}