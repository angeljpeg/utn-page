import PropTypes from "prop-types";

// Components
import { FaRegCheckCircle } from "react-icons/fa";

export function DegreeCompetencies({ title, area, competencies, isTSU }) {
  return (
    <div
      className={`w-full py-16 sm:py-24 md:py-32 ${
        isTSU ? "bg-orange-50" : "bg-blue-50"
      } h-fit`}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-3xl gap-4 px-4 mx-auto md:flex-row md:px-8 lg:w-9/12">
        {/* Texto de Competencias */}
        <div className="w-full mb-6 md:w-5/6 md:mb-0">
          <h2
            className={`text-2xl font-medium text-center mb-4 ${
              isTSU ? "text-orange-400" : "text-blue-400"
            }`}
          >
            Competencias del {isTSU ? "TSU" : "Ingeniero"} en {title} {area && `, Área ${area}`}
          </h2>
          <ul className="list-none">
            {competencies.map((competencie, index) => (
              <li key={index} className="flex items-start mb-3">
                <FaRegCheckCircle
                  className={`mt-1 mr-3 text-xl ${
                    isTSU ? "text-orange-400" : "text-blue-400"
                  }`}
                />
                <span className="flex-1 text-sm sm:text-base">
                  {competencie}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* Imagen */}
        <div className="flex justify-center w-full md:w-fit md:justify-end">
          <div className="bg-gray-300 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px]">
            <img
              src="https://picsum.photos/900/900"
              alt="Foto"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

DegreeCompetencies.propTypes = {
  title: PropTypes.string,
  area: PropTypes.string,
  competencies: PropTypes.array,
  isTSU: PropTypes.bool,
};
