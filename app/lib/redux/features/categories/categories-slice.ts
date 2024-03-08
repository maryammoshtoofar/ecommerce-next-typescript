import { getAllCategories } from '@/app/_http/categories/categories';
import { CategoryI } from '@/app/_types/data-types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
interface CategoryState {
  categories: CategoryI[];
  status: 'idle' | 'running' | 'complete';
  error: null | string;
}
const initialState: CategoryState = {
  categories: [],
  status: 'idle',
  error: null,
};
export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    getAllCategories();
  },
);
const categories = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {},
  extraReducers: {},
});
