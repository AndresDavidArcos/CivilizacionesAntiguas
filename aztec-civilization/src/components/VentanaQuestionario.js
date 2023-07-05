import React, { useRef } from "react";
import { Html } from "@react-three/drei"
import "../styles/Questionario.css";
import { useUserData } from '../contexts/user';

const Questionario = () => {

    const { user } = useUserData();

    const mostrarInfo = () => {
        console.log("Mostrar información")
    }

    const ocultar = () => {
        document.querySelector('.modalQ').style.display = 'none';
        // setPointerLocked(true);
    }

    const setPointerLocked = (value) => {
        document.querySelector('.pointerLock').style.display = value ? 'block' : 'none';
    }

    const seleccionarTema = (tema) => {
        console.log("Seleccionar tema: ", tema)
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

                {/* <div className='preguntas'>
                        <h1>¿Cuál es el nombre de la diosa de la tierra?</h1>
                        <div className='opciones'>
                            <button className='opcion'>Tlaloc</button>
                            <button className='opcion'>Chalchiuhtlicue</button>
                            <button className='opcion'>Centeotl</button>
                            <button className='opcion'>Xochiquetzal</button>
                        </div>
                    </div> */}
                {/* </div> */}

            </div>
        </div>
    );
};

export default Questionario;
