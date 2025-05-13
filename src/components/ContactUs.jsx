import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div id='contact' className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-box">
            <i className="fas fa-map-marker-alt icon" />
            <div>
              <h4>Address</h4>
              <p>518 Acme St unit 101, Denton, TX 76205, United States</p>
            </div>
          </div>
          <div className="info-box">
            <i className="fas fa-phone icon" />
            <div>
              <h4>Phone</h4>
              <p>+1 940-808-1569</p>
            </div>
          </div>
          <div className="info-box">
            <i className="fas fa-clock icon" />
            <div>
              <h4>Business Hours</h4>
              <p>Mon-Fri: 9:00 AM - 7:00 PM<br />Sat: 9:00 AM - 5:00 PM<br />Sun: Closed</p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <h2>Contact Us</h2>
          <input type="text" placeholder="Enter your full name" required />
          <input type="text" placeholder="Enter your phone number" required />
          <select>
            <option>Select an option</option>
            <option>Haircut</option>
            <option>Shave</option>
            <option>Combo</option>
          </select>
          <input type="date" />
          <textarea placeholder="Tell us about your style preferences or any questions you have" rows="5" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
