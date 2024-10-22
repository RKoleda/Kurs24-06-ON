// src/components/ProfilePage/ProfileInfo.js
import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <h2>Benutzerprofil</h2>
      <img src="path/to/profile-pic.jpg" alt="Profilbild" />
      <p>Name: Max Mustermann</p>
      <p>Email: max@beispiel.de</p>
      <p>Standort: Beispielstadt</p>
    </div>
  );
};

export default ProfileInfo;
