import { Footer, Navbar, ScrollToUp } from "@/shared";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen overflow-y-hidden">
        <Outlet />
        <ScrollToUp />
      </main>

      <Footer />
    </>
  );
}
