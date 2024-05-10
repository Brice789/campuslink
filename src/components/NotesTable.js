import React from 'react';

const NotesTable = ({ notes }) => {
  return (
    <table>
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
        {notes.map((note, index) => (
          <tr key={index}>
            <td>{note.ue}</td>
            <td>{note.module}</td>
            <td>{note.type}</td>
            <td>{note.coef}</td>
            <td>{note.moyenne}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NotesTable;
