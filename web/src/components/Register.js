import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBarClean from './NavBarClean';
import { Box, Button, TextField } from '@mui/material';
import errorIcon from '../icons/advertencia.png'

export default function Register() {
  const baseUrl = window.location.protocol + "//" + window.location.hostname + ":4000/api/";
  const [nombre, setNombre] = useState('');
  const [clave, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(baseUrl + 'register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          clave: clave,
          nombre: nombre,
        })
      });
      const data = await response.json();
      console.log(data)
      if (data.message.status === 200) {
        navigate('/login')
      } else {
        setErrors(data.message.detail)
      }

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <NavBarClean></NavBarClean>
      <Box className='registerForm'
        sx={{ display: 'grid', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
        <TextField
          sx={{ width: '15rem' }}
          id="nombre-registrarse"
          label="Nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          variant="outlined" />
        <TextField
          sx={{ width: '15rem' }}
          id="contrasena-registrarse"
          label="Contraseña"
          type='password'
          value={clave}
          onChange={(event) => setPassword(event.target.value)}
          variant="filled" />
        {errors && (
                          <div className="errorMsg">
                            <img src={errorIcon}></img>
                             <p>{errors}</p>
                          </div>
                        )}        
        <Button variant="contained" onClick={handleSubmit}>REGISTRARSE</Button>
        <br></br>
        <Button variant="text">
          <Link to="/login">INICIAR SESION</Link>
        </Button>

      </Box>
    </>
  );
}
