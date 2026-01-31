import { createContext, useContext } from "react";

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  loading: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        user: null,
        isAuthenticated: false,
        loading: false,
        login: () => {},
        logout: () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
