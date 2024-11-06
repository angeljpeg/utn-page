//Componets
import { /*PDFRender,*/ Header } from "@components";
import { degrees, actionFields } from "../../data/degreeInformation";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { TbViewfinder } from "react-icons/tb";

var degreeTSU;
var degreeING;
var actionField;

function ChooseDegree(link) {
  if (link >= 0 && link <= 7) {
    //console.log("El link fue de 0 a 7")
    degreeTSU = degrees.filter((degree) => degree.id === link);
    degreeTSU = degreeTSU[0];
    degreeING = degrees.filter(
      (degree) => degree.id === degrees[link].idForeign
    );
    degreeING = degreeING[0];
    actionField = actionFields.filter(
      (actionF) => actionF.idActionField === link
    );
    actionField = actionField[0];
  } else {
    //console.log("El link fue de 8 a ")
    degreeING = degrees.filter((degree) => degree.id === link);
    degreeING = degreeING[0];
    degreeTSU = degrees.filter((degree) => degree.id === degreeING.idForeign);
    degreeTSU = degreeTSU[0];
    actionField = actionFields.filter(
      (actionF) => actionF.idActionField === degreeTSU.id
    );
    actionField = actionField[0];
  }
}

function GenerateUI(link) {
  /*   console.log(degreeTSU.id)
  console.log(link.link) */
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen pt-20 pb-10">
      {/* HEADER CON NOMBRE DE LA CARRERA */}
      <Header
        title={
          degreeTSU.id === link.link
            ? "TSU en " + degreeTSU.title
            : "Ingeniería en " + degreeING.title
        }
      />

      {/* ÁREA EN CASO DE QUE SEA TSU */}
      {link.link >= 0 && link.link <= 7 ? (
        <h2 className="mb-16 text-3xl font-medium text-stone-700">
          Área: {degreeTSU.area}
        </h2>
      ) : (
        ""
      )}

      {/* COMPETENCIAS TSU */}
      <div className="w-full py-32 bg-orange-50 h-fit">
        <div className="flex items-center justify-center w-9/12 gap-4 m-auto h-fit">
          {/* Columna izquierda con el título y la lista */}
          <div className="self-center w-2/5">
            <h2 className="mb-2 text-2xl font-medium text-center text-orange-400">
              Competencias del TSU en {degreeTSU.title}, Área {degreeTSU.area}
            </h2>
            <ul className="list-none">
              {degreeTSU.competencies.map((competencie, index) => (
                <li className={degreeTSU.competencies.length !== index + 1 ? "flex items-center mb-3" : "flex items-center"} key={index}>
                  <FaRegCheckCircle className="self-start mt-1 mr-3 text-2xl text-orange-400" />
                  <span className="flex-1 text-base">{competencie}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna derecha para la imagen */}
          <div className="self-center w-fit">
            {/* Espacio para la imagen cuadrada */}
            <div className="bg-gray-300 w-[350px] h-[350px]">
              <img
                src="https://picsum.photos/900/900"
                alt="Foto"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* COMPETENCIAS ING */}
      <div className="w-full py-32 bg-blue-50 h-fit">
        <div className="flex items-center justify-center w-9/12 gap-4 m-auto h-fit">
          {/* Columna derecha para la imagen */}
          <div className="self-center w-fit">
            {/* Espacio para la imagen cuadrada */}
            <div className="bg-gray-300 w-[350px] h-[350px]">
              <img
                src="https://picsum.photos/900/900"
                alt="Foto"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          {/* Columna izquierda con el título y la lista */}
          <div className="self-center w-2/5">
            <h2 className="mb-2 text-2xl font-medium text-center text-blue-400">
              Competencias del{" "}
              {degreeING.type === "ing" ? "Ingeniero" : "Licenciado"} en{" "}
              {degreeING.title}
            </h2>
            <ul className="list-none">
              {degreeING.competencies.map((competencie, index) => (
                <li className={degreeING.competencies.length !== index + 1 ? "flex items-center mb-3" : "flex items-center"} key={index}>
                  <FaRegCheckCircle className="self-start mt-1 mr-3 text-2xl text-blue-400" />
                  <span className="flex-1 text-base">{competencie}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CAMPOS DE ACCIÓN */}
      <div className="w-full pb-10 bg-gray-50 h-fit">
        <div className="w-9/12 m-auto h-fit">
          <h2 className="mt-10 mb-4 text-3xl font-semibold text-green-600">
            Campos de acción
          </h2>
          <ul className="list-none">
            {actionField.actionFields.map((actionField, index) => (
              <li className="flex items-center mb-3 text-lg" key={index}>
                <TbViewfinder className="self-start mt-1 mr-3 text-2xl text-green-600" />
                <span className="flex-1">{actionField}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* MATERIAS DE TSU */}
      <div className="w-full h-fit">
        <div className="w-9/12 m-auto h-fit">
          <h2 className="mt-10 mb-10 text-3xl font-normal text-stone-700">
            TSU en {degreeTSU.title}, Área {degreeTSU.area}
          </h2>
          <ul className="grid grid-cols-1 gap-6 text-gray-800 justify-items-stretch lg:grid-cols-3 md:grid-cols-2">
            {degreeTSU.quarters.map((quarter, quarterIndex) => (
              <li key={quarterIndex} className="flex w-full h-full">
                <ul
                  className={
                    degreeTSU.quarters.length === quarterIndex + 1
                      ? "flex flex-col w-full h-full p-4 bg-emerald-50 rounded-lg"
                      : "flex flex-col w-full h-full p-4 bg-gray-100 rounded-lg"
                  }
                >
                  {quarter.subjects.map((subject, index) => (
                    <li className="flex items-center mb-2" key={index}>
                      {index !== 0 && (
                        <HiMiniMinusSmall className="self-start mr-1 text-xl text-gray-600" />
                      )}
                      {index === 0 ? (
                        <h2 className="mb-2 text-lg font-semibold">
                          {subject}
                        </h2>
                      ) : (
                        <span className="flex-1">{subject}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* MATERIAS DE ING */}
      <div className="w-full h-fit">
        <div className="w-9/12 m-auto h-fit">
          <h2 className="mt-10 mb-10 text-3xl font-normal text-stone-700">
            {degreeING.type === "ing" ? "Ingeniería" : "Licenciatura"} en{" "}
            {degreeING.title}
          </h2>
          <ul className="grid grid-cols-1 gap-6 text-gray-800 justify-items-stretch lg:grid-cols-3 md:grid-cols-2">
            {degreeING.quarters.map((quarter, quarterIndex) => (
              <li key={quarterIndex} className="flex w-full h-full">
                <ul
                  className={
                    degreeING.quarters.length === quarterIndex + 1
                      ? "flex flex-col w-full h-full p-4 bg-emerald-50 rounded-lg"
                      : "flex flex-col w-full h-full p-4 bg-gray-100 rounded-lg"
                  }
                >
                  {quarter.subjects.map((subject, index) => (
                    <li className="flex items-center mb-2" key={index}>
                      {index !== 0 && (
                        <HiMiniMinusSmall className="self-start mr-1 text-xl text-gray-600" />
                      )}
                      {index === 0 ? (
                        <h2 className="mb-2 text-lg font-semibold">
                          {subject}
                        </h2>
                      ) : (
                        <span className="flex-1">{subject}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function TiPage() {
  //Este será el link que vendrá de la selección del nav, en este caso 0 que es TI
  const link = 0;
  ChooseDegree(link);

  /* console.log(degreeTSU)
  console.log(degreeING)
  console.log(actionField) */

  return <GenerateUI link={link} />;
  /*<div className="flex flex-col items-center justify-center w-full min-h-screen gap-4 py-10">
      <Header title="Tecnologías de la Información" />

      

      <PDFRender pdfSource="/pdf/carreras/tsu/ING_TecnologiasInformacion.pdf" />
    </div>*/
}
