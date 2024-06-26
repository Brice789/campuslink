// Navbar.js
import React from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './DropdownMenu';

const Navbar = () => {
  const scolariteItems = [
    { label: "Notes et crédits", path: "/notes" },
    { label: "Absences et retard", path: "/absences" },
    { label: "Évaluer l'enseignement", path: "/evaluation" },
    { label: "Mes Copies Scannées", path: "/copies" }
  ];
  const ecoleItems = [
    { label: "Portail International", path: "/programmes" },
    { label: "Carreer Center Alumni", path: "/administration" },
    { label: "Salles Libres", path: "/ressources" },
    { label: "Réagir aux discriminations", path: "/reagir" },
  ];
  const associationItems = [
    { label: "Plateforme des associations", path: "/communaute" },
    { label: "Événements & News", path: "/actualites" },
    { label: "Inscription JPO", path: "/jpo" },
  ];
  const stage = [
    { label: "Alternance et stage", path: "/evenements" },
    { label: "Suivi et évaluation", path: "/projets" },
    { label: "Offre de Stage", path: "/stages" }
  ];
  const aide = [
    { label: "Ressources", path: "/evenements" },
    { label: "Portail des services : Incidents et demandes", path: "/projets" },
  ];

  return (
    <nav>
      <ul>
        <Dropdown title="Accueil" items={[]} redirectTo="/" />
        <Dropdown title="Scolarité" items={scolariteItems} />
        <Dropdown title="École" items={ecoleItems} />
        <Dropdown title="Association" items={associationItems} />
        <Dropdown title="Alternance" items={stage} />
        <Dropdown title="Aide" items={aide} />
      </ul>
    </nav>
  );
};

export default Navbar;
