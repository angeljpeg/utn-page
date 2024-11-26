import { FaRegCheckCircle } from "react-icons/fa";

export default function Certificaciones() {
  return (
    <section className="w-full">
      <main className="min-h-screen pt-24">
        <div>
          <h2>Entidad de certificación y evaluación</h2>
          <h3>Certificaciones de competencia</h3>
          <p>
            En 2013 nos acreditamos como una Entidad de Certificación y
            Evaluación de Competencias Laborales, la cual tiene la facultad de
            capacitar, evaluar y certificar a las personas en algún estándar de
            Competencia Laboral que estén inscritos en el Registro Nacional de
            Estándares de Competencia Laboral (RENEC) del Consejo Nacional de
            Normalización y Certificación de Competencias Laborales (CONOCER).
            Entidad de Certificación y Evaluación. Universidad Tecnológica de
            Nogales, Sonora.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full py-10 bg-green-50 h-fit">
          {/* Lista normal */}
          <h3 className="pb-3 text-3xl font-medium text-gray-900">
            Servicios que Ofrecemos
          </h3>
          <ul>
            <li className="flex items-center gap-4 pb-4">
              <FaRegCheckCircle className="text-2xl"/>
              <p>
                Cursos de Capacitación alineados a Estándares de Competencia
                Laboral
              </p>
            </li>
            <li className="flex items-center gap-4">
              <FaRegCheckCircle className="text-2xl"/>
              <p>
                Preparación, Evaluación y Certificación de las competencias de
                las personas
              </p>
            </li>
          </ul>
        </div>
        <div>
          {/* Cuadrícula */}
          <h3>Estándares de Competencia Laboral Acreditados en la Entidad</h3>
          <ul>
            <li>
              EC0076 Evaluación de competencias de candidatos con base en
              estándares de competencia.
            </li>
            <li>
              EC0217.01 - Impartición de cursos de formación del capital humano
              de manera presencial grupal.
            </li>
            <li>
              EC0217.01 - Impartición de cursos de formación del capital humano
              de manera presencial grupal.
            </li>
            <li>
              EC0772 - Evaluación del aprendizaje con enfoque en competencias
            </li>
          </ul>
        </div>
        <div>
          {/* Lista normal */}
          <h3>Si estás interesado realiza lo siguiente:</h3>
          <ul>
            <li>
              Identifica la función en la que te deseas certificar, consulta el
              catálogo completo de los Estándares de Competencia en
              www.conocer.gob.mx.
            </li>
            <li>
              Envía tu nombre, celular y estándar de competencia que deseas al
              correo electrónico certificaciones@utnogales.edu.mx y una persona
              se pondrá en contacto contigo.
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
}
