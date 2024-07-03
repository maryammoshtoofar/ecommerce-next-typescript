import { CartItem } from '@/app/_types/data-types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export interface CartState {
  items: CartItem[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    setCartState: (state, action: PayloadAction<CartState>) => {
      return action.payload;
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.numberInCart += 1;
      } else {
        action.payload.numberInCart = 1;
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      console.log('item in reducer', item);
      if (item) {
        state.total = state.total - item.price * item.numberInCart;
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    updateTotalPrice: (state, action: PayloadAction<number>) => {
      state.total += action.payload;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { setCartState, addToCart, removeFromCart, updateTotalPrice } =
  cartSlice.actions;
export default cartSlice.reducer;
