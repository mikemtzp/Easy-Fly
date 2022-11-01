import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
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
import {
  authenticateThunk,
  logout,
  setUnAuthenticated,
} from './redux/users/userSlice';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getJetsThunk());
    dispatch(getReservationsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(authenticateThunk(token))
        .unwrap()
        .then(() => {})
        .catch(() => {
          toast.error('You need to login again!');
          dispatch(logout());
        });
    } else {
      dispatch(setUnAuthenticated());
    }
  }, [dispatch, token]);

  return (
    <>
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
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
