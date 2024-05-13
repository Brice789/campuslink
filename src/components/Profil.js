import React from 'react';
import './Profil.css'; // Assure-toi que ce fichier est correctement lié

function ProfilePage() {
  return (
    <div className="profile-container">
      <div className="header">
        <img src="/path/to/profile-pic.jpg" alt="Profil" className="profile-pic" />
        <h1>Cléa Dumont</h1>
        <p>Professeur principal - Collège Jules Verne</p>
      </div>
      <div className="contacts">
        <h2>Contacts Légaux</h2>
        <p>Mme Michèle Dumas - Tel: 0123456789</p>
        <p>M. Julien Duchamp - Tel: 9876543210</p>
      </div>
      <div className="events">
        <h2>Événements</h2>
        <ul>
          <li>Absences à justifier: 2</li>
          <li>Retards</li>
          <li>Sanctions et détails</li>
        </ul>
      </div>
      <div className="schedule">
        <h2>Emploi du temps</h2>
        <p>Lundi: Mathématiques, Histoire</p>
        <p>Mardi: Sciences, Langues</p>
      </div>
    </div>
  );
}

export default ProfilePage;
