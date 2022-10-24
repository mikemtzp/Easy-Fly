import { createAsyncThunk } from '@reduxjs/toolkit';

const jetsIndexURL = 'http://localhost:3000/api/v1/jets';

const getJets = createAsyncThunk(
  'jets/getJets',
  async () => {
    const response = await fetch(jetsIndexURL);
    const data = await response.json();
    return data;
  },
);

export default getJets;
