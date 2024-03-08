import mongoose, { Schema } from 'mongoose';
import { CategoryI, SubcategoryI } from '../_types/data-types';


export const categorySchema = new Schema<CategoryI>(
  {
    title: String,
    description: String,
  },
  { timestamps: true },
);

const Category =
  mongoose.models.Category || mongoose.model('Category', categorySchema);

export default Category;
