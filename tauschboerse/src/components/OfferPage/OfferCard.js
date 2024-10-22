// src/components/OfferPage/OfferCard.js
import React, { useState } from 'react';
import './OfferCard.css';

const OfferCard = ({ title, description, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(editedTitle, editedDescription);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(title);
    setEditedDescription(description);
    setIsEditing(false);
  };

  return (
    <div className="offer-card">
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={editedTitle} 
            onChange={(e) => setEditedTitle(e.target.value)} 
          />
          <textarea 
            value={editedDescription} 
            onChange={(e) => setEditedDescription(e.target.value)} 
          />
          <button onClick={handleSave}>Speichern</button>
          <button onClick={handleCancel}>Abbrechen</button>
        </>
      ) : (
        <>
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={handleEdit}>Bearbeiten</button>
          <button onClick={onDelete}>Löschen</button>
        </>
      )}
    </div>
  );
};

export default OfferCard;
