import { Types } from 'mongoose';

export interface ProductI {
  name: string;
  description: string;
  pictures: string[];
  category: string;
  subcategory: string;
  price: number;
  quantity: number;
  rating: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 | null;
}

export interface ProductDocument extends Document, ProductI {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem extends ProductDocument {
  numberInCart: number;
}

export interface OrderI {
  products: CartItem[];
  total: number;
  status: 'pending' | 'paid' | 'cancelled' | 'delivered';
  user: string;
}

export interface OrderDocument extends OrderI, Document {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoryI {
  title: string;
  description: string;
  image: string;
  subcategories: SubcategoryDocument[];
}

export interface CategoryDocument extends CategoryI, Document {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface SubcategoryI {
  category: string;
  title: string;
  image: string;
}

export interface SubcategoryDocument extends SubcategoryI, Document {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

// todo later
// export interface Comment {
//   user: User;
//   caption: string;
//   images: string[] | null;
//   rating: 1 | 2 | 3 | 4 | 5;
// }
// export interface Question {
//   user: User;
//   caption: string;
//   answers: Answer[] | null;
// }

// export interface Answer {
//   user: User;
//   caption: string;
// }

// export interface User {
//   username: string;
//   hashedPassword: string;
//   email: string;
//   phoneNumber: string;
//   profile: StaticImageData;
//   orders: OrderI[];
// }
