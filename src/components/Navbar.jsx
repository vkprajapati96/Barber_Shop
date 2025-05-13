import React, { useState } from 'react';
import { FaPinterestP, FaGlobe, FaPhoneAlt, FaBars } from 'react-icons/fa';
import { IoColorPaletteOutline } from "react-icons/io5";
import logo from '../assets/logo.webp';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className='nav-container'>
      <nav className="navbar container">
        <div className="logo-and-menu">
          <img src={logo} alt="Logo" className="logo" />
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          <a href="#home"><li>Home</li></a>
          <a href="#about"><li>About</li></a>
          <a href="#service"><li>Services</li></a>
          <a href="#gallery"><li>Gallery</li></a>
          <a href="#contact"><li>Contact</li></a>
        </ul>

        {/* Right container (hide on medium) */}
        <div className="right-container">
          <div className="icons">
            <IoColorPaletteOutline className="icon" />
            <FaGlobe className="icon" />
            <FaPhoneAlt className="icon" />
          </div>
          <div className="phone">+19408081569</div>
          <button className="button">Book an Appointment</button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="mobile-menu">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      )}
    </section>
  );
};

export default Navbar;
