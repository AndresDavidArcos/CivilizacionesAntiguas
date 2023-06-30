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
} from "@material-ui/core";
import {
  AccountCircle,
  ExpandMore,
  ExitToApp,
  Home,
  NaturePeople,
  Storefront,
} from "@material-ui/icons";

const AvatarChip = () => {

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

  const handleLogout = () => {
    // Lógica para cerrar sesión
  };

  return (
    <>
      <Chip
        label="Usuario"
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
                  <MenuItem onClick={handleClose}>
                    <Home />
                    Cultura
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Storefront />
                    Arquitectura
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NaturePeople />
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
