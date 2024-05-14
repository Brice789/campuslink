import React, { useState } from 'react';
import './Absences.css'; // Assurez-vous d'ajouter ce fichier pour les styles

const absencesData = [
  {
    date: "2023-05-01",
    horaire: "08:00 - 10:00",
    type: "Cours Magistral",
    matiere: "Mathématiques",
    professeur: "M. Dupont",
    statut: "Non Justifiée",
    couleur: "red", // Couleur pour les mathématiques
  },
  {
    date: "2023-05-02",
    horaire: "10:00 - 12:00",
    type: "Travaux Dirigés",
    matiere: "Physique",
    professeur: "Mme Durand",
    statut: "Non Justifiée",
    couleur: "blue", // Couleur pour la physique
  }
];

const Absences = () => {
  const [absences, setAbsences] = useState(absencesData);

  const handleJustifyAbsence = (index, event) => {
    event.preventDefault();
    const file = event.target.elements.certificat.files[0];
    if (!file) {
      alert('Veuillez télécharger un fichier.');
      return;
    }

    // Mettre à jour le statut de l'absence
    const updatedAbsences = absences.map((absence, idx) => {
      if (idx === index) {
        return { ...absence, statut: "Justifiée" };
      }
      return absence;
    });

    setAbsences(updatedAbsences);

    // Envoyer le fichier à l'administration (simulation)
    alert(`Certificat pour ${absences[index].matiere} envoyé à l'administration.`);
  };

  return (
    <div className="absences-container">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Date</th>
            <th>Horaire</th>
            <th>Type et Matière</th>
            <th>Professeur</th>
            <th>Statut</th>
            <th>Justification</th>
          </tr>
        </thead>
        <tbody>
          {absences.map((absence, index) => (
            <tr key={index}>
              <td><span className="color-indicator" style={{ backgroundColor: absence.couleur }}></span></td>
              <td>{absence.date}</td>
              <td>{absence.horaire}</td>
              <td>{`${absence.type} - ${absence.matiere}`}</td>
              <td>{absence.professeur}</td>
              <td>{absence.statut}</td>
              <td>
                {absence.statut === "Non Justifiée" && (
                  <form onSubmit={(event) => handleJustifyAbsence(index, event)}>
                    <input type="file" name="certificat" accept="image/*, .pdf" required />
                    <button type="submit">Justifier</button>
                  </form>
                )}
                {absence.statut === "Justifiée" && <span>Justifiée</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Absences;
