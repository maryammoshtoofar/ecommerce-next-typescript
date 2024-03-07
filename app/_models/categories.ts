import mongoose, { Schema } from 'mongoose';
export interface SubcategoryI {
  title: string;
  description: string;
}
export interface CategoryI {
  title: string;
  description: string;
}

export const subcategorySchema = new Schema<SubcategoryI>({
  title: String,
  description: String,
});
export const categorySchema = new Schema<CategoryI>(
  {
    title: String,
    description: String
  },
  { timestamps: true },
);

const Category =
  mongoose.models.Category || mongoose.model('Category', categorySchema);

export default Category;
