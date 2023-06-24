import React, { useState, useEffect } from 'react';
import '../styles/screenLoader.css'; 


const LoaderScreen = () => {
  const [randomFact, setRandomFact] = useState('');

  // Lista de mensajes curiosos sobre los aztecas
  const factsList = [
    'Los aztecas crearon una de las civilizaciones más grandes de la antigua Mesoamérica.',
    'Los aztecas tenían un sistema de escritura jeroglífica y utilizaban calendarios complejos.',
    'La capital azteca, Tenochtitlán, estaba construida en una isla y es el sitio donde ahora se encuentra Ciudad de México.',
    'Los aztecas practicaban sacrificios humanos como parte de sus rituales religiosos.',
    'El maíz era un alimento básico en la dieta de los aztecas.',
    'Los aztecas desarrollaron técnicas avanzadas de agricultura, como la construcción de chinampas (islas artificiales) para cultivar.',
  ];

  useEffect(() => {
    // Obtener un mensaje aleatorio de la lista
    const randomIndex = Math.floor(Math.random() * factsList.length);
    setRandomFact(factsList[randomIndex]);
  }, []);

  return (
    <div className="loading-screen">
      <img className="loading-image" src="../../imagenes/strong-aztec.jpg" alt="Pantalla de carga" />
      <div className="loading-overlay">
        <p className="loading-message">{randomFact}</p>
        <p className="loading-notice">Cargando página web...</p>
      </div>
    </div>
  );
};

export default LoaderScreen