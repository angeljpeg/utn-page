// Components
import { ScrollToUp, Navbar, Header } from "@/shared";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-96 center-container">
        <Header title="HOME" />

        <ScrollToUp />
      </main>
    </>
  );
}
