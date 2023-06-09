import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Arte-Instrumentos.css";

{/** este componente tiene como objetivo mostrar al usuario dos opciones
para explorar de la cultura: mirar el arte o escuchar a los instrumentos */}
const ArteOInstrumentos = () => {
  const navigate = useNavigate();
  const handleInstrumentos = () => {
    navigate('/instrumentos');
  };
  const handleArte = () => {
    navigate('/arte-info');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleInicio = () => {
    navigate('/pagina-principal');
  }

  const handleMenu = () => {
    navigate('/menuSelection');
  };

  const handlePagina = () => {
    navigate('/pagina-principal');
  }
  return (
    <div className='backgroundArte'>
      <p id='cultura' style={{ display: 'none' }}></p>
      <div className='contentrow'>
        <div className="contentcolumn" id="columnleft">
          {/** aquí se carga la imagen que visualiza instrumentos */}
          <img
            className="imageCultura"
            src={process.env.PUBLIC_URL + "/imagenes/musica.jpg"}
            alt="Imagen"
          />
          {/** este es para acceder al enfoque de los instrumentos */}
          <div className="imageoverlay" onClick={handleInstrumentos}>
            <div className="imagetitle">Instrumentos</div>
            <p className="imagehovering" data-testid="choose-element">
              Haz click para ir a Instrumentos
            </p>
          </div>
        </div>
        <div className="contentcolumn" id="columnright">
          {/** aquí se carga la imagen que visualiza arte */}
          <img
            className="imageCultura"
            src={process.env.PUBLIC_URL + "/imagenes/arte.jpg"}
            alt="Imagen"
          />
          {/** este es para acceder al enfoque del arte */}
          <div className="imageoverlay" onClick={handleArte}>
            <div className="imagetitle">Arte</div>
            <p className="imagehovering">Haz click para ir a Arte</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArteOInstrumentos;
