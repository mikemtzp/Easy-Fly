import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';
import AlertDialog from './Alert';
import { deleteReservation } from '../../redux/reservation/reservationAPI';
import { getReservationsThunk } from '../../redux/reservation/reservationSlice';
import './myReservationCard.scss';

function MyReservationCard(props) {
  const {
    city, startingDay, finishDay, jetId, reservationId,
  } = props;

  const { jets } = useSelector((state) => state.jets);
  const reservation = { id: reservationId };
  const dispatch = useDispatch();

  const handleCancel = async () => {
    const res = await deleteReservation(reservation);
    if (res.reservation !== null) {
      dispatch(getReservationsThunk());
      toast.warn('Reservation cancelled Successfuly', { theme: 'colored' });
    } else {
      toast.error('Unable to create Reservation');
    }
  };

  const style = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const dialog = 'This action cannot be undone. You will need to make a new reservation if you decide to recover your reservation.';

  return (
    <>
      <Box
        sx={{
          ...style,
        }}
      >
        <span>City: </span>
        {city}
      </Box>
      <Box
        sx={{
          ...style,
        }}
      >
        <span>The day: </span>
        {startingDay}
      </Box>
      <Box
        sx={{
          ...style,
        }}
      >
        <span>Until the day: </span>
        {finishDay}
      </Box>
      <Box
        sx={{
          ...style,
          marginBottom: '1rem',
        }}
      >
        <span>You are renting: </span>
        {jets.map((jet) => (jet.id === jetId ? jet.name : null))}
      </Box>
      <AlertDialog
        cancel={handleCancel}
        dialogTitle="Cancel Reservation?"
        dialogContent={dialog}
        cancelBtn="Cancel Reservation"
      />
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
