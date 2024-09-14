import React from 'react';
import './permanent.css';
import PermanentOne from './Permanentone';
// import PermanentTwo from './PermanentTwo';

const Permanent = () => {
    return (
        <>
            <div className="permanent-container">
                <div className="overlay"></div>
                <div className="permanent-content">
                    <h1>PERMANENT PLACEMENTS</h1>
                    <p>We understand that permanent placements can be a critical component of any organization's growth strategy.</p>
                </div>
            </div>
            <PermanentOne/>
            
        </>
    );
};

export default Permanent;
