import React from 'react';
import MyCalendar from './Calendar'; // Vérifiez le chemin
import Actualites from '../Ecole/Actualites';
import './HomePage.css'; // Assurez-vous que le chemin vers le fichier CSS est correct

const HomePage = ({ events, news }) => {
  return (
    <div className="page-container">
      <div className="welcome-message">
        Bienvenue Sam sur CampusLink
      </div>
      <div className="calendar-container">
        <MyCalendar events={events} />
      </div>
      <div className="news-container">
        <Actualites news={news.slice(0, 6)} />  
      </div>
    </div>
  );
};

export default HomePage;
