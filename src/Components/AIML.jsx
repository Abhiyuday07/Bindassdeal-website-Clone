import React from 'react';
import './AIML.css'; 
import topRightImage from '../assets/bubble.png'; 
import bottomImage from '../assets/ai&se.png'; // Ensure correct path and extension

const AIML = () => {
  return (
    <div className="aiml-container">
      <div className="top-right-image">
        <img 
          src={topRightImage} 
          alt="Top Right Decorative"
          className="top-right-image-img"
        />
      </div>
      <div className="aiml-content">
        <div className="aiml-box aiml-box-left">
          <h1>Combining AI with ML and Blockchain</h1>
          <p>
            You're off to a winning start with Clutch. We’re rated as the best fit partner 
            on their global ‘AI Leaders Matrix’. With deep domain expertise in machine learning, 
            neural networks, deep learning, NLP, and computer vision, we build AI-powered products 
            tailored to fulfill your business vision. From concept to delivery. Find out why every CXO 
            we work with calls us "communicative, process-driven, and reliable".
          </p>
        </div>
        <div className="aiml-box aiml-box-right">
          <img 
            src="https://bindassdeal.com/static/media/blockchain-img.863003bad83fdc6090b9.png" 
            alt="AIML Services"
            className="aiml-image"
          />
        </div>
      </div>
      <div className="bottom-image">
        <img 
          src={bottomImage} 
          alt="Bottom Decorative"
          className="bottom-image-img"
        />
      </div>
    </div>
  );
};

export default AIML;
