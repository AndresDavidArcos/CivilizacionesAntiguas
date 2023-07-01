import React, { useState } from "react";

const QuestionaireForm = () => {

//   const baseUrl = "https://civilizaciones-antiguas.vercel.app/api/";
  const baseUrl = "http://localhost:4000/api/";

  const initialQuestionaire = {
    nombre: "",
    preguntasRespuestas: [],
  };

  const [questionaire, setQuestionaire] = useState(initialQuestionaire);

  const handleNombreChange = (e) => {
    setQuestionaire({ ...questionaire, nombre: e.target.value });
  };

  const handlePreguntaChange = (index, e) => {
    const preguntasRespuestasCopy = [...questionaire.preguntasRespuestas];
    preguntasRespuestasCopy[index].pregunta = e.target.value;
    setQuestionaire({ ...questionaire, preguntasRespuestas: preguntasRespuestasCopy });
  };

  const handleRespuestaChange = (preguntaIndex, respuestaIndex, e) => {
    const preguntasRespuestasCopy = [...questionaire.preguntasRespuestas];
    preguntasRespuestasCopy[preguntaIndex].respuestas[respuestaIndex] = e.target.value;
    setQuestionaire({ ...questionaire, preguntasRespuestas: preguntasRespuestasCopy });
  };

  const handleAgregarPregunta = () => {
    const preguntasRespuestasCopy = [...questionaire.preguntasRespuestas];
    preguntasRespuestasCopy.push({ pregunta: "", respuestas: [] });
    setQuestionaire({ ...questionaire, preguntasRespuestas: preguntasRespuestasCopy });
  };

  const handleAgregarRespuesta = (index) => {
    const preguntasRespuestasCopy = [...questionaire.preguntasRespuestas];
    preguntasRespuestasCopy[index].respuestas.push("");
    preguntasRespuestasCopy[index].respuestaCorrecta = "";
    setQuestionaire({ ...questionaire, preguntasRespuestas: preguntasRespuestasCopy });
  };


  const handleRespuestaCorrectaChange = (preguntaIndex, e) => {
    const preguntasRespuestasCopy = [...questionaire.preguntasRespuestas];
    const respuestaCorrectaIndex = parseInt(e.target.value);
    preguntasRespuestasCopy[preguntaIndex].respuestaCorrecta = preguntasRespuestasCopy[preguntaIndex].respuestas[respuestaCorrectaIndex];
    setQuestionaire({ ...questionaire, preguntasRespuestas: preguntasRespuestasCopy });
  };
  
  const handleLimpiarCuestionarios = () => {
    setQuestionaire(initialQuestionaire);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(questionaire);

    try {
        const response = await fetch(baseUrl + 'questionaire/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(questionaire)
        });
        const data = await response.json();
        console.log(data)
        if (data.message.status !== 400) {
            console.log("se guardo correctamente el cuestionario: ", questionaire)
        } else {
            console.log(data)
        }
  
      } catch (error) {
        console.log(error);
      }

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre del cuestionario:</label>
        <input type="text" id="nombre" value={questionaire.nombre} onChange={handleNombreChange} />
      </div>
      <div>
        <h3>Preguntas y respuestas:</h3>
        {questionaire.preguntasRespuestas.map((preguntaRespuesta, index) => (
          <div key={index}>
            <input
              type="text"
              value={preguntaRespuesta.pregunta}
              onChange={(e) => handlePreguntaChange(index, e)}
              placeholder="Ingrese la pregunta"
            />
            {preguntaRespuesta.respuestas.map((respuesta, respuestaIndex) => (
                <div key={respuestaIndex}>
                <input
                    type="text"
                    value={respuesta}
                    onChange={(e) => handleRespuestaChange(index, respuestaIndex, e)}
                    placeholder="Ingrese una respuesta"
                />
                <label htmlFor={`respuestaCorrecta-${index}-${respuestaIndex}`}>Respuesta Correcta:</label>
                <input
                    type="radio"
                    id={`respuestaCorrecta-${index}-${respuestaIndex}`}
                    name={`respuestaCorrecta-${index}`}
                    value={respuestaIndex}
                    onChange={(e) => handleRespuestaCorrectaChange(index, e)}
                />
                </div>
            ))}

            <button type="button" onClick={() => handleAgregarRespuesta(index)}>
              Agregar respuesta
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAgregarPregunta}>
          Agregar pregunta
        </button>
      </div>
      <div>
        <button type="submit">Agregar cuestionario</button>
        <button type="button" onClick={handleLimpiarCuestionarios}>
          Limpiar cuestionarios
        </button>
      </div>
    </form>
  );
};

export default QuestionaireForm;
