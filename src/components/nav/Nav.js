import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SidebarData from './SidebarData';
import './temp.scss';

function Nav() {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <FaIcons.FaBars onClick={showSideBar} className="menu-bars" />
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <AiIcons.AiOutlineClose onClick={showSideBar} className="menu-bars" />
          </li>
          {SidebarData.map((item) => {
            const {
              title, path, icon, cName, key,
            } = item;
            return (
              <li key={key} className={cName}>
                <Link to={path} onClick={showSideBar}>
                  {icon}
                  <span>{title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
