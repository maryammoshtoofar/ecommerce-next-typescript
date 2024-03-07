import mongoose, { Schema } from 'mongoose';
import { StaticImageData } from 'next/image';
import { CategoryI, categorySchema } from './categories';

interface ProductI {
  images: StaticImageData[];
  name: string;
  category: CategoryI;
  subcategory: CategoryI;
  price: number;
  quantity: number;
  rating: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 | null;
}

const productSchema = new Schema<ProductI>(
  {
    images: Array,
    name: String,
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
