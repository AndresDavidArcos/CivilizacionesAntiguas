import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }
    const handlePagina = () => {
        navigate('/pagina-principal');
    }
    return (
        <div className='breadCrumb-Container'>
            <button className='breadCrumb' onClick={handlePagina}>Página principal</button>
            <button className='breadCrumb' onClick={handleLogin}>Login</button>
            <button className='breadCrumbDisabled' >Menú de selección</button>
        </div>
    );
}

export default Menu;