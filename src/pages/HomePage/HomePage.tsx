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
      <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 left-1/2">
        <Header title="UNIVERSIDAD TECNOLOGICA DE NOGALES" />
      </div>
      <main className="min-h-screen py-96 center-container">
        <ScrollToUp />
      </main>
      <Footer />
    </>
  );
}
