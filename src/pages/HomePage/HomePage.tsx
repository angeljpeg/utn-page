// Components
import { ScrollToUp, Navbar, Footer } from "@/shared";
import { Carousel } from "@/components/Home";
import { Link } from "react-router-dom";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SchoolIcon from '@mui/icons-material/School';
// Slides

// Slides - Images
import slide1 from "@/assets/images/slider/uni1.webp";
import slide2 from "@/assets/images/slider/uni2.webp";
import slide3 from "@/assets/images/slider/uni3.webp";
import slide4 from "@/assets/images/slider/uni4.webp";
import slide5 from "@/assets/images/slider/uni5.webp";

const SLIDES = [slide1, slide2, slide3, slide4, slide5];


function GenerateIconsText({ title, icon: Icon } : {title : string, icon : any}) {
  return (
    <div className="flex w-fit items-center gap-2 text-white text hover:scale-[1.04] duration-200">
      <Icon className="text-xl lg:text-3xl md:text-2xl" />
      <Link to="/" className="font-medium lg:text-xl md:text-lg">{title}</Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Carousel urls={SLIDES} />
      <div className="absolute flex justify-center w-full transform -translate-y-1/2 ">
        <header className=" mx-6 items-center gap-8 px-6 py-12 shadow-xl rounded-lg animate-animated-gradient bg-gradient-to-br from-lime-500 via-green-500 to-lime-500 bg-[length:200%_200%] displayHeader lg:gap-10">
          <GenerateIconsText
            title={"Certificación de competencias"}
            icon={SchoolIcon}
          />
          <GenerateIconsText
            title={"Educación continua"}
            icon={SchoolIcon}
          />
          <GenerateIconsText
            title={"Informe Anual de Resultados 2023"}
            icon={AutoStoriesIcon}
          />
        </header>
      </div>
      <main className="min-h-screen py-96 center-container">
        <ScrollToUp />
      </main>
      <Footer />
    </>
  );
}
