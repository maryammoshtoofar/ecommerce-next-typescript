import { configureStore } from '@reduxjs/toolkit';
import { shopApi } from './features/api/api-slice';
import { setupListeners } from '@reduxjs/toolkit/query';
export const makeStore = () => {
  return configureStore({
    reducer: {
      [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
  });
};

setupListeners(makeStore().dispatch)

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
