import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/Calendar">Calendar</Link></li>
        <li onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
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
