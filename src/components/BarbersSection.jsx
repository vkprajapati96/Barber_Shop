import React from 'react';
import './BarbersSection.css';
import { FaInstagram, FaFacebookF, FaMapMarkerAlt } from 'react-icons/fa';

const barbers = [
  {
    name: 'Jason Rodriguez',
    title: 'Owner & Master Barber',
    description:
      "With over 15 years of experience, Jason founded PMC Barbershop to bring premium men's grooming services to Denton. Specializing in classic cuts and...",
    image: '/images/barber1.jpg',
  },
  {
    name: 'Marcus Williams',
    title: 'Senior Barber',
    description:
      'Marcus brings 8 years of experience to PMC Barbershop. His expertise in fades, beard sculpting, and precision lineup work has earned him a loyal...',
    image: '/images/barber2.jpg',
  },
  {
    name: 'Terrence Jackson',
    title: 'Barber & Stylist',
    description:
      'Terrence specializes in modern men\'s styling, textured cuts, and hair designs. With his creative approach and technical skill, he excels at transforming your look...',
    image: '/images/barber3.jpg',
  },
];

const BarbersSection = () => {
  return (
    <section className="barbers-section">
      <p className="barbers-subtitle">Expert Stylists</p>
      <h2 className="barbers-title">
        Meet <span>Our Barbers</span>
      </h2>
      <p className="barbers-description">
        Our team of skilled barbers is dedicated to providing you with the perfect cut and grooming experience.
      </p>

      <div className="barbers-cards">
        {barbers.map((barber, index) => (
          <div className="barber-card" key={index}>
            <img src={barber.image} alt={barber.name} className="barber-img" />
            <div className="barber-info">
              <div className="barber-divider" />
              <h3>{barber.name}</h3>
              <p className="barber-role">{barber.title}</p>
              <p className="barber-bio">{barber.description}</p>
              <div className="barber-icons">
                <FaInstagram />
                <FaFacebookF />
                <FaMapMarkerAlt />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BarbersSection;
