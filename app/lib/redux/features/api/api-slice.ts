import { BASE_URL } from '@/app/_config/api';
import { CreateApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = CreateApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:BASE_URL})
})

