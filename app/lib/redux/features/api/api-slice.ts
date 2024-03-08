import { BASE_URL } from '@/app/_config/api';
import { CategoryI } from '@/app/_types/data-types';
import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shopApi = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:BASE_URL}),
    endpoints: (builder) => ({
        getAllCategories: builder.query<CategoryI[], string>({
          query: () => `/categories`,
        }),
      }),
})

export const { useGetAllCategoriesQuery } = shopApi