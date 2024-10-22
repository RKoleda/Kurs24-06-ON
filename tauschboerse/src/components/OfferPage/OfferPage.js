// src/components/OfferPage/OfferPage.js
import React, { useState } from 'react';
import OfferCard from './OfferCard';
import './OfferPage.css';

const OfferPage = () => {
  const [offers, setOffers] = useState([
    { id: 1, title: 'Schuhreparatur', description: 'Ich repariere deine Schuhe gegen Eier.' },
    { id: 2, title: 'Gartenarbeit', description: 'Ich helfe dir im Garten gegen frisches Gemüse.' },
  ]);

  const handleDelete = (id) => {
    setOffers(offers.filter(offer => offer.id !== id));
  };

  const handleEdit = (id, newTitle, newDescription) => {
    setOffers(
      offers.map(offer =>
        offer.id === id
          ? { ...offer, title: newTitle, description: newDescription }
          : offer
      )
    );
  };

  return (
    <div className="offer-page">
      <h2>Angebote</h2>
      <div className="offers-list">
        {offers.map(offer => (
          <OfferCard
            key={offer.id}
            title={offer.title}
            description={offer.description}
            onDelete={() => handleDelete(offer.id)}
            onEdit={(newTitle, newDescription) => handleEdit(offer.id, newTitle, newDescription)}
          />
        ))}
      </div>
    </div>
  );
};

export default OfferPage;

