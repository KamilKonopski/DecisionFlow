import { TiHomeOutline } from "react-icons/ti";
import { FaRegComments, FaRegStar, FaRegUser } from "react-icons/fa";
import { RiUserCommunityLine } from "react-icons/ri";
import { RxPeople } from "react-icons/rx";
import { MdOutlineSettings } from "react-icons/md";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { BiConversation } from "react-icons/bi";

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationLinks = [
  [{ to: "/dashboard", name: "Home", icon: <TiHomeOutline /> }],
  [
    { to: "/all-decisions", name: "All Decisions", icon: <RiUserCommunityLine /> },
    { to: "/my-decisions", name: "My Decisions", icon: <FaRegUser /> },
    { to: "/starred", name: "Starred", icon: <FaRegStar /> },
  ],
  [
    { to: "/open-discussions", name: "Open Discussions", icon: <BiConversation /> },
    { to: "/my-threads", name: "My Threads", icon: <FaRegComments /> },
  ],
  [
    { to: "/teams", name: "Teams", icon: <RxPeople /> },
    { to: "/categories", name: "Categories", icon: <HiOutlineDocumentDuplicate /> },
    { to: "/settings", name: "Settings", icon: <MdOutlineSettings /> },
  ],
];

const Navigation = () => {
  return (
    <nav className="flex flex-col gap-5 my-5 w-full px-2">
      {navigationLinks[0].map((nav) => (
        <NavigationItem key={nav.name} to={nav.to} name={nav.name} icon={nav.icon} />
      ))}
      <div>
        <h3 className="hidden md:block font-medium uppercase px-4 mb-2">Decisions</h3>
        {navigationLinks[1].map((nav) => (
          <NavigationItem key={nav.name} to={nav.to} name={nav.name} icon={nav.icon} />
        ))}
      </div>
      <div>
        <h3 className="hidden md:block font-medium uppercase px-4 mb-2">Discussions</h3>
        {navigationLinks[2].map((nav) => (
          <NavigationItem key={nav.name} to={nav.to} name={nav.name} icon={nav.icon} />
        ))}
      </div>
      <div>
        <h3 className="hidden md:block font-medium uppercase px-4 mb-2">Settings</h3>

        {navigationLinks[3].map((nav) => (
          <NavigationItem key={nav.name} to={nav.to} name={nav.name} icon={nav.icon} />
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
