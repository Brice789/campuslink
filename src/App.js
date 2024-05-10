import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ecole from './components/Ecole';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'; 
import NotesPage from './components/NotesPage';
import Bar from './components/Bar';

function App() {
  const events = [
    {
      title: 'Meeting',
      start: new Date(2024, 4, 9, 10, 0),
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
          <Route path="/" element={<HomePage events={events} />} />
          <Route path="/ecole" element={<Ecole />} />
          <Route path="/notes" element={<NotesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
