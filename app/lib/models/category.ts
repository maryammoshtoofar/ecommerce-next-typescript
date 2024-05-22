import mongoose, { Schema } from 'mongoose';
import { CategoryI, SubcategoryI } from '@/app/_types/data-types';
import { subcategorySchema } from './subcategory';

export const categorySchema = new Schema<CategoryI>(
  {
    title: String,
    description: String,
    image: String,
    subcategories: [subcategorySchema],
  },
  { timestamps: true },
);

const Category =
  mongoose.models.Category || mongoose.model('Category', categorySchema);

export default Category;
