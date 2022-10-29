import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ReservationPage from './pages/reservation/ReservationPage';
import MyReservation from './pages/myReservation/MyReservationPage';
import Main from './pages/main/Main';
import SignupPage from './pages/user/SignupPage';
import LoginPage from './pages/user/LoginPage';
import AddJet from './pages/addjet/AddJet';
import JetDetailsPage from './pages/jetdetails/JetDetailsPage';
import DeleteJetPage from './pages/deleteJet/DeleteJetPage';
import { getJetsThunk } from './redux/jets/jetSlice';
import { getReservationsThunk } from './redux/reservation/reservationSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJetsThunk());
    dispatch(getReservationsThunk());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/myreservations" element={<MyReservation />} />
        <Route path="/jets/:id" element={<JetDetailsPage />} />
        <Route path="/add-jet" element={<AddJet />} />
        <Route path="/delete-jet" element={<DeleteJetPage />} />
        <Route index path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
