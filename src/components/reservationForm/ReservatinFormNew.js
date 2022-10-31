import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { useSelector } from 'react-redux';

import './ReservationFormNew.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { postReservation } from '../../redux/reservation/reservationAPI';

function ReservationFormNew(props) {
  const {
    reserveCity, display, showForm, handleShowForm,
  } = props;

  const { jets } = useSelector((state) => state.jets);
  const [jet, setJet] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);

  useEffect(() => {
    setJet(jets[0]);
  }, [jets]);

  const handleJetSelect = (id) => {
    const jet = jets.filter((jet) => id === jet.id)[0];
    setJet(jet);
  };

  const reservation = () => {
    if (jet) {
      const res = {
        jet_id: jet.id,
        starting_day: startDate.toDateString(),
        finish_day: endDate.toDateString(),
        city: reserveCity,
      };
      return res;
    }
    return 0;
  };

  const submitForm = (e) => {
    e.preventDefault();
    const reserve = reservation();
    postReservation(reserve);
  };

  return (
    <section className={showForm ? 'newForm-page' : 'hide'}>
      <h1 className="newForm-title">Select your Jet!</h1>
      <form className="form-container" onSubmit={submitForm}>
        <label htmlFor="jet-select">
          <select
            name="jets"
            id="jet-select"
            onChange={(e) => handleJetSelect(parseInt(e.target.value, 10))}
          >
            {jets.map((data) => (
              <option
                key={`jet-${data.id}`}
                value={data.id}
              >
                {data.name}
              </option>
            ))}
          </select>
        </label>
        {jet ? (
          <div className="jet-details-container">
            <h2 className="jetDetails-title">Rent details</h2>
            <div className="jet-prices">
              <p>
                <span>Price per day: </span>
                $
                {jet.price_per_day}
              </p>
              <p>
                <span>Financial fee: </span>
                $
                {jet.finance_fee}
              </p>
            </div>
          </div>
        ) : null}
        <div className="datePicker-container">
          <div className="date-container">
            <h2 className="date-title">Since</h2>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              className="custom-datePicker"
            />
          </div>
          <div className="date-container">
            <h2 className="date-title">to</h2>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              className="custom-datePicker"
            />
          </div>
        </div>
        <div className="buttons-container">
          <button
            type="button"
            onClick={() => {
              display();
              handleShowForm(!showForm);
            }}
          >
            Back
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

ReservationFormNew.propTypes = {
  reserveCity: PropTypes.string.isRequired,
  display: PropTypes.func.isRequired,
  handleShowForm: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired,
};

export default ReservationFormNew;
