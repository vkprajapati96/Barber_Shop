import React from 'react';
import { FaArrowDown } from "react-icons/fa";

import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import heroImage from '../assets/hero.webp'; // Replace with your actual image path
import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        {/* Left Side Content */}
        <div className="hero-text">
          <p className="hero-subtitle">Premium Barber Services in Denton</p>
          <h1 className="hero-heading">Classic Cuts, Modern Style</h1>
          <h2 className="hero-highlight">Premium Barber Shop</h2>
          <p className="hero-description">
            At PMC Barbershop, we combine traditional barbering techniques with modern styling
            to give you the perfect look. Our experienced barbers deliver precision cuts, beard grooming, 
            and relaxing hot towel shaves in a classic barbershop atmosphere.
          </p>

          <div className="hero-location">
            <FaMapMarkerAlt className="icon" />
            <span>Denton, TX</span>
          </div>

          <div className="hero-buttons">
            <button className="btn-outline">
              <FaPhoneAlt id='call' /> Our Services
            </button>
            <button className="btn-filled">
              <FaPhoneAlt id='book' /> Book Now
            </button>
          </div>
          <div id='arrow-btn'>
            < FaArrowDown id='arrow'/>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="hero-image">
          <img src={heroImage} alt="Barber Team" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
