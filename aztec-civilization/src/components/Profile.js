import React, { useState } from 'react';
import '../styles/profile.css';
import { useNavigate } from 'react-router-dom';
import { useUserData } from '../contexts/user';

const ProfileViewer = () => {
  const navigate = useNavigate()
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useUserData();

  const handleArrowClick = () => {
    setShowLogout(!showLogout);
  };

  const handleLogout = () => {
    navigate("/login")
  };

  return (
    <div className="profile-container">
      <div className="profile">
        <p className="username">{ (Object.keys(user).length !== 0) ? user.data.nombre : "Invitado"}
        </p>
        <p className="arrow" onClick={handleArrowClick}></p>
      </div>
      {showLogout && (
        <div className="logout">
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      )}
    </div>
  );
};

export default ProfileViewer;
