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
      state.reservations.filter((res) => (res.id !== action.payload));
    },
    addReservation: (state, action) => {
      state.reservations.push(action.payload);
    },
    cleanReservations: () => [],
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

export const { cancelReservation, addReservation, cleanReservations } = reservationSlice.actions;
export default reservationSlice.reducer;
