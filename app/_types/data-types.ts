import { StaticImageData } from 'next/image';

export type Product = {
  id: string;
  images: StaticImageData[];
  name: string;
  category: { id: string; name: string };
  subcategory: { id: string; name: string };
  price: number;
  quantity: number;
  rating: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 | null;
};
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
  products: Product[];
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
