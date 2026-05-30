import React from 'react';
import './Stats.css';

function Stats() {
  return (
    <>
      {/* Full Width Video Strip */}
      <div className="video-strip">
        {[...Array(10)].map((_, index) => (
          <video
            key={index}
            autoPlay
            muted
            loop
            playsInline
            className="strip-video"
          >
            <source src="/media/dancing_bar.mp4" type="video/mp4" />
          </video>
        ))}
      </div>

      <section className="stats">
        <div className="stats-container">

          {/* Left Side Text */}
          <div className="stats-text">
            <h2>Trust with Finova</h2>

            <h3>Customer-first always</h3>
            <p>
              Finova is built to simplify investing for everyone —
              from beginners to pros. Our mission is to make trading
              transparent, fast, and accessible.
            </p>

            <h3>No spam or gimmicks</h3>
            <p>
              No distractions, no hidden fees. Just clean tools
              that let you focus on your investments.
            </p>

            <h3>The Finova universe</h3>
            <p>
              Not just a platform, but an ecosystem. Finova integrates
              stocks, ETFs, mutual funds, and analytics — all in one place.
            </p>

            <h3>Do better with money</h3>
            <p>
              With smart alerts, portfolio insights, and risk controls,
              Finova helps you trade smarter, not harder.
            </p>
          </div>

          {/* Right Side Graphic */}
          <div className="stats-graphic">
            <img
              src="/media/Finova_ecosystem.png"
              alt="Finova Ecosystem"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Stats;