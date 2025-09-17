import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;

ProtectedRoute.jsx
src/pages/admin/ProtectedRoute.jsx
