import React, { useRef } from "react";
import { Html } from "@react-three/drei"
import "../styles/Questionario.css";
import { useUserData } from '../contexts/user';
import { useMenuSelectionData } from "../contexts/menuSelection";

const Questionario = () => {

    const { pointerLocked, setPointerLocked } = useMenuSelectionData()

    const baseUrl = "http://localhost:4000/api/";

    var preguntaActual = 0;
    var quiz = 0;
    var aciertos = 0;
    var fallos = 0;
    var preguntas = [];
    var data = [];

    var { user } = useUserData();

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const mostrarInfo = () => {
        console.log("Mostrar información")
    }

    const ocultar = () => {
        document.querySelector('.modalQ').style.display = 'none';
        setPointerLocked(true)
    }

    const verificarCorrecta = async (respuesta) => {
        if (respuesta == preguntas[preguntaActual].respuestaCorrecta) {
            mostrarResultado(true);
            aciertos++;
        }
        else {
            mostrarResultado(false);
            fallos++;
        }

        console.log("Aciertos: " + aciertos + " Fallos: " + fallos)

        await delay(2000);
        console.log()

        preguntaActual++;
        if (preguntaActual == preguntas.length) {
            preguntaActual = 0;
            document.getElementById('preguntas').style.display = 'none';
            document.getElementById('resultado').style.display = 'none';
            mostrarFinal();
        } else {
            document.getElementById('preguntas').style.display = 'block';
            document.getElementById('resultado').style.display = 'none';
            mostrarPreguntas();
        }
    }

    const mostrarResultado = async (state) => {
        if (state == true) {
            document.getElementById('resultado').innerHTML = 'Has acertado';
        } else {
            document.getElementById('resultado').innerHTML = 'Has fallado';
        }

        document.getElementById('preguntas').style.display = 'none';
        document.getElementById('resultado').style.display = 'block';
    }

    const mostrarFinal = async () => {
        var porcentaje = (aciertos / preguntas.length) * 100;

        document.getElementById('aciertos').innerHTML = 'Respuestas correctas: ' + aciertos;
        document.getElementById('fallos').innerHTML = 'Respuestas incorrectas: ' + fallos;

        if (porcentaje >= 70) {
            document.getElementById('porcentaje').innerHTML = '¡Has aprobado este questionario! obtuviste un ' + porcentaje + '%';
            if (Object.keys(user).length !== 0) {
                await fetch(`${baseUrl}questionaire/update/${user.data.nombre}/${data[quiz].nombre}/${true}`, {
                    method: 'PUT',
                })
            }
        } else {
            document.getElementById('porcentaje').innerHTML = 'Has reprobado este questionario, obtuviste un ' + porcentaje + '%';
            if (Object.keys(user).length !== 0) {
                await fetch(`${baseUrl}questionaire/update/${user.data.nombre}/${data[quiz].nombre}/${false}`, {
                    method: 'PUT',
                })
            }
        }

        document.getElementById('final').style.display = 'flex';
    }

    const volverInicio = () => {
        document.getElementById('final').style.display = 'none';
        document.getElementById('topicos').style.display = 'flex';
    }

    const mostrarPreguntas = () => {
        document.getElementById('pregunta').innerHTML = preguntas[preguntaActual].pregunta;
        document.getElementById('opcion1').innerHTML = preguntas[preguntaActual].respuestas[0];
        document.getElementById('opcion2').innerHTML = preguntas[preguntaActual].respuestas[1];
        document.getElementById('opcion3').innerHTML = preguntas[preguntaActual].respuestas[2];
        document.getElementById('opcion4').innerHTML = preguntas[preguntaActual].respuestas[3];
    }

    const seleccionarTema = async (tema) => {
        const response = await fetch(baseUrl + 'questionaire/getAll');
        data = await response.json();

        switch (tema) {
            case 'agricultura':
                console.log("Agricultura")
                preguntas = data.filter((d) => d.nombre === 'agricultura')[0]['preguntasRespuestas'];
                quiz = data.findIndex((d) => d.nombre === 'agricultura');
                break;
            case 'instrumentos':
                console.log("Instrumentos")
                preguntas = data.filter((d) => d.nombre === 'Instrumentos')[0]['preguntasRespuestas'];
                quiz = data.findIndex((d) => d.nombre === 'Instrumentos');
                break;
            case 'arte':
                console.log("Arte")
                preguntas = data.filter((d) => d.nombre === 'Arte')[0]['preguntasRespuestas'];
                quiz = data.findIndex((d) => d.nombre === 'Arte');
                break;
            case 'arquitectura':
                console.log("Arquitectura")
                preguntas = data.filter((d) => d.nombre === 'Arquitectura')[0]['preguntasRespuestas'];
                quiz = data.findIndex((d) => d.nombre === 'Arquitectura');
                break;
            default:
                break;
        }

        const quizBuenos = Object.keys(user).length !== 0 ? user.data.evaluaciones[quiz].aciertos : 0;
        const quizMalos = Object.keys(user).length !== 0 ? user.data.evaluaciones[quiz].fallos : 0;

        document.getElementById('aciertosQuiz').innerHTML = '¡Has superado este quiz: ' + quizBuenos + ' veces!';
        document.getElementById('fallosQuiz').innerHTML = 'Has fallado este quiz: : ' + quizMalos + ' veces';

        aciertos = 0;
        fallos = 0;

        console.log(data)

        mostrarPreguntas();

        document.getElementById('topicos').style.display = 'none';
        document.getElementById('puntajes').style.display = 'flex';
        await delay(3000);
        document.getElementById('puntajes').style.display = 'none';
        document.getElementById('preguntas').style.display = 'block';
    }

    console.log(user)

    return (
        <div id='modal' className="modalQ">
            <div className="modal-contentQ">
                <div className='topDiv'>
                    <img
                        src={process.env.PUBLIC_URL + "/imagenes/ayuda.png"}
                        alt="Imagen"
                        style={{
                            width: "50px",
                            height: "50px",
                            background: 'transparent',
                            borderRadius: '50%',
                            // position: "fixed",
                            // top: "0px",
                            // right: "0px",
                        }}
                        onClick={mostrarInfo}

                    />
                    <h1>{Object.keys(user).length !== 0 ? user.data.nombre : 'Logueate para guardar progreso'}</h1>

                    <button className="buttonCerrar" onClick={ocultar}>
                        <span className="close">&times;</span>
                    </button>
                </div>

                <div id='topicos' className='divContainer'>
                    <h1 className="textoEvaluar">Selecciona el tópico para evaluarte</h1>
                    <div className='temas'>
                        <button className='optionButtom' style={{ backgroundImage: 'url(../../imagenes/agricultura.jpg)' }} onClick={() => { seleccionarTema('agricultura') }}>Agricultura</button>
                        <button className='optionButtom' style={{ backgroundImage: 'url(../../imagenes/instrumentos.jpg)' }} onClick={() => { seleccionarTema('instrumentos') }}>Instrumentos</button>
                        <button className='optionButtom' style={{ backgroundImage: 'url(../../imagenes/arte.jpg)' }} onClick={() => { seleccionarTema('arte') }}>Arte</button>
                        <button className='optionButtom' style={{ backgroundImage: 'url(../../imagenes/estadioTlachtli.png)' }} onClick={() => { seleccionarTema('arquitectura') }}>Arquitectura</button>
                    </div>
                </div>

                <div id='puntajes' className='puntajes'>
                    <h1 id='aciertosQuiz' className='aciertosQuiz'>Aciertos: </h1>
                    <h1 id='fallosQuiz' className='fallosQuiz'>Fallos: </h1>
                </div>

                <div id='preguntas' className='preguntas'>
                    <h1 className="pregunta" id='pregunta'>Pregunta</h1>
                    <div className='opciones'>
                        <button id='opcion1' className='opcionRespuesta' onClick={() => { verificarCorrecta(document.getElementById('opcion1').innerHTML) }}>Opción1</button>
                        <button id='opcion2' className='opcionRespuesta' onClick={() => { verificarCorrecta(document.getElementById('opcion2').innerHTML) }}>Opción2</button>
                        <button id='opcion3' className='opcionRespuesta' onClick={() => { verificarCorrecta(document.getElementById('opcion3').innerHTML) }}>Opción3</button>
                        <button id='opcion4' className='opcionRespuesta' onClick={() => { verificarCorrecta(document.getElementById('opcion4').innerHTML) }}>Opción4</button>
                    </div>
                </div>

                <div id="resultado" className='resultado'>
                    <h1>Resultado</h1>
                </div>

                <div id='final' className='final'>
                    <h1 id='aciertos'>Aciertos: </h1>
                    <hr></hr>
                    <h1 id='fallos'>Fallos: </h1>
                    <hr></hr>
                    <h1 id='porcentaje'>Porcentaje: </h1>
                    <hr></hr>
                    <button id='volverInicio' className="buttonCerrar" onClick={volverInicio}>Volver al inicio de los quices</button>
                </div>

            </div>
        </div>
    );
};

export default Questionario;
