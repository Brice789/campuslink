import React from 'react';
import { Link } from 'react-router-dom';
import './Bar.css'; 

// import profileIcon from '/public/assets/logo/profile-icon.webp';

const Bar = () => {
    return (
        <nav className="bar">
            <div className="bar-brand">
                <Link to="/">Oteria</Link>
            </div>
            <div className="bar-search">
                <input type="search" placeholder="Rechercher une ressource..." />
            </div>
            <div className="bar-profile">
                <Link to="/profile">
                    <img src="/assets/logo/profile-icon.webp" alt="Profile" />
                    Sam Altmann
                </Link>
            </div>
        </nav>
    );
};
export default Bar;
