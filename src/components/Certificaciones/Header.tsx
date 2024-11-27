import image from "@/assets/images/cuadriculaLogos/14.webp"

export default function Header() {
  return (
    <div className="w-full px-4 h-fit lg:w-3/4 md:w-11/12">
    <h2 className="mb-2 text-base text-center lg:text-xl md:text-lg text-neutral-500">
      Entidad de certificación y evaluación
    </h2>
    <h3 className="mb-10 text-2xl font-medium text-center lg:text-4xl md:text-3xl text-neutral-900">
      Certificaciones de competencia
    </h3>
    <div className="lg:flex lg:items-center">
      <img
        src={image}
        alt="Imagen"
        className="float-left h-30 w-30 min-w-fit lg:h-full lg:w-20"
        loading="lazy"
      />
      <div>
        <p className="mb-2 text-justify">
          En 2013 nos acreditamos como una Entidad de Certificación y
          Evaluación de Competencias Laborales, la cual tiene la
          facultad de capacitar, evaluar y certificar a las personas en
          algún estándar de Competencia Laboral que estén inscritos en
          el Registro Nacional de Estándares de Competencia Laboral
          (RENEC) del Consejo Nacional de Normalización y Certificación
          de Competencias Laborales (CONOCER). Entidad de Certificación
          y Evaluación.{" "}
        </p>
        <p className="text-lg italic font-medium text-neutral-800">
          Universidad Tecnológica de Nogales, Sonora.
        </p>
      </div>
    </div>
  </div>
  )
}
