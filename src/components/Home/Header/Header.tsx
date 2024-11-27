import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Link } from "react-router-dom";

export default function GenerateIconsText({
  title,
  icon: Icon,
  to,
}: {
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<unknown, "svg">>;

  to: string;
}) {
  return (
    <div className="flex w-fit items-center gap-2 text-white hover:scale-[1.04] duration-200">
      <Icon className="text-xl lg:text-3xl md:text-2xl" />
      <Link to={to} className="font-medium lg:text-xl md:text-lg">
        {title}
      </Link>
    </div>
  );
}
