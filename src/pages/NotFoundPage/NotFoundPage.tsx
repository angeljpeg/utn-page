// React

// Components
import { Link } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

export default function NotFoundPage() {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen duration-150 cursor-default center-container backdrop-blur">
        <span className="font-semibold text-[9rem]">404</span>
        <span className="text-xl font-semibold">
          La página que has buscado no se ha podido encontrar
        </span>
        <Link
          to="/"
          className="text-lg font-semibold duration-150 hover:text-green-600"
        >
          <ArrowBackRoundedIcon /> Volver
        </Link>
      </div>
    </>
  );
}
