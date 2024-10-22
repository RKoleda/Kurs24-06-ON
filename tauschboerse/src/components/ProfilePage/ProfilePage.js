// src/components/ProfilePage/ProfilePage.js
import React from 'react';
import ProfileInfo from './ProfileInfo';
import UserOffers from './UserOffers';
import UserActivity from './UserActivity';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <ProfileInfo />
      <UserOffers />
      <UserActivity />
    </div>
  );
};

export default ProfilePage;
