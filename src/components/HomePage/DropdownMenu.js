// DropdownMenu.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DropdownMenu.css';

const Dropdown = ({ title, items, redirectTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClick = (e) => {
    if (redirectTo) {
      navigate(redirectTo);
    } else {
      e.preventDefault();
      toggleDropdown();
    }
  };

  return (
    <li className="dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="dropdown-toggle nav-link" onClick={handleClick}>
        {title} {items.length > 0 && <span>▼</span>}
      </button>
      {isOpen && items.length > 0 && (
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
