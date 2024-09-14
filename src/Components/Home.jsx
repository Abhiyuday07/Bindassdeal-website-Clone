import React from 'react';
import './Home.css';
import Services from './Services';
import LatestNews from './LatestNews';
import AIML from './AIML';
import Intelligence from './Intelligence';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner">
        <img
          src="https://bindassdeal.com/static/media/hero-bg-img.545a33a3b2a30c11d1af.jpg"
          alt="BindassDeal Logo"
          className="fixed-background"
        />
        
        <div className="overlay"></div>
        
        <div className="banner-text">
          <h1>
            Future AI <br />
            & Blockchain <br />
            Development Services
          </h1>
          <p>
            With data on over 8 million and thousands of websites, get the complete
            picture of the mobile landscape you need to acquire.
          </p>
          <button className="get-started-button">Get Started</button>
        </div>
      </div>
      <Intelligence />
      <AIML />
      <Services />
      <LatestNews />
    </div>
  );
};

export default Home;
