import React from 'react';
import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/nav.scss';

function Nav() {
  const activeStyle = {
    TextDecoration: 'underline',
    fontSize: '25px',
    color: 'white',
    backgroundColor: 'green',
  };

  return (
    <nav className="col-auto min-vh-100 border">
      <ul className="nav-ul">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="nav-link"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jets"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="nav-link"
          >
            Reserve
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jets"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="nav-link"
          >
            My Reservs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jets"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="nav-link"
          >
            Add Jet
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jets"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="nav-link"
          >
            Delete Jet
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
