// MOCK AUTH CONTEXT — SAFE, NO HOOKS, NO SIDE EFFECTS

export const AuthProvider = ({ children }) => children;

export const useAuth = () => ({
  user: {
    name: "Demo User",
    role: "student",
  },
  isAuthenticated: true,
  loading: false,
  login: () => {},
  logout: () => {},
});
