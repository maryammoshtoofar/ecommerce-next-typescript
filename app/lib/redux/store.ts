import { compose, configureStore } from '@reduxjs/toolkit';
import { shopApi } from './features/api/api-slice';
import { setupListeners } from '@reduxjs/toolkit/query';
import categoriesReducer from './features/categories/categories-slice';
import subcategoriesReducer from './features/subcategories/subcategories-slice';
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const makeStore = () => {
  return configureStore({
    reducer: {
      categories: categoriesReducer,
      subcategories: subcategoriesReducer,
      [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(shopApi.middleware),
  });
};

setupListeners(makeStore().dispatch);

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
