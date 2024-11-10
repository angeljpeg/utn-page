import { useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

function SubMenu({ subMenu, isActive }) {
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
      {subMenu.map(({ title, link }, idx) => (
        <li
          key={idx}
          className="flex items-center p-2 duration-150 ease-in-out rounded-md hover:bg-gray-200 gap-x-2"
        >
          <Link to={link} className="text-gray-700">
            {title}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
}

function MenuItem({ menu, isActive, onClick }) {
  const hasSubmenu = menu.subMenu?.length > 0;

  return (
    <li key={menu.id}>
      {hasSubmenu ? (
        <span
          className="relative flex items-center justify-between p-4 duration-150 ease-in-out rounded-md cursor-pointer hover:bg-gray-300"
          onClick={onClick}
          aria-expanded={isActive}
          role="button"
        >
          {menu.menu}
          <FaChevronUp
            className={`ml-auto transition-transform duration-200 ${
              isActive ? "rotate-180" : ""
            }`}
          />
        </span>
      ) : (
        <Link
          to={menu.link}
          className="block p-4 duration-150 ease-in-out rounded-md hover:bg-gray-300"
        >
          {menu.menu}
        </Link>
      )}
      {hasSubmenu && <SubMenu subMenu={menu.subMenu} isActive={isActive} />}
    </li>
  );
}

export default function MobMenu({ menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
    setActiveMenu(null);
  }, []);

  const handleMenuClick = useCallback((index) => {
    setActiveMenu((prev) => (prev === index ? null : index));
  }, []);

  return (
    <div>
      <button
        className="text-4xl z-[999] relative"
        onClick={toggleIsOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <IoMdClose /> : <IoMdMenu />}
      </button>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0" : "-100%" }}
        transition={{ duration: 0.3 }}
        onAnimationComplete={() => console.log("Done")}
        className="fixed left-0 right-0 h-full p-6 overflow-y-auto text-gray-800 top-24 bg-gray-100 backdrop-blur z-[1000]"
      >
        <ul>
          {menus?.map((menu, i) => (
            <MenuItem
              key={menu.id || i}
              menu={menu}
              isActive={activeMenu === i}
              onClick={() => handleMenuClick(i)}
            />
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
MobMenu.propTypes = {
  menus: PropTypes.array,
};
