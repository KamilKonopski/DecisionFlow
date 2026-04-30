import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "@/features/authentication/components/Auth/Auth";
import NotFound from "@/shared/ui/NotFound/NotFound";
import Home from "@/pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import RootRedirect from "./RootRedirect";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
