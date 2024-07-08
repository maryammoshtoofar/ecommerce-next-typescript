import connectMongoDB from '@/app/lib/mongodb/mongodb';
import Order from '@/app/lib/models/order';
import { NextResponse } from 'next/server';

interface DeleteReqI {
  nextUrl: { searchParams: { get: (arg0: string) => any } };
}

export const POST = async (req: Request) => {
  await connectMongoDB();
  try {
    const newOrder = await req.json();
    await Order.create(newOrder);
    return NextResponse.json({ message: 'Order Created' }, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { message: error.message },
      { status: error.status },
    );
  }
};

export async function GET() {
  await connectMongoDB();
  const orders = await Order.find();
  return NextResponse.json({ orders }, { status: 200 });
}

export async function DELETE(req: DeleteReqI) {
  const id = req.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Order.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Order deleted' }, { status: 200 });
}
