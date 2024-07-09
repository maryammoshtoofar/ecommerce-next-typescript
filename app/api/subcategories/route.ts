import connectMongoDB from '@/app/lib/mongodb/mongodb';
import Subcategory from '@/app/lib/models/subcategory';
import { NextResponse } from 'next/server';
import { SubcategoryDocument } from '@/app/_types/data-types';

interface ReqI {
  json: () => PromiseLike<SubcategoryDocument> | SubcategoryDocument;
}

interface DeleteReqI {
  nextUrl: { searchParams: { get: (arg0: string) => any } };
}

export async function POST(req: ReqI) {
  const { title } = await req.json();
  await connectMongoDB();
  await Subcategory.create({ title });
  return NextResponse.json({ message: 'Subcategory Created' }, { status: 201 });
}

export async function GET(req: any) {
  await connectMongoDB();
  const param = req.nextUrl.searchParams.get('category');
  if (param) {
    const subcategories = await Subcategory.find({ category: param });
    return NextResponse.json({ subcategories }, { status: 200 });
  } else {
    const categories = await Subcategory.find();
    return NextResponse.json({ categories }, { status: 200 });
  }
}
export async function DELETE(req: DeleteReqI) {
  const id = req.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Subcategory.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Subcategory deleted' }, { status: 200 });
}
