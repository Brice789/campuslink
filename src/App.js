import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ecole from './components/Ecole';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'; 
import NotesPage from './components/NotesPage';
import Bar from './components/Bar';
import Actualites from './components/Actualites';

function App() {

  // const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]); // Ajoutez une gestion d'état pour les événements
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // // Supposons que vous avez une fonction pour charger les événements similairement aux actualités
  // useEffect(() => {
  //   fetch('http://localhost:1337/api/news2/')  // Assurez-vous que l'URL correspond à votre point d'accès API
  //     .then(response => {
  //       if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); }
  //       return response.json();
  //     })
  //     .then(data => {
  //       setNews(data.data || []);
  //       // Supposons que vous chargiez les événements ici aussi
  //       setEvents(data.events || []);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data', error);
  //       setError(error.toString());
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  const news = [
    {
      id: 1,
      title: "Titre de l'actualité 1",
      date: "2023-05-01",
      imageUrl: "/path/to/image1.jpg"
    },
    {
      id: 2,
      title: "Titre de l'actualité 2",
      date: "2023-05-02",
      imageUrl: "/assets/Actu/events.jpeg"
    },
    {
      id: 3,
      title: "Titre de l'actualité 2",
      date: "2023-05-02",
      imageUrl: "/assets/Actu/events.jpeg"
    },
    {
      id: 4,
      title: "Titre de l'actualité 2",
      date: "2023-05-02",
      imageUrl: "/assets/Actu/events.jpeg"
    }
  ];

  return (
    <Router>
      <div>
        <Bar />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage events={events} news={news} />} />
          <Route path="/ecole" element={<Ecole />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/actualites" element={<Actualites news={news} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
