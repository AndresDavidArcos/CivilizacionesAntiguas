import React, { useRef } from "react";
import { Html } from "@react-three/drei"
import "../styles/Questionario.css";
import { useUserData } from '../contexts/user';

const Questionario = ({ onClose }) => {


    const { user } = useUserData();

    const mostrarInfo = () => {
        console.log("Mostrar información")
    }

    return (
        <div className="modalQ">
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

                </div>

                <div className='divMid'>

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


                <button className="buttonCerrar" onClick={console.log('cerrar')}>Cerrar</button>
            </div>
        </div>
    );
};

export default Questionario;
