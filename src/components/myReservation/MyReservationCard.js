import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import deleteReservation from '../../redux/myReservations/cancelReservationAPI';
import './myReservationCard.scss';

function MyReservationCard(props) {
  const {
    city, startingDay, finishDay, jetId, reservationId,
  } = props;

  const reservation = { id: reservationId };

  return (
    <>
      <Box>
        <span>Your Jet will be waiting for you in: </span>
        {city}
      </Box>
      <Box>
        <span>The day: </span>
        {startingDay}
      </Box>
      <Box>
        <span>Until the day: </span>
        {finishDay}
      </Box>
      <Box>
        <span>Your Jet: ID-</span>
        {jetId}
      </Box>
      <Button variant="contained" color="primary" onClick={() => deleteReservation(reservation)}>
        Cancel Jet
      </Button>
    </>
  );
}

MyReservationCard.propTypes = {
  reservationId: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  startingDay: PropTypes.string.isRequired,
  finishDay: PropTypes.string.isRequired,
  jetId: PropTypes.number.isRequired,
};

export default MyReservationCard;
