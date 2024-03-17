import {
  BASE_URL,
  CATEGORIES_URL,
  SUBCATEGORIES_URL,
  PRODUCTS_URL,
} from '@/app/_config/api';
import { CategoryI, ProductI } from '@/app/_types/data-types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface CategoriesDataInterface {
  categories: CategoryI[];
}
interface SubcategoriesDataInterface {
  subcategories: CategoryI[];
}

interface ProductsDataInterface {
  products: ProductI[];
}

interface ProductDataInterface {
  product: ProductI;
}

export const shopApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<CategoriesDataInterface, string>({
      query: () => CATEGORIES_URL,
    }),
    getSubcategoriesByCategory: builder.query<
      SubcategoriesDataInterface,
      string
    >({
      query: (id) => `${SUBCATEGORIES_URL}?category=${id}`,
    }),
    getProductById: builder.query<ProductDataInterface, string>({
      query: (id) => `${PRODUCTS_URL}/${id}`,
    }),
  }),
});

export const { useGetAllCategoriesQuery, useGetSubcategoriesByCategoryQuery, useGetProductByIdQuery } =
  shopApi;
