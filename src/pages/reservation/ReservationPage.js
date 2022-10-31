import React, { useState } from 'react';
import ReservationFormNew from '../../components/reservationForm/ReservatinFormNew';
import Nav from '../../components/nav/Nav';
import cityData from './cityData';
import './reservationPage.scss';

function ReservationPage() {
  const [city, setCity] = useState(cityData[0].city);
  const [bookBtn, setBookBtn] = useState(false);
  const [showSection, setShowSection] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="res-page-container">
      <Nav>
        <div className={!bookBtn ? 'res-page-hidder' : 'hide'}>
          <section className="reservation-page">
            <h1 className="res-title">Book a Jet!</h1>
            <p className="res-paragraph">
              There are more than 7 different categories of Jets.
              Luxury, fighters or just bussiness, you can choose what fits better to your needs!
              We have showrooms all over the glove which some includes test-riding facilities.
            </p>
            <label htmlFor="city-select" className="label-res-page">
              <select
                id="city-select"
                className="selectCity"
                onChange={(e) => setCity(e.target.value)}
              >
                {cityData.map((data) => (
                  <option key={`city-${data.city}`} value={data.city}>{data.city}</option>
                ))}
              </select>
              <button
                type="button"
                className="selectBtn"
                onClick={() => {
                  setBookBtn(!bookBtn);
                  setShowForm(!showForm);
                  setShowSection(!showSection);
                }}
              >
                Book now!
              </button>
            </label>
          </section>
        </div>
        <ReservationFormNew
          reserveCity={city}
          display={setBookBtn}
          showForm={showForm}
          handleShowForm={setShowForm}
          showSection={showSection}
          handleShowSection={setShowSection}
        />
      </Nav>
    </div>
  );
}

export default ReservationPage;
