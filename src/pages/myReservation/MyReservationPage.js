import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Grid';
import { getMyReservations } from '../../redux/myReservations/myReservationsReducer';
import MyReservationCard from '../../components/myReservation/MyReservationCard';

function MyReservation() {
  const myReservations = useSelector((state) => state.myReservations);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!myReservations.length) {
      dispatch(getMyReservations());
    }
  });

  return (
    <Container justifyContent="center">
      <h1>My reservations Page</h1>
      <ul>
        {myReservations.map((reservation) => (
          <MyReservationCard
            key={reservation.res_id}
            city={reservation.city}
            startingDay={reservation.starting_day}
            finishDay={reservation.finish_day}
            jetId={reservation.jet_id}
          />
        ))}
      </ul>
    </Container>
  );
}

export default MyReservation;
