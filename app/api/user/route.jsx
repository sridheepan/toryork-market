import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
 
export async function GET() {
  const user = await kv.hgetall('user:admin');
  console.log(user);
  return NextResponse.json(user);
}