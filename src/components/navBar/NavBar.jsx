import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome, MdDarkMode, MdWbSunny, MdApps, MdNotifications, MdEmail, MdPerson, MdSearch } from 'react-icons/md';
import './navBar.scss';

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>SayIT</span>
        </Link>
        <MdHome/>
        <MdDarkMode/>
        <MdWbSunny/>
        <MdApps/>        
        <div class