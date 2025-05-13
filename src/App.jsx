import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css'
import About from './components/About'
import BarberGallery from './components/BarberGallery '
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ServicePricing from './components/ServicePricing'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Whychoose from './components/Whychoose'
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {

  return (
<>
<Navbar/>
<Hero/>
<About/>
<Services/>
<Whychoose/>
<Testimonials/>
<ServicePricing/>
<BarberGallery/>
<ContactUs/>
<Footer/>
</>  

)
}

export default App
