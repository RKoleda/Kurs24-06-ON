import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/Homepage/HomePage';
import OfferPage from './components/OfferPage/OfferPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import CreateOffer from './components/CreateOffer/CreateOffer';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/offers" element={<OfferPage />} />
        <Route path="/create-offer" element={isLoggedIn ? <CreateOffer /> : <Login onLogin={handleLogin} />} />
        <Route path="/profile" element={isLoggedIn ? <ProfilePage /> : <Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;
