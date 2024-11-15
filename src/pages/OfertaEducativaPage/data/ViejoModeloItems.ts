import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

/* ---------------- ICONS ------------------ */
// TI
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
// MECATRONICA
import PrecisionManufacturingRoundedIcon from '@mui/icons-material/PrecisionManufacturingRounded';
// MERCADOTECNIA
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
// AEREONAUTICA
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
// INGIENERIA INDUSTRIAL
import FactoryIcon from "@mui/icons-material/Factory";
// LOGISTICA INTERNACIONAL
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
// MANTENIMIENTO INDUSTRIAL
import HandymanRoundedIcon from '@mui/icons-material/HandymanRounded';
// ENERGIAS RENOVABLES
import EnergySavingsLeafRoundedIcon from '@mui/icons-material/EnergySavingsLeafRounded';

export interface ViejoModeloItem {
    id: number
    ing: string
    tsu: string
    area: string
    link: string
    icon: OverridableComponent<SvgIconTypeMap>
}

export const ViejoModeloItems : ViejoModeloItem[] = [
    {
        id: 1,
        ing: "Ing. en Desarrollo y Gestión de Software",
        tsu: "Tecnológias de la Información",
        area: "Desarrollo de Software Multiplataforma",
        link: "tecnologias-informacion",
        icon: ComputerOutlinedIcon
    },
    {
        id: 2,
        ing: "Ing. en Mecatrónica",
        tsu: "Mecatrónica",
        area: "Automatización.",
        link: "mecatronica",
        icon: PrecisionManufacturingRoundedIcon
    },
    {
        id: 3,
        ing: "Ing. Sistemas Productivos",
        tsu: "Desarrollo de Negocios",
        area: "Mercadotecnia.",
        link: "negocios",
        icon: PublicRoundedIcon
    },
    {
        id: 4,
        ing: "Ing. Sistemas Productivos",
        tsu: "Procesos Industriales",
        area: "Manufactura.",
        link: "procesos-industriales",
        icon: FactoryIcon
    },
    {
        id: 5,
        ing: "Ing. en Energias Renovables",
        tsu: "Energias Renovables",
        area: "Calidad y ahorro de energía.",
        link: "energias-renovables",
        icon: EnergySavingsLeafRoundedIcon
    },
    {
        id: 6,
        ing: "Ing. Logística Internacional",
        tsu: "Operaciones Comerciales Internacionales",
        area: "Clasificación Arancelaria y Desapacho Aduanero.",
        link: "comercio-internacional",
        icon: EqualizerOutlinedIcon
    },
    {
        id: 7,
        ing: "Ing. en Manufactura Aeronáutica",
        tsu: "Manufactura Aeronáutica",
        area: "Maquinados de Precisión",
        link: "aeronautica",
        icon: AirplanemodeActiveIcon
    },
    {
        id: 8,
        ing: "Ing. en Mantenimiento Industrial",
        tsu: "Mantenimiento",
        area: "Industrial",
        link: "mantenimiento-industrial",
        icon: HandymanRoundedIcon
    },
]