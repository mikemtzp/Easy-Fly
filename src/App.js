import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
