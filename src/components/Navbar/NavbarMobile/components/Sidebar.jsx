import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types"
import { Menu } from "./Menu";
import { NavbarItems } from "../../data";
import { Logo } from "./Logo";

export function Sidebar({ open, onClose }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-3/4 bg-white z-10 transform transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between w-full p-4 border-b-2">
        <Logo />
        <button onClick={onClose} className="p-4 text-2xl">
          <IoClose className="text-4xl" />
        </button>
      </div>
      <Menu items={NavbarItems} />
    </div>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
}