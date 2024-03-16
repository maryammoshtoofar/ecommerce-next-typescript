'use server';
import { revalidatePath } from 'next/cache';
import connectMongoDB from '@/app/lib/mongodb/mongodb';
import Product from '../lib/models/product';

export async function getAllProducts() {
  await connectMongoDB();
  return await Product.find();
}
export async function deleteProductById(id: string | null) {
  try {
    await connectMongoDB();
    await Product.findByIdAndDelete(id);

    revalidatePath('/');
    return { message: 'Deleted Product', status: 200 };
  } catch (e) {
    return { message: 'Failed to Delete Product' };
  }
}
