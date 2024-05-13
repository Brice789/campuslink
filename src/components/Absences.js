import React from 'react';
import './Absences.css'; // Assurez-vous d'ajouter ce fichier pour les styles

const absences = [
  {
    date: "2023-05-01",
    horaire: "08:00 - 10:00",
    type: "Cours Magistral",
    matiere: "Mathématiques",
    professeur: "M. Dupont",
    statut: "Non Justifiée",
    couleur: "red" // Couleur pour les mathématiques
  },
  {
    date: "2023-05-02",
    horaire: "10:00 - 12:00",
    type: "Travaux Dirigés",
    matiere: "Physique",
    professeur: "Mme Durand",
    statut: "Non Justifiée",
    couleur: "blue" // Couleur pour la physique
  }
];

const Absences = () => {
  return (
    <div className="absences-container">
      <table>
        <tbody>
          {absences.map((absence, index) => (
            <tr key={index}>
              <td><span className="color-indicator" style={{backgroundColor: absence.couleur}}></span></td>
              <td>{absence.date}</td>
              <td>{absence.horaire}</td>
              <td>{`${absence.type} - ${absence.matiere}`}</td>
              <td>{absence.professeur}</td>
              <td>{absence.statut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Absences;
