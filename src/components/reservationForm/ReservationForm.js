import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import postReservation from '../../redux/reservation/reservationAPI';
import 'react-datepicker/dist/react-datepicker.css';
import './reservatioForm.scss';

function ReservationForm() {
  // Simulates jets state:
  const jets = [
    {
      jet_id: 1,
      jet_name: 'Jet-1',
    },
    {
      jet_id: 2,
      jet_name: 'Jet-2',
    },
    {
      jet_id: 3,
      jet_name: 'Jet-3',
    },
    {
      jet_id: 4,
      jet_name: 'Jet-4',
    },
  ];

  const [jetState, setJet] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState('');
  const [cityOrigin, setCity] = useState({ city: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleJet = (jet) => {
    setJet(parseInt(jet.target.value, 10));
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if (jetState === '' || finishDate === '' || cityOrigin === '') {
      setMessage('Fill all  the parameters!');
    } if (startDate.getTime() > finishDate.getTime()) {
      setMessage('Start date cant be in advance of the finish date');
    } else {
      const reservation = {
        jet_id: jetState,
        starting_day: startDate.toDateString(),
        finish_day: finishDate.toDateString(),
        city: cityOrigin.city,
      };
      await postReservation(reservation);
      navigate('/');
    }
  };

  const handleStartDate = (date) => {
    setStartDate(date);
    setFinishDate(date);
  };

  const handleFinishDate = (date) => {
    setFinishDate(date);
  };

  const handleCity = (e) => {
    setCity({ ...cityOrigin, city: e.target.value });
  };

  return (
    <>
      {message ? (
        <div>{message}</div>
      ) : null}
      <form onSubmit={handleForm} className="reservation-form">
        {/* jet input */}
        <label htmlFor="jet-select" className="select-container">
          <div>Select a jet</div>
          <select id="jet-select" value={jetState} onChange={(e) => handleJet(e)}>
            {jets.map((jet) => <option key={`jet-${jet.jet_id}`} value={jet.jet_id}>{jet.jet_name}</option>)}
          </select>
        </label>
        <div className="date-container">
          {/* starting date */}
          <div className="date-select">
            <p>Select a starting date</p>
            <div className="date-comp">
              <DatePicker
                id="startDate"
                selected={startDate}
                onChange={(date) => handleStartDate(date)}
              />
            </div>
          </div>
          {/* finish date */}
          <div className="date-select">
            <p>Select finish date</p>
            <DatePicker
              id="finishDate"
              selected={finishDate}
              onChange={(date) => handleFinishDate(date)}
            />
          </div>
        </div>
        <label htmlFor="city" className="city-label">
          <div>Add city</div>
          <input
            id="city"
            type="text"
            value={cityOrigin.city}
            onChange={(e) => handleCity(e)}
          />
        </label>

        <button type="submit">Reserve</button>
      </form>
    </>
  );
}

export default ReservationForm;
