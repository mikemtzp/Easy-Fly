import axios from 'axios';
import api from '../../config';
import LocalStorage from '../../app/LocalStorage';

const storage = new LocalStorage();
const token = storage.get('token');

export const postReservation = async (reservation) => {
  try {
    const res = await axios.post(`${api}/reservations`, { reservation }, { headers: { Authorization: `Bearer ${token}` } });
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getReservations = async () => {
  try {
    const response = await axios.get(`${api}/reservations`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
  } catch (err) {
    throw new Error('err');
  }
};

export const deleteReservation = async (reservation) => {
  try {
    const res = await axios.delete(`${api}/reservations/${reservation.id}`, { headers: { Authorization: `Bearer ${token}` } });
    return res;
  } catch (err) {
    throw new Error(err);
  }
};
