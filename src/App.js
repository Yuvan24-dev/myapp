import React from 'react';
import NavbarComponent from './Navbar';
import Services from './Services';
import AboutUs from './Aboutus';
import WhyUs from './Whyus';
import Team from './Team';
import CustomerCarousel from './CustomerCarousel'
import FooterSection from './footer'
import Useingstate from './Usestate';


const App = () => (
  <>
    <NavbarComponent />
    <Services />
    <AboutUs />
    <WhyUs />
    <Team />
    <CustomerCarousel/>
    <FooterSection />
    <Useingstate />
  </>
);

export default App;
