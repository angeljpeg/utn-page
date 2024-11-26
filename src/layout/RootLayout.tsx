import { Footer, Navbar, ScrollToUp } from "@/shared";
import { Outlet } from "react-router-dom";

// Components
import {Carousel} from '@/components/Home'

// Context / Store
import {UseHomeStore} from "@/store/RootStore"

import slide1 from "@/assets/images/slider/uni1.webp";
import slide2 from "@/assets/images/slider/uni2.webp";
import slide3 from "@/assets/images/slider/uni3.webp";
import slide4 from "@/assets/images/slider/uni4.webp";
import slide5 from "@/assets/images/slider/uni5.webp";

const SLIDES = [slide1, slide2, slide3, slide4, slide5];


export default function RootLayout() {

  const {isHome} = UseHomeStore((state) => state)

  return (
    <>
      <Navbar />
      {
        isHome ? <Carousel urls={SLIDES}/> : "HOLAMUNDO"
      }
      
      <main className="min-h-screen overflow-y-hidden">
        <Outlet />
        <ScrollToUp />
      </main>

      <Footer />
    </>
  );
}
