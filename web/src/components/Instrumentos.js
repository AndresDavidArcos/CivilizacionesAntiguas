import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useInView } from "react-intersection-observer";
import './Instrumentos.css';

const Instrumentos = () => {

  const [showContent, setShowContent] = useState(false);

  const [inViewIntroduction, setInViewIntroduction] = useState(false);
  const introRef = useRef(null);

  const [refBody1, inViewBody1] = useInView({
    triggerOnce: true, // Activa la animación solo una vez
    threshold: 0.1, // Porcentaje de visibilidad necesario para activar la animación
  });

  const [refBody2, inViewBody2] = useInView({
    triggerOnce: true, // Activa la animación solo una vez
    threshold: 0.1, // Porcentaje de visibilidad necesario para activar la animación
  });

  const [refBody3, inViewBody3] = useInView({
    triggerOnce: true, // Activa la animación solo una vez
    threshold: 0.1, // Porcentaje de visibilidad necesario para activar la animación
  });

  const [refBody4, inViewBody4] = useInView({
    triggerOnce: true, // Activa la animación solo una vez
    threshold: 0.1, // Porcentaje de visibilidad necesario para activar la animación
  });

  const [refBody5, inViewBody5] = useInView({
    triggerOnce: true, // Activa la animación solo una vez
    threshold: 0.1, // Porcentaje de visibilidad necesario para activar la animación
  });

  const [refBody6, inViewBody6] = useInView({
    triggerOnce: true, // Activa la animación solo una vez
    threshold: 0.1, // Porcentaje de visibilidad necesario para activar la animación
  });

  useEffect(() => {
    // Simula el desplazamiento hacia abajo en la página
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight / 10) {
        setShowContent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (introRef.current && inViewIntroduction === false) {
      const introPosition = introRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (introPosition.top < windowHeight * 0.9) {
        setInViewIntroduction(true);
      }
    }
  }, [inViewIntroduction]);

  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight;
        if (isVisible) {
          element.classList.add("fade-in");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <div className="content_row">
        <div className="content_column" id="column_left">
          <div className="title">Instrumentos del Imperio Azteca</div>
          <div>
            <TransitionGroup component={null}>
              {showContent && (
                <CSSTransition
                  nodeRef={introRef}
                  in={inViewIntroduction}
                  timeout={1000}
                  classNames="fade-in"
                  unmountOnExit
                >
                  <div
                    className="intro"
                    /*ref={introRef}
                    className={`intro ${
                      inViewIntroduction ? "fade-in" : "hidden"
                    }`}*/
                  >
                    Sus composiciones eran interpretadas en una cámara llamada
                    Mixcoacalli; en ella intervenía un grupo de ejecutantes y
                    cantantes llamado Cuya-Picque. Los principales instrumentos
                    utilizados eran:
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>
          </div>

          <div className="body">
            <TransitionGroup>
              {showContent && (
                <CSSTransition
                  in={true}
                  timeout={5000}
                  classNames="fade-in"
                  unmountOnExit
                >
                  <div
                  /*ref={refBody1}
                    className={inViewBody1 ? "fade-in" : "hidden"}*/
                  >
                    <p>
                      <b>El Huéhuetl.</b> Tambor construido con un tronco de
                      árbol ahuecado, con ranuras en la parte inferior que dan
                      forma a la base del instrumento y una piel de tigre
                      tensada en la parte superior.
                    </p>
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>

            <TransitionGroup>
              {showContent && (
                <CSSTransition
                  in={true}
                  timeout={500}
                  classNames="fade-in"
                  unmountOnExit
                >
                  <div
                  /*ref={refBody2}
                    className={inViewBody2 ? "fade-in" : "hidden"}*/
                  >
                    <p>
                      <b>El Teponaztli.</b> Tronco de árbol ahuecado dispuesto
                      horizontalmente y con los extremos cerrados. En la parte
                      superior lleva dos lengüetas formadas por angostas
                      incisiones, que al ser golpeadas producen interesantes
                      sonidos.
                    </p>
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>

            <TransitionGroup>
              {showContent && (
                <CSSTransition
                  in={true}
                  timeout={500}
                  classNames="fade-in"
                  unmountOnExit
                >
                  <div
                  /*ref={refBody3}
                    className={inViewBody3 ? "fade-in" : "hidden"}*/
                  >
                    <p>
                      <b>El Tlapitzalli.</b> Toda una diversidad de flautas que
                      producían sonidos muy agudos, similares a los que produce
                      el piccolo occidental.
                    </p>
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>

            <TransitionGroup>
              {showContent && (
                <CSSTransition
                  in={true}
                  timeout={500}
                  classNames="fade-in"
                  unmountOnExit
                >
                  <div
                  /*ref={refBody4}
                    className={inViewBody4 ? "fade-in" : "hidden"}*/
                  >
                    <p>
                      <b>La Ocarina.</b> Pequeño instrumento de aliento,
                      construido con barro ; tiene dos, tres, cuatro y hasta
                      cinco orificios que producen de dos a quince sonidos
                      diferentes. Para controlar su afinación, se le hacen dos
                      orificios adicionales.
                    </p>
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>

            <TransitionGroup>
              {showContent && (
                <CSSTransition
                  in={true}
                  timeout={500}
                  classNames="fade-in"
                  unmountOnExit
                >
                  <div
                  /*ref={refBody5}
                    className={inViewBody5 ? "fade-in" : "hidden"}*/
                  >
                    <p>
                      <b>El Tzicahastrli.</b> Raspador construido con un fémur
                      humano, dotado de una serie de ranuras, que eran frotadas
                      con una concha.
                    </p>
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>

            <TransitionGroup>
              {showContent && (
                <CSSTransition
                  in={true}
                  timeout={500}
                  classNames="fade-in"
                  unmountOnExit
                >
                  <div
                  /*ref={refBody6}
                    className={inViewBody6 ? "fade-in" : "hidden"}*/
                  >
                    <p>
                      <b>El Atecocolli.</b> Caracol marino utilizado como
                      instrumento de aliento. Con un corte en el vértice, se
                      hace la boquilla; el sonido es producido por una fuerte
                      emisión de aire que hace vibrar la punta de los labios.
                    </p>
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>
          </div>
        </div>

        <div className="content_column" id="column_right">
          <button
            className="boton"
            style={{ position: "absolute", top: "0px", left: "1000px" }}
          >
            <Link to="/menuSelection">Regresar a inicio</Link>
          </button>
          <button className="boton">
            Click aquí para entrar a la exposición
          </button>
        </div>
      </div>
    </>
  );
};

export default Instrumentos;
