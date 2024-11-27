import { MdHomeRepairService } from "react-icons/md";
import Imagen from "../../assets/img/logosCuadricula/14.webp";

export default function Certificaciones() {
  return (
    <section className="w-full">
      <main className="min-h-screen pt-24">
        <div className="flex justify-center w-full mt-10 mb-12 h-fit">
          <div className="w-full px-4 h-fit lg:w-3/4 md:w-11/12">
            <h2 className="mb-2 text-base text-center lg:text-xl md:text-lg text-neutral-500">
              Entidad de certificación y evaluación
            </h2>
            <h3 className="mb-10 text-2xl font-medium text-center lg:text-4xl md:text-3xl text-neutral-900">
              Certificaciones de competencia
            </h3>
            <div className="lg:flex lg:items-center">
              <img
                src={Imagen}
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
        </div>
        <div className="flex flex-col items-center justify-center w-full px-4 py-10 bg-neutral-100 h-fit">
          {/* Lista normal */}
          <h3 className="pb-3 text-xl font-medium lg:text-3xl md:text-2xl text-neutral-600">
            Servicios que Ofrecemos
          </h3>
          <ul>
            <li className="flex items-center gap-4 pb-4">
              <MdHomeRepairService className="text-2xl text-neutral-600" />
              <p>
                Cursos de Capacitación alineados a Estándares de Competencia
                Laboral
              </p>
            </li>
            <li className="flex items-center gap-4">
              <MdHomeRepairService className="text-2xl text-neutral-600" />
              <p>
                Preparación, Evaluación y Certificación de las competencias de
                las personas
              </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-center w-full py-10 h-fit bg-green-50">
          <div className="w-full px-4 h-fit lg:w-3/4 md:w-11/12">
            {/* Cuadrícula */}
            <h3 className="pb-3 mb-10 text-xl font-medium text-center text-green-600 lg:text-3xl md:text-2xl">
              Estándares de Competencia Laboral Acreditados en la Entidad
            </h3>
            <ul className="grid grid-cols-1 gap-2 lg:grid-cols-4 md:grid-cols-2">
              <li className="flex flex-col items-center p-4 bg-green-100 rounded-lg">
                <p className="text-lg font-medium">EC0076</p>
                <p className="text-center">
                  Evaluación de competencias de candidatos con base en
                  estándares de competencia.
                </p>
              </li>
              <li className="flex flex-col items-center p-4 bg-green-100 rounded-lg">
                <p className="text-lg font-medium">EC0217.01</p>
                <p className="text-center">
                  Impartición de cursos de formación del capital humano de
                  manera presencial grupal.
                </p>
              </li>
              <li className="flex flex-col items-center p-4 bg-green-100 rounded-lg">
                <p className="text-lg font-medium">C0586.01</p>
                <p className="text-center">
                  Instalación de sistemas fotovoltaicos en residencia.
                </p>
              </li>
              <li className="flex flex-col items-center p-4 bg-green-100 rounded-lg">
                <p className="text-lg font-medium">EC0772</p>
                <p className="text-center">
                  Evaluación del aprendizaje con enfoque en competencias
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center w-full mt-10 mb-12 h-fit">
          <div className="w-full px-4 h-fit lg:w-3/4 md:w-11/12">
            {/* Lista normal */}
            <h3 className="pb-3 text-xl font-medium lg:text-3xl md:text-2xl text-neutral-600">
              Si estás interesado realiza lo siguiente:
            </h3>
            <ul>
              <li className="flex items-center gap-4 pb-4">
                <p>
                  1.- Identifica la función en la que te deseas certificar,
                  consulta el catálogo completo de los Estándares de Competencia
                  en <span className="font-semibold">www.conocer.gob.mx.</span>
                </p>
              </li>
              <li className="flex items-center gap-4">
                <p>
                  2.- Envía tu nombre, celular y estándar de competencia que
                  deseas al correo electrónico{" "}
                  <span className="font-semibold">
                    certificaciones@utnogales.edu.mx
                  </span>{" "}
                  y una persona se pondrá en contacto contigo.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </section>
  );
}
