import axios from 'axios';
import api from '../../config';

export const postReservation = async (reservation) => {
  try {
    const { token } = JSON.parse(localStorage.getItem('easy-fly-data'));
    const res = await axios.post(`${api}/add_reservation`, { reservation }, { headers: { Authorization: `Bearer ${token}` } });
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
    const res = await axios.delete(`${api}/del_reservation`, { params: reservation });
    return res;
  } catch (err) {
    throw new Error(err);
  }
};
