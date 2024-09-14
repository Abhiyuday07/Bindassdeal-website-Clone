import React from 'react';
import './Intelligence.css';
import plus from '../assets/plus.png';

const Intelligence = () => {
    return (
        <div className="intelligence-container">
            <div className="intelligence-content">
                <div className="intelligence-image-container">
                    <img className="intelligence-image" src="https://bindassdeal.com/static/media/brain-img.aa9ab6314820aeff1abf.png" alt="AI Image" />
                    <img className="plus-signs" src={plus} alt="Plus Signs" />
                </div>
                <div className="intelligence-text">
                    <h1>BindassDeal Intelligence</h1>
                    <p>
                        You're off to a winning start with Clutch. We’re rated as the best fit partner on their global ‘AI Leaders Matrix’.
                        With deep domain expertise in machine learning, neural networks, deep learning, NLP, and computer vision, we build AI-powered products tailored to fulfill your business vision. From concept to delivery.
                        Find out why every CXO we work with calls us "communicative, process-driven, and reliable".
                    </p>
                    <button className="get-started-button">Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Intelligence;
