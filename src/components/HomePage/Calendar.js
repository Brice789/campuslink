import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';  // Assurez-vous d'importer le fichier CSS pour les styles

const localizer = momentLocalizer(moment);

const MyCalendar = ({ events }) => {
  const handleEventClick = (event) => {
    alert(`Cliquez pour rejoindre la réunion avec ${event.professor} dans la salle ${event.room}`);
  };

  return (
    <div>
      <div style={{ height: 700 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultView="week"
          min={new Date(2024, 0, 1, 8, 0)}
          max={new Date(2024, 0, 1, 21, 0)}
          style={{ height: 700 }}
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
      <div className="legend">
        <div className="legend-item">
          <div className="legend-color presentiel"></div>
          <span>Cours présentiel</span>
        </div>
        <div className="legend-item">
          <div className="legend-color distanciel"></div>
          <span>Cours distanciel</span>
        </div>
        <div className="legend-item">
          <div className="legend-color exam"></div>
          <span>Examen</span>
        </div>
        <div className="legend-item">
          <div className="legend-color obligatoire"></div>
          <span>Événement obligatoire</span>
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
