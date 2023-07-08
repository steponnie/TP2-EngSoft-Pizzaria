import React, { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUserInfo] = useState({
    email: "",
    senha: "",
    carrinho: [{ nome: "Calabresa", qt: 1 }, { nome: "Portuguesa", qt: 1 }],
  });
  

  return (
    <AuthContext.Provider value={{ user, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
