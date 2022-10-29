import React from 'react';
import ReservationForm from '../../components/reservationForm/ReservationForm';
import Nav from '../../components/nav/Nav';
import './reservationPage.scss';

function ReservationPage() {
  return (
    <Nav>
      <main className="reservation-page">
        <h1>Reservation Page</h1>
        <ReservationForm />
      </main>
    </Nav>
  );
}

export default ReservationPage;
