import React, { useState } from 'react';
import './Portfolio.css';
import Mobileapp from './Mobileapp';
import DataAnalytics from './Analyst';
import Blockchain from './Blockchain';
import Websites from './Websites';
import All from './All';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('All');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className="portfolio-container">
        <h1 className="portfolio-title">PORTFOLIO</h1>
        <div className="portfolio-underline"></div>
        <div className="portfolio-buttons">
          <button 
            className={`filter-btn ${activeSection === 'All' ? 'active' : ''}`} 
            onClick={() => handleSectionChange('All')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeSection === 'Blockchain' ? 'active' : ''}`} 
            onClick={() => handleSectionChange('Blockchain')}
          >
            Blockchain
          </button>
          <button 
            className={`filter-btn ${activeSection === 'Data Analytics' ? 'active' : ''}`} 
            onClick={() => handleSectionChange('Data Analytics')}
          >
            Data Analytics
          </button>
          <button 
            className={`filter-btn ${activeSection === 'Websites' ? 'active' : ''}`} 
            onClick={() => handleSectionChange('Websites')}
          >
            Websites
          </button>
          <button 
            className={`filter-btn ${activeSection === 'Mobile Apps' ? 'active' : ''}`} 
            onClick={() => handleSectionChange('Mobile Apps')}
          >
            Mobile Apps
          </button>
        </div>

        
        {activeSection === 'Mobile Apps' && <Mobileapp />}
        {activeSection === 'Data Analytics' && <DataAnalytics />}
        {activeSection === 'Blockchain' && <Blockchain />}
        {activeSection === 'Websites' && <Websites/>}
        {activeSection === 'All' && <All/>}
     
      </div>
    </>
  );
};

export default Portfolio;
