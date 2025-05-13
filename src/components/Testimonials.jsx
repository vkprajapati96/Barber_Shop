import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const reviews = [
    {
      name: "Mike Johnson",
      stars: 5,
      quote:
        "I've been getting my hair cut at PMC Barbershop for over 2 years now. The attention to detail is unmatched, and the atmosphere is always welcoming. My barber remembers exactly how I like my fade every time!"
    },
    {
      name: "David Martinez",
      stars: 5,
      quote:
        "As someone who's particular about their haircut, I was nervous trying a new place. The team at PMC took their time to understand what I wanted and delivered exactly that. Will definitely be coming back!"
    },
    {
      name: "Chris Taylor",
      stars: 5,
      quote:
        "The hot towel shave experience at PMC Barbershop is phenomenal! It’s the perfect blend of old-school barbering with modern techniques. My beard has never looked better."
    }
  ];

  return (
    <section className="testi-con">
    <div className="testimonials-container container">
      <p className="testimonials-subheading">Testimonials</p>
    <div className="testimonials-heading-div">
         <h1 className="testimonials-heading">
        What Our Clients Say
      </h1>
      <div id="line"></div>
    </div>

      <div className="testimonials-cards">
        {reviews.map((review, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-quote-ist">“</div>
            <p className="testimonial-text">{review.quote}</p>
            <div className="testimonial-quote-second">“</div>

            <div className="testimonial-footer">
              <div className="testimonial-stars">{"★".repeat(review.stars)} <span>|</span></div>
              <div className="testimonial-name">{review.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Testimonials;
