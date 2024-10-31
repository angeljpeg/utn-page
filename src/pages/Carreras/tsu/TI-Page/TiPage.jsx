
//Componets
import {PDFRender, Header} from "@components"

export function TiPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-4 py-10">
      <Header title="Tecnologías de la Información" />

      

      <PDFRender pdfSource="/pdf/carreras/tsu/ING_TecnologiasInformacion.pdf" />
    </div>
  )
}
