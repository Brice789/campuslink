import React, { useState } from 'react';
import './ActivitiesPage.css';

const activitiesData = [
  {
    id: 1,
    title: 'JPO Vendredi',
    date: 'Vendredi 17 mai 2024',
    time: '14:00 - 18:00',
    description: 'Journée Portes Ouvertes pour présenter l\'école aux nouveaux étudiants.',
    participantsRequired: 5,
    deadline: 'Vendredi 16 mai 2024',
    bonusPoints: 5,
    participants: [],
  },
  {
    id: 2,
    title: 'JPO Samedi',
    date: 'Samedi 18 mai 2024',
    time: 'Toute la journée',
    description: 'Journée Portes Ouvertes pour présenter l\'école aux nouveaux étudiants.',
    participantsRequired: 10,
    deadline: 'Samedi 17 mai 2024',
    bonusPoints: 10,
    participants: [],
  },
];

const ActivitiesPage = () => {
  const [activities, setActivities] = useState(activitiesData);

  const handleParticipate = (activityId, event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const classe = event.target.elements.classe.value;
    const motivation = event.target.elements.motivation.value;
    const participatedBefore = event.target.elements.participatedBefore.checked;

    if (!name || !classe || !motivation) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    const updatedActivities = activities.map((activity) => {
      if (activity.id === activityId) {
        return {
          ...activity,
          participants: [...activity.participants, { name, classe, motivation, participatedBefore, points: 0 }],
        };
      }
      return activity;
    });

    setActivities(updatedActivities);
    event.target.reset();
  };

  const handleAddPoints = (activityId, participantIndex) => {
    const updatedActivities = activities.map((activity) => {
      if (activity.id === activityId) {
        const updatedParticipants = activity.participants.map((participant, index) => {
          if (index === participantIndex) {
            return { ...participant, points: participant.points + 1 };
          }
          return participant;
        });
        return { ...activity, participants: updatedParticipants };
      }
      return activity;
    });

    setActivities(updatedActivities);
  };

  return (
    <div className="activities-page">
      <h1>Activités</h1>
      {activities.map((activity) => (
        <div key={activity.id} className="activity-card">
          <h2>{activity.title}</h2>
          <p>{activity.date} - {activity.time}</p>
          <p>{activity.description}</p>
          <p>Participants requis: {activity.participantsRequired}</p>
          <p>Deadline d'inscription: {activity.deadline}</p>
          <p className="bonus-points">Points bonus: {activity.bonusPoints}</p>
          <form onSubmit={(event) => handleParticipate(activity.id, event)}>
            <input type="text" name="name" placeholder="Votre nom" required />
            <input type="text" name="classe" placeholder="Votre classe" required />
            <input type="text" name="motivation" placeholder="Motivation" required />
            <label>
              Participation antérieure: 
              <input type="checkbox" name="participatedBefore" />
            </label>
            <button type="submit" className="register-button">S'inscrire</button>
          </form>
          <h3>Participants</h3>
          <ul>
            {activity.participants.map((participant, index) => (
              <li key={index}>
                {participant.name} - {participant.classe} - {participant.motivation} - Points: {participant.points}
                <button onClick={() => handleAddPoints(activity.id, index)}>Ajouter un point</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ActivitiesPage;
