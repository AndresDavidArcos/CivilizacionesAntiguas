import { createContext, useContext, useState } from "react";

const MenuContext = createContext({});

export const MenuSelectionProvider = (props) => {
  const [pointerLocked, setPointerLocked] = useState(true);

  return (
    <MenuContext.Provider
      value={{
        pointerLocked,
        setPointerLocked
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export const useMenuSelectionData = () => {
  return useContext(MenuContext);
};
