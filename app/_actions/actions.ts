'use server';
import { revalidatePath } from 'next/cache';
import connectMongoDB from '@/app/lib/mongodb/mongodb';
import Product from '../lib/models/product';
import { NextResponse } from 'next/server';

export async function getAllProducts() {
  await connectMongoDB();
  return await Product.find();
}
export async function deleteProductById(id: string) {
  try {
    await connectMongoDB();
    await Product.findByIdAndDelete(id);

    revalidatePath('/');
    return { message: 'Deleted Product', status: 200 };
  } catch (e) {
    return { message: 'Failed to Delete Product' };
  }
}

export async function getProductById(id: string) {
  console.log('iddd', id);
  try {
    await connectMongoDB();
    const product = await Product.findOne({ _id: id });
    console.log(product);
    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    return { message: 'something went wrong' };
  }
}
