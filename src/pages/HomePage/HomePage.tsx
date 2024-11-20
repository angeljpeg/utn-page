// Components
import { ScrollToUp, Navbar, Header, Footer } from "@/shared";
import { Carousel } from "@/components/Home";
// Slides

// Slides - Images
import slide1 from "@/assets/images/slider/uni1.webp";
import slide2 from "@/assets/images/slider/uni2.webp";
import slide3 from "@/assets/images/slider/uni3.webp";
import slide4 from "@/assets/images/slider/uni4.webp";
import slide5 from "@/assets/images/slider/uni5.webp";

const SLIDES = [slide1, slide2, slide3, slide4, slide5];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Carousel urls={SLIDES} />
      {/* <div className="absolute flex justify-center w-full transform -translate-y-1/2 ">
        <header className=" mx-6 items-center gap-8 px-6 py-12 shadow-xl rounded-lg animate-animated-gradient bg-gradient-to-br from-lime-500 via-green-500 to-lime-500 bg-[length:200%_200%] displayHeader lg:gap-10">
          <GenerateIconsText
            title={"Certificación de competencias"}
            icon={BiCertification}
          />
          <GenerateIconsText
            title={"Educación continua"}
            icon={MdCastForEducation}
          />
          <GenerateIconsText
            title={"Informe Anual de Resultados 2023"}
            icon={SlNotebook}
          />
        </header>
      </div> */}
      <main className="min-h-screen py-96 center-container">
        <ScrollToUp />
      </main>
      <Footer />
    </>
  );
}
