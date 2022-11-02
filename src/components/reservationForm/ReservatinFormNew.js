import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import ConfirmData from './ConfirmData';
import { postReservation } from '../../redux/reservation/reservationAPI';
import { addReservation } from '../../redux/reservation/reservationSlice';

import './ReservationFormNew.scss';
import 'react-datepicker/dist/react-datepicker.css';

function ReservationFormNew(props) {
  const {
    reserveCity, display, showForm, handleShowForm,
    showSection, handleShowSection,
  } = props;

  const { jets } = useSelector((state) => state.jets);
  const [jet, setJet] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);
  const [confirm, setConfirm] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    setJet(jets[0]);
  }, [jets]);

  const handleJetSelect = (id) => {
    const jet = jets.filter((jet) => id === jet.id)[0];
    setJet(jet);
  };

  const getDays = (startDate, endDate) => {
    const diffMilliseconds = endDate.getTime() - startDate.getTime();
    const days = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24));
    return days;
  };

  const handleConfirm = () => {
    handleShowForm(!showForm);
  };

  const reservation = () => {
    if (state) {
      setJet(state);
    }
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

  const submitForm = async (e) => {
    e.preventDefault();
    const reserve = reservation();
    const response = await postReservation(reserve);
    if (response.reservation !== null) {
      dispatch(addReservation(response.reservation));
      navigate('/myreservations');
      toast.success('Reservation Booked Successfuly', { theme: 'colored' });
    } else {
      toast.error('Unable to create Reservation');
    }
  };

  return (
    <section className={showSection ? 'newForm-page' : 'hide'}>
      <div className={showForm ? '' : 'hide'}>
        <h1 className="newForm-title">Select your Jet!</h1>
        <form className="form-container" id="reservation-form" onSubmit={submitForm}>
          <label htmlFor="jet-select" className="jet-label">
            {state ? (
              <select
                name="jets"
                id="jet-select"
                onChange={(e) => handleJetSelect(parseInt(e.target.value, 10))}
              >
                <option
                  key={`jet-${state.id}`}
                  value={state.id}
                >
                  {state.name}
                </option>
              </select>
            ) : (
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
            )}
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
                onChange={(date) => {
                  setStartDate(date);
                  setEndDate(date);
                }}
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
                handleShowSection(!showSection);
              }}
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => {
                handleShowForm(!showForm);
                setConfirm(!confirm);
              }}
            >
              Next
            </button>
          </div>
        </form>
      </div>
      <ConfirmData
        reservation={reservation}
        jetName={jet ? jet.name : ''}
        days={getDays(startDate, endDate)}
        ppe={jet ? jet.price_per_day : 0}
        finFee={jet ? jet.finance_fee : 0}
        city={reserveCity}
        handleForm={handleConfirm}
        confirmPage={confirm}
        setConfirmPage={setConfirm}
      />
    </section>
  );
}

ReservationFormNew.propTypes = {
  reserveCity: PropTypes.string.isRequired,
  display: PropTypes.func.isRequired,
  handleShowForm: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired,
  handleShowSection: PropTypes.func.isRequired,
  showSection: PropTypes.bool.isRequired,
};

export default ReservationFormNew;
