import { useLocation } from "react-router-dom";

import Search from "@/features/search/components/Search";
import Notifications from "./Notifications/Notifications";
import UserProfile from "./UserProfile/UserProfile";

import { getSectionName } from "@/shared/utils/getSectionName";

const Header = () => {
  const location = useLocation();
  const sectionName = getSectionName(location.pathname);

  return (
    <header
      className="
        sticky top-0 z-30
        flex flex-col gap-4
        border-b border-border
        bg-surface
        px-4 py-4
        shadow-sm
        md:h-20
        md:flex-row
        md:items-center
        md:justify-between
        md:px-6
      "
    >
      <div className="min-w-0">
        <h1
          className="
            truncate
            text-xl font-semibold
            text-text-primary
            md:text-2xl
          "
        >
          {sectionName}
        </h1>
      </div>
      <div
        className="
          flex w-full items-center gap-2
          md:w-auto
          md:min-w-130
          md:justify-end
        "
      >
        <div className="flex-1 md:max-w-sm">
          <Search />
        </div>
        <Notifications />
        <UserProfile />
      </div>
    </header>
  );
};

export default Header;
