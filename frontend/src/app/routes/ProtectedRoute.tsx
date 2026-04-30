import { Navigate } from "react-router-dom";

import { isAuthenticated } from "@/features/authentication/lib/auth";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/auth?mode=login" replace />;
  }

  return children;
};

export default ProtectedRoute;
