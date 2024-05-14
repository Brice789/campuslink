import React, { useState } from 'react';
import './Profil.css'; // Assure-toi que ce fichier est correctement lié

function ProfilePage() {
  const [profilePic, setProfilePic] = useState('/path/to/default-profile-pic.jpg'); // Chemin par défaut de l'image de profil

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePic(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-info">
          <h1>Sam Altmann</h1>
          <p>Classe: M1 Groupe 2  - Alternance: oui</p>
          <p>Participation: Association des Alumni</p>
        </div>
        <div className="profile-photo">
          <div className="photo-container" onClick={() => document.getElementById('file-input').click()}>
            <img src={profilePic} alt="Profil" />
            <input id="file-input" type="file" onChange={handleProfilePicChange} accept="image/*" hidden />
          </div>
        </div>
      </div>
      <div className="contacts-legal">
        <h2>Contacts Légaux</h2>
        <div className="contact">
          <p>Mme Michèle Dumas - Tel: 0123456789</p>
          <button className="sms-button">Envoyer SMS</button>
        </div>
        <div className="contact">
          <p>M. Julien Duchamp - Tel: 9876543210</p>
          <button className="sms-button">Envoyer SMS</button>
        </div>
      </div>
      <div className="academic-details">
        <h2>Détails Académiques</h2>
        <div className="semester">
          <h3>1er Semestre</h3>
          <p>Absences: 4 - Justifiées: 2</p>
          <p>Retards: 3</p>
        </div>
        <div className="semester">
          <h3>2ème Semestre</h3>
          <p>Absences: 2 - Justifiées: 1</p>
          <p>Retards: 1</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
