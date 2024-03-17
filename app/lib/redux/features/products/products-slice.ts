import { ProductI } from '@/app/_types/data-types';
import { createSlice } from '@reduxjs/toolkit';
interface ProductState {
  allProducts: ProductI[] | null;
  selectedProduct: string;
}
const initialState: ProductState = {
  allProducts: [],
  selectedProduct: 'gfhgh',
};
const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    setProducts(state, action) {
      state.allProducts = action.payload;
    },
    selectProduct(state, action) {
      console.log(action.payload);
      state.selectedProduct = action.payload;
    },
  },
});

export const { setProducts, selectProduct } = productsSlice.actions;
export default productsSlice.reducer;
