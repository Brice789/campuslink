import React, { useState } from 'react';
import NotesTable from './NotesTable';
import Filter from './Filter';
import './NotesPage.css';   

const NotesPage = () => {
  const [notes, setNotes] = useState([]); // Stockez les notes ici, à remplir avec des données réelles ou de l'API
  const semestreOptions = [
    { value: 's1', label: 'Semestre 1' },
    { value: 's2', label: 'Semestre 2' },
    // Ajoutez d'autres semestres ici
  ];

  const handleSemestreChange = (event) => {
    // Mettez à jour les notes basées sur le semestre choisi
    console.log('Filtrer les notes pour:', event.target.value);
  };

  return (
    <div>
      <h1>Notes et crédits</h1>
      <Filter onChange={handleSemestreChange} options={semestreOptions} />
      <NotesTable notes={notes} />
    </div>
  );
};

export default NotesPage;
 