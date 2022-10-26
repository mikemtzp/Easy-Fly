import React from 'react';
import PropTypes from 'prop-types';

function MyReservationCard(props) {
  const {
    key, city, startingDay, finishDay, jetId,
  } = props;

  return (
    <li key={key}>
      {city}
      {startingDay}
      {finishDay}
      {jetId}
    </li>
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
