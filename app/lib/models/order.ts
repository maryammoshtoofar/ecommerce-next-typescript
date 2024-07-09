import mongoose, { Schema, Model } from 'mongoose';
import { OrderDocument } from '@/app/_types/data-types';

const OrderSchema = new Schema(
  {
    products: Array,
    status: String,
    total: Number,
    userId: String,
  },
  { timestamps: true },
);

const Order: Model<OrderDocument> =
  mongoose.models.Order || mongoose.model<OrderDocument>('Order', OrderSchema);

export default Order;
