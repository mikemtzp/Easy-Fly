import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import deleteReservation from '../../redux/myReservations/cancelReservationAPI';
import { cancelReservationReducer } from '../../redux/myReservations/myReservationsReducer';
import './myReservationCard.scss';

function MyReservationCard(props) {
  const {
    city, startingDay, finishDay, jetId, reservationId,
  } = props;

  const jets = useSelector((state) => state.jets.jets);
  const reservation = { id: reservationId };
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(cancelReservationReducer(reservation.id));
    deleteReservation(reservation);
  };

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
        <span>You are renting: </span>
        {jets.map((jet) => (jet.id === jetId ? jet.name : null))}
      </Box>
      <Button variant="contained" color="primary" onClick={() => handleCancel()}>
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
