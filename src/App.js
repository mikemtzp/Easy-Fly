import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import ReservationPage from './pages/reservation/ReservationPage';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
