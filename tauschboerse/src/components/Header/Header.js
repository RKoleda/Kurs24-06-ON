// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/tauschalangebot-logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Tauschalangebot Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/offers">Angebote</Link></li>
          <li><Link to="/create-offer">Angebot erstellen</Link></li> {/* Neuer Link hinzugefügt */}
          <li><Link to="/profile">Profil</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
