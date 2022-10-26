import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Grid';
import { Box } from '@mui/material';
import { getMyReservations } from '../../redux/myReservations/myReservationsReducer';
import MyReservationCard from '../../components/myReservation/MyReservationCard';
import './myReservation.scss';

function MyReservation() {
  const myReservations = useSelector((state) => state.myReservations);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!myReservations.length) {
      dispatch(getMyReservations());
    }
    // console.log(myReservations[0].res_id);
  });

  return (
    <Container className="myReservation-container">
      <h1>My reservations Page</h1>
      <section>
        {myReservations.map((reservation) => (
          <Box key={reservation.res_id} className="myReservationCard-container">
            <MyReservationCard
              city={reservation.city}
              startingDay={reservation.starting_day}
              finishDay={reservation.finish_day}
              jetId={reservation.jet_id}
              reservationId={reservation.res_id}
            />
          </Box>
        ))}
      </section>
    </Container>
  );
}

export default MyReservation;
