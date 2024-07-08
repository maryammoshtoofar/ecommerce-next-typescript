'use server';
import { revalidatePath } from 'next/cache';
import connectMongoDB from '@/app/lib/mongodb/mongodb';
import Product from '../../lib/models/product';
import { NextResponse } from 'next/server';
import Category from '@/app/lib/models/category';
import Subcategory from '@/app/lib/models/subcategory';
import { OrderI } from '@/app/_types/data-types';
import Order from '@/app/lib/models/order';

// Product actions

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
  try {
    await connectMongoDB();
    const product = await Product.findOne({ _id: id });
    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    return { message: 'something went wrong' };
  }
}

// Category actions

export async function getAllCategories() {
  await connectMongoDB();
  return await Category.find();
}

export async function getCategoryTitleById(id: string) {
  try {
    await connectMongoDB();
    const category = await Category.findOne({ _id: id });
    return category.title;
  } catch (error) {
    return { message: 'error getting category by ID' };
  }
}

export async function getSubcategoryTitleById(id: string) {
  try {
    await connectMongoDB();
    const subcategory = await Subcategory.findOne({ _id: id });
    return subcategory.title;
  } catch (error) {
    return { message: 'error getting subcategory by ID' };
  }
}

// Order actions

export async function createNewOrder(order: OrderI) {
  try {
    await connectMongoDB();
    const newOrder = new Order(order);
    const res = await newOrder.save();
    // const newOrder = await Order.insertOne(order);
    return res;
  } catch (error) {
    return { message: 'error submitting order' };
  }
}
