// Components
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

interface MenuLinkProps {
  menuName: string;
  hasSubmenu: boolean;
}

export default function MenuLink({ menuName, hasSubmenu }: MenuLinkProps) {
  return (
    <span className="flex items-center gap-2 px-3 py-1 font-semibold transition-all duration-150 ease-in cursor-pointer rounded-xl hover:bg-green-500/50">
      {menuName}
      {hasSubmenu && (
        <KeyboardArrowDownRoundedIcon className="mt-[0.5px] group-hover/link:rotate-180 transition-all duration-150 ease-out" />
      )}
    </span>
  );
}
