import axios from 'axios';
import api from '../../config';

// Action
const GETRESERVATIONS = 'http://localhost:3000/api/v1/reservations/GET_MYRESERVATIONS';
const CANCELRESERVATION = 'http://localhost:3000/api/v1/reservations/CANCEL_RESERVATION';

// Action Creator
export const getMyReservations = () => async (dispatch) => {
  const response = await axios(`${api}/reservations`);
  const data = await response.data;
  const reserveData = data.map((reserve) => {
    const res = {
      res_id: reserve.id,
      jet_id: reserve.jet_id,
      starting_day: reserve.starting_day,
      finish_day: reserve.finish_day,
      city: reserve.city,
    };
    return res;
  });

  dispatch({
    type: GETRESERVATIONS,
    payload: reserveData,
  });
};

export const cancelReservationReducer = (id) => ({
  type: CANCELRESERVATION,
  payload: id,
});

// Reducer
export default function myReservationsReducer(state = [], action) {
  switch (action.type) {
    case GETRESERVATIONS:
      return action.payload;
    case CANCELRESERVATION:
      return [...state.filter((reservation) => reservation.res_id !== action.payload)];
    default:
      return state;
  }
}
