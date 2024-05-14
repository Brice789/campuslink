import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ events }) => {
  // Fonction pour gérer les clics sur les événements
  const handleEventClick = (event) => {
    alert(`Cliquez pour rejoindre la réunion avec ${event.professor} dans la salle ${event.room}`);
  };

  return (
    <div style={{ height: 700 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"  // Configure la vue par défaut sur la semaine
        min={new Date(2024, 0, 1, 8, 0)}  // Commence la journée à 8h
        max={new Date(2024, 0, 1, 21, 0)}  // Termine la journée à 21h
        style={{ height: 500 }}
        onSelectEvent={handleEventClick}
        components={{
          event: ({ event }) => (
            <span>
              <strong>{event.title}</strong>
              <div>Salle : {event.room}</div>
              <div>Prof : {event.professor}</div>
            </span>
          )
        }}
      />
    </div>
  );
};

export default MyCalendar;
