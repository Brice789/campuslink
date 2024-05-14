import React, { useState, useEffect } from 'react';
import './NotesPage.css';

const NotesPage = () => {
  const [semestre, setSemestre] = useState('s1');
  const [notes, setNotes] = useState([]);

  const semestreOptions = [
    { value: 's1', label: 'Semestre 1' },
    { value: 's2', label: 'Semestre 2' },
  ];

  const generateRandomNotes = () => {
    const randomNote = () => Math.floor(Math.random() * 8) + 8; // Génère des notes entre 8 et 15
    return [
      {
        ue: 'UE - Formation générale',
        ects: 6,
        notes: [
          { module: 'Mathématiques', type: 'Cours', coef: 4, moyenne: randomNote() },
          { module: 'Physique', type: 'Cours', coef: 3, moyenne: randomNote() },
          { module: 'Informatique', type: 'Cours', coef: 5, moyenne: randomNote() },
        ],
      },
      {
        ue: 'UE - Formation professionnelle',
        ects: 6,
        notes: [
          { module: 'Sport', type: 'Activité', coef: 2, moyenne: randomNote() },
          { module: 'Entrepreneuriat', type: 'Cours', coef: 3, moyenne: randomNote() },
          { module: 'Activité', type: 'Cours', coef: 2, moyenne: randomNote() },
        ],
      },
    ];
  };

  useEffect(() => {
    // Initialise les notes pour le premier semestre par défaut
    setNotes(generateRandomNotes());
  }, []);

  const handleSemestreChange = (event) => {
    const selectedSemestre = event.target.value;
    setSemestre(selectedSemestre);
    setNotes(generateRandomNotes());
  };

  return (
    <div className="notes-page">
      <h1>Notes et crédits</h1>
      <div className="filter-container">
        <select className="filter-select" onChange={handleSemestreChange} value={semestre}>
          {semestreOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <NotesTable notes={notes} />
    </div>
  );
};

const NotesTable = ({ notes }) => {
  return (
    <table className="notes-table">
      <thead>
        <tr>
          <th>UE</th>
          <th>Module</th>
          <th>Type</th>
          <th>Coef</th>
          <th>Moyenne / Résultat</th>
        </tr>
      </thead>
      <tbody>
        {notes.map((ue, index) => (
          <React.Fragment key={index}>
            <tr className="ue-row">
              <td colSpan="5">{ue.ue} - ({ue.ects} ECTS)</td>
            </tr>
            {ue.notes.map((note, idx) => (
              <tr key={idx}>
                <td></td>
                <td>{note.module}</td>
                <td>{note.type}</td>
                <td>{note.coef}</td>
                <td>{note.moyenne}</td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default NotesPage;
