import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Arte-Instrumentos.css";

const ArteOInstrumentos = () => {
  const navigate = useNavigate();
  const handleInstrumentos = () => {
    navigate('/instrumentos');
  };
  const handleArte = () => {
    navigate('/arte');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleMenu = () => {
    navigate('/menuSelection');
  };

  return (
    <div className='backgroundArte'>
      <button className='breadCrumb' onClick={handleLogin}>Login</button>
      <button className='breadCrumb' onClick={handleMenu}>Menú de selección</button>
      <button className='breadCrumbDisabled'>Cultura</button>
      <div className='contentrow'>
        <div className="contentcolumn" id="columnleft">
          <img
            className="imageCultura"
            src={process.env.PUBLIC_URL + "/imagenes/musica.jpg"}
            alt="Imagen"
          />
          <div className='imageoverlay' onClick={handleInstrumentos}>
            <div className='imagetitle'>Instrumentos</div>
            <p className='imagehovering'>Haz click para ir a Instrumentos</p>
          </div>
        </div>
        <div className="contentcolumn" id="columnright">
          <img
            className="imageCultura"
            src={process.env.PUBLIC_URL + "/imagenes/arte.jpg"}
            alt="Imagen"
          />
          <div className='imageoverlay' onClick={handleArte}>
            <div className='imagetitle'>Arte</div>
            <p className='imagehovering'>Haz click para ir a Arte</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArteOInstrumentos;
