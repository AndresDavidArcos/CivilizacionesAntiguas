import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation, json } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useInView } from "react-intersection-observer";
import './Instrumentos.css';

const Instrumentos = () => {
  const location = useLocation();
  const datosProps = location.state;

  console.log(datosProps.user)

  const navigate = useNavigate();
  const useHandleNavigateMenu = () => {
    navigate('/menuSelection', { state: { user: datosProps } });
  };

  const useHandleNavigateGaleria = () => {
    navigate('/galeria', { state: { user: datosProps } });
  };

  return (
    <>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/imagenes/instrumentos.jpg"}
          alt="Imagen"
          style={{
            width: "670px",
            height: "782px",
            position: "fixed",
            top: "0px",
            left: "715px",
          }}
        />
      </div>
      <div className="content_row">
        <div className="content_column" id="column_left">
          <div
            className="title"
          >
            Instrumentos del Imperio Azteca
          </div>
          <div className="intro" data-testid="intro-element">
            Sus composiciones eran interpretadas en una cámara llamada
            Mixcoacalli; en ella intervenía un grupo de ejecutantes y cantantes
            llamado Cuya-Picque. Los principales instrumentos utilizados eran:
          </div>
          <div className="body">
            <div>
              <p>
                <b>El Huéhuetl.</b> Tambor construido con un tronco de árbol
                ahuecado, con ranuras en la parte inferior que dan forma a la
                base del instrumento y una piel de tigre tensada en la parte
                superior.
              </p>
            </div>
            <div>
              <p>
                <b>El Teponaztli.</b> Tronco de árbol ahuecado dispuesto
                horizontalmente y con los extremos cerrados. En la parte
                superior lleva dos lengüetas formadas por angostas incisiones,
                que al ser golpeadas producen interesantes sonidos.
              </p>
            </div>
            <div>
              <p>
                <b>El Tlapitzalli.</b> Toda una diversidad de flautas que
                producían sonidos muy agudos, similares a los que produce el
                piccolo occidental.
              </p>
            </div>
            <div>
              <p>
                <b>La Ocarina.</b> Pequeño instrumento de aliento, construido
                con barro ; tiene dos, tres, cuatro y hasta cinco orificios que
                producen de dos a quince sonidos diferentes. Para controlar su
                afinación, se le hacen dos orificios adicionales.
              </p>
            </div>
            <div>
              <p>
                <b>El Tzicahastrli.</b> Raspador construido con un fémur humano,
                dotado de una serie de ranuras, que eran frotadas con una
                concha.
              </p>
            </div>
            <div>
              <p>
                <b>El Atecocolli.</b> Caracol marino utilizado como instrumento
                de aliento. Con un corte en el vértice, se hace la boquilla; el
                sonido es producido por una fuerte emisión de aire que hace
                vibrar la punta de los labios.
              </p>
            </div>
          </div>
        </div>

        <div className="content_column" id="column_right">
          <button
            className="boton"
            style={{ position: "absolute", top: "0px", left: "1000px" }} onClick={useHandleNavigateMenu}>
            Regresar al inicio
          </button>

          <button className="boton" onClick={useHandleNavigateGaleria}>
            Click aquí para entrar a la exposición
          </button>
        </div>
      </div>
    </>
  );
};


export default Instrumentos;
