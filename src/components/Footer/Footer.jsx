import "./Footer.css";

import { Copyright, Links, Contacto, Info } from "./components";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full footer">
      {/* Información de la Universidad */}
      <div className="footer-main">
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
