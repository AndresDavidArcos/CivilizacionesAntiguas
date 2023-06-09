import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Galery = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }
    const handleMenu = () => {
        navigate('/menuSelection');
    }
    const handleInstrumentos = () => {
        navigate('/instrumentos');
    }
    return (
        <div className='breadCrumb-Container'>
            <button className='breadCrumb' onClick={handleLogin}>Login</button>
            <button className='breadCrumb' onClick={handleMenu}>Menú de selección</button>
            <button className='breadCrumb' onClick={handleInstrumentos}>Instrumentos</button>
            <button className='breadCrumbDisabled' >Galeria</button>
        </div>
    );
}

export default Galery;