import React from 'react';
import './LatestNews.css'; 
// import topRightImage from '../assets/se&lt.png';

const LatestNews = () => {
  const newsItems = [
    {
      id: 1,
      category: 'Robotics & AI',
      title: 'OpenAI debuts Whisper API for speech-to-text transcription and translation',
      description: 'To coincide with the rollout of the ChatGPT API, OpenAI today launched the Whisper API...',
      imageUrl: 'https://bindassdeal.com/static/media/news-img-1.7f57ef8025f9f4e062ec.png'
    },
    {
      id: 2,
      category: 'Crypto',
      title: 'Chainlink’s new platform lets web3 projects connect to Web 2.0 systems like AWS and Meta',
      description: 'Chainlink, a web3 services platform, is launching a self-service, serverless platform...',
      imageUrl: 'https://bindassdeal.com/static/media/news-img-2.6b61aef5ad90961cc5ba.png'
    },
    {
      id: 3,
      category: 'Blockchain',
      title: 'Coinbase launches blockchain Base to help developers build dApps on-chain',
      description: 'Coinbase, the second largest crypto exchange by trading volume, has launched Base...',
      imageUrl: 'https://bindassdeal.com/static/media/news-img-3.de1170851019971b5f5f.png'
    },
  ];

  return (
    <section className="latest-news">
      {/* <img src={topRightImage} alt="Top Right Corner" className="top-right-image" /> */}
      <h2 className="latest-news-title">Latest News</h2>
      <div className="news-cards">
        {newsItems.map((item) => (
          <div key={item.id} className="news-card">
            <img src={item.imageUrl} alt={item.title} className="news-image" />
            <div className="news-content">
              <span className="news-category">- {item.category}</span>
              <h3 className="news-title">{item.title}</h3>
              <p className="news-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
