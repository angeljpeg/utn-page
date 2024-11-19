import { Link } from "react-router-dom";
import { BiCertification } from "react-icons/bi";
import { MdCastForEducation } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";
import PropTypes from "prop-types";
import "./styles.css";

function GenerateIconsText({ title, icon: Icon }) {
  return (
    <div className="flex w-fit items-center gap-2 text-white text hover:scale-[1.04] duration-200">
      <Icon className="text-xl lg:text-3xl md:text-2xl" />
      <Link className="font-medium lg:text-xl md:text-lg">{title}</Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <section className="w-full">
      <div className="relative w-full h-[100vh]">
        <img
          src="https://blog.orange.es/wp-content/uploads/sites/4/2024/03/fondos-de-pantalla-3d-paisaje.jpg"
          alt="imagen"
          className="object-cover w-full h-full"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/50"></div>
      </div>

      <div className="absolute flex justify-center w-full transform -translate-y-1/2 ">
        <header className=" mx-6 items-center gap-8 px-6 py-12 shadow-xl rounded-lg animate-animated-gradient bg-gradient-to-br from-lime-500 via-green-500 to-lime-500 bg-[length:200%_200%] displayHeader lg:gap-10">
          <GenerateIconsText
            title={"Certificación de competencias"}
            icon={BiCertification}
          />
          <GenerateIconsText
            title={"Educación continua"}
            icon={MdCastForEducation}
          />
          <GenerateIconsText
            title={"Informe Anual de Resultados 2023"}
            icon={SlNotebook}
          />
        </header>
      </div>

      <main className="min-h-screen pt-24">
        {/* Documentos y servicios - Redirección a cuadrícula de links */}
        <div className="w-full bg-gray-100 h-fit">
          <div className="items-center justify-center block w-full gap-4 px-6 py-12 m-auto h-fit lg:flex lg:w-3/4 lg:px-0">
            <div className="w-full h-fit lg:w-1/2">
              <h2 className="pb-3 text-3xl font-medium text-gray-900">
                Documentos y servicios
              </h2>
              <p className="mb-4">
                Información relevante sobre la institución como código de
                conducta, código de ética, aviso de privacidad, tramites,
                programa institucional, transparencia, entre otros.
              </p>
              <button className="px-2 py-3 text-white transition duration-300 ease-out bg-green-400 rounded-lg shadow-md hover:bg-green-500 ">
                <Link>Ver más</Link>
              </button>
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

        {/* Programa Institucional de Desarrollo - Redirección a PDF externo */}
        <div className="w-full h-fit text-center lg:text-left gap-4 py-16 lg:px-36 px-10 items-center flex flex-col lg:flex-row justify-between text-white text-2xl lg:text-4xl font-semibold animate-animated-gradient bg-gradient-to-br from-lime-500 via-green-500 to-lime-500 bg-[length:200%_200%]">
          <p>Programa Institucional de Desarrollo 2022-2027</p>
          <Link className="px-4 py-2 text-base font-medium duration-150 border-2 border-white hover:bg-lime-400/30 w-fit rounded-xl lg:text-lg">
            Leer más
          </Link>
        </div>
      </main>
    </section>
  );
}

GenerateIconsText.propTypes = {
  title: PropTypes.string.isRequired,
};
