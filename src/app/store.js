import { configureStore } from '@reduxjs/toolkit';
import jetSlice from '../redux/jets/jetSlice';

export const store = configureStore({
  reducer: {
    jets: jetSlice,
  },
});

export default store;
