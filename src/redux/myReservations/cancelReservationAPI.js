import axios from 'axios';
import api from '../../config';

const deleteReservation = async (reservation) => {
  console.log(reservation);
  try {
    const res = await axios.delete(`${api}/del_reservation`, { params: reservation });
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteReservation;
