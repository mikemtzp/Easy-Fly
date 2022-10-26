import React from 'react';
import ReservationForm from '../../components/reservationForm/ReservationForm';
import './reservationPage.scss';

function ReservationPage() {
  return (
    <main className="reservation-page">
      <h1>Reservation Page</h1>
      <ReservationForm />
    </main>
  );
}

export default ReservationPage;
