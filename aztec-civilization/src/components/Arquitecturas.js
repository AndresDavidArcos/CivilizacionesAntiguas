import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Modelos = ({ slide, onClose }) => {
    const { nodes, materials } = useGLTF("../../modelos/galeria_de_instrumentos.glb");
    return (
        <div className="modal">
            <div className="modal-content">
                <p>{slide.instructions}</p>
                {slide.model}
                <button className="buttonCerrar" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default Modelos;
