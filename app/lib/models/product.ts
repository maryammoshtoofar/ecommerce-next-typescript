import mongoose, { Schema } from 'mongoose';
import { ProductI } from '@/app/_types/data-types';



const productSchema = new Schema<ProductI>(
  {
    images: Array,
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

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
