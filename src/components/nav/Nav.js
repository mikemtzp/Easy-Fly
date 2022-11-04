import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io5';
import * as MdIcons from 'react-icons/md';
import * as BtIcons from 'react-icons/bi';
import * as ImIcons from 'react-icons/im';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';

import { authStatus, logout } from '../../redux/users/userSlice';
import { cleanReservations } from '../../redux/reservation/reservationSlice';

import './Nav.scss';

function getWindowSize() {
  const { innerWidth } = window;
  return { innerWidth };
}

const Nav = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const { status: userStatus } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = JSON.parse(localStorage.getItem('easy-fly-data'));
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
  const handleLogout = () => {
    dispatch(cleanReservations());
    dispatch(logout());
    navigate('/');
    toast.success('Successfully logged out');
  };
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

                <li className="nav-text">
                  <Link to="/" onClick={showSideBar}>
                    <FaIcons.FaFighterJet />
                    <span>Home</span>
                  </Link>
                </li>
                {userStatus === authStatus.authenticated ? (
                  <>
                    <li className="nav-text">
                      <Link to="/reservation" onClick={showSideBar}>
                        <MdIcons.MdAirplaneTicket />
                        <span>Reservation</span>
                      </Link>
                    </li>
                    <li className="nav-text">
                      <Link to="/myreservations" onClick={showSideBar}>
                        <IoIcons.IoBookOutline />
                        <span>My Reservations</span>
                      </Link>
                    </li>
                    <li className="nav-text">
                      <Link to="/add-jet" onClick={showSideBar}>
                        <MdIcons.MdAirplanemodeActive />
                        <span>Add Jet</span>
                      </Link>
                    </li>
                    <li className="nav-text">
                      <Link to="/delete-jet" onClick={showSideBar}>
                        <MdIcons.MdAirplanemodeInactive />
                        <span>Delete Jet</span>
                      </Link>
                    </li>
                    <li className="nav-text logout-li">
                      <Typography>{`Signed in as ${username}!`}</Typography>
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="mob-logout"
                      >
                        <BtIcons.BiLogIn />
                        <span className="title">Logout</span>
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-text">
                      <Link to="/login" onClick={showSideBar}>
                        <BtIcons.BiLogIn />
                        <span>Login</span>
                      </Link>
                    </li>
                    <li className="nav-text">
                      <Link to="/signup" onClick={showSideBar}>
                        <ImIcons.ImUserPlus />
                        <span>Sign Up</span>
                      </Link>
                    </li>
                  </>
                )}
                <li className="liIcons">
                  <div className="icons">
                    <div className="icon-container">
                      <IconContext.Provider value={{ size: '1.5rem' }}>
                        <FaIcons.FaTwitter />
                      </IconContext.Provider>
                    </div>
                    <div className="icon-container">
                      <IconContext.Provider value={{ size: '1.5rem' }}>
                        <FaIcons.FaFacebookF />
                      </IconContext.Provider>
                    </div>
                    <div className="icon-container">
                      <IconContext.Provider value={{ size: '1.5rem' }}>
                        <FaIcons.FaGooglePlusG />
                      </IconContext.Provider>
                    </div>
                    <div className="icon-container">
                      <IconContext.Provider value={{ size: '1.5rem' }}>
                        <FaIcons.FaVimeoV />
                      </IconContext.Provider>
                    </div>
                    <div className="icon-container">
                      <IconContext.Provider value={{ size: '1.5rem' }}>
                        <FaIcons.FaPinterestP />
                      </IconContext.Provider>
                    </div>
                  </div>
                  <a
                    className="footer"
                    href="https://github.com/KaskMIL/book-a-jet-front-end#readme"
                  >
                    @ 2022 Worash Mike Alex Tom
                  </a>
                </li>
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
              <li className="desktop-ba">
                <NavLink
                  end
                  to="/"
                  className="link"
                  activeclassname="link active"
                >
                  <FaIcons.FaFighterJet />
                  <span className="title">Home</span>
                </NavLink>
              </li>

              {userStatus === authStatus.authenticated && (
                <>
                  <li className="desktop-ba">
                    <NavLink
                      end
                      to="/reservation"
                      className="link"
                      activeclassname="link active"
                    >
                      <MdIcons.MdAirplaneTicket />
                      <span className="title">Reservation</span>
                    </NavLink>
                  </li>
                  <li className="desktop-ba">
                    <NavLink
                      end
                      to="/myreservations"
                      className="link"
                      activeclassname="link active"
                    >
                      <IoIcons.IoBookOutline />
                      <span className="title">My Reservations</span>
                    </NavLink>
                  </li>
                  <li className="desktop-ba">
                    <NavLink
                      end
                      to="/add-jet"
                      className="link"
                      activeclassname="link active"
                    >
                      <MdIcons.MdAirplanemodeActive />
                      <span className="title">Add Jet</span>
                    </NavLink>
                  </li>
                  <li className="desktop-ba">
                    <NavLink
                      end
                      to="/delete-jet"
                      className="link"
                      activeclassname="link active"
                    >
                      <MdIcons.MdAirplanemodeInactive />
                      <span className="title">Delete Jet</span>
                    </NavLink>
                  </li>
                </>
              )}
              {userStatus === authStatus.authenticated ? (
                <li className="desktop-ba">
                  <Typography>{`Signed in as ${username}!`}</Typography>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="logoutBtn link"
                  >
                    <BtIcons.BiLogIn />
                    <span className="title">Logout</span>
                  </button>
                </li>
              ) : (
                <>
                  <li className="desktop-ba">
                    <NavLink
                      end
                      to="/login"
                      className="link"
                      activeclassname="link active"
                    >
                      <BtIcons.BiLogIn />
                      <span className="title">Login</span>
                    </NavLink>
                  </li>
                  <li className="desktop-ba">
                    <NavLink
                      end
                      to="/signup"
                      className="link"
                      activeclassname="link active"
                    >
                      <ImIcons.ImUserPlus />
                      <span className="title">Sign Up</span>
                    </NavLink>
                  </li>
                </>
              )}
              <li className="liIcons">
                <div className="icons">
                  <div className="icon-container">
                    <IconContext.Provider value={{ size: '1.5rem' }}>
                      <FaIcons.FaTwitter />
                    </IconContext.Provider>
                  </div>
                  <div className="icon-container">
                    <IconContext.Provider value={{ size: '1.5rem' }}>
                      <FaIcons.FaFacebookF />
                    </IconContext.Provider>
                  </div>
                  <div className="icon-container">
                    <IconContext.Provider value={{ size: '1.5rem' }}>
                      <FaIcons.FaGooglePlusG />
                    </IconContext.Provider>
                  </div>
                  <div className="icon-container">
                    <IconContext.Provider value={{ size: '1.5rem' }}>
                      <FaIcons.FaVimeoV />
                    </IconContext.Provider>
                  </div>
                  <div className="icon-container">
                    <IconContext.Provider value={{ size: '1.5rem' }}>
                      <FaIcons.FaPinterestP />
                    </IconContext.Provider>
                  </div>
                </div>
                <a
                  className="footer"
                  href="https://github.com/KaskMIL/book-a-jet-front-end#readme"
                >
                  @ 2022 Worash Mike Alex Tom
                </a>
              </li>
            </ul>
          </div>
          <main className="main">{children}</main>
        </div>
      )}
    </>
  );
};

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Nav;
