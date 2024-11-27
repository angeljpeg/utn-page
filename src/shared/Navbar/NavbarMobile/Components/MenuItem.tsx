import { Link } from "react-router-dom";
// Interfaces
import { NavbarItem } from "@/interfaces/navbar.interface";

// Components

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import React from "react";
const Submenu = React.lazy(() => import("./Submenu"));

interface MenuItemProps {
  menu: NavbarItem;
  isActive: boolean;
  onClick: VoidFunction;
}

export default function MenuItem({ menu, isActive, onClick }: MenuItemProps) {
  const { id, menuName, link, subMenu } = menu;
  const hasSubmenu = subMenu ? true : false;

  return (
    <li key={id} className="font-semibold">
      {hasSubmenu ? (
        <span
          className="relative flex items-center justify-between p-4 duration-150 ease-in-out rounded-md cursor-pointer hover:bg-gray-300"
          onClick={onClick}
          aria-expanded={isActive}
          role="button"
        >
          {menuName}
          <KeyboardArrowDownRoundedIcon
            className={`ml-auto transition-transform duration-200 ${
              isActive ? "rotate-180" : ""
            }`}
          />
        </span>
      ) : (
        <Link
          to={link ? link : ""}
          className="block p-4 duration-150 ease-in-out rounded-md hover:bg-gray-300"
        >
          {menuName}
        </Link>
      )}
      {hasSubmenu && <Submenu subMenu={subMenu} isActive={isActive} />}
    </li>
  );
}
