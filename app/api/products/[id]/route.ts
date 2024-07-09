import connectMongoDB from '@/app/lib/mongodb/mongodb';
import { NextResponse } from 'next/server';
import Product from '@/app/lib/models/product';
import { ReqI } from '../route';
import Category from '@/app/lib/models/category';
import Subcategory from '@/app/lib/models/subcategory';
import { ProductI } from '@/app/_types/data-types';

// export async function PUT(
//   req: Request,
//   { params }: { params: { id: string } },
// ) {
//   const { id } = params;
//   try {
//     const formData = await req.formData();
//     await connectMongoDB();
//     const category = await Category.findOne({
//       _id: formData.get('category'),
//     });
//     const subcategory = await Subcategory.findOne({
//       _id: formData.get('subcategory'),
//     });
//     interface EditedProductI {
//       [key: string]: FormDataEntryValue | FormDataEntryValue[];
//     }
//     const EditedProduct: ProductI | EditedProductI = {};
//     const images: FormDataEntryValue[] = [];
//     formData.forEach((value, key) => {
//       if (key === 'subcategory') {
//         EditedProduct[key] = subcategory;
//         return;
//       } else if (key === 'category') {
//         EditedProduct[key] = category;
//         return;
//       } else if (key === 'images') {
//         images.push(value);
//         return;
//       }
//       EditedProduct[key] = value;
//     });
//     EditedProduct.images = images;
//     await Product.findByIdAndUpdate(id, EditedProduct);
//     return NextResponse.json({ message: 'Product updated' }, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json({ message: error }, { status: error.status });
//   }
// }

export async function GET(_: ReqI, { params }: { params: { id: string } }) {
  const { id } = params;
  await connectMongoDB();
  const product = await Product.findOne({ _id: id });
  return NextResponse.json({ product }, { status: 200 });
}
