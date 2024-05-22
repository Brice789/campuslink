import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ecole from './components/Ecole';
import Navbar from './components/HomePage/Navbar';
import HomePage from './components/HomePage/HomePage';
import NotesPage from './components/Scolarite/NotesPage';
import Bar from './components/HomePage/Bar';
import Actualites from './components/Ecole/Actualites';
// import Footer from './components/HomePage/Footer';
import Absences from './components/Scolarite/Absences';
import ProfilePage from './components/Profil';
import Stage from './components/Alternance/Stage';
import ActivitiesPage from './components/Association/ActivitiesPage';
import Evaluation from './components/Scolarite/Evaluation';
import './App.css';

function App() {
  const events = [
    { title: 'Pentest automatisé en Python', start: new Date(2024, 4, 13, 9, 0), end: new Date(2024, 4, 13, 12, 0), room: 'Salle 101', professor: 'Arnaud Lambert' },
    { title: 'Masterclass', start: new Date(2024, 4, 14, 9, 0), end: new Date(2024, 4, 14, 12, 0), room: 'Salle 102', professor: 'Wiam Mica' },
    { title: 'Cyber Threat Intelligence', start: new Date(2024, 4, 14, 14, 0), end: new Date(2024, 4, 14, 17, 0), room: 'Salle 103', professor: 'William Marin' },
    { title: 'Entrainement CTF d\'OteriHack avec Podalirius', start: new Date(2024, 4, 13, 18, 0), end: new Date(2024, 4, 13, 21, 0), room: 'Salle 104', professor: 'Prof de Hack' },
    { title: 'Mission Oteria', start: new Date(2024, 4, 15, 9, 0), end: new Date(2024, 4, 15, 12, 0), room: 'Salle 105', professor: 'Wiam Mica' },
    { title: 'English', start: new Date(2024, 4, 15, 14, 0), end: new Date(2024, 4, 15, 17, 0), room: 'Salle 106', professor: 'Miss Meyer' },
    { title: 'Architecture & Sécurité', start: new Date(2024, 4, 16, 9, 0), end: new Date(2024, 4, 16, 12, 0), room: 'Salle 107', professor: 'Alpaga Christiano' },
    { title: 'Modules optionnels', start: new Date(2024, 4, 16, 14, 0), end: new Date(2024, 4, 16, 17, 0), room: 'Salle 108', professor: 'William Marin' },
    { title: 'Lab IT', start: new Date(2024, 4, 17, 9, 0), end: new Date(2024, 4, 17, 12, 0), room: 'Salle 109', professor: 'Sebastien Meilon' },
    { title: 'Vendredi Oteria', start: new Date(2024, 4, 17, 14, 0), end: new Date(2024, 4, 17, 17, 0), room: 'Salle 110', professor: 'Arnaud Lambert' }
  ];

  const news = [
    { id: 1, title: "Rendez-vous avec le CISO de Amazon", date: "2023-05-01", imageUrl: "/assets/Actu/man.jpg" },
    { id: 2, title: "Les entreprises partenaires", date: "2023-05-02", imageUrl: "/assets/Actu/events.jpeg" },
    { id: 3, title: "Visite de l'entreprise Gensler", date: "2023-05-02", imageUrl: "/assets/Actu/gens.jpeg" },
    { id: 4, title: "Les mystères de la cryptologie", date: "2023-05-02", imageUrl: "/assets/Actu/computer-security-lock-and-payment.jpg" },
    { id: 6, title: "E-Commerces et Cybersécurité", date: "2023-05-02", imageUrl: "/assets/Actu/gold-cyber-monday.jpg" },
    { id: 5, title: "Avoir des projets écologiques", date: "2023-08-02", imageUrl: "/assets/Actu/eco.jpeg" },
  ];

  return (
    <Router>
      <div id="root">
        <Bar />
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage events={events} news={news} />} />
            <Route path="/ecole" element={<Ecole />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/absences" element={<Absences />} />
            <Route path="/actualites" element={<Actualites news={news} />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/stages" element={<Stage />} />
            <Route path="/jpo" element={<ActivitiesPage />} />
            <Route path="/evaluation" element={<Evaluation />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
