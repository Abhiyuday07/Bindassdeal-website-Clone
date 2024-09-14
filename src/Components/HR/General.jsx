import React from 'react';
import './General.css';
// import './Generaltwo.jsx';
// import './Generalone.jsx'
import Generaltwo from './Generaltwo.jsx';
import Generalone from './Generalone.jsx';

const General = () => {
    return (
      <>
      <div className="general-container">
            <div className="general-content">
                <h1>GENERAL STAFFING</h1>
                <p>
                    We understand that finding the right talent is
                    critical to the success of any organization.
                </p>
            </div>
            
        </div>
        <Generalone/>
        <Generaltwo/>
        </>
        
        
    );
};

export default General;
