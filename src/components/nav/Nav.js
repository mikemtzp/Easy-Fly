import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  const activeStyle = {
    TextDecoration: 'underline',
    fontSize: '35px',
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jets"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Jets
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
