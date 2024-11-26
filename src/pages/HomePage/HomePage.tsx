// Components
import { ScrollToUp, Footer } from "@/shared";
import { Carousel } from "@/components/Home";
import { Link } from "react-router-dom";
// Slides

// Slides - Images
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";


function GenerateIconsText({
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

export default function HomePage() {
  return (
    <section className="w-full">
      <main className="min-h-screen py-96 center-container">
        <ScrollToUp />
      </main>
      <Footer />
    </section>
  );
}
