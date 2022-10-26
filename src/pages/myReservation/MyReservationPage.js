import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMyReservations } from '../../redux/myReservations/myReservationsReducer';

function MyReservation() {
  const myReservations = useSelector((state) => state.myReservations);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!myReservations.length) {
      dispatch(getMyReservations());
    }
  });

  return (
    <>
      <h1>My reservations Page</h1>
      {myReservations.map((reservation) => (
        <h1 key={reservation.jet_id}>{reservation.city}</h1>
      ))}
    </>
  );
}

export default MyReservation;
