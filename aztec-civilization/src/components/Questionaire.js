import React, { useState } from "react";
import "../styles/questionary.css";

const QuestionaireForm = () => {
  const baseUrl = "https://civilizaciones-antiguas.vercel.app/api/";
  // const baseUrl = "http://localhost:4000/api/";

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
    preguntasRespuestasCopy[preguntaIndex].respuestaCorrecta =
      preguntasRespuestasCopy[preguntaIndex].respuestas[respuestaCorrectaIndex];
    setQuestionaire({ ...questionaire, preguntasRespuestas: preguntasRespuestasCopy });
  };

  const handleLimpiarCuestionarios = () => {
    setQuestionaire(initialQuestionaire);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(questionaire);

    try {
      const response = await fetch(baseUrl + "questionaire/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(questionaire),
      });
      const data = await response.json();
      console.log(data);
      if (data.message.status !== 400) {
        console.log("se guardo correctamente el cuestionario: ", questionaire);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ width: '100%', height: '100vh', top: '0', position: 'absolute', background: "linear-gradient(135deg, #FF9B00, #1c3344)" }}>
      <form onSubmit={handleSubmit} className="aztec-form">
        <div>
          <label htmlFor="nombre" className="aztec-label">
            Nombre del cuestionario:
          </label>
          <input type="text" id="nombre" value={questionaire.nombre} onChange={handleNombreChange} className="aztec-input" />
        </div>
        <div>
          <h3 className="aztec-heading">Preguntas y respuestas:</h3>
          {questionaire.preguntasRespuestas.map((preguntaRespuesta, index) => (
            <div key={index} className="aztec-question-container">
              <input
                type="text"
                value={preguntaRespuesta.pregunta}
                onChange={(e) => handlePreguntaChange(index, e)}
                placeholder="Ingrese la pregunta"
                className="aztec-question-input"
              />
              {preguntaRespuesta.respuestas.map((respuesta, respuestaIndex) => (
                <div key={respuestaIndex} className="aztec-answer-container">
                  <input
                    type="text"
                    value={respuesta}
                    onChange={(e) => handleRespuestaChange(index, respuestaIndex, e)}
                    placeholder="Ingrese una respuesta"
                    className="aztec-answer-input"
                  />
                  <label htmlFor={`respuestaCorrecta-${index}-${respuestaIndex}`} className="aztec-radio-label">
                    Respuesta Correcta:
                  </label>
                  <input
                    type="radio"
                    id={`respuestaCorrecta-${index}-${respuestaIndex}`}
                    name={`respuestaCorrecta-${index}`}
                    value={respuestaIndex}
                    onChange={(e) => handleRespuestaCorrectaChange(index, e)}
                    className="aztec-radio-input"
                  />
                </div>
              ))}

              <button type="button" onClick={() => handleAgregarRespuesta(index)} className="aztec-add-answer-button">
                Agregar respuesta
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAgregarPregunta} className="aztec-add-question-button">
            Agregar pregunta
          </button>
        </div>
        <div>
          <button type="submit" className="aztec-submit-button">Subir cuestionario</button>
          <button type="button" onClick={handleLimpiarCuestionarios} className="aztec-clear-button">
            Limpiar cuestionarios
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionaireForm;
