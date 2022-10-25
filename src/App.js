import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Main from './pages/main/Main';
import SignupForm from './components/user/SignupForm';
import LoginForm from './components/user/LoginForm';
import AddJet from './pages/addjet/AddJet';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/add-jet" element={<AddJet />} />
      </Routes>
    </Router>
  );
}

export default App;
