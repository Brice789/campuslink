import React from 'react';
import MyCalendar from './Calendar'; // Vérifiez le chemin
import Actualites from './Actualites';
import './HomePage.css'; // Assurez-vous que le chemin vers le fichier CSS est correct

const HomePage = ({ events, news }) => {
  return (
    <div className="page-container">
      <div className="welcome-message">
        Bienvenue sur notre calendrier
      </div>
      <div className="calendar-container">
        <MyCalendar events={events} />
      </div>
      <div className="news-container">
        {/* <h2>Actualités Récentes</h2> */}
        <Actualites news={news.slice(0, 4)} />  
 
        {news.slice(0, 4).map((item, index) => (
          <div key={index} className="news-item">
            <h3>{item.title}</h3> {/* Assurez-vous que la structure de l'objet correspond à votre API */}
            <p>{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
