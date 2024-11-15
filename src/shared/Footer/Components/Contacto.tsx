import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
export default function Contacto() {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-xl font-semibold text-neutral-50">Contacto</span>
      <div className="flex flex-row gap-2">
        <FmdGoodIcon className="text-green-600" />
        <p className="text-sm font-semibold text-neutral-300">
          Nogales, Sonora, México
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <LocalPhoneIcon className="text-green-600" />
        <p className="text-sm font-semibold text-neutral-300">
          Tel: (xxx) xxx-xxxx
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <EmailIcon className="text-green-600" />
        <p className="text-sm font-semibold text-neutral-300">
          Email: info@utn.edu.mx
        </p>
      </div>
    </div>
  );
}
