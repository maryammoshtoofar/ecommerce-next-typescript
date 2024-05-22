import mongoose, { Schema } from 'mongoose';
import { categorySchema } from './category';
import { ProductI } from '@/app/_types/data-types';



const productSchema = new Schema<ProductI>(
  {
    images: Array,
    name: String,
    description: String,
    category: categorySchema,
    subcategory: categorySchema,
    price: Number,
    quantity: Number,
    rating: { type: Number, default: null },
  },
  { timestamps: true },
);

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
