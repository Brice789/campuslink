import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './DropdownMenu';

const Navbar = () => {
  const scolariteItems = [
    { label: "Notes et crédits", path: "/notes" },
    { label: "Absences", path: "/absences" },
    { label: "Évaluer l'enseignement", path: "/evaluation" },
    { label: "Mes espaces Moodle", path: "/moodle" }
  ];
  const ecoleItems = [
    { label: "Programmes", path: "/programmes" },
    { label: "Administration", path: "/administration" },
    { label: "Ressources", path: "/ressources" }
  ];
  const associationItems = [
    { label: "Événements", path: "/evenements" },
    { label: "Projets", path: "/projets" },
    { label: "Communauté", path: "/communaute" }
  ];

  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <Dropdown title="Scolarité" items={scolariteItems} />
        <Dropdown title="École" items={ecoleItems} />
        <Dropdown title="Association" items={associationItems} />
        <li><Link to="/stages">Stages et Alternances</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
