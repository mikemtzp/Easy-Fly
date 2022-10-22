import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Nav from './components/nav/Nav';
// import Drawer from './components/nav/Drawer';
// import NewNav from './components/nav/NewNav';
import Main from './components/main/Main';
import './App.css';

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
