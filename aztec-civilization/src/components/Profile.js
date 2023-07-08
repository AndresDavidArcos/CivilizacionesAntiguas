import React, { useContext, useState, useEffect } from 'react';
import '../styles/profile.css';
import { useNavigate } from 'react-router-dom';
import { useUserData } from '../contexts/user';
import {
  Storefront,
  Agriculture,
  MenuBook,
  Home,
  ColorLens,
  Person2,
} from "@mui/icons-material";

const ProfileViewer = () => {
  const navigate = useNavigate()
  const [showLogout, setShowLogout] = useState(false);
  const { user, setUser } = useUserData();

  const handleArrowClick = () => {
    setShowLogout(!showLogout);
  };

  const handleLogout = () => {
    setUser({})
    navigate("/")
  };

  const handleLogin = () => {
    navigate("/login")
  };

  const handleMenu = () => {
    navigate("/menuSelection");
  };

  const handlePagina = () => {
    navigate("/pagina-principal");
  };

  const handleCultura = () => {
    navigate("/arte-instrumentos");
  };

  const handleAgricultura = () => {
    navigate("/agricultura");
  };

  const handleArquitectura = () => {
    navigate("/arquitectura")
  }

  const principal = document.getElementById('principal');
  const menuSelection = document.getElementById('menuSelection');
  const cultura = document.getElementById('cultura');
  const agricultura = document.getElementById('agricultura');
  const arquitectura = document.getElementById('arquitectura');

  return (
    <div className="profile-container">
      <div className="profile">
        <p className="username">{(Object.keys(user).length !== 0) ? user.data.nombre : "Invitado"}
        </p>
        <p className="arrow" onClick={handleArrowClick}></p>
      </div>
      {showLogout && (
        <>
          <div >
            <button id='person2' className="botonMenuPerfil"
              onClick={Object.keys(user).length !== 0 ? handleLogout : handleLogin}>
              <Person2 style={{ marginRight: "5px" }} />
              {Object.keys(user).length !== 0 ? 'Cerrar sesión' : 'Iniciar sesión'}
            </button>
          </div>
          <div >
            <button className="botonMenuPerfil" style={{ backgroundColor: principal ? 'orange' : 'white' }}
              onClick={handlePagina}>
              <Home style={{ marginRight: "5px" }} />
              Página principal
            </button>
          </div>
          <div >
            <button className="botonMenuPerfil" style={{ backgroundColor: menuSelection ? 'orange' : 'white' }}
              onClick={handleMenu}>
              <MenuBook style={{ marginRight: "5px" }} />
              Menú de selección
            </button>
          </div>
          <div >
            <button className="botonMenuPerfil" style={{ backgroundColor: cultura ? 'orange' : 'white' }}
              onClick={handleCultura}>
              <ColorLens style={{ marginRight: "5px" }} />
              Cultura
            </button>
          </div>
          <div >
            <button className="botonMenuPerfil" style={{ backgroundColor: arquitectura ? 'orange' : 'white' }}
              onClick={handleArquitectura}>
              <Storefront style={{ marginRight: "5px" }} />
              Arquitectura
            </button>
          </div>
          <div >
            <button className="botonMenuPerfil" style={{ backgroundColor: agricultura ? 'orange' : 'white' }}
              onClick={handleAgricultura}>
              <Agriculture style={{ marginRight: "5px" }} />
              Agricultura
            </button>
          </div>
          {/* <div className="logout">
            <button onClick={Object.keys(user).length !== 0 ? handleLogout : handleLogin}>{Object.keys(user).length !== 0 ? 'Cerrar sesión' : 'Iniciar sesión'}</button>
          </div> */}
        </>
      )}
    </div>
  );
};

export default ProfileViewer;
