import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './DropdownMenu';

const Navbar = () => {
  const scolariteItems = [
    { label: "Notes et crédits", path: "/notes" },
    { label: "Absences", path: "/absences" },
    { label: "Évaluer l'enseignement", path: "/evaluation" },
    { label: "Mes Copies Scannées", path: "/copies" }
  ];
  const ecoleItems = [
    { label: "Portail International", path: "/programmes" },
    { label: "Dossier Administratif", path: "/administration" },
    { label: "Sales Libres", path: "/ressources" },
    { label: "Réagir aux discriminations", path: "/ressources" },
  ];
  const associationItems = [
    { label: "Plateforme des asssociations", path: "/communaute" },
    { label: "Événements & News", path: "/evenements" },
    { label: "Participation aux journée porte ouvertes", path: "/projets" },
  ];
  const stage = [
    { label: "Confirmation de stage", path: "/evenements" },
    { label: "Suivi et évaluation", path: "/projets" },
    { label: "Atelier CV", path: "/communaute" },
    { label: "Carreer Center Alumni", path: "/communaute" }
  ];
  const aide = [
    { label: "Ressources", path: "/evenements" },
    { label: "Portail des services : Incidents, demandes", path: "/projets" },
  ];

  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <Dropdown title="Scolarité" items={scolariteItems} />
        <Dropdown title="École" items={ecoleItems} />
        <Dropdown title="Association" items={associationItems} />
        <Dropdown title="Stages" items={stage} />
        <Dropdown title="Aide" items={aide} />

      </ul>
    </nav>
  );
};

export default Navbar;
