import { StaticImageData } from 'next/image';

export interface ProductI {
  _id: string;
  images: string[];
  name: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  quantity: number;
  rating: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 | null;
  // comments: Comment[] | null;
  // questions: Question[] | null;
  // relatedProducts: ProductI[] | null;
}

export interface Comment {
  _id: string;
  user: User;
  caption: string;
  images: string[] | null;
  rating: 1 | 2 | 3 | 4 | 5;
}
export interface Question {
  _id: string;
  user: User;
  caption: string;
  answers: Answer[] | null;
}

export interface OrderedProduct {
  product: ProductI;
  quantity: number;
  totalPrice: number;
}

export interface Answer {
  _id: string;
  user: User;
  caption: string;
}

export interface User {
  id: string;
  username: string;
  hashedPassword: string;
  email: string;
  phoneNumber: string;
  profile: StaticImageData;
  orders: Order[];
}

export interface Order {
  _id: string;
  products: OrderedProduct[];
  total: number;
  status: 'pending' | 'paid' | 'cancelled' | 'delivered';
}

export interface CategoryI {
  _id: string;
  title: string;
  description: string;
  image: string;
  subcategories: SubcategoryI[];
}

export interface SubcategoryI {
  _id: string;
  category: string;
  title: string;
  image: string;
}
