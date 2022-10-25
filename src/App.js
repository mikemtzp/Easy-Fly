import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Nav from './components/nav/Nav';
// import Drawer from './components/nav/Drawer';
// import NewNav from './components/nav/NewNav';
import Main from './components/main/Main';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import ReservationPage from './pages/reservation/ReservationPage';
import './App.css';

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
