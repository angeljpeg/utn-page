// React
import { useMemo } from "react";
import { motion } from "framer-motion";

// Interfaces
import { SubMenuItem } from "@/interfaces/navbar.interface";

// Components
import { Link } from "react-router-dom";

interface SubMenuProps {
  subMenu: SubMenuItem[] | undefined;
  isActive: boolean;
}

export default function Submenu({ subMenu, isActive }: SubMenuProps) {
  const subMenuDrawer = useMemo(
    () => ({
      enter: { height: "auto", overflow: "hidden" },
      exit: { height: 0, overflow: "hidden" },
    }),
    []
  );

  return (
    <motion.ul
      initial="exit"
      animate={isActive ? "enter" : "exit"}
      variants={subMenuDrawer}
      className="ml-5"
    >
      {subMenu?.map(({ title, link }, idx) => (
        <li
          key={idx}
          className="flex items-center p-2 duration-150 ease-in-out rounded-md hover:bg-gray-200 gap-x-2"
        >
          <Link to={link || "/"}  className="text-gray-700">
            {title}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
}
