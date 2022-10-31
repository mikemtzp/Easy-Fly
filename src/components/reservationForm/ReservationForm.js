import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { postReservation } from '../../redux/reservation/reservationAPI';
import 'react-datepicker/dist/react-datepicker.css';
import './reservatioForm.scss';
import { addReservation } from '../../redux/reservation/reservationSlice';

function ReservationForm() {
  const [jetState, setJet] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  const [cityOrigin, setCity] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [days, setDays] = useState(0);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { jets } = useSelector((state) => state.jets);

  useEffect(() => {
    setJet(jets[0]);
    if (state) {
      setJet(state.id);
    }
  }, [jets, state]);

  const handleJet = (jet) => {
    setJet(parseInt(jet.target.value, 10));
  };

  const handleForm = async (e) => {
    e.preventDefault();

    if (jetState === '' || finishDate === '' || cityOrigin === '') {
      setMessage('Fill all  the parameters!');
    } else if (startDate.getTime() > finishDate.getTime()) {
      setMessage('Start date cant be in advance of the finish date');
    } else if (typeof jetState === 'object') {
      const reservation = {
        jet_id: jetState.id,
        starting_day: startDate.toDateString(),
        finish_day: finishDate.toDateString(),
        city: cityOrigin,
      };
      const newReservation = await postReservation(reservation);
      dispatch(addReservation(newReservation.reservation));
      navigate('/myreservations');
    } else {
      const reservation = {
        jet_id: jetState,
        starting_day: startDate.toDateString(),
        finish_day: finishDate.toDateString(),
        city: cityOrigin,
      };
      const newReservation = await postReservation(reservation);
      dispatch(addReservation(newReservation.reservation));
      navigate('/myreservations');
    }
  };

  const handleStartDate = (date) => {
    setStartDate(date);
    setFinishDate(date);
  };

  const handleFinishDate = (date) => {
    setFinishDate(date);
  };

  const calculatePrice = () => {
    const diffMilliseconds = finishDate.getTime() - startDate.getTime();
    const days = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24));
    setDays(days);
    if (typeof jetState === 'object') {
      const price = (jetState.price_per_day * days) + jetState.finance_fee;
      setTotalPrice(price);
    } else {
      const jet = jets.filter((j) => j.id === jetState)[0];
      const price = (jet.price_per_day * days) + jet.finance_fee;
      setTotalPrice(price);
    }
  };

  return (
    <>
      {message ? (
        <div>{message}</div>
      ) : null}
      <form onSubmit={handleForm} className="reservation-form">

        <label htmlFor="jet-select" className="select-container">
          <div>Select a jet</div>
          {state
            ? (
              <select
                id="jet-select"
                value={state.id}
                onChange={(value) => {
                  handleJet(value);
                  calculatePrice();
                }}
              >
                {jets.map((jet) => <option key={`jet-${jet.id}`} value={jet.id}>{jet.name}</option>)}
              </select>
            )
            : (
              <select
                id="jet-select"
                defaultValue={jetState}
                onChange={(e) => {
                  handleJet(e);
                  calculatePrice();
                }}
              >
                {jets.map((jet) => <option key={`jet-${jet.id}`} value={jet.id}>{jet.name}</option>)}
              </select>
            )}
        </label>
        <div className="date-container">
          <div className="date-select">
            <p>Select a starting date</p>
            <div className="date-comp">
              <DatePicker
                id="startDate"
                selected={startDate}
                onChange={(date) => handleStartDate(date)}
                minDate={new Date()}
              />
            </div>
          </div>

          <div className="date-select">
            <p>Select finish date</p>
            <div className="date-comp">
              <DatePicker
                id="finishDate"
                selected={finishDate}
                onChange={(date) => handleFinishDate(date)}
                onCalendarClose={calculatePrice}
                minDate={startDate}
              />
            </div>
          </div>
        </div>
        <label htmlFor="city" className="city-label">
          <div>Add city</div>
          <input
            id="city"
            type="text"
            value={cityOrigin.city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <div>
          <span>Total days: </span>
          {days}
          <span>Total price: </span>
          {totalPrice}
        </div>

        <button type="submit">Reserve</button>
      </form>
    </>
  );
}

export default ReservationForm;
