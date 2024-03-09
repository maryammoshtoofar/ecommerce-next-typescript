import { BASE_URL, CATEGORIES_URL, SUBCATEGORIES_URL } from '@/app/_config/api';
import { CategoryI } from '@/app/_types/data-types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface CategoriesDataInterface {
  categories: CategoryI[];
}
interface SubcategoriesDataInterface {
  subcategories: CategoryI[];
}
export const shopApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<CategoriesDataInterface, string>({
      query: () => CATEGORIES_URL,
    }),
    getSubcategoriesByCategory: builder.query<SubcategoriesDataInterface,string>({
      query: (id) => `${SUBCATEGORIES_URL}?category=${id}`,
    }),
  }),
});

export const { useGetAllCategoriesQuery , useGetSubcategoriesByCategoryQuery } = shopApi;
