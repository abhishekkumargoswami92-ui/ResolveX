export const AuthProvider = ({ children }) => {
  return children;
};

export const useAuth = () => {
  return {
    user: null,
    isAuthenticated: false,
    loading: false,
    login: () => {},
    logout: () => {},
  };
};
