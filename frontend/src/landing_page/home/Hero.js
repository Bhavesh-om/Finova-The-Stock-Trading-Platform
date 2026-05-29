import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Hero.css';

function Hero() {
  return (
    <section className="hero py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side: logo + text */}
          <div className="col-md-6 text-center text-md-start">
            <img 
              src="/media/Finova_icon.png" 
              alt="Finova Logo" 
              className="hero-logo"
            />
            <h1 className="display-4 fw-bold mt-2 mb-2">Invest made simple</h1>
            <p className="lead text-muted mb-3">
              A seamless platform to access stocks, ETFs, mutual funds, and more — all in one place.
            </p>
            <button className="btn btn-primary btn-lg">
              <i className="fas fa-user-plus me-2"></i> Sign up for free
            </button>
          </div>

          {/* Right side: dashboard preview */}
          <div className="col-md-6 text-center">
            <img 
              src="/media/Hero_dashboard.jpg" 
              alt="Dashboard Preview" 
              className="img-fluid hero-dashboard"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

