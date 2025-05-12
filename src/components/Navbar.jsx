import React from 'react';
import { FaPinterestP, FaGlobe, FaPhoneAlt } from 'react-icons/fa';
import { IoColorPaletteOutline } from "react-icons/io5";

import logo from '../assets/logo.webp'
import './Navbar.css';

const Navbar = () => {
  return (
    <section className='nav-container'>
    <nav className="navbar container">
      {/* Left: Logo + Links */}
      <div className="left-container">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Right: Icons + Phone + Button */}
      <div className="right-container">
        <div className="icons">
            <IoColorPaletteOutline className="icon"/>
          <FaGlobe className="icon" />
          <FaPhoneAlt className="icon" />
        </div>
        <div className="phone">+19408081569</div>
        <button className="button">Book an Appointment</button>
      </div>
    </nav>
    </section>
  );
};

export default Navbar;
