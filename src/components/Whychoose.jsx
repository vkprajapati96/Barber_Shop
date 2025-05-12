import React from "react";
import "./Whychoose.css";

const Whychoose = () => {
  return (
    <section className="why-con">

    <div className="whychoose-container container">
      <p className="whychoose-subheading">Our Commitment</p>
      <div className="whychoose-heading-div">
      <h1 className="whychoose-heading">
        Why Choose PMC Barbershop?
      </h1>
      <div id="line"></div>
      </div>
      <p className="whychoose-description">
        What makes us the premier barbershop in Denton, TX.
      </p>

      <div className="whychoose-cards">
        <div className="whychoose-card">
          <div className="whychoose-icon">User</div>
          <h3>Expert Barbers</h3>
          <p>
            Our team consists of certified barbers with years of experience in
            classic and modern cutting techniques, beard grooming, and men's styling.
          </p>
        </div>

        <div className="whychoose-card">
          <div className="whychoose-icon">Scissors</div>
          <h3>Premium Tools & Products</h3>
          <p>
            We use only high-quality barbering tools and premium men's grooming products
            to ensure the best results for your hair and skin.
          </p>
        </div>

        <div className="whychoose-card">
          <div className="whychoose-icon">Home</div>
          <h3>Classic Barbershop Experience</h3>
          <p>
            Enjoy a comfortable, clean shop with a classic barbershop atmosphere
            where you can relax while getting a great cut or shave.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Whychoose;
