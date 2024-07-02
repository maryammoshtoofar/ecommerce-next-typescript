import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { shopApi } from './features/api/api-slice';
import { setupListeners } from '@reduxjs/toolkit/query';
import subcategoriesReducer from './features/subcategories/subcategories-slice';
import categoriesReducer from './features/categories/categories-slice';
import productsReducer from './features/products/products-slice';
import cartReducer, { CartState } from './features/cart/cart-slice';

// LocalStorage key for the cart state
const localStorageKey = 'cart';

// Function to save state to localStorage
const saveToLocalStorage = (state: RootState) => {
  console.log('state', state);
  try {
    if (typeof window !== 'undefined') {
      const serializedState = JSON.stringify(state.cart);
      localStorage.setItem(localStorageKey, serializedState);
    }
  } catch (e) {
    console.warn('Could not save state', e);
  }
};

// Function to load state from localStorage
export const loadFromLocalStorage = () => {
  try {
    if (typeof window !== 'undefined') {
      const serializedState = localStorage.getItem(localStorageKey);
      return serializedState
        ? (JSON.parse(serializedState) as CartState)
        : undefined;
    }
  } catch (e) {
    console.warn('Could not load state', e);
    return undefined;
  }
};

const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  predicate: (action, currentState, previousState) => {
    return currentState.cart !== previousState.cart;
  },
  effect: (action, listenerApi) => {
    saveToLocalStorage(listenerApi.getState());
  },
});

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
      categories: categoriesReducer,
      subcategories: subcategoriesReducer,
      products: productsReducer,
      [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(shopApi.middleware)
        .concat(listenerMiddleware.middleware),
  });

  return store;
};

setupListeners(makeStore().dispatch);

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
