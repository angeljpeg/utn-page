import PropTypes from "prop-types";
import {
  rector,
  directoresCarrera,
  directoresArea,
  jefesDepartamento,
} from "./data/directorioData";

export default function Directorio() {
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
            <CardTable title="Rectoría" arreglo={rector} />
            <CardTable
              title="Directores de carrera"
              arreglo={directoresCarrera}
            />
            <CardTable title="Directores de área" arreglo={directoresArea} />
            <CardTable
              title="Jefes de departamento"
              arreglo={jefesDepartamento}
            />
          </div>
        </div>
      </main>
    </section>
  );
}

function CardTable({ title, arreglo }) {
  return (
    <div>
      <h2 className="my-10 text-3xl font-light text-center text-neutral-600">{title}</h2>
      <div className="flex flex-wrap justify-center w-full gap-10 h-fit lg:grid-cols-3 md:grid-cols-2">
        {arreglo.map((person, index) => (
          <Card
            key={index}
            nombre={person.nombre}
            ocupacion={person.ocupacion}
            imagen={person.imagen}
          />
        ))}
      </div>
    </div>
  );
}

function Card({ nombre, ocupacion, imagen }) {
  return (
    <div className="flex flex-col items-center w-[200px] h-auto rounded-lg">
      <div className="w-[200px] h-[200px] mb-4">
        <img src={imagen} className="w-full h-full rounded-lg min-w-fit" />
      </div>
      <p className="text-lg font-light text-center ">{nombre}</p>
      <p className="text-sm text-center text-green-500">{ocupacion}</p>
    </div>
  );
}

Card.propTypes = {
  nombre: PropTypes.string,
  ocupacion: PropTypes.string,
  imagen: PropTypes.string,
};

CardTable.propTypes = {
  title: PropTypes.string,
  arreglo: PropTypes.array,
};
