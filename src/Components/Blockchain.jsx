import React from 'react';
import './Blockchain.css';

const Blockchain = () => {
  const images = [
    'https://bindassdeal.com/static/media/port-foundation-mixer.e18cc7a044e035ce4470.jpg',
    'https://bindassdeal.com/static/media/port-half-leash.7f3e0b4e340149c0ef82.jpg',
    'https://bindassdeal.com/static/media/port-blockchain.f0e082f6dda11d4fd6ca.webp',
    'https://bindassdeal.com/static/media/port-foundation-nft.48b24d0ca3ddd4902659.jpg',
    'https://bindassdeal.com/static/media/port-happy-bear.d2f404c174a3eec04545.jpg',
    'https://bindassdeal.com/static/media/port-blockchain-2.093146afe2a38aab974f.webp',
  ];

  return (
    <div className="blockchain-container">
      {images.map((image, index) => (
        <div key={index} className="image-card">
          <img src={image} alt={`blockchain-img-${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Blockchain;
