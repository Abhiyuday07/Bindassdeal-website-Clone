import React from 'react';
import './Retail.css';
import Retailone from './Retailone';
import Retailtwo from './Retailtwo';

const Retail = () => {
  return (
    <>
    <div className="retail-container">
      <div className="retail-background"></div>
      <div className="retail-content">
        <h2>RETAIL</h2>
        <p>
          We provide comprehensive retail solutions that help businesses of all sizes streamline their operations, enhance customer experience, and increase revenue.
        </p>
      </div>
    </div>
    <Retailone/>
    <Retailtwo/>
    </>
    
  );
};

export default Retail;
