import React, { useEffect, useState } from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo left */}
        <div className="navbar-logo">
          <img src="/media/F.png" alt="Finova Logo" />
        </div>

        {/* Menu right with icons */}
        <ul className="navbar-menu">
          <li><a href="#signup"><i className="fas fa-user-plus"></i> Signup</a></li>
          <li><a href="#about"><i className="fas fa-info-circle"></i> About</a></li>
          <li><a href="#products"><i className="fas fa-box"></i> Products</a></li>
          <li><a href="#pricing"><i className="fas fa-dollar-sign"></i> Pricing</a></li>
          <li><a href="#support"><i className="fas fa-headset"></i> Support</a></li>
        </ul>

        {/* Hamburger for mobile */}
        <div className="navbar-toggle">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
