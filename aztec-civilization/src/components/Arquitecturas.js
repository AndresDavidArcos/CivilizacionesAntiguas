import React, { useRef } from "react";

const Modelos = ({ slide, onClose }) => {
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
