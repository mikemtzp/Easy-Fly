import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { useSelector } from 'react-redux';

import './ReservationFormNew.scss';
import 'react-datepicker/dist/react-datepicker.css';

function ReservationFormNew(props) {
  const { jets } = useSelector((state) => state.jets);
  const [jet, setJet] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);

  const { city, display } = props;

  useEffect(() => {
    setJet(jets[0]);
  }, [jets]);
  console.log('jet selected: ', jet);
  console.log('start date: ', startDate.toDateString());
  console.log('finish date: ', endDate.toDateString());
  console.log('city: ', city);

  const handleJetSelect = (id) => {
    const jet = jets.filter((jet) => id === jet.id)[0];
    setJet(jet);
  };
  return (
    <section className="newForm-page">
      <h1 className="newForm-title">Select your Jet!</h1>
      <form className="form-container">
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
          <button type="button" onClick={() => display()}>Back</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

ReservationFormNew.propTypes = {
  city: PropTypes.string.isRequired,
  display: PropTypes.func.isRequired,
};

export default ReservationFormNew;
