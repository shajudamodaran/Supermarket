import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './ActivePageSlice'
import cartReducer from './CartSlice'

export const store = configureStore({
  reducer: {
    message: messageReducer,
    cart:cartReducer
  }
});