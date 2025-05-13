import './BarberGallery.css';
import galler1 from "../assets/gallery1.webp"
import galler3 from "../assets/gallery3.webp"
import about from "../assets/about.webp"

const BarberGallery = () => {
  return (
    <section id='gallery' className='barbar-galler-con'>
    <div className="barber-gallery container ">
      <div className="barber-gallery-header ">
        <p className="barber-subtitle">Our Work & Shop</p>
        <div className='barber-title-div'>
         <h2 className="barber-title">
          Our Barbershop Gallery
        </h2>
        <div id='line' ></div>
        </div>
        <p className="barber-description">
          Take a look at our shop atmosphere and the quality cuts we deliver to our clients.
        </p>
      </div>

      <div className="barber-gallery-images">
        <img src={galler1} alt="Haircut" className="barber-img" />
        <img src={about} alt="Barbershop" className="barber-img" />
        <img src={galler3} alt="Trophy" className="barber-img" />
      </div>
    </div>
    </section>
  );
};

export default BarberGallery;


