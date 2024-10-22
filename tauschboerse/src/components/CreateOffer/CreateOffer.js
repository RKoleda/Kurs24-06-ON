// src/components/CreateOffer/CreateOffer.js
import React, { useState } from 'react';
import './CreateOffer.css';

const CreateOffer = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Beispiel: Speichern der Eingaben (später durch Backend-Funktionalität ersetzt)
    console.log('Neues Angebot erstellt:', { title, description, category });
  };

  return (
    <div className="create-offer">
      <h2>Neues Angebot erstellen</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Titel:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Beschreibung:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Kategorie:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Bitte wählen...</option>
            <option value="Reparatur">Reparatur</option>
            <option value="Dienstleistung">Dienstleistung</option>
            <option value="Waren">Waren</option>
          </select>
        </div>
        <button type="submit">Angebot erstellen</button>
      </form>
    </div>
  );
};

export default CreateOffer;
