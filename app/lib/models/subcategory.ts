import mongoose, { Schema } from 'mongoose';
import { SubcategoryI } from '@/app/_types/data-types';
export const subcategorySchema = new Schema<SubcategoryI>({
  category: String,
  title: String,
  description: String,
});

const Subcategory =
  mongoose.models.Subcategory ||
  mongoose.model('Subcategory', subcategorySchema);

export default Subcategory;
