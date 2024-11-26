// PDFS & IMAGES
// TI
import PDF_TI from '/pdfs/carreras/viejoModelo/ing_TecnologiasInformacion.pdf'
import BANNER_DESARROLLO_MULTIPLATAFORMA from "@/assets/images/carreras/desarrollo_software/desarrollo_1.webp";
// MECATRONICA
import PDF_MECATRONICA from "/pdfs/carreras/viejoModelo/ing_mecatronica.pdf"
import BANNER_ROBOTICA from "@/assets/images/carreras/mecatronica/robotica.webp";
// PROCESOS INDUSTRIALES
import PDF_PROCESOS from '/pdfs/carreras/viejoModelo/ing_SistemasProductivos.pdf'
import BANNER_PROCESOS from "@/assets/images/carreras/mecatronica/automatizacion.webp";
// COMERCIO INTERNACIONAL
import ING_COMERCIO from '/pdfs/carreras/viejoModelo/ing_logistica.pdf'
import BANNER_LOGISTICA from "@/assets/images/carreras/logistica/logistica.webp";
// ENERGIAS RENOVABLES
import ING_ENERGIAS from '/pdfs/carreras/viejoModelo/ing_energiasRenovables.pdf'
import BANNER_SOLAR from "@/assets/images/carreras/energia/energia_solar.webp";
// AERONAUTICA
import ING_AERONAUTICA from '/pdfs/carreras/viejoModelo/ing_aeronautica.pdf'
import BANNER_AERONAUTICA from "@/assets/images/carreras/aeronautica/aeronautica.webp";
// MERCADOTECNIA
import BANNER_MERCADOTECNIA from "@/assets/images/carreras/mercadotecnia/mercadotecnia.webp";
// MANTENIMIENTO INDUSTRIAL
import BANNER_MANTENIMIENTO from "@/assets/images/carreras/industrial/mantenimiento.webp";

export enum degreesTypes {
  TSU = "tsu",
  ING = "ing",
  LIC = "lic",
}

export interface Iquarters {
  quarter: number;
  title: string;
  subjects: string[];
}

export interface IdegreesOld {
  id: number;
  idForeign: number | undefined;
  title: string;
  img: string | undefined;
  area: string | undefined;
  type: degreesTypes;
  competencies: string[];
  quarters: Iquarters[];
}

