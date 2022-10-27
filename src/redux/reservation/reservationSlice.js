import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getReservations } from './reservationAPI';

export const getReservationsThunk = createAsyncThunk('reservations/getReservations', async () => {
  const data = await getReservations();
  return data;
});

const reservationSlice = createSlice({
  name: 'reservations',
  initialState: {
    reservations: [],
  },
  reducers: {
    cancelReservation: (state, action) => {
      state.filter((reservation) => reservation.id !== action.payload);
    },
    addReservation: (state, action) => {
      state.reservations.push(action.payload);
    },
  },
  extraReducers: {
    [getReservationsThunk.pending]: (state) => ({
      ...state,
      status: 'pending',
    }),
    [getReservationsThunk.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      reservations: action.payload,
    }),
    [getReservationsThunk.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

export const { cancelReservation, addReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
