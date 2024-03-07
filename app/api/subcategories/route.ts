import connectMongoDB from '@/app/_lib/mongodb/mongodb';
import Subcategory, { SubcategoryI } from '@/app/_models/subcategories';
import { NextResponse } from 'next/server';

interface ReqI {
  json: () => PromiseLike<SubcategoryI> | SubcategoryI;
}

export async function POST(req: ReqI) {
  const { title, description, category } = await req.json();
  await connectMongoDB();
  await Subcategory.create({ title, description, category });
  return NextResponse.json({ message: 'Subcategory Created' }, { status: 201 });
}

export async function GET() {
  return NextResponse.json({ message: 'Subcategory' }, { status: 200 });
}
