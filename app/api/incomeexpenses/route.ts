import { NextResponse } from 'next/server';
import connection from '@/lib/db';

export async function GET(request : Request) {
    try {
        const [rows] = await (await connection).execute("SELECT * FROM incomeexpenses ORDER BY id DESC");
        
        return NextResponse.json(rows);
      } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
      }
   
}

export async function POST(request: Request) {
    const { listname , amount , spent_at ,type} = await request.json();
    // console.log(listname , amount , spent_at ,type)
    if (!listname || !amount || !spent_at || !type) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }
    try {
        await (await connection).execute("INSERT INTO incomeexpenses (listname , amount , spent_at , type ) VALUES (?,?,?,?)", [listname , amount , spent_at,type]);
        
        return NextResponse.json({ success: true });
      } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
      }
}

