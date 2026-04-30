import { Navigate, useSearchParams } from "react-router-dom";

import Login from "./Login/Login";

const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

const Auth = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");

  if (isAuthenticated()) {
    return <Navigate to="/home" replace />;
  }

  if (mode === "login") return <Login />;

  return <Navigate to="/auth?mode=login" replace />;
};

export default Auth;
