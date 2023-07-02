import React, { useRef } from "react";
import { Html } from "@react-three/drei"


const Questionario = ({ onClose }) => {

    return (

        <Html>
            <div className="modal">
                <div className="modal-content">
                    <p>Holaaaa</p>
                    <button className="buttonCerrar" onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </Html>
    );
};

export default Questionario;
