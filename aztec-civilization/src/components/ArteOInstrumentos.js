import React from "react";
import "../styles/Arte-Instrumentos.css";

const ArteOInstrumentos = () => {
  return (
    <div className="container">
      <div className="half">
        <div className="content">
          <img
            className="image"
            src={process.env.PUBLIC_URL + "/imagenes/musica.jpg"}
            alt="Imagen"
            style={{
              width: "655px",
              height: "665px",
              position: "fixed",
              top: "0px",
              right: "655px",
            }}
          />
          <div>
                      <button className="button" style={{ zIndex: 2 }}>Ir a instrumentos</button>
          </div>
        </div>
      </div>
      <div className="half">
        <div className="content">
          <img
            className="image"
            src={process.env.PUBLIC_URL + "/imagenes/arte.jpg"}
            alt="Imagen"
            style={{
              width: "655px",
              height: "665px",
              position: "fixed",
              top: "0px",
              right: "0px",
            }}
          />
          <div>
                      <button className="button" style={{ zIndex: 2 }}>Ir a arte</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArteOInstrumentos;
