import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavigationItemProps {
  to: string;
  name: string;
  icon: ReactNode;
}

const NavigationItem = ({ to, name, icon }: NavigationItemProps) => {
  return (
    <li className="my-1 list-none">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `
          flex items-center justify-center md:justify-start
          gap-3
          px-3 md:px-4
          py-3
          rounded-xl
          transition-all
          text-xl md:text-base
          ${isActive ? "bg-indigo-100 text-primary font-medium" : "hover:bg-gray-100"}
        `
        }
      >
        <span className="text-2xl">{icon}</span>
        <span className="hidden md:block whitespace-nowrap">{name}</span>
      </NavLink>
    </li>
  );
};

export default NavigationItem;
