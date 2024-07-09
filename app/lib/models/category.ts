import mongoose, { Schema, Model } from 'mongoose';
import { CategoryDocument } from '@/app/_types/data-types';

export const CategorySchema = new Schema<CategoryDocument>(
  {
    title: String,
    description: String,
    image: String,
    subcategories: [String],
  },
  { timestamps: true },
);

const Category: Model<CategoryDocument> =
  mongoose.models.Category ||
  mongoose.model<CategoryDocument>('Category', CategorySchema);

export default Category;
