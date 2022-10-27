import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Nav from './components/nav/Nav';
import ReservationPage from './pages/reservation/ReservationPage';
import Main from './pages/main/Main';
import SignupForm from './components/user/SignupForm';
import LoginForm from './components/user/LoginForm';
import AddJet from './pages/addjet/AddJet';
import { getJetsThunk } from './redux/jets/jetSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJetsThunk());
  }, [dispatch]);

  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/add-jet" element={<AddJet />} />
      </Routes>
    </Router>
  );
}

export default App;
