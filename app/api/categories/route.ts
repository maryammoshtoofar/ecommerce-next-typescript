import connectMongoDB from '@/app/lib/mongodb/mongodb';
import Category from '@/app/lib/models/category';
import { NextResponse } from 'next/server';
import { CategoryI } from '@/app/_types/data-types';

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
