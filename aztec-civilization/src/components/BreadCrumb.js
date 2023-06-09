import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }
    return (
        <div className='breadCrumb-Container'>
            <button className='breadCrumb' onClick={handleLogin}>Login</button>
            <button className='breadCrumbDisabled' >Menú de selección</button>
        </div>
    );
}

export default Menu;