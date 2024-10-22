// src/components/Auth/Register.js
import React, { useState } from 'react';
import './Auth.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleRegister = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwörter stimmen nicht überein.");
      return;
    }
    // Hier würden wir eine API-Anfrage senden, um den Benutzer zu registrieren
    console.log("Registrierung erfolgreich:", { email, password });
  };

  return (
    <div className="auth-container">
      <h2>Registrieren</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="email">E-Mail:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Passwort:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Passwort bestätigen:</label>
          <input 
            type="password" 
            id="confirmPassword" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Registrieren</button>
      </form>
    </div>
  );
};

export default Register;
