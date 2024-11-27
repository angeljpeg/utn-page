import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export default function PDFDownloadButton({ pdfUrl }: { pdfUrl: string }) {
  return (
    <div className="flex flex-row gap-4 my-5">
      <a
        href={pdfUrl}
        className="p-4 text-center text-white duration-200 bg-red-500 rounded-xl min-w-28 hover:bg-red-400"
      >
        <PictureAsPdfIcon />
      </a>
    </div>
  );
}
