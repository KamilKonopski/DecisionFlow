import { useLocation } from "react-router-dom";

import Search from "@/features/search/components/Search";
import Notifications from "../Notifications/Notifications";

import { getSectionName } from "@/shared/utils/getSectionName";

const Header = () => {
  const location = useLocation();
  const sectionName = getSectionName(location.pathname);

  return (
    <div className="py-2.5 px-5 h-20 flex items-center shadow-[10px_-4px_10px_rgba(0,0,0,0.5)]">
      <p className="flex-2">{sectionName}</p>
      <div className="flex-1 flex items-center gap-2.5">
        <Search />
        <Notifications />
        <p>User</p>
      </div>
    </div>
  );
};

export default Header;
