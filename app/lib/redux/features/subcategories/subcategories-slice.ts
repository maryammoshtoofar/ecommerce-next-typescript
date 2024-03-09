import { SubcategoryI } from '@/app/_types/data-types';
import { createSlice } from '@reduxjs/toolkit';
interface SubcategoryState {
  allSubcategories: SubcategoryI[] | null;
  selectedSubcategory: SubcategoryI | null;
}
const initialState: SubcategoryState = {
  allSubcategories: [],
  selectedSubcategory: null,
};
const subcategoriesSlice = createSlice({
  name: 'subcategories',
  initialState: initialState,
  reducers: {
    setSubcategories(state, action) {
      state.allSubcategories = action.payload;
    },
    selectSubcategory(state, action) {
      state.selectedSubcategory = action.payload;
    },
  },
});

export const { selectSubcategory, setSubcategories } =
  subcategoriesSlice.actions;
export default subcategoriesSlice.reducer;
