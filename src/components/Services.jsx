import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="barber-con"> 
    <div className="barber-services-container container">
      <p className="barber-subheading">Premium Grooming</p>
     <div className="barber-main-heading-div">
      <h1 className="barber-main-heading">
        Our Barber Services
      </h1>
        <div id="line" ></div>
     </div>
      <p className="barber-description">
        Professional barbering services to keep you looking sharp for everyday confidence or special occasions.
      </p>
      <div className="barber-cards">
        <div className="barber-card">
          <div className="barber-icon haircut-icon"></div>
          <h3>Haircuts</h3>
          <p>
            Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.
          </p>
          <ul>
            <li>Classic Cuts</li>
            <li>Modern Styles</li>
          </ul>
        </div>

        <div className="barber-card">
          <div className="barber-icon beard-icon"></div>
          <h3>Beard Services</h3>
          <p>
            Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.
          </p>
          <ul>
            <li>Beard Trims</li>
            <li>Beard Shaping</li>
          </ul>
        </div>

        <div className="barber-card">
          <div className="barber-icon premium-icon"></div>
          <h3>Premium Services</h3>
          <p>
            Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best.
          </p>
          <ul>
            <li>Hair Coloring</li>
            <li>Scalp Treatments</li>
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Services;
