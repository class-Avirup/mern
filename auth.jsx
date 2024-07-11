import { createContext } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const storeToken = (servertoken) => {
    return localStorage.setItem("token", servertoken);
  };
  return (
    <AuthContext.Provider value={{ storeToken }}>
      {children}
    </AuthContext.Provider>
  );
};

