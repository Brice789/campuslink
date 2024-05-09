import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef(null); // Référence pour stocker le timer

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Annuler le timer existant si l'utilisateur revient sur le menu
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    // Définir un délai avant de masquer le menu
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 500); // 500 ms de délai avant que le menu disparaisse
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/Calendar">Calendar</Link></li>
        <li className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
          <Link to="/scolarite">Scolarité</Link>
          {showDropdown && <DropdownMenu />}
        </li>
        <li><Link to="/ecole">École</Link></li>
        <li><Link to="/stages">Stages et Alternances</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
