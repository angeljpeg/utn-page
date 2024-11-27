import { degreesOld, actionFields } from "./data/ViejoModelo/ViejoModeloItems";
import { degreesNew } from "./data/NuevoModelo/NuevoModeloItems";

// Components
import { ActionFields, DegreeCompetencies, SubjectsList } from "./components";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useHomeStore } from "@/store/RootStore";
import { useEffect } from "react";
import { findDegree } from "./helpers/findDegree";

export default function CarrerasPage({
  carreraIndex,
  isNewModel,
}: {
  carreraIndex: number;
  isNewModel?: boolean;
}) {
  const updateBanner = useHomeStore((state) => state.updateBanner);
  const updateTitle = useHomeStore((state) => state.updateTitle);

  // Selección de modelo
  const degrees = isNewModel ? degreesNew : degreesOld;

  // Obtención de datos de carreras
  const degreeTSU = findDegree(degrees, carreraIndex);
  const degreeING = findDegree(degrees, degreeTSU?.idForeign);

  const actionField = !isNewModel
    ? actionFields.find((field) => field.idActionField === carreraIndex)
    : undefined;

  useEffect(() => {
    if (degreeTSU) {
      updateBanner(degreeTSU.img || "");
      updateTitle(degreeTSU.title || "");
    }
  }, [updateBanner, updateTitle, degreeTSU]);

  // Si no se encuentran los datos, muestra un mensaje o redirige
  if (!degreeTSU || !degreeING) {
    return <div>Error: No se encontraron los datos de la carrera</div>;
  }

  // Títulos dinámicos
  const subjectListTitleTSU = `TSU en ${degreeTSU.title}${
    degreeTSU.area ? `, Área ${degreeTSU.area}` : ""
  }`;
  const subjectListTitleING = `${
    degreeING.type === "ing" ? "Ingeniería" : "Licenciatura"
  } ${degreeING.title ? `en ${degreeING.title}` : ""}`;

  return (
    <section>
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center w-full min-h-screen pt-20 pb-10">
        {degreeTSU.competencies.length > 0 && (
          <DegreeCompetencies
            title={degreeTSU.title || ""}
            area={degreeTSU.area}
            competencies={degreeTSU.competencies}
            isTSU={true}
            directionFlex="reverse"
          />
        )}

        {degreeING.competencies.length > 0 && (
          <DegreeCompetencies
            title={degreeING.title || ""}
            area={undefined}
            competencies={degreeING.competencies}
            isTSU={false}
            directionFlex="normal"
          />
        )}

        {actionField && <ActionFields fields={actionField.actionFields} />}

        {degreeTSU.quarters.length > 0 && (
          <SubjectsList
            title={subjectListTitleTSU}
            quarters={degreeTSU.quarters}
          />
        )}

        {degreeING.quarters.length > 0 && (
          <SubjectsList
            title={subjectListTitleING}
            quarters={degreeING.quarters}
          />
        )}

        {degreeTSU.pdf && <PDFDownloadButton pdfUrl={degreeTSU.pdf} />}
      </div>
    </section>
  );
}

// Reusable Component for PDF Download Button
const PDFDownloadButton = ({ pdfUrl }: { pdfUrl: string }) => (
  <div className="flex flex-row gap-4 my-5">
    <a
      href={pdfUrl}
      className="p-4 text-center text-white duration-200 bg-red-500 rounded-xl min-w-28 hover:bg-red-400"
    >
      <PictureAsPdfIcon />
    </a>
  </div>
);
