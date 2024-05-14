import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Planning = () => {
  return (
    <div>
      <h1>Planning</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={[
          { title: 'Pentest automatisé en Python', date: '2024-05-13', description: 'Réalisation d\'un projet de Pentest automatisé en Python sur un Raspberry Pi' },
          { title: 'Masterclass', date: '2024-05-14', description: 'Démo d\'attaques, RETEX mission, description d\'une technique spécifique' },
          { title: 'Cyber Threat Intelligence', date: '2024-05-14', description: 'Matrice MITRE ATT&CK, Cyber kill Chain, Modèle en Diamant' },
          { title: 'Entrainement CTF d\'OteriHack avec Podalirius', date: '2024-05-13' },
          { title: 'Mission Oteria', date: '2024-05-15', description: 'Une opportunité unique pour entreprendre en équipe un véritable projet cyber à impact' },
          { title: 'English', date: '2024-05-15', description: 'Speak English as much as you can thanks to different role-playing game' },
          { title: 'Architecture & Sécurité', date: '2024-05-16', description: 'Découvrir les composants importants de la sécurité en entreprise (Proxy, reverse proxy, pare-feu, DMZ)' },
          { title: 'Modules optionnels', date: '2024-05-16', description: 'Entrepreneuriat, Leadership, M&A et cyber' },
          { title: 'Lab IT', date: '2024-05-17', description: 'Créer un SI en partant de zéro pour consolider ses bases en système et réseau' },
          { title: 'Vendredi Oteria', date: '2024-05-17', description: 'Cours de soutien, temps pour les associations, CTFs, session de sport' }
        ]}
      />
    </div>
  );
}

export default Planning;

