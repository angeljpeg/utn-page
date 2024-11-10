import PropTypes from "prop-types";
import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";

// Components
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function SubMenu({ subMenu, isHover }) {
  const subMenuAnimate = useMemo(() => ({
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.2 },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: { duration: 0.2 },
      display: "none",
    },
  }), []);

  return (
    <motion.div
      className="absolute top-[4.2rem] p-4 rounded-md origin-[50%_-170px] backdrop-blur-sm bg-white/[0.9]"
      initial="exit"
      animate={isHover ? "enter" : "exit"}
      variants={subMenuAnimate}
    >
      <div className="grid gap-2">
        {subMenu.map(({ title, link }, idx) => (
          <div key={idx} className="relative cursor-pointer">
            <div className="flex items-center group/menubox gap-y-4">
              <Link
                className="text-sm font-semibold text-black duration-200 rounded-lg hover:text-primary-500"
                to={link}
              >
                {title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function MenuLink({ menuName, hasSubmenu }) {
  return (
    <span
      className="flex items-center gap-2 px-3 py-1 font-semibold transition-all duration-150 ease-in cursor-pointer rounded-xl hover:bg-primary-300/50"
    >
      {menuName}
      {hasSubmenu && (
        <FaChevronDown className="mt-[0.5px] group-hover/link:rotate-180 transition-all duration-150 ease-out" />
      )}
    </span>
  );
}

export function Menu({ menu }) {
  const [isHover, setIsHover] = useState(false);

  const { link, menu: menuName, subMenu } = menu || {};
  const hasSubmenu = subMenu?.length > 0;

  const toggleIsHover = useCallback(() => {
    setIsHover((prev) => !prev);
  }, []);

  return (
    <motion.li
      className="group/link"
      onHoverStart={toggleIsHover}
      onHoverEnd={toggleIsHover}
      role="menuitem"
      aria-haspopup={hasSubmenu}
      aria-expanded={isHover}
    >
      {link ? (
        <Link to={link}>
          <MenuLink menuName={menuName} hasSubmenu={hasSubmenu} />
        </Link>
      ) : (
        <span>
          <MenuLink menuName={menuName} hasSubmenu={hasSubmenu} />
        </span>
      )}
      {hasSubmenu && <SubMenu subMenu={subMenu} isHover={isHover} />}
    </motion.li>
  );
}

Menu.propTypes = {
  menu: PropTypes.object,
};
