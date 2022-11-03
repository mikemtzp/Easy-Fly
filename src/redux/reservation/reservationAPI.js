import axios from 'axios';
import api from '../../config';

export const postReservation = async (reservation) => {
  try {
    const { token } = JSON.parse(localStorage.getItem('easy-fly-data'));
    const res = await axios.post(`${api}/reservations`, { reservation }, { headers: { Authorization: `Bearer ${token}` } });
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getReservations = async () => {
  try {
    const { token } = JSON.parse(localStorage.getItem('easy-fly-data'));
    const response = await axios.get(`${api}/reservations`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
  } catch (err) {
    throw new Error('err');
  }
};

export const deleteReservation = async (reservation) => {
  try {
    const { token } = JSON.parse(localStorage.getItem('easy-fly-data'));
    const res = await axios.delete(`${api}/reservations/${reservation.id}`, { headers: { Authorization: `Bearer ${token}` } });
    return res;
  } catch (err) {
    throw new Error(err);
  }
};
