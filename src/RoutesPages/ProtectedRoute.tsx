// RoutesPages/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children:React.ReactNode;// Este prop debe ser obligatorio
}

const ProtectedRoute = ({ isAuthenticated, children }: ProtectedRouteProps) => {
  console.log(isAuthenticated)
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
