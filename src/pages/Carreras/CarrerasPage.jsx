import { degrees, actionFields } from "./data/degreeInformation";


// Components
import {
  ActionFields,
  DegreeCompetencies,
  SubjectsList,
} from "./components";

import {Header} from "@components"

export function CarrerasPage() {
  // ID de carrera, aquí en el ejemplo es 0 para "Tecnologías de la información"
  const link = 0;

  const degreeTSU = degrees.find((degree) => degree.id === link);
  const degreeING = degrees.find(
    (degree) => degree.id === degreeTSU?.idForeign
  );
  const actionField = actionFields.find(
    (field) => field.idActionField === link
  );

  if (!degreeTSU || !degreeING || !actionField) return null;

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen pt-20 pb-10">
      <Header title={`TSU en ${degreeTSU.title}`} />

      <DegreeCompetencies
        title={degreeTSU.title}
        area={degreeTSU.area}
        competencies={degreeTSU.competencies}
        isTSU={true}
      />

      <DegreeCompetencies
        title={degreeING.title}
        competencies={degreeING.competencies}
        isTSU={false}
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
  );
}
