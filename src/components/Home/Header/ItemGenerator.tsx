import LinkGenerator from "@/components/ui/LinkGenerator";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export default function GenerateIconsText({
  title,
  icon: Icon,
  pdf,
  link,
}: {
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<unknown, "svg">>;
  pdf?: string;
  link?: string;
}) {
  return (
    <div className="flex items-center gap-2 text-white hover:scale-[1.04] duration-200">
      <Icon className="text-xl lg:text-3xl md:text-2xl"/>
      <LinkGenerator title={title} pdf={pdf} link={link} className="font-semibold text-white"/>
    </div>
  );
}