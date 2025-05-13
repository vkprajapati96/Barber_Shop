import React from 'react';
import './ServicePricing.css';

const ServicePricing = () => {
  return (

    <section className="pricing-section">
      <h4 className="pricing-subtitle">Quality Barbering at Fair Prices</h4>
     <div className='pricing-title-div'>
      <h2 className="pricing-title">Our Service Prices</h2>
      <div id='line'></div>
      </div>
      <p className="pricing-description">
        Choose from our range of professional barbering services.
      </p>

      <div className="pricing-cards">
        {/* Classic */}
        <div className="price-card most-popular">
          <div className="popular-tag">Most Popular</div>
          <h3>Classic Services</h3>
          <div className="price">
            <span>$</span>$25<small>/mo</small>
          </div>
          <ul>
            <li>Men’s Haircut</li>
            <li>Kids Haircut (12 & under)</li>
            <li>Senior Haircut (65+)</li>
            <li>Military/First Responder Cut</li>
            <li>Basic Beard Trim</li>
            <li>Neck & Line Cleanup (between cuts)</li>
          </ul>
          <button className="book-now">Book Now</button>
        </div>

        {/* Premium */}
        <div className="price-card">
          <h3>Premium Services</h3>
          <div className="price">
            <span>$</span>35<small>/mo</small>
          </div>
          <ul>
            <li>Haircut & Beard Combo</li>
            <li>Hot Towel Shave</li>
            <li>Full Beard Shaping & Design</li>
            <li>Color Combo (Gray Blending)</li>
            <li>Hair & Scalp Treatment</li>
            <li>Head Shave with Hot Towel</li>
          </ul>
          <button className="book-disabled" disabled>Book Now</button>
        </div>

        {/* Packages */}
        <div className="price-card">
          <h3>Packages</h3>
          <div className="price">
            <span>$</span>50<small>/mo</small>
          </div>
          <ul>
            <li>The Works (Cut, Shave, Treatment)</li>
            <li>Father & Son Combo</li>
            <li>Groom’s Package</li>
            <li>Monthly Membership (2 cuts/mo)</li>
            <li>First-Time Client Special</li>
            <li>Loyalty Program</li>
          </ul>
          <button className="inquire-btn">Inquire</button>
        </div>
      </div>
    </section>
  );
};

export default ServicePricing;
