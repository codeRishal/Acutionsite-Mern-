import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './features/categorySlice';
import productReducer from './features/productSlice';
import authReducer from './features/authSlice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    auth: authReducer,
  },
});