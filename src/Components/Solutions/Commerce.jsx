import React from 'react';
import './Commerce.css';
import Commerceone from './Commerceone';
import Commercetwo from './Commercetwo';
const Commerce = () => {
    return (
      <>
      <div className="commerce-container">
            <div className="commerce-content">
                <h1>Ecommerce</h1>
                <p>We provide comprehensive ecommerce solutions that help businesses of all sizes sell products and services online.</p>
            </div>
        </div>
        <Commerceone/>
        <Commercetwo/>
      </>
        
    );
};

export default Commerce;
