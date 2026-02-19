import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Create Redux store using Redux Toolkit
const store = configureStore({
  reducer: {
    cart: cartReducer, // cart slice managed by cartReducer
  },
});

// Export the store so it can be used in Provider
export default store;
