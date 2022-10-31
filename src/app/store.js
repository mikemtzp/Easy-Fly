import { configureStore } from '@reduxjs/toolkit';
import jetSlice from '../redux/jets/jetSlice';
import userSlice from '../redux/users/userSlice';
import reservationSlice from '../redux/reservation/reservationSlice';

export const store = configureStore({
  reducer: {
    jets: jetSlice,
    reservations: reservationSlice,
    user: userSlice,
  },
});

export default store;
