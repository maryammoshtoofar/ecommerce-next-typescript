import { CategoryDocument, CategoryI } from '@/app/_types/data-types';
import { createSlice } from '@reduxjs/toolkit';
interface CategoryState {
  allCategories: CategoryDocument[] | null;
  selectedCategory: CategoryDocument | null;
}
const initialState: CategoryState = {
  allCategories: [],
  selectedCategory: null,
};
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    setCategories(state, action) {
      state.allCategories = action.payload;
    },
    selectCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
});

export const { selectCategory, setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
