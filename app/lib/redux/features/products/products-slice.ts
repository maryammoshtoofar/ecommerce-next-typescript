import { ProductI } from '@/app/_types/data-types';
import { createSlice } from '@reduxjs/toolkit';
interface ProductState {
  allProducts: ProductI[] | null;
  selectedProduct: ProductI | null;
}
const initialState: ProductState = {
  allProducts: [],
  selectedProduct: null,
};
const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    setProducts(state, action) {
      state.allProducts = action.payload;
    },
    selectProduct(state, action) {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setProducts, selectProduct } = productsSlice.actions;
export default productsSlice.reducer;
