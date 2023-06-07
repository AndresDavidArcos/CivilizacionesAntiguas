import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Modelos = ({ modelo, onClose }) => {
    const { nodes, materials } = useGLTF("../../modelos/galeria_de_instrumentos.glb");
    return (
        <div className="modal">
            <div className="modal-content">
                {modelo}
                <button className="buttonCerrar" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default Modelos;
