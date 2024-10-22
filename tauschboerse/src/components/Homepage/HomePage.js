// src/components/Homepage/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './homepage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Willkommen bei Tauschalangebot</h1>
      <p className="home-subtitle">Tausche Dienstleistungen und Waren einfach und fair.</p>
      <SearchBar />
      <Link to="/create-offer">
        <button className="cta-button">Jetzt ein Angebot erstellen</button>
      </Link>
    </div>
  );
};

export default HomePage;
