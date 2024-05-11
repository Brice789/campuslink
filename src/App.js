import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ecole from './components/Ecole';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'; 
import NotesPage from './components/NotesPage';
import Bar from './components/Bar';
import Actualites from './components/Actualites';

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:1337/api/news2/')  // Make sure this URL matches your Strapi API endpoint
      .then(response => {
        if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); }
        return response.json();
      })
      .then(data => {
        console.log(data);  // Console log to check the structure of your received data
        // Adjust this according to your API response structure
        setNews(data.data || []);  // Make sure you're setting the correct part of the response
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching news', error);
        setError(error.toString());
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Router>
      <div>
        <Bar />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ecole" element={<Ecole />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/actualites" element={<Actualites news={news} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
