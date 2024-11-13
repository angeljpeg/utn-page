// Components
import { ScrollToUp, Navbar } from "@/shared";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <h1>Home Page</h1>

      <ScrollToUp />
    </main>
  );
}
