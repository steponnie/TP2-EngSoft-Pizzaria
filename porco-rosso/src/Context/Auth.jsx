import React, { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    senha: "",
    carrinho: [{ nome: "Calabresa", qt: 1 }, { nome: "Portuguesa", qt: 1 }],
  });
  

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
