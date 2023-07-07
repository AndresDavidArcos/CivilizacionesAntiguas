import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../styles/Arquitectura.css";
import Modelos from './Arquitecturas';

const Arquitectura = () => {
  // Datos de los slides
  const slides = [
    {
      title: 'Templo Mayor',
      image: process.env.PUBLIC_URL + "/imagenes/temploMayor.jpg",
      content: 'El Templo Mayor de Tenochtitlan era un imponente complejo religioso ubicado en el centro de la ciudad de Tenochtitlan, que fue la capital del Imperio Azteca en el siglo XV y XVI. Era considerado el centro religioso y político más importante de la cultura azteca y una de las estructuras más grandes y emblemáticas de la América precolombina.',
      instructions: 'Para ver el modelo 3d de El Templo Mayor de Tenochtitlan, haga click en el botón "Ver modelo" y luego clic en el numero 2. Con click derecho puede mover el modelo, con click izquierdo puede rotar la cámara y con la rueda del mouse puede hacer zoom.',
      model: <div class="sketchfab-embed-wrapper"> <iframe title="Voxel Tenochtitlan" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="700" height="480" src="https://sketchfab.com/models/9930fecba35748028991a4dd82b03656/embed"> </iframe> </div>
    },
    {
      title: 'Recinto de las Águilas',
      image: process.env.PUBLIC_URL + "/imagenes/recitoAguilas.png",
      content: 'El edificio fue construido aprox. en 1480 d.C. Los estudios parecen indicar que se trata de un conjunto destinado a ciertas ceremonias, pues en su interior se han detectado, mediante técnicas de arqueometría y otras, acumulación en determinadas áreas de restos de componentes de la sangre, como en las grandes esculturas de barro, y la presencia de productos que contenían grasas vegetales y animales, así como carbohidratos de una sustancia rica en azúcares y almidones, posiblemente pulque.',
      instructions: 'Para ver el modelo 3d de Recinto de las Águilas de Tenochtitlan, haga click en el botón "Ver modelo" y luego clic en el numero 1. Con click derecho puede mover el modelo, con click izquierdo puede rotar la cámara y con la rueda del mouse puede hacer zoom.',
      model: <div class="sketchfab-embed-wrapper"> <iframe title="Voxel Tenochtitlan" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="700" height="480" src="https://sketchfab.com/models/9930fecba35748028991a4dd82b03656/embed"> </iframe> </div>
    },
    {
      title: 'Templo de Tezcatlipoca',
      image: process.env.PUBLIC_URL + "/imagenes/temploTezcatlipoca.png",
      content: 'Tezcatlipoca o "espejo humeante" en lenguaje náhuatl fue uno de los dioses más importantes de la cultura mesoamericana del Posclásico y particularmente importante para los toltecas y los aztecas, por lo que tenía su propio templo. Era un dios creador invisible y omnipotente, deidad patrona de los guerreros y, como portador tanto del bien como del mal, era la encarnación misma del cambio a través del conflicto.',
      instructions: 'Para ver el modelo 3d de Templo de Tezcatlipoca de Tenochtitlan, haga click en el botón "Ver modelo" y luego clic en el numero 3. Con click derecho puede mover el modelo, con click izquierdo puede rotar la cámara y con la rueda del mouse puede hacer zoom.',
      model: <div class="sketchfab-embed-wrapper"> <iframe title="Voxel Tenochtitlan" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="700" height="480" src="https://sketchfab.com/models/9930fecba35748028991a4dd82b03656/embed"> </iframe> </div>
    },
    {
      title: 'Estadio de Tlachtli',
      image: process.env.PUBLIC_URL + "/imagenes/estadioTlachtli.png",
      content: 'El juego de pelota mesoamericano (en náhuatl: tlachtli u ollamalistli) fue un deporte con connotaciones rituales y bélicas, jugado desde el año 1400 a. C. por los pueblos precolombinos de Mesoamérica; se practicaba tanto en la vida cotidiana como en celebraciones religiosas. Aparentemente cumplía la función de resolver conflictos de diversa naturaleza: pleitos por tierras, tributo, controles comerciales y otros.',
      instructions: 'Para ver el modelo 3d de Estadio de Tlachtli de Tenochtitlan, haga click en el botón "Ver modelo" y luego clic en el numero 4. Con click derecho puede mover el modelo, con click izquierdo puede rotar la cámara y con la rueda del mouse puede hacer zoom.',
      model: <div class="sketchfab-embed-wrapper"> <iframe title="Voxel Tenochtitlan" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="700" height="480" src="https://sketchfab.com/models/9930fecba35748028991a4dd82b03656/embed"> </iframe> </div>
    },
    {
      title: 'Templo Ehécatl-Quetzalcóatl',
      image: process.env.PUBLIC_URL + "/imagenes/ehecatl.png",
      content: 'Ehécatl era un dios mesoamericano del aire y los vientos, especialmente de los que traían las lluvias. Considerado una manifestación del gran dios «serpiente emplumada». ayudó a crear a la humanidad en el mito de la creación azteca y dio el regalo de la planta del maguey. También se lo asociaba con los puntos cardinales, los colores y varias fechas del calendario.',
      instructions: 'Para ver el modelo 3d de Templo Ehécatl-Quetzalcóatl de Tenochtitlan, haga click en el botón "Ver modelo" y luego clic en el numero 5. Con click derecho puede mover el modelo, con click izquierdo puede rotar la cámara y con la rueda del mouse puede hacer zoom.',
      model: <div class="sketchfab-embed-wrapper"> <iframe title="Voxel Tenochtitlan" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="700" height="480" src="https://sketchfab.com/models/9930fecba35748028991a4dd82b03656/embed"> </iframe> </div>
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  //Avanzar datos de los slides
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  //Retroceder datos de los slides
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const { title, image, content } = slides[currentSlide];

  const [showModal, setShowModal] = useState(false);

  //Mostrar modelo
  const handleButtonClick = () => {
    setShowModal(true);
  };

  //Cerrar modelo
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const navigate = useNavigate();

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
    <div className="background">
      <div className="content_rowar">
        <div className="content_columnar" id="column_leftar">
          {/* Breadcrumbs para dirrecionamiento */}
          <button className='breadCrumb' onClick={handlePagina}>Página principal</button>
          <button className='breadCrumb' onClick={handleLogin}>Login</button>
          <button className='breadCrumb' onClick={handleMenu}>Menú de selección</button>
          <button className='breadCrumbDisabled' >Arquitectura</button>

          {/* Header con titulo de civilización */}
          <div className="header">
            <h2 className="title-azteca">Tenochtitlan</h2>
            <h2 className="subtitle">LA CAPITAL AZTECA</h2>
          </div>

          {/* Información de estructura */}
          <h2 data-testid='titulo' className="titulo">{title}</h2>
          <p className="texto">{content}</p>

          {/* Botones para ver otras estructuras */}
          <div className="container">
            <button className="boton" id="anterior" onClick={handlePrevSlide}>
              <img
                className="icono"
                src={process.env.PUBLIC_URL + "/imagenes/left-arrow.jpg"}
                alt="Imagen"
              />
              <a>Anterior</a>
            </button>
            <button className="boton" id="siguiente" onClick={handleNextSlide}>
              <a>Siguiente</a>
              <img
                className="icono"
                src={process.env.PUBLIC_URL + "/imagenes/right-arrow.jpg"}
                alt="Imagen"
              />
            </button>
          </div>
        </div>

        <div className="content_columnar" id="column_rightar">
          {/* Imagen de cada arquitectura */}
          <img className="imagen" src={image} alt={title} />
          <div data-testid='overlay' className="image_overlay" onClick={handleButtonClick}>
            <div className="image_title">{title}</div>
            <p className="image_hovering">Haz click para ver este modelo</p>
          </div>

          {showModal && (
            <Modelos slide={slides[currentSlide]} onClose={handleCloseModal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Arquitectura;
