import { useState } from "react";
import { Sidebar, MenuToggle } from "./components";


export function NavbarMobile() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="relative flex items-center justify-between w-full p-4">
      <MenuToggle onClick={handleClick} />
      <div>Contacto</div>
      <Sidebar open={openMenu} onClose={handleClick} />
    </div>
  );
}