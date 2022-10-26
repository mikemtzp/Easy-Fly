import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getJets } from './jetAPI';

export const getJetsThunk = createAsyncThunk('jets/getJets', async () => {
  const response = await getJets();
  return response;
});

const jetSlice = createSlice({
  name: 'jets',
  initialState: {
    jets: [],
  },
  extraReducers: {
    [getJetsThunk.pending]: (state) => ({
      ...state,
      status: 'pending',
    }),
    [getJetsThunk.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      jets: action.payload,
    }),
    [getJetsThunk.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

export default jetSlice.reducer;
