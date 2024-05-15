import React from 'react';
import './Actualites.css'; // Adjust your CSS path if necessary

const Actualites = ({ news }) => {
  return (
    <div className="news-container">
      <h1>Actualités Récentes</h1>
      <div className="news-items">
        {news.map((item, index) => (
          <div key={index} className="news-card">
            <div className="card-media-container">
              <img src={item.imageUrl} alt={`Actualité ${index + 1}`} className="news-image" />
            </div>
            <div className="news-content">
              <p className="news-date">{new Date(item.date).toLocaleDateString()}</p>
              <h2 className="news-title">{item.title}</h2>
              <button className="news-button" onClick={() => window.location.href = '#'}>En savoir plus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actualites;

