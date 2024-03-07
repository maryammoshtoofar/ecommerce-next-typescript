import mongoose, { Schema } from 'mongoose';
export interface SubcategoryI {
  category: string;
  title: string;
  description: string;
}

export const subcategorySchema = new Schema<SubcategoryI>({
  category: String,
  title: String,
  description: String,
});

const Subcategory =
  mongoose.models.Subcategory ||
  mongoose.model('Subcategory', subcategorySchema);

export default Subcategory;
