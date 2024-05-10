import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ecole from './components/Ecole';
import Navbar from './components/Navbar';
import Calendar from './components/Calendar';

import NotesPage from './components/NotesPage'; // Assurez-vous que le chemin d'importation est correct

import Bar from './components/Bar'; // Assurez-vous que le chemin d'importation est correct





function App() {
  const events = [
    {
      title: 'Meeting',
      start: new Date(2024, 4, 9, 10, 0), // Note: Months are 0-based in JavaScript Dates
      end: new Date(2024, 4, 9, 14, 30),
      allDay: false
    }
  ];

  return (
    <Router>
      <div>
       <Bar />   
        <Navbar />
        <Routes>
          <Route path="/ecole" element={<Ecole />} />
          
          <Route path="/notes" element={<NotesPage />} /> // Notez le changement de chemin pour correspondre à la navigation
          <Route path="/calendar" element={<Calendar events={events} />} />
          // Assurez-vous de ne pas avoir de routes dupliquées ou incorrectes
        </Routes>
      </div>
    </Router>
  );
}

export default App;
