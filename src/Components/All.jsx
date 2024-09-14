import React from 'react';
import './All.css';

const All = () => {
  const images = [
    'https://bindassdeal.com/static/media/port-foundation-mixer.e18cc7a044e035ce4470.jpg',
    'https://bindassdeal.com/static/media/port-mobile-app-8.491c6ee8211d8c8a9ec9.webp',
    'https://bindassdeal.com/static/media/port-foundation-nft.48b24d0ca3ddd4902659.jpg',
    'https://bindassdeal.com/static/media/port-data-analytics.e2e3acd0b1fa72b157c7.webp',
    'https://bindassdeal.com/static/media/port-half-leash.7f3e0b4e340149c0ef82.jpg',
    'https://bindassdeal.com/static/media/port-data-analytics-3.d505e39a5747ab8c9940.jpg',
    'https://bindassdeal.com/static/media/port-happy-bear.d2f404c174a3eec04545.jpg',
    'https://bindassdeal.com/static/media/port-gas-guzzlrs.c290bff1843a80abf847.jpg',
    'https://bindassdeal.com/static/media/port-data-analytics-2.f79c546a4ab6ecb75005.webp',
    'https://bindassdeal.com/static/media/port-blockchain.f0e082f6dda11d4fd6ca.webp',
    'https://bindassdeal.com/static/media/port-data-analytics-5.01d6512b6d435866a29d.jpg',
    'https://bindassdeal.com/static/media/port-mobile-app-3.fb31e5e71e41672e7d06.webp',
    'https://bindassdeal.com/static/media/port-blockchain.f0e082f6dda11d4fd6ca.webp',
    'https://bindassdeal.com/static/media/port-mobile-app-7.64e7223902fa8d673c80.webp',
    'https://bindassdeal.com/static/media/port-websites-6.ac0c1c369c75c8c67417.webp',
    'https://bindassdeal.com/static/media/port-websites-5.a0cd73450237ac56793d.png',
    'https://bindassdeal.com/static/media/port-mobile-app-6.bba3214fb1c499066893.webp',
    'https://bindassdeal.com/static/media/port-mobile-app-5.0e3265e579062022d5ad.webp',
    'https://bindassdeal.com/static/media/port-websites-2.deeed775f084f4658b57.jpg',
    'https://bindassdeal.com/static/media/port-websites-4.64615ce23385a42c4be3.png',
    'https://bindassdeal.com/static/media/port-mobile-app-8.491c6ee8211d8c8a9ec9.webp'
  ];

  return (
    <div>
      {/* <div className="header">
        <h1>Responsive Image Gallery</h1>
        <p>Resize the browser window to see the responsive effect.</p>
      </div> */}

      <div className="row">
        {images.map((url, index) => (
          <div className="column" key={index}>
            <img src={url} alt={`Gallery Image ${index + 1}`} style={{ width: '100%' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default All;
