import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Nav from './components/nav/Nav';
import ReservationPage from './pages/reservation/ReservationPage';
import MyReservation from './pages/myReservation/MyReservationPage';
import Main from './pages/main/Main';
import SignupForm from './components/user/SignupForm';
import LoginForm from './components/user/LoginForm';
import AddJet from './pages/addjet/AddJet';
import JetDetailsPage from './pages/jetdetails/JetDetailsPage';
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
      <Nav />
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/myreservations" element={<MyReservation />} />
        <Route path="/jets/:id" element={<JetDetailsPage />} />
        <Route path="/add-jet" element={<AddJet />} />
        <Route index path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
