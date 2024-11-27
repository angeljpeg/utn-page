import { DirectorioPersonaje } from "@/interfaces/directorio.interface";
import Card from "./Card";

interface CardTableProps {
  title: string;
  personajes: DirectorioPersonaje[];
}

export default function CardTable({ title, personajes }: CardTableProps) {
  return (
    <div>
      <h2 className="my-10 text-3xl font-light text-center text-neutral-600">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center w-full gap-10 h-fit lg:grid-cols-3 md:grid-cols-2">
        {personajes.map((person, index) => (
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
