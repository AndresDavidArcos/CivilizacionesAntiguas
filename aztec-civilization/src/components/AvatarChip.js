import React, { useState } from "react";
import {
  Avatar,
  Chip,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import {
  ExpandMore,
  ExitToApp,
  Storefront,
  Agriculture,
  MenuBook,
  Home,
  Person,
  ColorLens,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
{
  /** este componente es para que el usuario tenga una mejor navegación por la página y pueda ver su progreso */
}
const AvatarChip = () => {
  const navigate = useNavigate();

  const handleMenu = () => {
    navigate("/menuSelection");
  };

  const handlePagina = () => {
    navigate("/pagina-principal");
  };

  const handleCultura = () => {
    navigate("/arte-instrumentos");
  };

  const handleAgricultura = () => {
    navigate("/agricultura");
  };

  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setIsOpen(false);
  };

  //Lógica para cerrar sesión
  const handleLogout = () => {};

  return (
    <>
      <Chip
        sx={{
          height: "auto",
          width: "auto",
          backgroundColor: "yellow",
          display: "flex",
          alignItems: "center",
        }}
        label={
          <>
            <Person sx={{ marginRight: "0.5rem" }} />
            Usuario
          </>
        }
        size="medium"
        icon={<ExpandMore />}
        onClick={handleToggle}
        deleteIcon={<ExpandMore />}
        ref={anchorRef}
      />

      <Popper
        open={isOpen}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={isOpen} id="menu-list-grow">
                  <MenuItem>
                    <Person />
                    Perfil
                  </MenuItem>
                  <MenuItem onClick={handlePagina}>
                    <Home />
                    Página principal
                  </MenuItem>
                  <MenuItem onClick={handleMenu}>
                    <MenuBook />
                    Menú de selección
                  </MenuItem>
                  <MenuItem onClick={handleCultura}>
                    <ColorLens />
                    Cultura
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Storefront />
                    Arquitectura
                  </MenuItem>
                  <MenuItem onClick={handleAgricultura}>
                    <Agriculture />
                    Agricultura
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <ExitToApp />
                    Cerrar sesión
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default AvatarChip;
