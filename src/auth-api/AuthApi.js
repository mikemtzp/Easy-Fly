import axios from 'axios';
import api from '../config';

export const loginApi = async (user) => {
  try {
    const res = await axios.post(`${api}/login`, { user });
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

export const signupApi = async (user) => {
  try {
    const res = await axios.post(`${api}/signup`, { user });
    return res;
  } catch (err) {
    throw new Error(err);
  }
};
