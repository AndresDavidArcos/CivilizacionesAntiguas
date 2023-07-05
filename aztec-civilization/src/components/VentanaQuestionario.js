import React, { useRef } from "react";
import { Html } from "@react-three/drei"
import "../styles/Questionario.css";
import { useUserData } from '../contexts/user';
import Questionaries from './Questionary';

const Questionario = () => {

    const { user } = useUserData();

    const mostrarInfo = () => {
        console.log("Mostrar información")
    }

    const ocultar = () => {
        document.querySelector('.modalQ').style.display = 'none';
        // document.querySelector('pointerLocked').nodeValue = true; 
    }

    const verificarCorrecta = () => {
        console.log("Verificar respuesta correcta")
    }

    const mostrarResultado = () => {
        if (user.aciertos > user.fallos) {
            console.log("Mostrar resultado")
        }
    }

    const seleccionarTema = (tema) => {
        var temaSeleccionado = tema;
        document.querySelector('.divMid').style.display = 'none';
        document.querySelector('.preguntas').style.display = 'flex';
        switch (tema) {
            case 'agricultura':
                console.log("Agricultura")
                break;
            case 'instrumentos':
                console.log("Instrumentos")
                break;
            case 'arte':
                console.log("Arte")
                break;
            case 'arquitectura':
                console.log("Arquitectura")
                break;
            default:
                break;
        }
    }

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
                    <h1>Nombre usuario</h1>

                    <button className="buttonCerrar" onClick={ocultar}>
                        <span className="close">&times;</span>
                    </button>

                </div>

                <div className='divMid'>
                    <h1>Selecciona el tópico para evaluarte</h1>
                    <div className='opciones'>
                        <button className='optionButtom' style={{ backgroundImage: 'url(../../imagenes/agricultura.jpg)' }} onClick={() => { seleccionarTema('agricultura') }}>Agricultura</button>
                        <button className='optionButtom' style={{ backgroundImage: 'url(../../imagenes/instrumentos.jpg)' }} onClick={() => { seleccionarTema('instrumentos') }}>Instrumentos</button>
                        <button className='optionButtom' style={{ backgroundImage: 'url(../../imagenes/arte.jpg)' }} onClick={() => { seleccionarTema('arte') }}>Arte</button>
                        <button className='optionButtom' style={{ backgroundImage: 'url(../../imagenes/estadioTlachtli.png)' }} onClick={() => { seleccionarTema('arquitectura') }}>Arquitectura</button>
                    </div>
                </div>

                <div className='preguntas'>
                    <Questionaries />

                    {/* <h1>¿Cuál es el nombre de la diosa de la tierra?</h1>
                    <div className='opciones'>
                        <button className='opcion'>Tlaloc</button>
                        <button className='opcion'>Chalchiuhtlicue</button>
                        <button className='opcion'>Centeotl</button>
                        <button className='opcion'>Xochiquetzal</button>
                    </div> */}
                </div>

            </div>
        </div>
    );
};

export default Questionario;
