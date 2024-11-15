import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
export default function Contacto() {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-xl font-semibold text-neutral-50">Contacto</span>
      <div className="flex flex-row items-center gap-2">
        <FmdGoodIcon className="text-green-600" />
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-neutral-400">
            Av. Universidad #271,
          </p>
          <p className="text-sm font-semibold text-neutral-400">
            Colonia Universitaria,
          </p>
          <p className="text-sm font-semibold text-neutral-400">
            Sonora, México.
          </p>
          <p className="text-sm font-semibold text-neutral-400">C.P. 84097</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        <LocalPhoneIcon className="text-green-600" />
        <p className="text-sm font-semibold text-neutral-400">
        Conmutador: (631) 31 11830 - 44
        </p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <MailOutlineIcon className="text-green-600" />
        <p className="text-sm font-semibold text-neutral-400">
          Email: rectoria@utnogales.edu.mx
        </p>
      </div>
    </div>
  );
}
