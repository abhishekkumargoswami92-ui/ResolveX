export const AuthProvider = ({ children }) => {
  return children;
};

export const useAuth = () => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  login: () => {},
  logout: () => {},
});


 