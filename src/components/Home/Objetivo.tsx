import fondoUTN from "@/assets/images/escuela/fondo-utn.webp"

export default function Objetivo() {
  return (
    <div
      className="relative w-full bg-fixed bg-center bg-cover py-28 h-fit"
      style={{ backgroundImage: `url(${fondoUTN})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/60 to-transparent"></div>
      <div className="flex flex-col items-center justify-center h-full px-4">
        <div className="z-10 flex flex-col items-center justify-center gap-4">
          <p className="px-4 py-2 text-xl font-light text-center text-white rounded-md lg:text-2xl md:text-2xl">
            "El objetivo de esta dependencia es formar profesionistas
            competitivos con conocimientos, habilidades y valores, a través de
            un modelo educativo actualizado que les permita integrarse al ámbito
            productivo e impulsar la transformación y el desarrollo de la
            sociedad."
          </p>
          <div className="h-full w-28">
            <img src="/utn-blanco.svg" alt="UTN logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
