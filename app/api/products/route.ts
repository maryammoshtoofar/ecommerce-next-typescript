import connectMongoDB from '@/app/lib/mongodb/mongodb';
import Product from '@/app/lib/models/product';
import { NextRequest, NextResponse } from 'next/server';

// export const POST = async (req: Request) => {
//   await connectMongoDB();
//   try {
//     const formData = await req.formData();
//     const category = await Category.findOne({ _id: formData.get('category') });
//     const subcategory = await Subcategory.findOne({
//       _id: formData.get('subcategory'),
//     });
//     interface NewProductI {
//       [key: string]: FormDataEntryValue | FormDataEntryValue[];
//     }
//     const NewProduct: ProductI | NewProductI = {};
//     const images: FormDataEntryValue[] = [];
//     formData.forEach((value, key) => {
//       if (key === 'subcategory') {
//         NewProduct[key] = subcategory;
//         return;
//       } else if (key === 'category') {
//         NewProduct[key] = category;
//         return;
//       } else if (key === 'images') {
//         images.push(value);
//         return;
//       }
//       NewProduct[key] = value;
//     });
//     NewProduct.images = images;
//     await Product.create(NewProduct);

//     return NextResponse.json({ message: 'Product Created' }, { status: 201 });
//   } catch (error: any) {
//     return NextResponse.json({ message: error }, { status: error.status });
//   }
// };

export async function GET() {
  await connectMongoDB();
  const products = await Product.find();
  return NextResponse.json({ products }, { status: 200 });
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Product deleted' }, { status: 200 });
}
