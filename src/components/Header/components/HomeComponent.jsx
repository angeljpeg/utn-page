import { BiCertification } from "react-icons/bi";
import { MdCastForEducation } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function HomeComponent() {
  return (
    <header className="flex flex-col items-center w-full gap-8 p-6 rounded-lg lg:gap-10 lg:flex-row lg:w-fit ">
      <GenerateIconsText
        title={"Certificación de competencias"}
        icon={BiCertification}
        url="/certificaciones"
      />
      <GenerateIconsText
        title={"Educación continua"}
        icon={MdCastForEducation}
        url="/educacion-continua"
      />
      <GenerateIconsText
        title={"Informe Anual de Resultados 2023"}
        icon={SlNotebook}
        url=""
      />
    </header>
  );
}

function GenerateIconsText({ title, icon: Icon, url }) {
  return (
    <div className="flex w-fit items-center gap-2 text-white text hover:scale-[1.04] duration-200">
      <div className="min-w-fit">
        <Icon className="text-base lg:text-3xl md:text-2xl" />
      </div>
      <Link to={url} className="text-base font-medium lg:text-xl md:text-lg">
        {title}
      </Link>
    </div>
  );
}

GenerateIconsText.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  url: PropTypes.string
};