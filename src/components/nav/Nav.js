import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { motion } from 'framer-motion';
import SidebarData from './SidebarData';
import './Nav.scss';

function getWindowSize() {
  const { innerWidth } = window;
  return { innerWidth };
}

function Nav({ children }) {
  const [sidebar, setSidebar] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const showSideBar = () => setSidebar(!sidebar);

  return (
    <>
      {windowSize.innerWidth <= 760 ? (
        <div className="mobile-container">
          <motion.div animate={{}}>
            <div className="navbar">
              <FaIcons.FaBars
                onClick={showSideBar}
                className={!sidebar ? 'menu-bars' : 'hide'}
              />
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className="nav-menu-items">
                <li className="navbar-toggle">
                  <AiIcons.AiOutlineClose
                    onClick={showSideBar}
                    className="menu-bars"
                  />
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
          </motion.div>
          <main className="main">{children}</main>
        </div>
      ) : (
        <div className="desktop-container">
          <div className="sidebar">
            <div className="logo">
              <Link to="/" className="logo-link">
                EasyFly
              </Link>
            </div>
            <ul className="item-container">
              {SidebarData.map((item) => {
                const {
                  title, path, icon, key,
                } = item;
                return (
                  <li key={key} className="desktop-ba">
                    <NavLink
                      to={path}
                      className="link"
                      activeClassName="link active"
                    >
                      {icon}
                      <span>{title}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <main className="main">{children}</main>
        </div>
      )}
    </>
  );
}

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Nav;
