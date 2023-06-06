import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Arquitectura.css';

const Arquitectura = () => {
  // Datos de los slides
  const slides = [
    {
      title: 'Templo Mayor',
      image: process.env.PUBLIC_URL + "/imagenes/temploMayor.jpg",
      content: 'El Templo Mayor de Tenochtitlan era un imponente complejo religioso ubicado en el centro de la ciudad de Tenochtitlan, que fue la capital del Imperio Azteca en el siglo XV y XVI. Era considerado el centro religioso y político más importante de la cultura azteca y una de las estructuras más grandes y emblemáticas de la América precolombina.',
    },
    {
      title: 'Diseño de canales de agua',
      image: process.env.PUBLIC_URL + "/imagenes/callesTenochtitlan.jpg",
      content: 'Las calles de Tenochtitlan eran canales navegables anchos y bien trazados que conectaban los barrios y mercados. Los puentes de madera y piedra eran impresionantes y algunos eran móviles. La ciudad estaba dividida en una cuadrícula de barrios con su propio templo y mercado.',
    },
    {
      title: 'Mercados en Tenochtitlan',
      image: process.env.PUBLIC_URL + "/imagenes/mercadoTenochtitlan.jpg",
      content: 'Los mercados de Tenochtitlán eran puntos de encuentro vitales para el intercambio y comercio en la antigua ciudad. Organizados en secciones especializadas, ofrecían una amplia variedad de productos, desde alimentos básicos hasta artesanías y bienes de lujo. Los comerciantes establecían sus puestos en áreas designadas, donde se congregaban compradores en busca de artículos específicos.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const { title, image, content } = slides[currentSlide];

  const handleModelo = () => {
    window.open('https://sketchfab.com/3d-models/tenochtitlan-aztec-capital-3d-model-1e2b2b2b0b9a4b6e9b2b2b2b2b2b2b2b');
  };

  const navigate = useNavigate();
  const handleVolver = () => {
    navigate('/menuSelection');
  };

  return (
    <div className='background'>
      <div>
        <button className='buttonVolver' onClick={handleVolver}>Volver atrás</button>
        <button className='buttonAnterior' onClick={handlePrevSlide}>Anterior</button>
        <button className='buttonSiguiente' onClick={handleNextSlide}>Siguiente</button>
        <button className='buttonModelo' onClick={handleModelo}>Ver modelo</button>
      </div>
      <div className="slide-container">
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Arquitectura;
