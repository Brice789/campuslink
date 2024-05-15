import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css';

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <li className="dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <a href="/" className="dropdown-toggle" onClick={(e) => {
        e.preventDefault(); // Prévenir le comportement par défaut
        toggleDropdown();
      }}>
        {title} <span>▼</span>
      </a>
      {isOpen && (
        <ul className="dropdown-content">
          {items.map((item, index) => (
            <li key={index}><Link to={item.path}>{item.label}</Link></li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
