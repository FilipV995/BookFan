import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [allBooks, setAllBooks] = useState(null);

  const saveToken = (newToken) => {
    setToken(newToken);
  };

  const saveAllBooks = (allBooks) => {
    setAllBooks(allBooks);
  };

  return (
    <AuthContext.Provider value={{ token, saveToken, allBooks, saveAllBooks }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
