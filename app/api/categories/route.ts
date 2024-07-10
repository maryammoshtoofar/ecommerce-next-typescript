import connectMongoDB from '@/app/lib/mongodb/mongodb';
import Category from '@/app/lib/models/category';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  await connectMongoDB();
  const categories = await Category.find();
  return NextResponse.json({ categories }, { status: 200 });
}

export async function POST(req: Request) {
  const { title, description, image } = await req.json();
  await connectMongoDB();
  await Category.create({ title, description, image });
  return NextResponse.json({ message: 'Category Created' }, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Category.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Category deleted' }, { status: 200 });
}
