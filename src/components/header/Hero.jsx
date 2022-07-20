import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
        <div className="hero-head">
          {/* <h1 className="Ultrabold hello">Design the Future</h1> */}
          <h1 className="Ultrabold hello">Cooking <br/>up your <br/>career</h1>
        </div>
        <div className="Regular container hero-content">
          <p className="hero-content-text">Connecting our present students with their alumni to get the guidance about the career.</p>
          <a href="/">
            <a href="/"className="btn">Apply Now!</a>
          </a>
        </div>
    </div>
  )
}

export default Hero