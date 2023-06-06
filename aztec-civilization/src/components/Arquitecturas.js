import React from 'react';

const Modelos = ({ modelo, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <p>{modelo}</p>
                <button className="buttonCerrar" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default Modelos;
