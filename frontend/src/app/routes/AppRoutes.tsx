import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "@/features/authentication/components/Auth/Auth";
import NotFound from "@/shared/ui/NotFound/NotFound";
import Home from "@/pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import RootRedirect from "./RootRedirect";
import MainLayout from "@/shared/layout/MainLayout";
import AllDesisions from "@/pages/AllDesisions";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Home />} />
          <Route path="/all-decisions" element={<AllDesisions />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
