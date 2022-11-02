import axios from 'axios';
import api from '../../config';
import LocalStorage from '../../app/LocalStorage';

const JETAPPI = `${api}`;
const storage = new LocalStorage();
const token = storage.get('token');

export const addNewJet = async (jet) => {
  try {
    const res = await axios.post(`${JETAPPI}/jets`, jet, {
      headers: { Authorization: `Bearer ${token}` },
    });
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
    const response = await axios.delete(`${api}/jets/${jet.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (err) {
    throw new Error(err);
  }
};
