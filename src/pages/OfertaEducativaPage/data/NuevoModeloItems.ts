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

export interface Area {
  title: string;
}

export interface NuevoModelo {
  id: number
  title: string;
  area: Area[];
  icon: OverridableComponent<SvgIconTypeMap>;
}

export const NuevoModeloItems: NuevoModelo[] = [
  {
    id: 1,
    title:
      "Licenciatura en Ingeniería en Tecnologías de la Información e Innovación Digital",
    area: [
      {
        title: "TSU en Desarrollo de Software Multiplataforma",
      },
      {
        title: "TSU en Inteligencia Artificial",
      },
    ],
    icon: ComputerOutlinedIcon,
  },
  {
    id: 2,
    title: "Licenciatura en Ingeniería Mecatrónica",
    area: [
      {
        title: "TSU en Automatización",
      },
      {
        title: "TSU en Robótica",
      },
    ],
    icon: PrecisionManufacturingRoundedIcon,
  },
  {
    id: 3,
    title: "Licenciatura en Negocios y Mercadotecnia",
    area: [
      {
        title: "TSU en Mercadotecnia"
      },
      {
        title: "TSU en ventas"
      }
    ],
    icon: PublicRoundedIcon
  },
  {
    id: 4,
    title: "Licenciatura en Ingeniería Aeronáutica en Manufactura",
    area: [
      {
        title: "TSU en Mantenimiento Industrial",
      },
    ],
    icon: AirplanemodeActiveIcon,
  },
  {
    id: 5,
    title: "Licenciatura en Ingeniería Industrial",
    area: [
      {
        title: "TSU en Procesos Productivos",
      },
      {
        title: "TSU en Maquinados de Precisión",
      },
    ],
    icon: FactoryIcon,
  },
  {
    id: 6,
    title: "Licenciatura en Ingeniería en Logística Internacional",
    area: [
      {
        title: "TSU en Operaciones Logísticas y Comercio Exterior",
      },
    ],
    icon: EqualizerOutlinedIcon,
  },
  {
    id: 7,
    title: "Licenciatura en Ingeniería en Mantenimiento Industrial",
    area: [
      {
        title: "TSU en Mantenimiento Industrial",
      },
    ],
    icon: HandymanRoundedIcon,
  },
  {
    id: 8,
    title: "Licenciatura en Ingeniería en Energía y Desarrollo Sostenible",
    area: [
      {
        title: "TSU en Energía Solar",
      },
      {
        title: "TSU en Energía Turbo-Solar",
      },
    ],
    icon: EnergySavingsLeafRoundedIcon,
  },
];
