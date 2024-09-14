import React from 'react';
import './Hire.css';
import Hireone from './HIreone';
import Hiretwo from './HIretwo';

const Hire = () => {
    return (
      <>
      <div className="hire-container">
            <div className="overlay"></div>
            <div className="hire-content">
                <h1>HIRE, TRAIN & DEPLOY</h1>
                <p>We understand that finding and retaining skilled IT professionals can be a challenge for many organizations.</p>
            </div>
        </div>
        <Hireone/>
        <Hiretwo/>
        </>
        
    );
};

export default Hire;
