import React from 'react';
import './Services.css';
import ser from '../assets/service.png';
import topRightImage from '../assets/se&lt.png';

const Services = () => {
  return (
    <section className="services-section">
      <h2>Services We Offer</h2>
      <p>With data on over 8 million apps and thousands of websites, get the complete picture of the mobile landscape you need to acquire.</p>
      <div className="services-container">
        <div className="service-card">
          <img src={ser} alt="Data Services" />
          <h3>Data services</h3>
          <p>Augment AI with business intelligence (BI) and analytics tools that help you make well-rounded and accurate decisions.</p>
        </div>
        <div className="service-card">
          <img src={ser} alt="Crypto & Blockchain Services" />
          <h3>Crypto & blockchain services</h3>
          <p>Augment AI with business intelligence (BI) and analytics tools that help you make well-rounded and accurate decisions.</p>
        </div>
        <div className="service-card">
          <img src={ser} alt="Software Development" />
          <h3>Software development</h3>
          <p>Augment AI with business intelligence (BI) and analytics tools that help you make well-rounded and accurate decisions.</p>
        </div>
        <div className="service-card">
          <img src={ser} alt="Mobile Application" />
          <h3>Mobile application</h3>
          <p>Augment AI with business intelligence (BI) and analytics tools that help you make well-rounded and accurate decisions.</p>
        </div>
        <div className="service-card">
          <img src={ser} alt="Website Development" />
          <h3>Website development</h3>
          <p>Augment AI with business intelligence (BI) and analytics tools that help you make well-rounded and accurate decisions.</p>
        </div>
        <div className="service-card">
          <img src={ser} alt="Social Media Marketing" />
          <h3>Social media marketing</h3>
          <p>Augment AI with business intelligence (BI) and analytics tools that help you make well-rounded and accurate decisions.</p>
        </div>
      </div>
       <img src={topRightImage} alt="Top Right Decoration" className="bottom-right-image" />
    </section>
  );
};

export default Services;
