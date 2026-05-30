import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Openaccount from '../../Openaccount';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import './HomePage.css'; // make sure file name matches exactly

function HomePage() {
  return ( 
    <div className="homepage">
      <div className="content-overlay">
        <Navbar />
        <Hero />
        <Stats />
        <Pricing />
        <Education />
        <Openaccount />
        <Footer />
      </div>
    </div>
   );
}

export default HomePage;
