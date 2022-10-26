import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import './myReservationCard.scss';

function MyReservationCard(props) {
  const {
    city, startingDay, finishDay, jetId, key,
  } = props;

  return (
    <Box key={key} className="myReservationCard-container">
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
    </Box>
  );
}

MyReservationCard.propTypes = {
  key: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  startingDay: PropTypes.string.isRequired,
  finishDay: PropTypes.string.isRequired,
  jetId: PropTypes.number.isRequired,
};

export default MyReservationCard;
