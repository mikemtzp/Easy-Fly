import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function ConfirmData(props) {
  const { reservation } = props;
  const { jets } = useSelector((state) => state.jets);

  const reservationData = reservation();
  // const getJet = () => {
  //   if (jets) {
  //     return jets.filter((jet) => reservation.jet_id === jet.jet_id)[0];
  //   }
  //   return 0;
  // };

  // const jet = getJet();
  const jet = jets.filter((jet) => reservation.jet_id === jet.jet_id)[0];
  return (
    <section>
      <h2>Confirm your Jet</h2>
      <div>
        <h3>
          Jet Name:
          {jet ? (
            <>{jet.name}</>
          ) : null}
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
      </div>
    </section>
  );
}

ConfirmData.propTypes = {
  reservation: PropTypes.func.isRequired,
};

export default ConfirmData;
