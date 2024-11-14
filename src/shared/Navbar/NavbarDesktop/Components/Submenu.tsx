import { useMemo } from "react";
import { motion } from "framer-motion";

// Interfaces
import { SubMenuItem } from "../../NavbarItems";

// Components
import { Link } from "react-router-dom";

interface SubMenuProps {
  subMenu: SubMenuItem[] | undefined;
  isHover: boolean;
}

export default function Submenu({ subMenu, isHover }: SubMenuProps) {
  const subMenuAnimate = useMemo(
    () => ({
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
    }),
    []
  );

  return (
    <motion.div
      className="absolute top-[4.2rem] p-4 rounded-md origin-[50%_-170px] backdrop-blur-sm bg-white/[0.9]"
      initial="exit"
      animate={isHover ? "enter" : "exit"}
      variants={subMenuAnimate}
    >
      <div className="grid gap-2">
        {subMenu?.map(({ title, link }, idx) => (
          <div key={idx} className="relative cursor-pointer">
            <div className="flex items-center group/menubox gap-y-4">
              <Link
                className="text-sm font-semibold text-black duration-200 rounded-lg hover:text-green-600"
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