export const degreesOld = [
  //TSU Tecnologías de la información
  {
    id: 0,
    idForeign: 8,
    title: "Tecnologías de la información",
    img: BANNER_DESARROLLO_MULTIPLATAFORMA,
    pdf: PDF_TI,
    area: "Desarrollo de Software Multiplataforma",
    type: degreesTypes.TSU,
    competencies: [
      "Desarrollar soluciones tecnológicas para entornos Web mediante fundamentos de programación orientada a objetos, base de datos y redes de área local que atiendan las necesidades de las organizaciones.",
      "Implementar soluciones multiplataforma, en la nube y software embebido, en entornos seguros mediante la adquisición y administración de los procesos en las organizaciones.",
    ],
    quarters: [
      {
        quarter: 1,
        title: "1er. Cuatrimestre",
        subjects: [
          "ÁLGEBRA LINEAL",
          "DESARROLLO DE HABILIDADES DEL PENSAMIENTO LÓGICO",
          "FUNDAMENTOS DE TI",
          "FUNDAMENTOS DE REDES",
          "METODOLOGÍA DE LA PROGRAMACIÓN",
          "EXPRESIÓN ORAL Y ESCRITA I",
          "INGLÉS I",
          "FORMACIÓN SOCIOCULTURAL I",
        ],
      },
      {
        quarter: 2,
        title: "2do. Cuatrimestre",
        subjects: [
          "FUNCIONES MATEMÁTICAS",
          "METODOLOGÍAS Y MODELADO DE DESARROLLO DE SOFTWARE",
          "INTERCONEXIÓN DE REDES",
          "PROGRAMACIÓN ORIENTADA A OBJETOS",
          "INTRODUCCIÓN AL DISEÑO DIGITAL",
          "BASE DE DATOS",
          "INGLÉS II",
          "FORMACIÓN SOCIOCULTURAL II",
        ],
      },
      {
        quarter: 3,
        title: "3er. Cuatrimestre",
        subjects: [
          "CÁLCULO DIFERENCIAL",
          "PROBABILIDAD Y ESTADÍSTICA",
          "SISTEMAS OPERATIVOS",
          "INTEGRADORA I",
          "APLICACIONES WEB",
          "BASES DE DATOS PARA APLICACIONES",
          "INGLÉS III",
          "FORMACIÓN SOCIOCULTURAL III",
        ],
      },
      {
        quarter: 4,
        title: "4to. Cuatrimestre",
        subjects: [
          "ESTÁNDARES Y MÉTRICAS PARA EL DESARROLLO DE SOFTWARE",
          "PRINCIPIOS PARA IoT",
          "DISEÑO DE APPS",
          "ESTRUCTURA DE DATOS APLICADAS",
          "APLICACIONES WEB ORIENTADA A SERVICIOS",
          "EVALUACIÓN Y MEJORA PARA EL DESARROLLO DE SOFTWARE",
          "INGLÉS IV",
          "FORMACIÓN SOCIOCULTURAL IV",
        ],
      },
      {
        quarter: 5,
        title: "5to. Cuatrimestre",
        subjects: [
          "APLICACIONES DE IoT",
          "DESARROLLO MÓVIL MULTIPLATAFORMA",
          "INTEGRADORA II",
          "APLICACIONES WEB PARA I4.0",
          "BASES DE DATOS PARA CÓMPUTO EN LA NUBE",
          "EXPRESIÓN ORAL Y ESCRITA II",
          "INGLÉS V",
        ],
      },
      {
        quarter: 6,
        title: "6to. Cuatrimestre",
        subjects: ["ESTADÍA"],
      },
    ],
  },
  //TSU Mecatronica
  {
    id: 1,
    idForeign: 9,
    title: "Mecatrónica",
    area: "Automatización",
    img: BANNER_ROBOTICA,
    pdf: PDF_MECATRONICA,
    type: degreesTypes.TSU,
    competencies: [
      "Desarrollar y conservar sistemas automatizados y de control, utilizando tecnología adecuada, de acuerdo a normas, especificaciones técnicas y de seguridad para mejorar y mantener los procesos productivos.",
      "Implementar Sistemas de Medición y Control bajo los estándares establecidos, para el correcto funcionamiento de los procesos industriales.",
    ],
    quarters: [
      {
        quarter: 1,
        title: "1er. Cuatrimestre",
        subjects: [
          "ÁLGEBRA LINEAL",
          "FÍSICA",
          "ELECTRICIDAD Y MAGNETISMO",
          "HERRAMIENTAS INFORMÁTICAS I4.0",
          "PROCESOS PRODUCTIVOS",
          "ELEMENTOS DIMENSIONALES",
          "INGLÉS I",
          "EXPRESIÓN ORAL Y ESCRITA I",
          "FORMACIÓN SOCIOCULTURAL I",
        ],
      },
      {
        quarter: 2,
        title: "2do. Cuatrimestre",
        subjects: [
          "FUNCIONES MATEMÁTICAS",
          "QUÍMICA BÁSICA",
          "CIRCUITOS ELÉCTRICOS",
          "SISTEMAS HIDRÁULICOS Y NEUMÁTICOS",
          "ELECTRÓNICA ANALÓGICA",
          "CONTROL DE MOTORES I",
          "INGLÉS II",
          "FORMACIÓN SOCIOCULTURAL II",
        ],
      },
      {
        quarter: 3,
        title: "3er. Cuatrimestre",
        subjects: [
          "CÁLCULO DIFERENCIAL",
          "PROBABILIDAD Y ESTADÍSTICA",
          "TERMODINÁMICA",
          "CONTROLADORES LÓGICOS PROGRAMABLES",
          "ELECTRÓNICA DIGITAL",
          "SISTEMAS MECÁNICOS I",
          "INTEGRADORA I",
          "INGLÉS III",
          "FORMACIÓN SOCIOCULTURAL III",
        ],
      },
      {
        quarter: 4,
        title: "4to. Cuatrimestre",
        subjects: [
          "CÁLCULO INTEGRAL",
          "ESTRUCTURA Y PROPIEDADES DE LOS MATERIALES",
          "INSTRUMENTACIÓN INDUSTRIAL",
          "ANÁLISIS DE CIRCUITOS ELÉCTRICOS",
          "DISPOSITIVOS DIGITALES",
          "LENGUAJE DE PROGRAMACIÓN",
          "DISPOSITIVOS ANALÓGICOS",
          "INGLÉS IV",
          "FORMACIÓN SOCIOCULTURAL IV",
        ],
      },
      {
        quarter: 5,
        title: "5to. Cuatrimestre",
        subjects: [
          "INTEGRADORA II",
          "PROGRAMACIÓN VISUAL",
          "INTEGRACIÓN DE SISTEMAS AUTOMÁTICOS",
          "MICROCONTROLADORES",
          "FUNDAMENTOS DE INSTRUMENTACIÓN VIRTUAL",
          "SISTEMAS DE CONTROL",
          "INGLÉS V",
          "EXPRESIÓN ORAL Y ESCRITA II",
        ],
      },
      { quarter: 6, title: "6to. Cuatrimestre", subjects: ["ESTADÍA"] },
    ],
  },
  //TSU Procesos Industriales
  {
    id: 2,
    idForeign: 10,
    title: "Procesos Industriales",
    img: BANNER_PROCESOS,
    pdf: PDF_PROCESOS,
    area: "Manufactura",
    type: degreesTypes.TSU,
    competencies: [
      "Gestionar la producción a través de herramientas de la administración, para cumplir con los requerimientos del cliente.",
      "Administrar la cadena de suministro, a través de sistemas de logística, para garantizar la disposición de materiales y productos.",
      "Gestionar los procesos de manufactura, a través técnicas de administración de operaciones y aseguramiento de la calidad, para contribuir a la competitividad de la organización.",
    ],
    quarters: [
      {
        quarter: 1,
        title: "1er. Cuatrimestre",
        subjects: [
          "ALGEBRA LINEAL",
          "QUÍMICA BÁSICA",
          "ORGANIZACIÓN INDUSTRIAL",
          "METROLOGÍA I",
          "DIBUJO INDUSTRIAL",
          "TECNOLOGÍAS PARA LA DIGITALIZACIÓN",
          "INGLÉS I",
          "EXPRESIÓN ORAL Y ESCRITA I",
          "FORMACIÓN SOCIOCULTURAL I",
        ],
      },
      {
        quarter: 2,
        title: "2do. Cuatrimestre",
        subjects: [
          "FUNCIONES MATEMÁTICAS",
          "FÍSICA",
          "PROBABILIDAD Y ESTADÍSTICA",
          "ELECTRICIDAD Y MAGNETISMO",
          "MÉTODOS Y SISTEMAS DE TRABAJO I",
          "DISTRIBUCIÓN DE PLANTA",
          "COSTOS DE PRODUCCIÓN",
          "INGLÉS II",
          "FORMACIÓN SOCIOCULTURAL II",
        ],
      },
      {
        quarter: 3,
        title: "3er. Cuatrimestre",
        subjects: [
          "CÁLCULO DIFERENCIAL",
          "CONTROL ESTADÍSTICO DEL PROCESO",
          "PROCESOS DE MANUFACTURA I",
          "TÓPICOS DE MANUFACTURA",
          "INTEGRADORA I",
          "MÉTODOS Y SISTEMAS DE TRABAJO II",
          "SEGURIDAD E HIGIENE INDUSTRIAL",
          "ADMINISTRACIÓN DE LA PRODUCCIÓN I",
          "INGLÉS III",
        ],
      },
      {
        quarter: 4,
        title: "4to. Cuatrimestre",
        subjects: [
          "CÁLCULO INTEGRAL",
          "ESTRUCTURA Y PROPIEDADES DE LOS MATERIALES",
          "ADMINISTRACIÓN DE LA CALIDAD",
          "GESTIÓN AMBIENTAL",
          "ADMINISTRACIÓN DE LA PRODUCCIÓN II",
          "DIBUJO INDUSTRIAL AVANZADO",
          "FUNDAMENTOS DE INGENIERÍA ECONÓMICA",
          "INGLÉS IV",
          "FORMACIÓN SOCIOCULTURAL III",
        ],
      },
      {
        quarter: 5,
        title: "5to. Cuatrimestre",
        subjects: [
          "FUNDAMENTOS DE LEGISLACIÓN INDUSTRIAL",
          "PROCESOS DE MANUFACTURA II",
          "CADENA DE SUMINISTROS",
          "MANUFACTURA APLICADA",
          "PROCESOS QUÍMICOS",
          "INTEGRADORA II",
          "INGLÉS V",
          "EXPRESIÓN ORAL Y ESCRITA II",
          "FORMACIÓN SOCIOCULTURAL IV",
        ],
      },
      { quarter: 6, title: "6to. Cuatrimestre", subjects: ["ESTADÍA"] },
    ],
  },
  //TSU Operaciones Comerciales Internacionales
  {
    id: 3,
    idForeign: 11,
    title: "Operaciones Comerciales Internacionales",
    img: BANNER_LOGISTICA,
    area: "Clasificación Arancelaría y Despacho Aduanero",
    pdf: ING_COMERCIO,
    type: degreesTypes.TSU,
    competencies: [
      "Manejo e interpretación adecuada de la tarifa aduanera.",
      "Elaboración del plan logístico.",
      "Administración eficiente de los diferentes procesos del despacho aduanero.",
    ],
    quarters: [
      {
        quarter: 1,
        title: "1er. Cuatrimestre",
        subjects: [
          "INFORMÁTICA ADMINISTRATIVA",
          "FUNDAMENTOS DE COMERCIO GLOBAL I",
          "INTRODUCCIÓN A LA NORMATIVIDAD DEL COMERCIO GLOBAL I",
          "ESTRUCTURA ORGANIZACIONAL",
          "INFRAESTRUCTURA LOGÍSTICA",
          "INGLÉS I",
          "EXPRESIÓN ORAL Y ESCRITA I",
          "FORMACIÓN SOCIOCULTURAL I",
        ],
      },
      {
        quarter: 2,
        title: "2do. Cuatrimestre",
        subjects: [
          "INFORMÁTICA APLICADA",
          "FUNDAMENTOS DE COMERCIO GLOBAL II",
          "INTRODUCCIÓN AL SISTEMA ARMONIZADO",
          "PRESUPUESTOS LOGÍSTICOS",
          "TÉCNICAS DE NEGOCIACIÓN EFECTIVA",
          "INGLÉS II",
          "FORMACIÓN SOCIOCULTURAL II",
        ],
      },
      {
        quarter: 3,
        title: "3er. Cuatrimestre",
        subjects: [
          "TÉCNICAS DE INVESTIGACIÓN APLICADAS A CLASIFICACIÓN",
          "CLASIFICACIÓN ARANCELARIA Y SU LEGISLACIÓN I",
          "MERCEOLOGÍA",
          "CONTRIBUCIONES AL COMERCIO EXTERIOR",
          "INTEGRADORA I",
          "INGLÉS III",
          "FORMACIÓN SOCIOCULTURAL III",
        ],
      },
      {
        quarter: 4,
        title: "4to. Cuatrimestre",
        subjects: [
          "QUÍMICA ARANCELARIA",
          "TRÁMITES LEGALES APLICADOS",
          "CLASIFICACIÓN ARANCELARIA Y SU LEGISLACIÓN II",
          "INFRACCIONES Y SANCIONES",
          "PEDIMENTO Y SU LEGISLACIÓN I",
          "DESGRAVACIÓN ARANCELARIA",
          "INGLÉS IV",
          "FORMACIÓN SOCIOCULTURAL IV",
        ],
      },
      {
        quarter: 5,
        title: "5to. Cuatrimestre",
        subjects: [
          "PROCESO DE IMPORTACIÓN Y EXPORTACIÓN",
          "CLASIFICACIÓN ARANCELARIA Y SU LEGISLACIÓN III",
          "MEDIOS DE DEFENSA",
          "PEDIMENTO Y SU LEGISLACIÓN II",
          "INTEGRADORA II",
          "INGLÉS V",
          "EXPRESIÓN ORAL Y ESCRITA II",
        ],
      },
      { quarter: 6, title: "6to. Cuatrimestre", subjects: ["ESTADÍA"] },
    ],
  },
  // TSU Energias Renovables
  {
    id: 4,
    idForeign: 12,
    title: "Energías Renovables",
    img: BANNER_SOLAR,
    pdf: ING_ENERGIAS,
    area: "Calidad y Ahorro de Energía",
    type: degreesTypes.TSU,
    competencies: [
      "Formular proyectos de energías renovables mediante diagnósticos energéticos y estudios especializados de los recursos naturales del entorno, para contribuir al desarrollo sustentable y al uso racional y eficiente de la energía.",
      "Dirigir proyectos de ahorro y calidad de energía eléctrica, con base en un diagnóstico energético del sistema, para contribuir al desarrollo sustentable (medio ambiente, impacto ambiental, cambio climático, contaminación), a través del uso racional y eficiente de la energía.",
    ],
    quarters: [
      {
        quarter: 1,
        title: "1er. Cuatrimestre",
        subjects: [
          "ÁLGEBRA LINEAL",
          "QUÍMICA BÁSICA",
          "ELECTRICIDAD Y MAGNETISMO",
          "INTRODUCCIÓN A LA PROGRAMACIÓN I4.0",
          "CIRCUITOS ELÉCTRICOS",
          "INGLÉS I",
          "EXPRESIÓN ORAL Y ESCRITA I",
          "FORMACIÓN SOCIOCULTURAL I",
        ],
      },
      {
        quarter: 2,
        title: "2do. Cuatrimestre",
        subjects: [
          "FUNCIONES MATEMÁTICAS",
          "FÍSICA",
          "TERMODINÁMICA",
          "MECÁNICA INDUSTRIAL",
          "DIBUJO INDUSTRIAL",
          "ENERGÍAS RENOVABLES",
          "SEGURIDAD INDUSTRIAL",
          "INGLÉS II",
          "FORMACIÓN SOCIOCULTURAL II",
        ],
      },
      {
        quarter: 3,
        title: "3er. Cuatrimestre",
        subjects: [
          "CÁLCULO DIFERENCIAL",
          "PROBABILIDAD Y ESTADÍSTICA",
          "ADMINISTRACIÓN DE PROYECTOS",
          "INSTRUMENTACIÓN INDUSTRIAL",
          "MANTENIMIENTO ELECTROMECÁNICO",
          "INSTALACIONES ELÉCTRICAS EN BAJA TENSIÓN",
          "CALIDAD",
          "INTEGRADORA I",
          "INGLÉS III",
        ],
      },
      {
        quarter: 4,
        title: "4to. Cuatrimestre",
        subjects: [
          "CÁLCULO INTEGRAL",
          "ESTRUCTURA Y PROPIEDADES DE LOS MATERIALES",
          "SISTEMAS ELÉCTRICOS",
          "MÁQUINAS ELÉCTRICAS",
          "ELECTRÓNICA DE POTENCIA",
          "COSTOS Y PRESUPUESTOS",
          "CALIDAD DE LA ENERGÍA",
          "INGLÉS IV",
          "FORMACIÓN SOCIOCULTURAL III",
        ],
      },
      {
        quarter: 5,
        title: "5to. Cuatrimestre",
        subjects: [
          "GESTIÓN DE LA ENERGÍA",
          "INSTALACIONES ELÉCTRICAS INDUSTRIALES",
          "CONTROL DE LA DEMANDA",
          "AUTOMATIZACIÓN",
          "SISTEMAS FOTOVOLTAICOS",
          "INTEGRADORA II",
          "INGLÉS V",
          "EXPRESIÓN ORAL Y ESCRITA II",
        ],
      },
      {
        quarter: 6,
        title: "6to. Cuatrimestre",
        subjects: ["ESTADÍA"],
      },
    ],
  },
  // TSU Aeronautica
  {
    id: 5,
    idForeign: 13,
    title: "Manufactura Aeronáutica",
    img: BANNER_AERONAUTICA,
    pdf: ING_AERONAUTICA,
    area: "Maquinados de Precisión",
    type: degreesTypes.TSU,
    competencies: [
      "Coordinar procesos de manufactura aeronáutica a partir de la documentación técnica de ingeniería, métodos y técnicas de fabricación, herramientas de planeación y supervisión, así como la normatividad aplicable, para contribuir a la satisfacción de los clientes y al desarrollo del sector.",
      "Desarrollar la manufactura de piezas aeronáuticas mecanizadas considerando las especificaciones técnicas, de calidad, equipos y métodos de mecanizado, para contribuir al crecimiento económico y tecnológico del sector y del país.",
    ],
    quarters: [
      {
        quarter: 1,
        title: "1er. Cuatrimestre",
        subjects: [
          "ÁLGEBRA LINEAL",
          "ESTRUCTURA Y PROPIEDADES DE LOS MATERIALES",
          "QUÍMICA BÁSICA",
          "FÍSICA",
          "TECNOLOGÍAS PARA LA DIGITALIZACIÓN",
          "SEGURIDAD INDUSTRIAL",
          "INGLÉS I",
          "EXPRESIÓN ORAL Y ESCRITA I",
          "FORMACIÓN SOCIOCULTURAL I",
        ],
      },
      {
        quarter: 2,
        title: "2do. Cuatrimestre",
        subjects: [
          "FUNCIONES MATEMÁTICAS",
          "ELECTRICIDAD Y MAGNETISMO",
          "FUNDAMENTOS DE AUTOMATIZACIÓN",
          "PROCESOS DE MANUFACTURA DE COMPONENTES AERONÁUTICOS",
          "INTERPRETACIÓN DE PLANOS",
          "SISTEMAS DE AERONAVES",
          "INGLÉS II",
          "FORMACIÓN SOCIOCULTURAL II",
        ],
      },
      {
        quarter: 3,
        title: "3er. Cuatrimestre",
        subjects: [
          "CÁLCULO DIFERENCIAL",
          "PROBABILIDAD Y ESTADÍSTICA",
          "PROCESOS ESPECIALES I",
          "PROCESOS DE ENSAMBLES AERONÁUTICOS",
          "METROLOGÍA DIMENSIONAL",
          "ADMINISTRACIÓN DE LA MANUFACTURA AERONÁUTICA",
          "INGLÉS III",
        ],
      },
      {
        quarter: 4,
        title: "4to. Cuatrimestre",
        subjects: [
          "CÁLCULO INTEGRAL",
          "TERMODINÁMICA",
          "ENSAYOS NO DESTRUCTIVOS",
          "MECANIZADO CONVENCIONAL",
          "PROCESOS ESPECIALES II",
          "FUNDAMENTOS DE SISTEMAS DE CALIDAD",
          "INTEGRADORA I",
          "INGLÉS IV",
          "FORMACIÓN SOCIOCULTURAL III",
        ],
      },
      {
        quarter: 5,
        title: "5to. Cuatrimestre",
        subjects: [
          "MECANIZADO NO CONVENCIONAL",
          "MECANIZADO CNC",
          "CAD-CAM",
          "FUNDAMENTOS DE MANUFACTURA ESBELTA",
          "INTEGRADORA II",
          "INGLÉS V",
          "EXPRESIÓN ORAL Y ESCRITA II",
          "FORMACIÓN SOCIOCULTURAL IV",
        ],
      },
      {
        quarter: 6,
        title: "6to. Cuatrimestre",
        subjects: ["ESTADÍA"],
      },
    ],
  },
  //TSU Mantenimiento Industrial
  {
    id: 6,
    idForeign: 14,
    title: "Mantenimiento Industrial",
    img: BANNER_MANTENIMIENTO,
    area: "Industrial",
    type: degreesTypes.TSU,
    competencies: [
      "Gestionar las actividades de mantenimiento mediante la integración del plan maestro, para garantizar la operación y contribuir a la productividad de la organización.",
      "Supervisar el reemplazo o fabricación de partes de los sistemas electromecánicos en maquinaria, equipo y redes de distribución industrial empleando normas para mantener en óptimas condiciones los sistemas.",
    ],
    quarters: [
      {
        quarter: 1,
        title: "1er. Cuatrimestre",
        subjects: [
          "ÁLGEBRA LINEAL",
          "QUÍMICA BÁSICA",
          "INTRODUCCIÓN AL MANTENIMIENTO",
          "SEGURIDAD Y MEDIO AMBIENTE",
          "TECNOLOGÍAS PARA LA DIGITALIZACIÓN",
          "ADMINISTRACIÓN DEL PERSONAL",
          "INGLÉS I",
          "EXPRESIÓN ORAL Y ESCRITA I",
          "FORMACIÓN SOCIOCULTURAL I",
        ],
      },
      {
        quarter: 2,
        title: "2do. Cuatrimestre",
        subjects: [
          "FUNCIONES MATEMÁTICAS",
          "FÍSICA",
          "ELECTRICIDAD Y MAGNETISMO",
          "GESTIÓN DEL MANTENIMIENTO",
          "CALIDAD EN EL MANTENIMIENTO",
          "DIBUJO INDUSTRIAL",
          "MÉTODOS Y SISTEMAS DE TRABAJO",
          "COSTOS Y PRESUPUESTOS",
          "INGLÉS II",
        ],
      },
      {
        quarter: 3,
        title: "3er. Cuatrimestre",
        subjects: [
          "CÁLCULO DIFERENCIAL",
          "PROBABILIDADES Y ESTADÍSTICA",
          "TERMODINÁMICA",
          "SISTEMAS ELÉCTRICOS",
          "MÁQUINAS Y MECANISMOS",
          "ELECTRÓNICA ANALÓGICA",
          "INTEGRADORA",
          "INGLÉS III",
          "FORMACIÓN SOCIOCULTURAL II",
        ],
      },
      {
        quarter: 4,
        title: "4to. Cuatrimestre",
        subjects: [
          "CÁLCULO INTEGRAL",
          "ESTRUCTURA Y PROPIEDADES DE LOS MATERIALES",
          "MÁQUINAS ELÉCTRICAS",
          "REDES DE SERVICIOS INDUSTRIALES",
          "ELECTRÓNICA DIGITAL",
          "PRINCIPIOS DE PROGRAMACIÓN",
          "SISTEMAS NEUMÁTICOS E HIDRÁULICOS",
          "INGLÉS IV",
          "FORMACIÓN SOCIOCULTURAL III",
        ],
      },
      {
        quarter: 5,
        title: "5to. Cuatrimestre",
        subjects: [
          "INSTALACIONES ELÉCTRICAS",
          "MÁQUINAS TÉRMICAS",
          "MANTENIMIENTO A PROCESOS DE MANUFACTURA",
          "AUTOMATIZACIÓN Y ROBÓTICA",
          "INGENIERÍA DE MATERIALES",
          "INTEGRADORA II",
          "INGLÉS V",
          "EXPRESIÓN ORAL Y ESCRITA II",
          "FORMACIÓN SOCIOCULTURAL IV",
        ],
      },
      {
        quarter: 6,
        title: "6to. Cuatrimestre",
        subjects: ["ESTADÍA"],
      },
    ],
  },
  //TSU Desarrollo de Negocios
  {
    id: 7,
    idForeign: 15,
    title: "Desarrollo de Negocios",
    img: BANNER_MERCADOTECNIA,
    area: "Mercadotecnia",
    type: degreesTypes.TSU,
    competencies: [
      "Administrar el proceso de ventas mediante estrategias, técnicas y herramientas adecuadas, para contribuir al desarrollo de la organización.",
      "Administrar el proceso de compras y control de suministros a través de las políticas y procedimientos de la organización y técnicas de control de inventarios y almacenamiento para asegurar su disponibilidad.",
    ],
    quarters: [
      {
        quarter: 1,
        title: "1er. Cuatrimestre",
        subjects: [
          "MATEMÁTICAS",
          "ADMINISTRACIÓN",
          "INFORMÁTICA I",
          "ECONOMÍA",
          "MERCADOTECNIA",
          "INGLÉS I",
          "EXPRESIÓN ORAL Y ESCRITA I",
          "FORMACIÓN SOCIOCULTURAL I",
        ],
      },
      {
        quarter: 2,
        title: "2do. Cuatrimestre",
        subjects: [
          "ESTADÍSTICA",
          "CONTABILIDAD",
          "INFORMÁTICA II",
          "PLANEACIÓN ESTRATÉGICA",
          "SISTEMA DE INVESTIGACIÓN DE MERCADOS I",
          "VENTAS",
          "INGLÉS II",
          "FORMACIÓN SOCIOCULTURAL II",
        ],
      },
      {
        quarter: 3,
        title: "3er. Cuatrimestre",
        subjects: [
          "CALIDAD",
          "GESTIÓN DE PROYECTOS",
          "LEGISLACIÓN COMERCIAL",
          "SISTEMA DE INVESTIGACIÓN DE MERCADOS II",
          "INTEGRADORA I",
          "ESTRATEGIAS DE PRODUCTO",
          "INGLÉS III",
          "FORMACIÓN SOCIOCULTURAL III",
        ],
      },
      {
        quarter: 4,
        title: "4to. Cuatrimestre",
        subjects: [
          "DISEÑO GRÁFICO",
          "LOGÍSTICA Y DISTRIBUCIÓN",
          "COMPORTAMIENTO DEL CONSUMIDOR",
          "ESTRATEGIAS DE PRECIO",
          "MEZCLA PROMOCIONAL I",
          "METODOLOGÍA DE LA INVESTIGACIÓN",
          "INGLÉS IV",
          "FORMACIÓN SOCIOCULTURAL IV",
        ],
      },
      {
        quarter: 5,
        title: "5to. Cuatrimestre",
        subjects: [
          "MERCADOTECNIA INTERNACIONAL",
          "MEZCLA PROMOCIONAL III",
          "MERCADOTECNIA DIGITAL",
          "MERCADOTECNIA ESTRATÉGICA",
          "INTEGRADORA II",
          "INGLÉS V",
          "EXPRESIÓN ORAL Y ESCRITA II",
        ],
      },
      {
        quarter: 6,
        title: "6to. Cuatrimestre",
        subjects: ["ESTADÍA"],
      },
    ],
  },
  //ING Desarrollo y Gestión de Software
  {
    id: 8,
    title: "Desarrollo y Gestión de Software",
    area: "",
    type: degreesTypes.ING,
    competencies: [
      "Construir soluciones de software y sistemas inteligentes mediante la gestión de proyectos, integración de metodologías, modelos y herramientas de desarrollo bajo la normatividad aplicable para la optimización de proyectos de investigación, innovación, desarrollo tecnológico y de emprendimiento.",
      "Dirigir proyectos de tecnologías de información, para contribuir a la productividad y logro de los objetivos estratégicos de las organizaciones utilizando las metodologías apropiadas.",
      "Evaluar sistemas de tecnologías de información para establecer acciones de mejora e innovación en las organizaciones mediante el uso de metodologías para auditoría.",
      "Proponer la implementación de nuevas tecnologías, para atender áreas de oportunidad e innovación en las organizaciones mediante la evaluación de las tecnologías existentes en el mercado.",
    ],
    quarters: [
      {
        quarter: 7,
        title: "7mo. Cuatrimestre",
        subjects: [
          "MATEMÁTICAS PARA INGENIERÍA I",
          "METODOLOGÍAS PARA EL DESARROLLO DE PROYECTOS",
          "ARQUITECTURAS DE SOFTWARE",
          "EXPERIENCIA DE USUARIO",
          "SEGURIDAD INFORMÁTICA",
          "INGLÉS VI",
          "ADMINISTRACIÓN DEL TIEMPO",
        ],
      },
      {
        quarter: 8,
        title: "8vo. Cuatrimestre",
        subjects: [
          "MATEMÁTICAS PARA INGENIERÍA II",
          "ADMINISTRACIÓN DE BASES DE DATOS",
          "DESARROLLO WEB PROFESIONAL",
          "SEGURIDAD EN EL DESARROLLO DE APLICACIONES",
          "INGLÉS VII",
          "PLANEACIÓN Y ORGANIZACIÓN DEL TRABAJO",
        ],
      },
      {
        quarter: 9,
        title: "9no. Cuatrimestre",
        subjects: [
          "ADMINISTRACIÓN DE PROYECTOS DE TI",
          "EXTRACCIÓN DE CONOCIMIENTO EN BASES DE DATOS",
          "DESARROLLO WEB INTEGRAL",
          "DESARROLLO PARA DISPOSITIVOS INTELIGENTES",
          "INGLÉS VIII",
          "DIRECCIÓN DE EQUIPOS DE ALTO RENDIMIENTO",
        ],
      },
      {
        quarter: 10,
        title: "10mo. Cuatrimestre",
        subjects: [
          "GESTIÓN DEL PROCESO DE DESARROLLO DE SOFTWARE",
          "APLICACIONES WEB PROGRESIVAS",
          "INTEGRADORA",
          "DESARROLLO MÓVIL INTEGRAL",
          "OPTATIVA 1: CREACIÓN DE VIDEOJUEGOS",
          "INGLÉS IX",
          "NEGOCIACIÓN EMPRESARIAL",
        ],
      },
      {
        quarter: 11,
        title: "11vo. Cuatrimestre",
        subjects: ["ESTADÍA"],
      },
    ],
  },
  //ING Mecatrónica
  {
    id: 9,
    title: "Mecatrónica",
    area: "",
    type: degreesTypes.ING,
    competencies: [
      "Desarrollar proyectos de automatización y control, a través del diseño, administración y aplicación de nuevas tecnologías para satisfacer las necesidades del sector productivo.",
      "Diseñar sistemas eléctricos, mecánicos y electrónicos a través de proyectos integradores, para automatizar y controlar procesos productivos.",
      "Administrar recursos humanos, materiales y energéticos considerando el diseño y requerimientos de conservación de un sistema de Automatización y control, a través de la metodología de administración por proyectos para la efectiva implementación del proyecto.",
    ],
    quarters: [
      {
        quarter: 7,
        title: "7mo. Cuatrimestre",
        subjects: [
          "MATEMÁTICAS PARA INGENIERÍA I",
          "FÍSICA PARA INGENIERÍA",
          "INSTRUMENTACIÓN VIRTUAL",
          "ELECTRICIDAD INDUSTRIAL",
          "INGLÉS VI",
          "ADMINISTRACIÓN DEL TIEMPO",
        ],
      },
      {
        quarter: 8,
        title: "8vo. Cuatrimestre",
        subjects: [
          "MATEMÁTICAS PARA INGENIERÍA II",
          "MECÁNICA PARA LA AUTOMATIZACIÓN",
          "CONTROL DE MOTORES II",
          "DISEÑO ASISTIDO POR COMPUTADORA",
          "INGLÉS VII",
          "PLANEACIÓN Y ORGANIZACIÓN DEL TRABAJO",
        ],
      },
      {
        quarter: 9,
        title: "9no. Cuatrimestre",
        subjects: [
          "CONTROL AUTOMÁTICO",
          "INGENIERÍA DE PROYECTOS",
          "SISTEMAS MECÁNICOS II",
          "OPTATIVA (FUNDAMENTOS DE ROBÓTICA INDUSTRIAL)",
          "INGLÉS VIII",
          "DIRECCIÓN DE EQUIPOS DE ALTO RENDIMIENTO",
        ],
      },
      {
        quarter: 10,
        title: "10mo. Cuatrimestre",
        subjects: [
          "SISTEMAS DE MANUFACTURA FLEXIBLE",
          "CONTROL LÓGICO AVANZADO",
          "DISPOSITIVOS DIGITALES PROGRAMABLES",
          "INTEGRADORA III",
          "INGLÉS IX",
          "NEGOCIACIÓN EMPRESARIAL",
        ],
      },
      {
        quarter: 11,
        title: "11vo. Cuatrimestre",
        subjects: ["ESTADÍA"],
      },
    ],
  },
  //ING Sistemas Productivos
  {
    id: 10,
    title: "Sistemas Productivos",
    area: "",
    type: degreesTypes.ING,
    competencies: [
      "Administrar los recursos necesarios de la organización para asegurar la producción planeada conforme a los requerimientos del cliente.",
      "Administrar el sistema de gestión de la calidad, con un enfoque sistémico, de acuerdo a los requerimientos del cliente, considerando factores técnicos y económicos, contribuyendo al desarrollo sustentable.",
      "Desarrollar e innovar sistemas de manufactura a través de la dirección de proyectos considerando los requerimientos del cliente, estándares de calidad, ergonomía, seguridad y ecología para lograr la competitividad y rentabilidad de la organización con enfoque globalizado.",
    ],
    quarters: [
      {
        quarter: 7,
        title: "7mo. Cuatrimestre",
        subjects: [
          "MATEMÁTICAS PARA INGENIERÍA I",
          "ESTADÍSTICA APLICADA A LA INGENIERÍA",
          "TERMODINÁMICA",
          "MANUFACTURA ESBELTA",
          "ESTUDIO DE MERCADO",
          "INGLÉS VI",
          "ADMINISTRACIÓN DEL TIEMPO",
        ],
      },
      {
        quarter: 8,
        title: "8vo. Cuatrimestre",
        subjects: [
          "MATEMÁTICAS PARA INGENIERÍA II",
          "FÍSICA PARA INGENIERÍA",
          "METROLOGÍA INDUSTRIAL",
          "INGENIERÍA DE MATERIALES",
          "SIMULACIÓN DE PROCESOS I",
          "INGLÉS VII",
          "PLANEACIÓN Y ORGANIZACIÓN DEL TRABAJO",
        ],
      },
      {
        quarter: 9,
        title: "9no. Cuatrimestre",
        subjects: [
          "LOGÍSTICA DE MATERIALES",
          "TÓPICOS AVANZADOS DE CALIDAD",
          "DESARROLLO Y SEGUIMIENTO DE PROYECTOS",
          "INTEGRADORA I",
          "INVESTIGACIÓN DE OPERACIONES",
          "SIMULACIÓN DE PROCESOS II",
          "INGLÉS VIII",
        ],
      },
      {
        quarter: 10,
        title: "10mo. Cuatrimestre",
        subjects: [
          "INGENIERÍA DE PROCESOS",
          "AUTOMATIZACIÓN DE PROCESOS",
          "ANÁLISIS DE PROYECTOS DE INVERSIÓN",
          "INTEGRADORA II",
          "INGLÉS IX",
          "DIRECCIÓN DE EQUIPOS DE ALTO RENDIMIENTO",
          "NEGOCIACIÓN EMPRESARIAL",
        ],
      },
      {
        quarter: 11,
        title: "11vo. Cuatrimestre",
        subjects: ["ESTADÍA"],
      },
    ],
  },
  //ING Logística Internacional
  {
    id: 11,
    title: "Logística Internacional",
    area: "",
    type: degreesTypes.ING,
    competencies: [
      "Dirigir proyectos de negocios y de actividades logísticas, utilizando fuentes de información y técnicas especializadas, para apoyar a la competitividad y rentabilidad de la organización.",
      "Dirigir la comercialización de productos y/o servicios a través de establecer estrategias de atención a clientes y ventas, con el fin de satisfacer los requerimientos de los clientes y proveedores.",
      "Supervisar el tráfico nacional e internacional de mercancías a través de la selección y modos de transporte, su envase, embalaje y considerando las regulaciones pertinentes para garantizar la entrega efectiva y oportuna a los clientes.",
      "Manejo e interpretación de estudios de mercado meta.",
      "Elaboración del plan logístico de mercancías y transportes.",
      "Administración eficiente de los diferentes procesos del despacho aduanero para seleccionar el transporte correcto, envase y embalaje de las mercancías.",
    ],
    quarters: [
      {
        quarter: 7,
        title: "7mo. Cuatrimestre",
        subjects: [
          "INVESTIGACIÓN DE OPERACIONES",
          "MERCADOTECNIA INTERNACIONAL",
          "ADMINISTRACIÓN DE PROCESOS",
          "ENTORNO DEL COMERCIO INTERNACIONAL",
          "INGLÉS VI",
          "ADMINISTRACIÓN DEL TIEMPO",
        ],
      },
      {
        quarter: 8,
        title: "8vo. Cuatrimestre",
        subjects: [
          "INTERPRETACIÓN FINANCIERA",
          "ESTADÍSTICA APLICADA A LOS NEGOCIOS",
          "EMBALAJE Y ETIQUETADO",
          "LOGÍSTICA DEL TRANSPORTE",
          "INGLÉS VII",
          "PLANEACIÓN Y ORGANIZACIÓN DEL TRABAJO",
        ],
      },
      {
        quarter: 9,
        title: "9no. Cuatrimestre",
        subjects: [
          "ADMINISTRACIÓN DE VENTAS",
          "GESTIÓN DE LA CADENA DE SUMINISTROS",
          "ADMINISTRACIÓN DE SISTEMAS LOGÍSTICOS",
          "INTEGRADORA I",
          "PROTOCOLO Y ETIQUETA",
          "INGLÉS VIII",
          "DIRECCIÓN DE EQUIPOS DE ALTO RENDIMIENTO",
        ],
      },
      {
        quarter: 10,
        title: "10mo. Cuatrimestre",
        subjects: [
          "ADMINISTRACIÓN DE PROYECTOS",
          "REDES DE ABASTECIMIENTO",
          "ADMINISTRACIÓN DE LAS OPERACIONES DE TRÁFICO",
          "INTEGRADORA II",
          "METODOLOGÍA DE LA INVESTIGACIÓN",
          "INGLÉS IX",
          "NEGOCIACIÓN EMPRESARIAL",
        ],
      },
      {
        quarter: 11,
        title: "11vo. Cuatrimestre",
        subjects: ["ESTADÍA"],
      },
    ],
  },
  //ING Energías Renovables
  {
    id: 12,
    title: "Energías Renovables",
    area: "",
    type: degreesTypes.ING,
    competencies: [
      "Desarrollar sistemas de energías renovables mediante el diseño de soluciones innovadoras, administrando el capital humano, recursos materiales y energéticos para mejorar la competitividad de la empresa y contribuir al desarrollo sustentable de la región.",
    ],
    quarters: [
      {
        quarter: 7,
        title: "7mo. Cuatrimestre",
        subjects: [
          "MATEMÁTICAS PARA INGENIERÍA I",
          "FÍSICA PARA INGENIERÍA",
          "ANÁLISIS Y ADQUISICIÓN DE DATOS",
          "ADMINISTRACIÓN DE NEGOCIOS",
          "INGLÉS VI",
          "ADMINISTRACIÓN DEL TIEMPO",
          "DIRECCIÓN DE EQUIPOS DE ALTO RENDIMIENTO",
        ],
      },
      {
        quarter: 8,
        title: "8vo. Cuatrimestre",
        subjects: [
          "MATEMÁTICAS PARA INGENIERÍA II",
          "DISEÑO DE SISTEMAS",
          "INGENIERÍA ECONÓMICA",
          "AIRE ACONDICIONADO Y REFRIGERACIÓN",
          "INGLÉS VII",
          "PLANEACIÓN Y ORGANIZACIÓN DEL TRABAJO",
        ],
      },
      {
        quarter: 9,
        title: "9no. Cuatrimestre",
        subjects: [
          "DISEÑO DE PROYECTOS DE ENERGÍA SOLAR",
          "DISEÑO DE PROYECTOS DE ENERGÍA EÓLICA",
          "INNOVACIÓN TECNOLÓGICA",
          "MODELADO DE SISTEMAS EN ENERGÍAS RENOVABLES",
          "OPTATIVA I",
          "INGLÉS VIII",
        ],
      },
      {
        quarter: 10,
        title: "10mo. Cuatrimestre",
        subjects: [
          "DISEÑO DE PROYECTOS DE BIOENERGÍA",
          "ESTRATEGIAS DE EFICIENCIA ENERGÉTICA",
          "LEGISLACIÓN Y FINANCIAMIENTO AMBIENTAL",
          "INTEGRADORA",
          "OPTATIVA II",
          "INGLÉS IX",
          "NEGOCIACIÓN EMPRESARIAL",
        ],
      },
      {
        quarter: 11,
        title: "11vo. Cuatrimestre",
        subjects: ["ESTADÍA"],
      },
    ],
  },
  //ING Manufactura Aeronáutica
  {
    id: 13,
    title: "Manufactura Aeronáutica",
    area: "",
    type: degreesTypes.ING,
    competencies: [
      "Diseñar procesos de manufactura aeronáutica y partes mecánicas aeronáuticas mediante metodologías de diseño, simulación y mejora continua, herramientas matemáticas, administrativas, software especializado, maquinaria y equipo de alta tecnología considerando especificaciones técnicas del producto, recursos humanos, materiales, económicos, sistemas de manufactura y normatividad aplicable para incrementar la competitividad y contribuir con la innovación tecnológica y desarrollo sustentable de la empresa.",
    ],
    quarters: [
      {
        quarter: 7,
        title: "7mo. Cuatrimestre",
        subjects: [
          "MATEMÁTICAS PARA INGENIERÍA I",
          "INGENIERÍA DE PLANTA",
          "MECÁNICA DE TALLER",
          "DIBUJO INDUSTRIAL AVANZADO",
          "INGLÉS VI",
          "ADMINISTRACIÓN DEL TIEMPO",
        ],
      },
      {
        quarter: 8,
        title: "8vo. Cuatrimestre",
        subjects: [
          "MATEMÁTICAS PARA INGENIERÍA II",
          "FÍSICA PARA INGENIERÍA",
          "ADMINISTRACIÓN DE LA PRODUCCIÓN AERONÁUTICA",
          "MECÁNICA DE MATERIALES AERONÁUTICOS",
          "INGLÉS VII",
          "PLANEACIÓN Y ORGANIZACIÓN DEL TRABAJO",
        ],
      },
      {
        quarter: 9,
        title: "9no. Cuatrimestre",
        subjects: [
          "ANÁLISIS POR ELEMENTOS FINITOS",
          "ADMINISTRACIÓN DE LA CALIDAD",
          "INGENIERÍA DE MATERIALES AERONÁUTICOS",
          "MANUFACTURA ASISTIDA POR COMPUTADORA",
          "INVESTIGACIÓN DE OPERACIONES",
          "INGLÉS VIII",
          "DIRECCIÓN DE EQUIPOS DE ALTO RENDIMIENTO",
        ],
      },
      {
        quarter: 10,
        title: "10mo. Cuatrimestre",
        subjects: [
          "FORMULACIÓN Y EVALUACIÓN DE PROYECTOS",
          "ENSAYO DE MATERIALES AERONÁUTICOS",
          "DISEÑO ASISTIDO POR COMPUTADORA",
          "INGENIERÍA DE PRODUCTO",
          "INTEGRADORA",
          "INGLÉS IX",
          "NEGOCIACIÓN EMPRESARIAL",
        ],
      },
      {
        quarter: 11,
        title: "11vo. Cuatrimestre",
        subjects: ["ESTADÍA"],
      },
    ],
  },
  //ING Mantenimiento Industrial
  {
    id: 14,
    title: "Mantenimiento Industrial",
    area: "",
    type: degreesTypes.ING,
    competencies: [
      "Diseñar estrategias de mantenimiento mediante el análisis de factores humanos, tecnológicos, económicos y financieros, para la elaboración y administración del plan maestro de mantenimiento que garantice la disponibilidad y confiabilidad de planta, contribuyendo a la competitividad de la empresa.",
      "Optimizar las actividades del mantenimiento y las condiciones de operación de los equipos a través de técnicas y herramientas de confiabilidad para incrementar la eficiencia global de los equipos y reducir los costos de mantenimiento como apoyo a la sustentabilidad y la competitividad de la empresa.",
      "Validar estudios de ingeniería y proyectos técnico-económicos mediante análisis de factibilidad para mejorar la mantenibilidad de los equipos e instalaciones.",
    ],
    quarters: [
      {
        quarter: 7,
        title: "7mo. Cuatrimestre",
        subjects: [
          "MATEMÁTICAS PARA INGENIERÍA I",
          "FÍSICA PARA INGENIERÍA",
          "PROTOCOLOS DE OPERACIÓN Y MANTENIMIENTO",
          "TRIBOLOGÍA",
          "INGLÉS VI",
          "PLANEACIÓN Y ORGANIZACIÓN DEL TRABAJO",
          "ADMINISTRACIÓN DEL TIEMPO",
        ],
      },
      {
        quarter: 8,
        title: "8vo. Cuatrimestre",
        subjects: [
          "MATEMÁTICAS PARA INGENIERÍA II",
          "TÉCNICAS TPM Y RCM",
          "ENSAYOS DESTRUCTIVOS",
          "INTEGRADORA I",
          "CONTROLADORES LÓGICOS PROGRAMABLES",
          "INGLÉS VII",
        ],
      },
      {
        quarter: 9,
        title: "9no. Cuatrimestre",
        subjects: [
          "ADMINISTRACIÓN ESTRATÉGICA PARA MANTENIMIENTO",
          "MANTENIMIENTO PREDICTIVO MECÁNICO",
          "SISTEMAS AUTOMATIZADOS Y REDES INDUSTRIALES",
          "INGLÉS VIII",
          "DIRECCIÓN DE EQUIPOS DE ALTO RENDIMIENTO",
        ],
      },
      {
        quarter: 10,
        title: "10mo. Cuatrimestre",
        subjects: [
          "ENSAYOS NO DESTRUCTIVOS",
          "VISUALIZACIÓN Y CONTROL DE PROCESOS",
          "INTEGRADORA II",
          "CALIDAD Y AHORRO DE ENERGÍA",
          "INGLÉS IX",
          "NEGOCIACIÓN EMPRESARIAL",
        ],
      },
      {
        quarter: 11,
        title: "11vo. Cuatrimestre",
        subjects: ["ESTADÍA"],
      },
    ],
  },
  //LIC Innovación de Negocios y Mercadotecnia
  {
    id: 15,
    title: "Innovación de Negocios y Mercadotecnia",
    area: "",
    type: degreesTypes.LIC,
    competencies: [
      "Apoyar el desarrollo empresarial mediante la optimización del capital financiero y humano, para la consolidación de la organización.",
      "Evaluar sistemas de tecnologías de información para establecer acciones de mejora e innovación en las organizaciones mediante el uso de metodologías para auditoría.",
      "Diseñar planes comerciales acordes a las capacidades de la organización para mejorar su competitividad en el mercado.",
    ],
    quarters: [
      {
        quarter: 7,
        title: "7mo. Cuatrimestre",
        subjects: [
          "ESTADÍSTICA APLICADA A LOS NEGOCIOS",
          "DESARROLLO DE NUEVOS PRODUCTOS",
          "INTELIGENCIA DE MERCADOS",
          "INGLÉS VI",
          "ADMINISTRACIÓN DEL TIEMPO",
        ],
      },
      {
        quarter: 8,
        title: "8vo. Cuatrimestre",
        subjects: [
          "TENDENCIAS DEL MERCADO Y CONSUMIDOR GLOBAL",
          "ADMINISTRACIÓN DE LA PRODUCCIÓN",
          "GESTIÓN DEL TALENTO HUMANO",
          "SUELDOS Y SALARIOS",
          "INGLÉS VII",
          "PLANEACIÓN Y ORGANIZACIÓN DEL TRABAJO",
        ],
      },
      {
        quarter: 9,
        title: "9no. Cuatrimestre",
        subjects: [
          "COMUNICACIÓN INTEGRAL DE MERCADOTECNIA",
          "PLANEACIÓN Y SEGUIMIENTO DE PROYECTOS",
          "FINANZAS",
          "FOTOGRAFÍA PUBLICITARIA",
          "INGLÉS VIII",
          "DIRECCIÓN DE EQUIPOS DE ALTO RENDIMIENTO",
        ],
      },
      {
        quarter: 10,
        title: "10mo. Cuatrimestre",
        subjects: [
          "COMUNICACIÓN EJECUTIVA",
          "CADENA DE SUMINISTROS",
          "PLAN DE NEGOCIOS",
          "INTEGRADORA",
          "INGLÉS IX",
          "NEGOCIACIÓN EMPRESARIAL",
        ],
      },
      {
        quarter: 11,
        title: "11vo. Cuatrimestre",
        subjects: ["ESTADÍA"],
      },
    ],
  },
];

