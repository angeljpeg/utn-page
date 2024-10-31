import PropTypes from "prop-types";

export function PDFRender({ pdfSource }) {
    return (
      <embed
        src={pdfSource}
        className="w-2/3 h-[90vh] border-none"
        style={{ border: "none" }}
        title="PDF Viewer"
      ></embed>
    );
  }

PDFRender.propTypes = {
  pdfSource: PropTypes.string.isRequired,
};
