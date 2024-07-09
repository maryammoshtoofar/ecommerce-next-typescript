import connectMongoDB from '@/app/lib/mongodb/mongodb';
import Order from '@/app/lib/models/order';
import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
import { OrderDocument } from '@/app/_types/data-types';

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

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectMongoDB();
    const orders: OrderDocument[] = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
}

export async function DELETE(req: DeleteReqI) {
  const id = req.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Order.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Order deleted' }, { status: 200 });
}

export async function PUT(req: Request) {
  await connectMongoDB();
  try {
    const { orderID, field } = await req.json();
    await Order.findByIdAndUpdate(orderID, field);
    return NextResponse.json({ message: 'Order Edited' }, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { message: error.message },
      { status: error.status },
    );
  }
}
