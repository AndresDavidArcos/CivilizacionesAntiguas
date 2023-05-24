import { createContext, useContext, useState } from "react";

const UserContext = createContext({});

export const UserProvider = (props) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserData = () => {
  return useContext(UserContext);
};
