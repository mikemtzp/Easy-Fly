import axios from 'axios';
import api from '../../config';

const JETAPPI = `${api}`;

export const addNewJet = async (jet) => {
  try {
    const res = await axios.post(`${JETAPPI}/add-jet`, jet);
    return res.data;
  } catch (err) {
    throw new Error('err');
  }
};

export const getJets = async () => {
  try {
    const res = await axios.get(`${JETAPPI}/jets`);
    return res.data;
  } catch (err) {
    throw new Error('err');
  }
};

export const deleteJet = async (jet) => {
  try {
    const response = await axios.delete(`${api}/delete-jet`, { params: jet });
    return response;
  } catch (err) {
    throw new Error(err);
  }
};
