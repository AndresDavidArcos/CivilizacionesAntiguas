import React, { useState } from 'react';
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
      content: 'Los mercados de Tenochtitlán eran puntos de encuentro vitales para el intercambio y comercio en la antigua ciudad. Organizados en secciones especializadas, ofrecían una amplia variedad de productos, desde alimentos básicos hasta artesanías y bienes de lujo. Los comerciantes establecían sus puestos en áreas designadas, donde se congregaban compradores en busca de artículos específicos. Los mercados utilizaban un sistema de trueque basado en el cacao como medio de cambio. Además de su función económica, los mercados también eran importantes lugares de encuentro social y cultural. Reflejaban la diversidad y sofisticación de la vida en Tenochtitlán, donde la ciudad cobraba vida a través del bullicio y la interacción en estos vibrantes espacios.',
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

  return (
    <div className="slide-container">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{content}</p>
      <div className="button-container">
        <button onClick={handlePrevSlide}>Anterior</button>
        <button onClick={handleNextSlide}>Siguiente</button>
      </div>
    </div>
  );
};

export default Arquitectura;
