import React, { useRef } from "react";
import { Html } from "@react-three/drei"
import "../styles/Questionario.css";
import { useUserData } from '../contexts/user';
import { useMenuSelectionData } from "../contexts/menuSelection";

const Questionario = () => {

    const { pointerLocked, setPointerLocked} = useMenuSelectionData()

    var preguntaActual = 0;

    var preguntas = [];

    const { user } = useUserData();

    const mostrarInfo = () => {
        console.log("Mostrar información")
    }

    const ocultar = () => {
        document.querySelector('.modalQ').style.display = 'none';
        setPointerLocked(true)
    }

    const verificarCorrecta = () => {
        console.log("Verificar respuesta correcta")
    }

    const mostrarResultado = () => {
        if (user.aciertos > user.fallos) {
            console.log("Mostrar resultado")
        }
    }

    const seleccionarTema = async (tema) => {
        document.getElementById('topicos').style.display = 'none';
        document.getElementById('preguntas').style.display = 'flex';

        const baseUrl = "http://localhost:4000/api/";
        const response = await fetch(baseUrl + 'questionaire/getAll');
        const data = await response.json();

        switch (tema) {
            case 'agricultura':
                console.log("Agricultura")
                preguntas = data.filter((d) => d.nombre === 'agricultura')[0]['preguntasRespuestas'];
                break;
            case 'instrumentos':
                console.log("Instrumentos")
                preguntas = data.filter((d) => d.nombre === 'Instrumentos')[0]['preguntasRespuestas'];
                break;
            case 'arte':
                console.log("Arte")
                preguntas = data.filter((d) => d.nombre === 'Arte')[0]['preguntasRespuestas'];
                break;
            case 'arquitectura':
                console.log("Arquitectura")
                preguntas = data.filter((d) => d.nombre === 'Arquitectura')[0]['preguntasRespuestas'];
                break;
            default:
                break;
        }

        console.log(preguntas)

        document.getElementById('pregunta').innerHTML = preguntas[preguntaActual].pregunta;
        document.getElementById('opcion1').innerHTML = preguntas[preguntaActual].respuestas[0];
        document.getElementById('opcion2').innerHTML = preguntas[preguntaActual].respuestas[1];
        document.getElementById('opcion3').innerHTML = preguntas[preguntaActual].respuestas[2];
        document.getElementById('opcion4').innerHTML = preguntas[preguntaActual].respuestas[3];
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

                <div id='preguntas' className='preguntas'>
                    <h1 className="pregunta" id='pregunta'></h1>
                    <div className='opciones'>
                        <button id='opcion1' className='opcion' onClick={verificarCorrecta}></button>
                        <button id='opcion2' className='opcion' onClick={verificarCorrecta}></button>
                        <button id='opcion3' className='opcion' onClick={verificarCorrecta}></button>
                        <button id='opcion4' className='opcion' onClick={verificarCorrecta}></button>
                    </div>
                </div>

                <div id="resultado" className='resultado'>
                    <h1>Resultado</h1>
                </div>

            </div>
        </div>
    );
};

export default Questionario;
