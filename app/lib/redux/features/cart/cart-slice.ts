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
    addToCart: (state, { payload }) => {
      const item = state.items.find((item) => item._id === payload._id);
      if (item) {
        item.numberInCart += 1;
      } else {
        payload.numberInCart = 1;
        state.items.push(payload);
      }
    },
    removeFromCart: (state, { payload }: PayloadAction<string>) => {
      const item = state.items.find((item) => item._id.toString() === payload);
      if (item) {
        state.total = state.total - item.price * item.numberInCart;
        state.items = state.items.filter(
          (item) => item._id.toString() !== payload,
        );
      }
    },
    updateTotalPrice: (state, { payload }: PayloadAction<number>) => {
      state.total += payload;
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const {
  setCartState,
  addToCart,
  removeFromCart,
  updateTotalPrice,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
