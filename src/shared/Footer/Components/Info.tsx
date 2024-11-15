import UtnBlanco from "@/assets/utn-blanco.svg"

export default function Info() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="w-44">
        <img src={UtnBlanco} alt="UTN Logo" className="object-cover w-full h-full" />
      </div>
      <span className="text-xl font-semibold text-center text-neutral-50">Universidad Tecnológica de Nogales</span>
    </div>
  );
}
