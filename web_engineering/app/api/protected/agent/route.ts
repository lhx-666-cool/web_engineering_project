import {NextResponse} from "next/server";
import sqlite3 from "sqlite3";
import {open} from "sqlite";
import {agentType} from "@/ts/type";

async function openDb() {
    return open({
        filename: './assets/web.db', // 数据库文件路径，可以根据需要修改
        driver: sqlite3.Database
    });
}

export async function GET() {
    const db = await openDb();
    try{
        const data = await db.all('SELECT * FROM agent');
        return NextResponse.json(data);
    }catch (e) {
        console.log(e);
    }
}

export async function getAgents(): Promise<agentType[]> {
    const db = await openDb();
    try{
        return await db.all('SELECT * FROM agent');
    }catch (e) {
        console.log(e);
    }
    return [];
}