import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import MyReservationCard from '../../components/myReservation/MyReservationCard';
import Nav from '../../components/nav/Nav';
import './myReservation.scss';

const MyReservation = () => {
  const { reservations } = useSelector((state) => state.reservations);

  return (
    <div className="myReservation">
      <Nav>
        <Container
          sx={{
            flexDirection: 'column',
            backgroundColor: '#95bf02',
            color: 'white',
            flexFlow: 1,
            padding: '2rem 0',
          }}
          className="myReservation-container"
          component="section"
        >
          <h1>My reservations</h1>
          <section>
            {reservations.length === 0 && (
              <Box>
                <Typography variant="h4" sx={{ mt: 5 }}>
                  No reservation added yet!
                </Typography>
              </Box>
            )}
            {reservations.map((reservation) => (
              <Box
                key={reservation.created_at}
                className="myReservationCard-container"
                sx={{
                  minWidth: '350px',
                }}
              >
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
      </Nav>
    </div>
  );
};

export default MyReservation;
