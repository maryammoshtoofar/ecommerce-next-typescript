import mongoose, { Model, Schema } from 'mongoose';
import { ProductDocument } from '@/app/_types/data-types';

const ProductSchema = new Schema<ProductDocument>(
  {
    pictures: [{ type: String }],
    name: String,
    description: String,
    category: String,
    subcategory: String,
    price: Number,
    quantity: Number,
    rating: { type: Number, default: null },
  },
  { timestamps: true },
);

const Product: Model<ProductDocument> =
  mongoose.models.Product ||
  mongoose.model<ProductDocument>('Product', ProductSchema);

export default Product;
