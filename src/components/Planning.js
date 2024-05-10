// src/components/Planning.js
import React from 'react';
import FullCalendar from '@fullcalendar/react'; // npm install @fullcalendar/react @fullcalendar/daygrid
import dayGridPlugin from '@fullcalendar/daygrid'; // pour l'affichage du calendrier par mois

const Planning = () => {
  return (
    <div>
      <h1>Planning</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={[
          { title: 'Cours de mathématiques', date: '2024-05-09' },
          { title: 'Examen de chimie', date: '2024-05-16' }
        ]}
      />
    </div>
  );
}

export default Planning;
