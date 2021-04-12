import { configureStore } from '@reduxjs/toolkit';
import authReducer  from '../components/home/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // counter: counterReducer
  },
});
