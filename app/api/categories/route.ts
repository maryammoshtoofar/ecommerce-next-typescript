import connectMongoDB from '@/app/lib/mongodb/mongodb';
import Category, { CategoryI } from '@/app/_models/categories';
import { NextResponse } from 'next/server';

export interface ReqI {
  json: () => PromiseLike<CategoryI> | CategoryI;
}

interface DeleteReqI {
  nextUrl: { searchParams: { get: (arg0: string) => any } };
}

export async function POST(req: ReqI) {
  const { title, description } = await req.json();
  await connectMongoDB();
  await Category.create({ title, description });
  return NextResponse.json({ message: 'Category Created' }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const categories = await Category.find();
  return NextResponse.json({ categories }, { status: 200 });
}

export async function DELETE(req: DeleteReqI) {
  const id = req.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Category.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Category deleted' }, { status: 200 });
}
