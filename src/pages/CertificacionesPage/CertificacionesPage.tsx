import { useEffect } from "react";
import { useHomeStore } from "@/store/RootStore";
import OfertaImage from "@/assets/images/OfertaEducativa.webp";

// Components
import {
  HeaderCertificaciones,
  ServiceList,
  StandardsGrid,
  StepList,
} from "@/components/Certificaciones";

export default function CertificacionesPage() {
  const updateBanner = useHomeStore((state) => state.updateBanner);
  const updateTitle = useHomeStore((state) => state.updateTitle);

  useEffect(() => {
    updateBanner(OfertaImage);
    updateTitle("Legislacion Universitaria");
  }, [updateTitle, updateBanner]);

  const services = [
    "Cursos de Capacitación alineados a Estándares de Competencia Laboral",
    "Preparación, Evaluación y Certificación de las competencias de las personas",
  ];

  const standards = [
    {
      code: "EC0076",
      description:
        "Evaluación de competencias de candidatos con base en estándares de competencia.",
    },
    {
      code: "EC0217.01",
      description:
        "Impartición de cursos de formación del capital humano de manera presencial grupal.",
    },
    {
      code: "C0586.01",
      description: "Instalación de sistemas fotovoltaicos en residencia.",
    },
    {
      code: "EC0772",
      description: "Evaluación del aprendizaje con enfoque en competencias",
    },
  ];

  const steps = [
    "Identifica la función en la que te deseas certificar, consulta el catálogo completo de los Estándares de Competencia en www.conocer.gob.mx.",
    "Envía tu nombre, celular y estándar de competencia que deseas al correo electrónico certificaciones@utnogales.edu.mx y una persona se pondrá en contacto contigo.",
  ];

  return (
    <section className="w-full">
      <main className="min-h-screen pt-24">
        <div className="flex justify-center w-full mt-10 mb-12 h-fit">
          <HeaderCertificaciones />
        </div>
        <div className="flex flex-col items-center justify-center w-full px-4 py-10 bg-neutral-100 h-fit">
          <h3 className="pb-3 text-xl font-medium lg:text-3xl md:text-2xl text-neutral-600">
            Servicios que Ofrecemos
          </h3>
          <ServiceList items={services} />
        </div>
        <div className="flex justify-center w-full py-10 h-fit bg-green-50">
          <div className="w-full px-4 h-fit lg:w-3/4 md:w-11/12">
            <h3 className="pb-3 mb-10 text-xl font-medium text-center text-green-600 lg:text-3xl md:text-2xl">
              Estándares de Competencia Laboral Acreditados en la Entidad
            </h3>
            <StandardsGrid standards={standards} />
          </div>
        </div>
        <div className="flex justify-center w-full mt-10 mb-12 h-fit">
          <div className="w-full px-4 h-fit lg:w-3/4 md:w-11/12">
            <h3 className="pb-3 text-xl font-medium lg:text-3xl md:text-2xl text-neutral-600">
              Si estás interesado realiza lo siguiente:
            </h3>
            <StepList steps={steps} />
          </div>
        </div>
      </main>
    </section>
  );
}

// import { FaRegCheckCircle } from "react-icons/fa"; Imagen || "asd"
