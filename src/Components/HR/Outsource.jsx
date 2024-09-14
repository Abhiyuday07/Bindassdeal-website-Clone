import React from 'react';
import './Outsource.css';
// import Outsourceone from './Outsourceone';
import Outsourcetwo from './Outsourcetwo'; 


const Outsource = () => {
    return (
        <div className="outsource-container">
            <div className="content">
                <h1>OUTSOURCING</h1>
                <p>
                    We understand that managing your own IT projects and resources can be complex, 
                    time-consuming, and costly.
                </p>
            </div>
            {/* <Outsourceone/> */}
            <Outsourcetwo /> 
        </div>
    );
};

export default Outsource;
