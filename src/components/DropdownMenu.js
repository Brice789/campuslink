import React from 'react';
import './DropdownMenu.css';

const DropdownMenu = () => {
  return (
    <div className="dropdown-content">
      <a href="#">Notes et crédits</a>
      <a href="#">Absences</a>
      <a href="#">Évaluer l'enseignement</a>
      <a href="#">Mes espaces Moodle</a>
      <a href="#">LXP Learning XP</a>
      <a href="#">Copies d'examen scannées</a>
      <a href="#">Bulletins, certificats et factures...</a>
    </div>
  );
};

export default DropdownMenu;
