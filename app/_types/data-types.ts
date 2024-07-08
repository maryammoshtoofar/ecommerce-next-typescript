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
}

export interface Comment {
  id: string;
  user: User;
  caption: string;
  images: string[] | null;
  rating: 1 | 2 | 3 | 4 | 5;
}
export interface Question {
  id: string;
  user: User;
  caption: string;
  answers: Answer[] | null;
}

export interface Answer {
  id: string;
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
  orders: OrderI[];
}

export interface CartItem extends ProductI {
  numberInCart: number;
}

export interface OrderI {
  _id: string;
  products: CartItem[];
  total: number;
  status: 'pending' | 'paid' | 'cancelled' | 'delivered';
  userId: string;
}

export interface CategoryI {
  id: string;
  title: string;
  description: string;
  image: string;
  subcategories: SubcategoryI[];
}

export interface SubcategoryI {
  id: string;
  category: string;
  title: string;
  image: string;
}
