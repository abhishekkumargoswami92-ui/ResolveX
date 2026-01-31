export const AuthProvider = ({ children }) => {
  return children;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx ?? {
    user: null,
    isAuthenticated: false,
    loading: false,
    login: () => {},
    logout: () => {},
  };
};

 