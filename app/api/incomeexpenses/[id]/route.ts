import { NextResponse } from 'next/server';
import connection from '@/lib/db';


export async function GET(request : Request, { params }: { params:Promise<{ id: string }> }) {
    
    try {
        const id = (await params).id;
        // console.log(id)
        const [rows] : any = await (await connection).execute("SELECT * FROM incomeexpenses WHERE id = ?", [id]);
        if (rows.length === 0) {
            return NextResponse.json({ error: "List not found" }, { status: 404 });
        }
        
        return NextResponse.json(rows[0]);
      } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
      }
}

export async function PUT(request : Request, { params }: { params:Promise<{ id: string }> }) {
    const id = (await params).id;
    const { listname , amount , spent_at ,type } = await request.json();
    const updated_at = new Date()
    if (!listname || !amount || !spent_at || !type) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }
    try {
        await (await connection).execute("UPDATE incomeexpenses SET listname = ? , amount = ? , spent_at = ? , type = ? , updated_at = ? WHERE id = ?", 
            [listname , amount , spent_at ,type, updated_at , id]);
        
        return NextResponse.json({ success: true });
    } catch (error) {
      console.error("Database Error:", error);
      return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
    }
}

export async function DELETE(request : Request, { params }: { params:Promise<{ id: string }> }) {
    const id = (await params).id;
    try {
        await (await connection).execute("DELETE FROM incomeexpenses WHERE id = ?", [id]);
        
        return NextResponse.json({ success: true });
    } catch (error) {
      console.error("Database Error:", error);
      return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
    }
}