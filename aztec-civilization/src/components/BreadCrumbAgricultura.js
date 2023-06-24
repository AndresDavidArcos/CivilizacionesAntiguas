
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const BCAgricultura = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }
    const handleMenu = () => {
        navigate('/menuSelection');
    }
    return (
        <div className='breadCrumb-Container'>
            <button className='breadCrumb' onClick={handleLogin}>Login</button>
            <button className='breadCrumb' onClick={handleMenu}>Menú de selección</button>
            <button className='breadCrumbDisabled' >Agricultura</button>
        </div>
    );
}

export default BCAgricultura;