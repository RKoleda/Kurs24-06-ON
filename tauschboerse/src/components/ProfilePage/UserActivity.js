// src/components/ProfilePage/UserActivity.js
import React from 'react';
import './UserActivity.css';

const UserActivity = () => {
  // Beispielhafte Aktivitätsdaten
  const activities = [
    { id: 1, description: 'Schuhreparatur gegen 5 Eier abgeschlossen' },
    { id: 2, description: 'Gartenarbeit gegen 10 Kartoffeln angeboten' },
  ];

  return (
    <div className="user-activity">
      <h3>Aktivitäten</h3>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>{activity.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivity;
