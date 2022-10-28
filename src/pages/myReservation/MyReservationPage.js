import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Grid';
import { Box } from '@mui/material';
import MyReservationCard from '../../components/myReservation/MyReservationCard';
import './myReservation.scss';

function MyReservation() {
  const { reservations } = useSelector((state) => state.reservations);

  return (
    <Container className="myReservation-container">
      <h1>My reservations Page</h1>
      <section>
        {reservations.map((reservation) => (
          <Box key={reservation.created_at} className="myReservationCard-container">
            <MyReservationCard
              city={reservation.city}
              startingDay={reservation.starting_day}
              finishDay={reservation.finish_day}
              jetId={reservation.jet_id}
              reservationId={reservation.id}
            />
          </Box>
        ))}
      </section>
    </Container>
  );
}

export default MyReservation;
