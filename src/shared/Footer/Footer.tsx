import { Copyright, Links, Contacto, Info } from "./components";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full footer bg-neutral-800">
      {/* Información de la Universidad */}
      <div className="flex flex-col items-center justify-center w-full gap-12 px-4 py-16 sm:flex-col sm:justify-center sm:items-center md:flex-row md:justify-around md:items-center lg:gap-16">
        <Info />

        {/* Enlaces de interés */}
        <Links />

        {/* Contacto */}
        <Contacto />
      </div>

      {/* Derechos de autor */}
      <Copyright />
    </footer>
  );
}
