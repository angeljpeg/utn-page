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
  url: string;
}

export interface NuevoModelo {
  id: number
  title: string;
  area: Area[];
  icon: OverridableComponent<SvgIconTypeMap>;
}

export const NuevoModeloItems: NuevoModelo[] = [
  // Licenciatura en Ingeniería en Tecnologías de la Información e Innovación Digital
  {
    id: 1,
    title:
      "Licenciatura en Ingeniería en Tecnologías de la Información e Innovación Digital",
    area: [
      {
        title: "TSU en Desarrollo de Software Multiplataforma",
        url: "desarrollo-software"
      },
      {
        title: "TSU en Inteligencia Artificial",
        url: "inteligencia-artificial"
      },
    ],
    icon: ComputerOutlinedIcon,
  },
  // Licenciatura en Ingeniería Mecatrónica
  {
    id: 2,
    title: "Licenciatura en Ingeniería Mecatrónica",
    area: [
      {
        title: "TSU en Automatización",
        url: "automatizacion"
      },
      {
        title: "TSU en Robótica",
        url: "robotica"
      },
    ],
    icon: PrecisionManufacturingRoundedIcon,
  },
  // Licenciatura en Negocios y Mercadotecnia
  {
    id: 3,
    title: "Licenciatura en Negocios y Mercadotecnia",
    area: [
      {
        title: "TSU en Mercadotecnia",
        url: "mercadotecnia"
      },
      {
        title: "TSU en ventas",
        url: "ventas",
      }
    ],
    icon: PublicRoundedIcon
  },
  // Licenciatura en Ingeniería Aeronáutica en Manufactura
  {
    id: 4,
    title: "Licenciatura en Ingeniería Aeronáutica en Manufactura",
    area: [
      {
        title: "TSU en Mantenimiento Industrial",
        url: "mantenimiento-industrial"
      },
    ],
    icon: AirplanemodeActiveIcon,
  },
  // Licenciatura en Ingeniería Industrial
  {
    id: 5,
    title: "Licenciatura en Ingeniería Industrial",
    area: [
      {
        title: "TSU en Procesos Productivos",
        url: "procesos-productivos"
      },
      {
        title: "TSU en Maquinados de Precisión",
        url: "maquinados-precision"
      },
    ],
    icon: FactoryIcon,
  },
  // Licenciatura en Ingeniería en Logística Internacional
  {
    id: 6,
    title: "Licenciatura en Ingeniería en Logística Internacional",
    area: [
      {
        title: "TSU en Operaciones Logísticas y Comercio Exterior",
        url: "logistica-internacional"
      },
    ],
    icon: EqualizerOutlinedIcon,
  },
  // Licenciatura en Ingeniería en Mantenimiento Industrial
  {
    id: 7,
    title: "Licenciatura en Ingeniería en Mantenimiento Industrial",
    area: [
      {
        title: "TSU en Mantenimiento Industrial",
        url: "mantenimiento-industrial"
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
        url: "energia-solar"
      },
      {
        title: "TSU en Energía Turbo-Solar",
        url: "energia-turbo-solar"
      },
    ],
    icon: EnergySavingsLeafRoundedIcon,
  },
];
