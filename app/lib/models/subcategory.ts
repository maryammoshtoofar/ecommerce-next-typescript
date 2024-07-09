import mongoose, { Model, Schema } from 'mongoose';
import { SubcategoryDocument } from '@/app/_types/data-types';

export const SubcategorySchema = new Schema<SubcategoryDocument>({
  category: String,
  title: String,
  image: String,
});

const Subcategory: Model<SubcategoryDocument> =
  mongoose.models.Subcategory ||
  mongoose.model<SubcategoryDocument>('Subcategory', SubcategorySchema);
export default Subcategory;
