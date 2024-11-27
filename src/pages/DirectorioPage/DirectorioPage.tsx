import { CardTable } from "@/components/Directorio";
import {
  directoresArea,
  directoresCarrera,
  jefesDepartamento,
  rector,
} from "@/data/Directorio/directorioItems";

export default function DirectorioPage() {
  return (
    <section className="w-full">
      <main className="min-h-screen pt-24">
        <div className="flex justify-center w-full mt-10 mb-12 h-fit">
          <div className="w-full px-4 h-fit lg:w-3/4 md:w-11/12">
            <h2 className="mb-4 text-base text-center lg:text-xl md:text-lg text-neutral-500">
              Opción con futuro
            </h2>
            <h3 className="text-2xl font-medium text-center mb-14 lg:text-4xl md:text-3xl text-neutral-900">
              UNIVERSIDAD TECNOLÓGICA DE NOGALES, SONORA
            </h3>
            <CardTable title="Rectoría" personajes={rector} />
            <CardTable
              title="Directores de carrera"
              personajes={directoresCarrera}
            />
            <CardTable title="Directores de área" personajes={directoresArea} />
            <CardTable
              title="Jefes de departamento"
              personajes={jefesDepartamento}
            />
          </div>
        </div>
      </main>
    </section>
  );
}
