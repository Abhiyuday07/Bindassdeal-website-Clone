import React from 'react';
import './Gaming.css';
import Gamingone from './Gamingone';
import Gamingtwo from './Gamingtwo';

function Gaming() {
  return (
    <>
      <div className="gaming-container">
        <div className="overlay"></div> {/* Added overlay */}
        <div className="gaming-content">
          <h1>GAMING</h1>
          <p>
            We offer gaming solutions that help game developers and publishers create engaging and immersive gaming experiences 
            that captivate players and drive growth.
          </p>
        </div>
      </div>
      <Gamingone />
      <Gamingtwo />
    </>
  );
}

export default Gaming;
