import { degreesOld, actionFields } from "./data/ViejoModelo/TsuItems";

//
// Components
import { ActionFields, DegreeCompetencies, SubjectsList } from "./components";
import OfertaImage from "@/assets/images/OfertaEducativa.webp";

import { Header } from "@/shared";

export default function CarrerasPage({
  carreraIndex,
}: {
  carreraIndex: number;
}) {
  const degreeTSU = degreesOld.find((degree) => degree.id === carreraIndex);

  const degreeING = degreesOld.find(
    (degree) => degree.id === degreeTSU?.idForeign
  );
  const actionField = actionFields.find(
    (field) => field.idActionField === carreraIndex
  );

  if (!degreeTSU || !degreeING || !actionField) return null;

  return (
    <section>
      <div className="relative w-full h-[50vh]">
        <img
          src={OfertaImage}
          alt="imagen"
          className="object-cover w-full h-full"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/50"></div>
      </div>
      <div className="absolute w-full text-center transform -translate-x-1/2 -translate-y-1/2 center-container left-1/2">
        <Header title={`TSU en ${degreeTSU.title}`} />
      </div>
      <div className="flex flex-col items-center justify-center w-full min-h-screen pt-20 pb-10">
        <DegreeCompetencies
          title={degreeTSU.title}
          area={degreeTSU.area}
          competencies={degreeTSU.competencies}
          isTSU={true}
          directionFlex="reverse"
        />

        <DegreeCompetencies
          title={degreeING.title}
          area={undefined}
          competencies={degreeING.competencies}
          isTSU={false}
          directionFlex="normal"
        />

        <ActionFields fields={actionField.actionFields} />

        <SubjectsList
          title={`TSU en ${degreeTSU.title}, Área ${degreeTSU.area}`}
          quarters={degreeTSU.quarters}
        />

        <SubjectsList
          title={`${
            degreeING.type === "ing" ? "Ingeniería" : "Licenciatura"
          } en ${degreeING.title}`}
          quarters={degreeING.quarters}
        />
      </div>
    </section>
  );
}
