import { Link } from "react-router-dom";

interface CuadriculaItemProps {
  urlImage: string;
  pdf?: string;
  link?: string;
}

export default function CuadriculaItem({
  urlImage,
  pdf,
  link = "/",
}: CuadriculaItemProps) {
  return (
    <>
      {pdf ? (
        <a href={pdf}>
          <div className="flex justify-center w-full transition-all duration-200 h-28 lg:h-20 md:h-24 hover:scale-110">
            <img
              src={urlImage}
              alt="imagen"
              className="h-full w-fit min-w-fit"
              loading="lazy"
            />
          </div>
        </a>
      ) : (
        <Link to={link}>
          <div className="flex justify-center w-full transition-all duration-200 h-28 lg:h-20 md:h-24 hover:scale-110">
            <img
              src={urlImage}
              alt="imagen"
              className="h-full w-fit min-w-fit"
              loading="lazy"
            />
          </div>
        </Link>
      )}
    </>
  );
}
