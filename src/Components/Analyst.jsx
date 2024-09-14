import React from 'react';
import './Analyst.css';

const Analyst = () => {
  const images = [
    'https://bindassdeal.com/static/media/port-data-analytics.e2e3acd0b1fa72b157c7.webp', 
    'https://bindassdeal.com/static/media/port-data-analytics-2.f79c546a4ab6ecb75005.webp',
    'https://bindassdeal.com/static/media/port-data-analytics-2.f79c546a4ab6ecb75005.webp',
    'https://bindassdeal.com/static/media/port-data-analytics-4.f5ed043363e1e413a02b.webp',
    'https://bindassdeal.com/static/media/port-data-analytics-5.01d6512b6d435866a29d.jpg',
  ];

  return (
    <div className="analyst-container">
      <div className="contentList">
        {images.map((image, index) => (
          <div className="card" key={index}>
            <img src={image} alt={`Analyst ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analyst;
