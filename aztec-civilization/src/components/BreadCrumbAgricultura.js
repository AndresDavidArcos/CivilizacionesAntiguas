import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const BCAgricultura = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }
    const handleMenu = () => {
        navigate('/menuSelection');
    }

    const handlePagina = () => {
        navigate('/pagina-principal');
    }

    const handleInfo = () => {
        navigate('/agricultura-info');
    }


    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className='breadCrumb-Container'>
            <button className='breadCrumb' onClick={handlePagina}>Página principal</button>
            <button className='breadCrumb' onClick={handleLogin}>Login</button>
            <button className='breadCrumb' onClick={handleMenu}>Menú de selección</button>
            <button className='breadCrumb' onClick={handleInfo}>La Agricultura Azteca</button>
            <button className='breadCrumbDisabled' >Agricultura</button>
            <img
                src={process.env.PUBLIC_URL + "/imagenes/ayuda.png"}
                alt="Imagen"
                style={{
                    width: "30px",
                    height: "30px",
                    position: "fixed",
                    top: "0px",
                    right: "0px",
                }}
                onClick={handleOpen}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="instrucciones">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Intrucciones
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Puede explorar la escena con las teclas WASD.
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Para leer más acerca del cultivo haga click en el de su
                        interés y para cerrar la información vuelve a hacer click.
                    </Typography>
                    <Button
                        variant="contained"
                        size="small"
                        className="boton"
                        style={{
                            position: "absolute",
                            top: "297px",
                            left: "50px",
                            background: "red",
                        }}
                        onClick={() => setOpen(false)}
                    >
                        Cerrar
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}

export default BCAgricultura;