import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../config';

const jetsIndexURL = `${api}/jets`;

const getJets = createAsyncThunk('jets/getJets', async () => {
  const response = await fetch(jetsIndexURL);
  const data = await response.json();
  return data;
});

export default getJets;
