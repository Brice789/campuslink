import React from 'react';
import './Actualites.css'; // Ensure the CSS path is correct

const Actualites = ({ news }) => {
  return (
    <div className="news-container">
      {news.map((item, index) => (
        <div key={index} className="news-card">
          {/* Assuming item.image is the direct URL to the image. Adjust if it's nested within attributes or another object */}
          <img src={item.image} alt={item.title} className="news-image" />
          <div className="news-content">
            <h3 className="news-title">{item.title}</h3>
            <p>{item.summary}</p>
            {/* Format date if necessary or directly display if already formatted */}
            <span className="news-date">{new Date(item.date).toLocaleDateString()}</span>
            <button className="news-button">Lire plus</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Actualites;
