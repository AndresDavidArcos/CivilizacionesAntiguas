import React, { } from 'react';
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";


const Art = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }
    const handleMenu = () => {
        navigate('/menuSelection');
    }
    const handleInfo = () => {
        navigate('/arte-info');
    }

    return (
      <div className="breadCrumb-Container">
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
              Puede explorar la habitación con las letras a w s d.
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Para leer más acerca del arte dirija su mirada
              hacia el objeto de interes.
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

export default Art;