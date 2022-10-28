import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io5';
import * as MdIcons from 'react-icons/md';
import * as BtIcons from 'react-icons/bi';
import * as ImIcons from 'react-icons/im';

const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaIcons.FaFighterJet />,
    cName: 'nav-text',
    key: 'home',
  },
  {
    title: 'Reservation',
    path: '/reservation',
    icon: <MdIcons.MdAirplaneTicket />,
    cName: 'nav-text',
    key: 'reserv',
  },
  {
    title: 'My Reservations',
    path: '/myreservations',
    icon: <IoIcons.IoBookOutline />,
    cName: 'nav-text',
    key: 'myReserv',
  },
  {
    title: 'Add Jet',
    path: '/add-jet',
    icon: <MdIcons.MdAirplanemodeActive />,
    cName: 'nav-text',
    key: 'addJet',
  },
  {
    title: 'Delete Jet',
    path: '/deletejet',
    icon: <MdIcons.MdAirplanemodeInactive />,
    cName: 'nav-text',
    key: 'deleteJet',
  },
  {
    title: 'Login',
    path: '/login',
    icon: <BtIcons.BiLogIn />,
    cName: 'nav-text',
    key: 'login',
  },
  {
    title: 'Sign Up',
    path: '/signup',
    icon: <ImIcons.ImUserPlus />,
    cName: 'nav-text',
    key: 'signup',
  },
];

export default SidebarData;
