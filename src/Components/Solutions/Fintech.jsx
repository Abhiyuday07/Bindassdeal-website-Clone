import React from 'react';
import './Fintech.css';
import Fintechone from './Fintechone.jsx';
// import Fintechtwo from './Fintechtwo.jsx';

const Fintech = () => {
    return (
      <>
      <div className="fintech-container">
            <div className="fintech-content">
                <h1>FINTECH SOLUTIONS</h1>
                <p>
                    We specialize in providing cutting-edge fintech solutions
                    that drive innovation and efficiency in the financial sector.
                </p>
            </div>
        </div>
        <Fintechone/>
        {/* <Fintechtwo/> */}
        </>
    );
};

export default Fintech;
