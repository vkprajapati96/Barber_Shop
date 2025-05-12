import React from 'react';
import './About.css'; 
import AboutImg from "../assets/about.webp"

const About = () => {
  return (
    <section className="about-con">
    <div className="about-section container">
      <div className="about-heading">
        <p className="story-tag">Our Story</p>
        <div className='about-heading-h2'>
        <h2>About PMC Barbershop </h2>
        <div id='line'></div>
        </div>
        <p className="about-desc">
          Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
        </p>
      </div>

      <div className="about-content">
        <div className="about-image-container">
          <img src={AboutImg} alt="PMC Barbershop" />
          <div className="experience-tag">5+ years</div>
        </div>

        <div className="about-text">
          <p>
            Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
          </p>
          <div className="quote-box">
            <span className="quote-icon">❝</span>
            <p>
              We take pride in our attention to detail and personalized service, ensuring each client leaves looking and feeling their best. Our skilled barbers combine traditional techniques with modern trends to create custom styles that suit each individual's personality and lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
