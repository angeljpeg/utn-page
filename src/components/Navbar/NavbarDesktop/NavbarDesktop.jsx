import "./NavBarDesktop.css";

// DATA
import { NavbarItems } from "../data";

// COMPONENTS
import { Menu } from "./Components";
import { Link } from "react-router-dom";

export function NavbarDesktop() {
  return (
    <div className="NavBarDesktop">
      <div className="NavBarLogo">
        <Link to="/">
          <img src="/utn.svg" alt="logo utn" className="w-full cursor-pointer" />
        </Link>
      </div>
      <Menu items={NavbarItems} />
      <div>Contacto</div>
    </div>
  );
}
