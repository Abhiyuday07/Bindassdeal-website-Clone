import React from 'react';
import './Mobileapp.css';

const MobileApp = () => {
  const images = [
    'https://bindassdeal.com/static/media/port-mobile-app-3.fb31e5e71e41672e7d06.webp', 
    'https://bindassdeal.com/static/media/port-mobile-app-5.0e3265e579062022d5ad.webp',
    'https://bindassdeal.com/static/media/port-mobile-app-7.64e7223902fa8d673c80.webp',
    'https://bindassdeal.com/static/media/port-mobile-app-4.9ba8853d0225a16c5321.webp',
    'https://bindassdeal.com/static/media/port-mobile-app-6.bba3214fb1c499066893.webp',
    'https://bindassdeal.com/static/media/port-mobile-app-8.491c6ee8211d8c8a9ec9.webp'
  ];

  return (
    <div className="mobile-app-portfolio">
      {images.map((image, index) => (
        <div key={index} className="card-box">
          <img src={image} alt={`Portfolio item ${index + 1}`} className="portfolio-image" />
        </div>
      ))}
    </div>
  );
};

export default MobileApp;
