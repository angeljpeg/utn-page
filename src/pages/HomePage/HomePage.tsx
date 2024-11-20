// Components
import { ScrollToUp, Navbar, Footer } from "@/shared";
import { Carousel } from "@/components/Home";
import { Link } from "react-router-dom";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SchoolIcon from "@mui/icons-material/School";
// Slides

// Slides - Images
import slide1 from "@/assets/images/slider/uni1.webp";
import slide2 from "@/assets/images/slider/uni2.webp";
import slide3 from "@/assets/images/slider/uni3.webp";
import slide4 from "@/assets/images/slider/uni4.webp";
import slide5 from "@/assets/images/slider/uni5.webp";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

const SLIDES = [slide1, slide2, slide3, slide4, slide5];

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
      <Navbar />
      <Carousel urls={SLIDES} />
      <div className="absolute flex justify-center w-full transform -translate-y-1/2">
        <header className="mx-6 flex items-center gap-8 px-6 py-12 shadow-xl rounded-lg animate-animated-gradient bg-gradient-to-br from-lime-500 via-green-500 to-lime-500 bg-[length:200%_200%] displayHeader lg:gap-10">
          <GenerateIconsText
            title="Certificación de competencias"
            icon={SchoolIcon}
            to="/certification"
          />
          <GenerateIconsText
            title="Educación continua"
            icon={SchoolIcon}
            to="/education"
          />
          <GenerateIconsText
            title="Informe Anual de Resultados 2023"
            icon={AutoStoriesIcon}
            to="/report-2023"
          />
        </header>
      </div>
      <main className="min-h-screen py-96 center-container">
        <ScrollToUp />
      </main>
      <Footer />
    </section>
  );
}
