// src/components/ProfilePage/UserOffers.js
import React from 'react';
import './UserOffers.css';

const UserOffers = () => {
  // Beispielhafte Angebote, die vom Benutzer erstellt wurden
  const offers = [
    { id: 1, title: 'Schuhreparatur', description: 'Ich repariere deine Schuhe' },
    { id: 2, title: 'Gartenarbeit', description: 'Ich helfe im Garten' },
  ];

  return (
    <div className="user-offers">
      <h3>Meine Angebote</h3>
      <ul>
        {offers.map(offer => (
          <li key={offer.id}>
            <h4>{offer.title}</h4>
            <p>{offer.description}</p>
            <button>Bearbeiten</button>
            <button>Löschen</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserOffers;
