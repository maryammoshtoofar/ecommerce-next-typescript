import connectMongoDB from '@/app/lib/mongodb/mongodb';
import Category from '@/app/lib/models/category';
import { NextResponse } from 'next/server';
import { ReqI } from '../route';

export async function PUT(req: ReqI, { params }: { params: { id: string } }) {
  const { id } = params;
  const { title, description } = await req.json();
  await connectMongoDB();
  await Category.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: 'Category updated' }, { status: 200 });
}

export async function GET(_: ReqI, { params }: { params: { id: string } }) {
  const { id } = params;
  await connectMongoDB();
  const category = await Category.findOne({ _id: id });
  return NextResponse.json({ category }, { status: 200 });
}
