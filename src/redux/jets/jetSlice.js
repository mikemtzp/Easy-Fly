import { createSlice } from '@reduxjs/toolkit';
import getJets from './jetAPI';

const jetSlice = createSlice({
  name: 'jets',
  initialState: {
    jets: [],
  },
  extraReducers: {
    [getJets.pending]: (state) => ({
      ...state,
      status: 'pending',
    }),
    [getJets.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      jets: action.payload,
    }),
    [getJets.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

export default jetSlice.reducer;
