import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function ConfirmData(props) {
  const { reservation, jetName, days } = props;
  const { jets } = useSelector((state) => state.jets);

  const reservationData = reservation();
  const jet = jets.filter((jet) => reservation.jet_id === jet.jet_id)[0];
  console.log('reserv data id:', reservationData.jet_id);
  console.log(jet);
  return (
    <section>
      <h2>Confirm your Jet</h2>
      <div>
        <h3>
          {jetName}
        </h3>
      </div>
      <div>
        Pick-up day:
        {reservationData.starting_day}
      </div>
      <div>
        Return day:
        {reservationData.finish_day}
      </div>
      <div>
        Total price:
        {days}
      </div>
    </section>
  );
}

ConfirmData.propTypes = {
  reservation: PropTypes.func.isRequired,
  jetName: PropTypes.string.isRequired,
  days: PropTypes.number.isRequired,
};

export default ConfirmData;
