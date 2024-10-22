// src/components/Auth/Login.js
import React, { useState } from 'react';
import './Auth.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Hier würden wir eine API-Anfrage senden, um den Benutzer anzumelden
    console.log("Anmeldung erfolgreich:", { email, password });
    onLogin(); // Beispiel: Benutzer wird als angemeldet betrachtet
  };

  return (
    <div className="auth-container">
      <h2>Anmelden</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Anmelden</button>
      </form>
    </div>
  );
};

export default Login;
