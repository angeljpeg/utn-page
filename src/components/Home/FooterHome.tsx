import PDF_programaInstitucional from "/pdfs/programaInstitucional/programaInstitucional.pdf";

export default function FooterHome() {
  return (
    <div className="w-full h-fit text-center lg:text-left gap-4 py-16 lg:px-36 px-10 items-center flex flex-col lg:flex-row justify-between text-white text-2xl lg:text-4xl font-semibold animate-animated-gradient bg-gradient-to-br from-lime-500 via-green-500 to-lime-500 bg-[length:200%_200%]">
      <p>Programa Institucional de Desarrollo 2022-2027</p>
      <a
        className="px-4 py-2 text-base font-medium duration-150 border-2 border-white hover:bg-lime-400/30 w-fit rounded-xl lg:text-lg"
        href={PDF_programaInstitucional}
      >
        Leer más
      </a>
    </div>
  );
}
