import React from 'react';
import './Advertising.css';
import Advertisingone from './Advertisingone';
// import Advertisingtwo from './Advertisingtwo';
const Advertising = () => {
    return (
        <>
        <div className="advertising-container">
            <div className="advertising-content">
                <h1>ADVERTISING SOLUTIONS</h1>
                <p>
                    We offer comprehensive advertising solutions that help businesses 
                    reach their target audience effectively and maximize their brand presence.
                </p>
            </div>
        </div>
        <Advertisingone/>
        {/* <Advertisingtwo/> */}
        </>
    );
};

export default Advertising;
