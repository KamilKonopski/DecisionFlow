import { Outlet } from "react-router-dom";
import Header from "../ui/Header/Header";
import LeftPanel from "../ui/LeftPanel/LeftPanel";

const MainLayout = () => {
  return (
    <div className="flex h-dvh flex-row">
      <LeftPanel />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 md:p-5 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
