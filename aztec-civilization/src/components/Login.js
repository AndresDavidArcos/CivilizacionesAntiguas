import React, { createContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBarClean from './NavBarClean'
import { Box, Button, TextField } from '@mui/material';
import errorIcon from "../icons/advertencia.png";
import { useUserData } from '../contexts/user';

export default function Login() {
  const baseUrl = window.location.protocol + "//" + window.location.hostname + ":4000/api/";
  // const baseUrl = "https://civilizaciones-antiguas.vercel.app/api/";
  const {setUser} = useUserData();
  const [nombre, setUsername] = useState('');
  const [clave, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(baseUrl + 'login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: nombre,
          clave: clave
        })
      });

      const data = await response.json();
      if (response.status === 200) {
        setUser(data)
        navigate('/pagina-principal', { state: { user: data } })
      } else {
        setErrors(data.message.detail)
      }

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <NavBarClean></NavBarClean>
      <Box
        sx={{display:'grid', alignItems:'center', justifyContent:'center', gap:'5px'}}
        component="form">
        <br />
        <TextField
        sx={{width:'15rem'}}
          id="usuario-login"
          label="Usuario"
          value={nombre}
          onChange={(event) => setUsername(event.target.value)}
          variant="outlined" />
        <br />
        <TextField
          sx={{width:'15rem'}}
          id="contrasena-login"
          label="Contraseña"
          type='password'
          value={clave}
          onChange={(event) => setPassword(event.target.value)}
          variant="filled" />
        <br></br>
        {errors && (
                          <div className="errorMsg">
                            <img src={errorIcon}></img>
                             <p>{errors}</p>
                          </div>
                        )}
        <Button variant="contained" onClick={handleSubmit}>Iniciar sesión</Button>
        <br></br>
        <Button variant="text">
          <Link to="/register">Registrarse</Link>
        </Button>

      </Box>
    </>
  );
}
