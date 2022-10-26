import { configureStore } from '@reduxjs/toolkit';
import jetSlice from '../redux/jets/jetSlice';
import myReservationsReducer from '../redux/myReservations/myReservationsReducer';

export const store = configureStore({
  reducer: {
    jets: jetSlice,
    myReservations: myReservationsReducer,
  },
});

export default store;
