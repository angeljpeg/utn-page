import { useState } from "react"

// Data
import {NavbarItems} from "../data"

// Components
import {Menu} from "./components"
import { HiOutlineBars3 } from "react-icons/hi2";

export function NavbarMobile() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleClick = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div className="relative flex flex-row items-center justify-between w-full h-20 p-4 ">
      <button onClick={handleClick}>
        <HiOutlineBars3 className="text-4xl cursor-pointer text-neutral-500" />
      </button>

      <div>
        contacto
      </div>

      {/* Menú deslizable */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-white z-10 transform transition-transform duration-300 ${openMenu ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <button onClick={handleClick} className="p-4 text-2xl">
          Cerrar
        </button>
        {/* Contenido del menú */}
        <Menu items={NavbarItems}/>
      </div>
    </div>
  )
}

