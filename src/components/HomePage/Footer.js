import React from 'react';
import './Footer.css'; // Assurez-vous de créer ce fichier CSS et d'y ajouter les styles

const Footer = () => {
  return (
    <footer>
      <h2>CampusLink</h2>
      <p>
        <i className="fas fa-hands-helping"></i> Devenir partenaire
      </p>
      <p>Mentions légales</p>
      <p>
        <a href="mailto:ohmyfood@gmail.com">Contact</a>
      </p>
    </footer>
  );
};

export default Footer;
