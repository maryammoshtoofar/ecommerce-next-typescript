import mongoose, { Schema } from 'mongoose';
import { OrderI } from '@/app/_types/data-types';

const OrderSchema = new Schema<OrderI>(
  {
    status: String,
    products: Array,
    total: Number,
    userId: String,
  },
  { timestamps: true },
);

const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);

export default Order;