export const actionFields = [
  {
    idActionField: 0,
    actionFields: [
      "Organizaciones públicas y privadas dedicadas al desarrollo y consultoría de software o que cuenten con un departamento de TI.",
      "En los sectores público y social, así como de manera independiente en las diferentes ramas productivas que demanden servicios de TI preferentemente en desarrollo de software, redes, soporte técnico y análisis de sistemas.",
    ],
  },
  {
    idActionField: 1,
    actionFields: [
      "Empresa propia de diseño, desarrollo y mantenimiento en sistemas industriales mecatrónicos en automatización y control.",
      "Empresas dedicadas a la fabricación de sistemas y componentes eléctricos y/o electrónicos.",
      "Empresas dedicadas a integrar proyectos de automatización de procesos.",
      "Área de proyectos de innovación o mantenimiento de sistemas automatizados en: Industrias químicas, farmacéuticas, transformación de la madera, metal mecánica, automotriz, textil y de la confección, proceso de alimentos, sector eléctrico y aeronáutico.",
    ],
  },
  {
    idActionField: 2,
    actionFields: [
      "El ingeniero en sistemas productivos podrá desenvolverse en los sectores económicos: extractivo, de manufactura y de servicios, privados o públicos, desarrollando sus competencias profesionales, con un enfoque sustentable, que permitan aplicar sus habilidades relativas al diseño y desarrollo de productos, diseño e implementación de procesos, administración de las actividades operativas y administrativas de una planta o empresa, incluyendo la implementación, desarrollo y control de proyectos. El ingeniero en sistemas productivos podrá desempeñarse como: Ingeniero, Jefe de área, Superintendente, Gerente",
      "Director, en áreas de: Producción, Calidad, Ingeniería de Producto, Ingeniería de Manufactura, Logística, Innovación Tecnológica, Proyectos, Soporte Técnico, entre otros.",
    ],
  },
  {
    idActionField: 3,
    actionFields: [
      "Agencias aduanales.",
      "Departamentos de tráfico y logística de maquiladoras.",
      "Creación de su propia empresa de transportación, exportación y logística.",
      "Empresas transportistas.",
      "Departamento de inventarios y finanzas.",
      "Empresas marítimas, aéreas y terrestres para la logística de contenedores de mercancías.",
      "Empresas públicas y privadas dedicadas al servicio de operación de logística y de subcontratación.",
    ],
  },
  {
    idActionField: 4,
    actionFields: [
      "Empresas e instituciones públicas y privadas que requieran, asistencia en el desarrollo de estrategias relacionadas con el uso eficiente de la energía y al aprovechamiento de energías renovables.",
      "Sector Industrial que requieran proyectos, estrategias y planes a favor del aprovechamiento eficiente de la bioenergía, turbo energía, calidad de la energía y energía solar.",
      "Industria que demande proyectos enfocados a la transformación de energía a partir de recursos naturales no contaminantes.",
      "Organizaciones gubernamentales y no gubernamentales que gestionen y apliquen recursos para proyectos de impacto social y sustentable.",
      "Empresas de consultoría enfocadas a realizar proyectos de industria limpia que coadyuven a la disminución de costos energéticos.",
      "Empresas de consultoría enfocadas a realizar proyectos de innovación tecnológica-científica.",
      "Empresa propia de proyectos de servicios en el ramo eléctrico y de energías renovables.",
    ],
  },
  {
    idActionField: 5,
    actionFields: [
      "La industria de manufactura aeronáutica.",
      "Proveedores de industria aeronáutica.",
      "Consultor/proveedor independiente.",
      "Empresas con procesos de maquinado de alta precisión.",
    ],
  },
  {
    idActionField: 6,
    actionFields: [
      "El Ingeniero en Mantenimiento Industrial, podrá desenvolverse en empresas públicas y privadas dedicadas de los sectores primario, secundario y terciario tales como: Empresas dedicadas a la Minería, Pesca y Agricultura; empresas metalmecánicas, alimenticias, del plástico, químicas, del vestir, aeronáuticas, automotrices, de electrodomésticos, farmacéuticas; empresas de servicio como hoteles, hospitales, entre otros o su propia empresa de mantenimiento industrial.",
      "El Ingeniero en Mantenimiento Industrial podrá desempeñarse como: Gerente de planta, Gerencia de Mantenimiento, Ingeniero de Mantenimiento, Jefe de Mantenimiento, Líder de Mantenimiento, Supervisor o Encargado de Mantenimiento",
    ],
  },
  {
    idActionField: 7,
    actionFields: [
      "Empresas públicas o privadas del sector industrial, comercial y de servicios.",
      "Instituciones y organismos públicos.",
      "Organizaciones no gubernamentales.",
      "Asesor independiente de PyMES.",
      "Empresario.",
      "Departamentos de ventas y servicio, mercadotecnia, promoción y publicidad, relaciones públicas, administración, servicio a clientes, distribución e investigación de mercados metas.",
    ],
  },
];
