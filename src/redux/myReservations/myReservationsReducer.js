import axios from 'axios';
import api from '../../config';

// Action
const GETRESERVATIONS = 'http://localhost:3000/api/v1/reservations/GET_MYRESERVATIONS';

// Action Creator
export const getMyReservations = () => async (dispatch) => {
  const response = await axios(`${api}/reservations`);
  const data = await response.data;
  const reserveData = data.map((reserve) => {
    const res = [{
      jet_id: reserve.jet_id,
      starting_day: reserve.starting_day,
      finish_day: reserve.finish_day,
      city: reserve.city,
    }];
    return res;
  });

  dispatch({
    type: GETRESERVATIONS,
    payload: reserveData,
  });
};

// Reducer
export default function myReservationsReducer(state = [], action) {
  switch (action.type) {
    case GETRESERVATIONS:
      return action.payload;
    default:
      return state;
  }
}
