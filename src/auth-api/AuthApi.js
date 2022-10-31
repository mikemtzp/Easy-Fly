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

export const authenticateApi = async (token) => {
  try {
    const res = await axios.post(`${api}/authenticated-user"`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res || res.status !== 200) {
      throw new Error(
        "This user can't logged in with the credential provided!",
      );
    }
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};
