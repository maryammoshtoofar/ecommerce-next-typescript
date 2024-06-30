import connectMongoDB from '@/app/lib/mongodb/mongodb';
import Subcategory from '@/app/lib/models/subcategory';
import { NextResponse } from 'next/server';
import { ReqI } from '../../categories/route';

export async function PUT(req: ReqI, { params }: { params: { id: string } }) {
  const { id } = params;
  const { title, description } = await req.json();
  await connectMongoDB();
  await Subcategory.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: 'Subcategory updated' }, { status: 200 });
}

export async function GET(_: ReqI, { params }: { params: { id: string } }) {
  const { id } = params;
  await connectMongoDB();
  const category = await Subcategory.findOne({ _id: id });
  return NextResponse.json({ category }, { status: 200 });
}
