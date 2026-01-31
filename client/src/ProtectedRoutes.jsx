import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

// Logged-in check
export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Student-only
export const StudentRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "student") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return children;
};

// Admin-only
export const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/student/dashboard" replace />;
  }

  return children;
};
