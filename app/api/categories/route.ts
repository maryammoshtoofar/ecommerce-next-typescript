import connectMongoDB from '@/app/_lib/mongodb/mongodb';
import Category, { CategoryI } from '@/app/_models/categories';
import { NextResponse } from 'next/server';

interface ReqI {
  json: () => PromiseLike<CategoryI> | CategoryI;
}

export async function POST(req: ReqI) {
  const { title, description } = await req.json();
  await connectMongoDB();
  await Category.create({ title, description });
  return NextResponse.json({ message: 'Category Created' }, { status: 201 });
}

export async function GET() {
  return NextResponse.json({ message: 'Category' }, { status: 200 });
}
