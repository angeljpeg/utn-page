export default function EducacionContinua() {
  return (
    <section className="w-full">
      <main className="min-h-screen pt-24">
        <div>
          <h2>Educación continua y Servicios Tecnológicos</h2>
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
        {/* Objetivo de la ECST */}
        <div className="w-full bg-gray-100 h-fit">
          <div className="items-center justify-center block w-full gap-4 px-6 py-12 m-auto h-fit lg:flex lg:w-3/4 lg:px-0">
            <div className="w-full h-fit lg:w-1/2">
              <h2 className="pb-3 text-3xl font-medium text-gray-900">
                Objetivo
              </h2>
              <p className="mb-4">
                Contribuir al desarrollo de la comunidad, fortaleciendo la
                fuerza laboral, mediante capacitación, cursos, seminarios,
                asistencia técnica y evaluación de competencias profesionales.
                La Universidad Tecnológica cuenta con registro ante la
                Secretaria de Trabajo y Previsión Social como Agente
                capacitador, conoce nuestro catálogo de Cursos para tu empresa,
                organización.
              </p>
            </div>
            <div className="mt-4 w-[300px] h-[300px] lg:mt-0 lg:w-[350px] lg:h-[350px] md:w-[400px] md:h-[400px] md:m-auto">
              <img
                className="object-cover w-full h-full"
                src="https://picsum.photos/900/900"
                alt="Foto"
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
