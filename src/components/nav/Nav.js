import React from 'react';
import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/nav.scss';

function Nav() {
  return (
    <nav className="col-auto min-vh-100 border">
      <ul className="nav-ul">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jets"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Reserve
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jets"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            My Reservs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jets"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Add Jet
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jets"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Delete Jet
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
