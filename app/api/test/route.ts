import { NextResponse } from 'next/server';
import connection from '@/lib/db';

export async function GET(request : Request) {
    return NextResponse.json({ error: "List not found" }, { status: 200 });
}
