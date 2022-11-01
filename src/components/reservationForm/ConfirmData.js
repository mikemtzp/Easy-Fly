import React from 'react';
import PropTypes from 'prop-types';
import './confirmData.scss';
import BasicTable from './Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function ConfirmData(props) {
  const {
    reservation, jetName, days, ppe, finFee, city, handleForm,
    confirmPage, setConfirmPage,
  } = props;

  const reservationData = reservation();

  return (
    <section className={!confirmPage ? 'hide' : 'confirmation-container'}>
      <h2 className="confirm-title">Confirm your Jet</h2>
      <BasicTable
        jet={jetName}
        price={(days * ppe) + finFee}
        origin={city}
        start={reservationData.starting_day}
        end={reservationData.finish_day}
      />
      <div className="buttons-container">
        <button
          type="button"
          onClick={() => {
            handleForm();
            setConfirmPage(!confirmPage);
          }}
        >
          Edit
        </button>
        <button
          type="submit"
          form="reservation-form"
        >
          Submit
        </button>
      </div>
    </section>
  );
}

ConfirmData.propTypes = {
  reservation: PropTypes.func.isRequired,
  jetName: PropTypes.string.isRequired,
  days: PropTypes.number.isRequired,
  ppe: PropTypes.number.isRequired,
  finFee: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  handleForm: PropTypes.func.isRequired,
  setConfirmPage: PropTypes.func.isRequired,
  confirmPage: PropTypes.bool.isRequired,
};

export default ConfirmData;
