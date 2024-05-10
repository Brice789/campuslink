import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css';

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <li className="dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Link to="#" className="dropdown-toggle" onClick={toggleDropdown}>{title} <span>▼</span></Link>
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
