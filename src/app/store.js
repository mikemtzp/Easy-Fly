import { configureStore } from '@reduxjs/toolkit';
import jetSlice from '../redux/jets/jetSlice';
// import myReservationsReducer from '../redux/myReservations/myReservationsReducer';
import reservationSlice from '../redux/reservation/reservationSlice';

export const store = configureStore({
  reducer: {
    jets: jetSlice,
    reservations: reservationSlice,
  },
});

export default store;
