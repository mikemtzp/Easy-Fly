import { createSlice } from '@reduxjs/toolkit';

const jetSlice = createSlice({
  name: 'jets',
  initialState: [],
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