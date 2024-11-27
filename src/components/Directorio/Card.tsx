interface CardProps {
  nombre: string;
  ocupacion: string;
  imagen: string;
}

export default function Card({ nombre, ocupacion, imagen } : CardProps) {
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