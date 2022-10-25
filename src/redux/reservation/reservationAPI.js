import axios from 'axios';
import api from '../../config';

const postReservation = async (reservation) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.post(`${api}/add_reservation`, { reservation }, { headers: { Authorization: `Bearer ${token}` } });
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

export default postReservation;
