import { Navigate } from "react-router-dom";

import { isAuthenticated } from "@/features/authentication/lib/auth";

const RootRedirect = () => {
  if (isAuthenticated()) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Navigate to="/auth?mode=login" replace />;
};

export default RootRedirect;
