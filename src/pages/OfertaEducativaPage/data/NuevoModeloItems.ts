import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

/* ---------------- ICONS ------------------ */
// TI
import CodeIcon from "@mui/icons-material/Code";
// MANTENIMIENTO INDUSTRIAL
import FactoryIcon from "@mui/icons-material/Factory";
// AEREONAUTICA
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

export interface Area {
  title: string;
}

export interface NuevoModelo {
  title: string;
  area: Area[];
  icon: OverridableComponent<SvgIconTypeMap>;
}

export const NuevoModeloItems: NuevoModelo[] = [
  {
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
    icon: CodeIcon,
  },
  {
    title: "Licenciatura en Ingeniería Mecatrónica",
    area: [
      {
        title: "TSU en Automatización",
      },
      {
        title: "TSU en Robótica",
      },
    ],
    icon: FactoryIcon,
  },
  {
    title: "Licenciatura en Ingeniería Aeronáutica en Manufactura",
    area: [
      {
        title: "TSU en Mantenimiento Industrial",
      },
    ],
    icon: AirplanemodeActiveIcon,
  },
];
