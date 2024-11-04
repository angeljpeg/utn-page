

// Components
import { NavbarDesktop } from "./NavbarDesktop"
import { NavbarMobile } from "./NavbarMobile"

export function Navbar() {
  return (
    <div className="w-full px-4 py-4 bg-white shadow-lg shadow-neutral-200">
      <div className="hidden md:block">
        <NavbarDesktop />
      </div>
      <div className="block md:hidden">
        <NavbarMobile />
      </div>
    </div>
  )
}
