import { StaticImageData } from 'next/image';

export interface ProductI {
  id: string;
  images: string[];
  name: string;
  description: string;
  category: CategoryI;
  subcategory: CategoryI;
  price: number;
  quantity: number;
  rating: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 | null;
}
export type User = {
  id: string;
  username: string;
  hashedPassword: string;
  email: string;
  phoneNumber: string;
  profile: StaticImageData;
  orders: Order[];
};
export type Order = {
  id: string;
  products: ProductI[];
  total: number;
  status: 'pending' | 'paid' | 'cancelled' | 'delivered';
};

export interface CategoryI {
  _id: string;
  title: string;
  description: string;
}

export interface SubcategoryI {
  _id: string;
  category: string;
  title: string;
  description: string;
}
