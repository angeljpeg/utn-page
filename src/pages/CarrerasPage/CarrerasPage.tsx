import { degreesOld, actionFields } from "./data/ViejoModelo/ViejoModeloItems";
import { degreesNew } from "./data/NuevoModelo/NuevoModeloItems";

// Components
import { ActionFields, DegreeCompetencies, SubjectsList } from "./components";
import OfertaImage from "@/assets/images/OfertaEducativa.webp";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Header } from "@/shared";

export default function CarrerasPage({
  carreraIndex,
  isNewModel,
}: {
  carreraIndex: number;
  isNewModel?: boolean;
}) {
  const degrees = isNewModel ? degreesNew : degreesOld;

  // Helper functions
  const findDegree = (id: number | undefined) =>
    degrees.find((degree) => degree.id === id);

  const degreeTSU = findDegree(carreraIndex);
  const degreeING = findDegree(degreeTSU?.idForeign);
  const actionField = !isNewModel
    ? actionFields.find((field) => field.idActionField === carreraIndex)
    : undefined;

  if (!degreeTSU || !degreeING) return null;

  // Titles
  const subjectListTitleTSU = `TSU en ${degreeTSU.title}${
    degreeTSU.area ? `, Área ${degreeTSU.area}` : ""
  }`;
  const subjectListTitleING = `${
    degreeING.type === "ing" ? "Ingeniería" : "Licenciatura"
  } ${degreeING.title ? `en ${degreeING.title}` : ""}`;

  return (
    <section>
      {/* Image Section */}
      <div className="relative w-full h-[50vh]">
        <img
          src={degreeTSU.img || OfertaImage}
          alt="imagen"
          className="object-cover w-full h-full"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/50"></div>
      </div>

      {/* Header */}
      <div className="absolute w-full text-center transform -translate-x-1/2 -translate-y-1/2 center-container left-1/2">
        <Header title={`TSU en ${degreeTSU.title}`} />
      </div>

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
      download={pdfUrl}
      className="p-4 text-center text-white duration-200 bg-red-500 rounded-xl min-w-28 hover:bg-red-400"
    >
      <PictureAsPdfIcon />
    </a>
  </div>
);
