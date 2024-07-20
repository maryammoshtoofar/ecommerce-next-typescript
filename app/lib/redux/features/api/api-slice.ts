import {
  BASE_URL,
  CATEGORIES_URL,
  SUBCATEGORIES_URL,
  PRODUCTS_URL,
  ORDERS_URL,
} from '@/app/_config/api';
import {
  CategoryDocument,
  CategoryI,
  OrderI,
  ProductDocument,
  ProductI,
} from '@/app/_types/data-types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface CategoriesDataInterface {
  categories: CategoryDocument[];
}
interface SubcategoriesDataInterface {
  subcategories: CategoryDocument[];
}

interface ProductsDataInterface {
  products: ProductDocument[];
}

interface ProductDataInterface {
  product: ProductI;
}

interface OrderDataInterface {
  order: OrderI;
}

export const shopApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    // category
    getAllCategories: builder.query<CategoriesDataInterface, string>({
      query: () => CATEGORIES_URL,
    }),
    getSubcategoriesByCategory: builder.query<
      SubcategoriesDataInterface,
      string
    >({
      query: (id) => `${SUBCATEGORIES_URL}?category=${id}`,
    }),
    // product
    getProductById: builder.query<ProductDataInterface, string>({
      query: (id) => `${PRODUCTS_URL}/${id}`,
    }),
    // order
    addNewOrder: builder.mutation<OrderDataInterface, OrderI>({
      query: (order) => ({
        url: ORDERS_URL,
        method: 'post',
        body: order,
      }),
    }),
    editOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: 'put',
        body: order,
      }),
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetSubcategoriesByCategoryQuery,
  useGetProductByIdQuery,
  useAddNewOrderMutation,
  useEditOrderMutation,
} = shopApi;
