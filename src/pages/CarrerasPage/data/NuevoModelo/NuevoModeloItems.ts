import {degreesType} from '../interfaces'


// PDFS & IMAGES
// Desarrollo de Software Multiplataforma --> 0
import PDF_DESARROLLO_MULTIPLATAFORMA from "/pdfs/carreras/nuevoModelo/desarrollo_multiplataforma.pdf";
import BANNER_DESARROLLO_MULTIPLATAFORMA from "@/assets/images/carreras/desarrollo_software/desarrollo_1.webp";
// Inteligencia Artificial --> 1
import PDF_INTELIGENCIA_ARTIFICIAL from "/pdfs/carreras/nuevoModelo/inteligencia_artificial.pdf";
import BANNER_INTELIGENCIA_ARTIFICIAL from "@/assets/images/carreras/desarrollo_software/inteligencia_artificial.webp";
//  Automatización --> 2
import PDF_AUTOMATIZACION from "/pdfs/carreras/nuevoModelo/automatizacion.pdf";
import BANNER_AUTOMATIZACION from "@/assets/images/carreras/mecatronica/automatizacion.webp";
//  Automatización --> 3
import PDF_ROBOTICA from "/pdfs/carreras/nuevoModelo/robotica.pdf";
import BANNER_ROBOTICA from "@/assets/images/carreras/mecatronica/robotica.webp";
//  Mercadotecnia --> 4
import PDF_MERCADOTECNIA from "/pdfs/carreras/nuevoModelo/mercadotecnia_bis.pdf";
import BANNER_MERCADOTECNIA from "@/assets/images/carreras/mercadotecnia/mercadotecnia.webp";
//  Ventas --> 5
import PDF_VENTAS from "/pdfs/carreras/nuevoModelo/ventas_bis.pdf";
import BANNER_VENTAS from "@/assets/images/carreras/mercadotecnia/ventas.webp";
//  Aeronáutica --> 6
import PDF_AERONAUTICA from "/pdfs/carreras/nuevoModelo/manufactura_aeronautica.pdf";
import BANNER_AERONAUTICA from "@/assets/images/carreras/aeronautica/aeronautica.webp";
//  Procesos productivos --> 7
import PDF_PROCESOS from "/pdfs/carreras/nuevoModelo/procesos_productivos.pdf";
import BANNER_PROCESOS from "@/assets/images/carreras/mecatronica/automatizacion.webp";
//  Maquinados de Precisión --> 8
import PDF_MAQUINADOS from "/pdfs/carreras/nuevoModelo/maquinados_precision.pdf";
import BANNER_MAQUINADOS from "@/assets/images/carreras/industrial/maquinados.webp";
//  Operaciones Logísticas y Comercio Exterior --> 9
import PDF_LOGISTICA from "/pdfs/carreras/nuevoModelo/comercio_logistica.pdf";
import BANNER_LOGISTICA from "@/assets/images/carreras/logistica/logistica.webp";
//  TSU Mantenimiento Industrial --> 10
import PDF_MANTENIMIENTO from "/pdfs/carreras/nuevoModelo/mantenimiento_industrial.pdf";
import BANNER_MANTENIMIENTO from "@/assets/images/carreras/industrial/mantenimiento.webp";
//  Energía Solar --> 11
import PDF_SOLAR from "/pdfs/carreras/nuevoModelo/energia_solar.pdf";
import BANNER_SOLAR from "@/assets/images/carreras/energia/energia_solar.webp";
//  Energía Turbo-Solar --> 12
import PDF_TURBO_SOLAR from "/pdfs/carreras/nuevoModelo/energia_turbo_solar.pdf";
import BANNER_TURBO_SOLAR from "@/assets/images/carreras/energia/energia_solar.webp";

export const degreesNew: degreesType[] = [
  //TSU Desarrollo de Software Multiplataforma --> 0
  {
    id: 0,
    idForeign: 13,
    title: "Desarrollo de Software Multiplataforma",
    img: BANNER_DESARROLLO_MULTIPLATAFORMA,
    pdf: PDF_DESARROLLO_MULTIPLATAFORMA,
    area: "",
    type: "tsu",
    competencies: [],
    quarters: [
      {
        quarter: 1,
        title: "1er. Cuatrimestre",
        subjects: [
          "INGLÉS I",
          "DESARROLLO HUMANO Y VALORES",
          "FUNDAMENTOS MATEMÁTICOS",
          "FUNDAMENTOS DE REDES",
          "FÍSICA",
          "FUNDAMENTOS DE PROGRAMACIÓN",
          "COMUNICACIÓN Y HABILIDADES DIGITALES",
        ],
      },
      {
        quarter: 2,
        title: "2do. Cuatrimestre",
        subjects: [
          "INGLÉS II",
          "HABILIDADES SOCIOEMOCIONALES Y MANEJO DE CONFLICTOS",
          "CÁLCULO DIFERENCIAL",
          "CONMUTACIÓN Y ENRUTAMIENTO DE REDES",
          "PROBABILIDAD Y ESTADÍSTICA",
          "PROGRAMACIÓN ESTRUCTURADA",
          "SISTEMAS OPERATIVOS",
        ],
      },
      {
        quarter: 3,
        title: "3er. Cuatrimestre",
        subjects: [
          "INGLÉS III",
          "DESARROLLO DEL PENSAMIENTO Y TOMA DE DECISIONES",
          "CÁLCULO INTEGRAL",
          "TÓPICOS DE CALIDAD PARA EL DISEÑO DE SOFTWARE",
          "BASES DE DATOS",
          "PROGRAMACIÓN ORIENTADA A OBJETOS",
          "PROYECTO INTEGRADOR I",
        ],
      },
      {
        quarter: 4,
        title: "4to. Cuatrimestre",
        subjects: [
          "INGLÉS IV",
          "ÉTICA PROFESIONAL",
          "CÁLCULO DE VARIAS VARIABLES",
          "APLICACIONES WEB",
          "ESTRUCTURA DE DATOS",
          "DESARROLLO DE APLICACIONES MÓVILES",
          "ANÁLISIS Y DISEÑO DE SOFTWARE",
        ],
      },
      {
        quarter: 5,
        title: "5to. Cuatrimestre",
        subjects: [
          "INGLÉS V",
          "LIDERAZGO DE EQUIPOS DE ALTO DESEMPEÑO",
          "ECUACIONES DIFERENCIALES",
          "APLICACIONES WEB ORIENTADAS A SERVICIOS",
          "BASES DE DATOS AVANZADAS",
          "ESTÁNDARES Y MÉTRICAS PARA EL DESARROLLO DE SOFTWARE",
          "PROYECTO INTEGRADOR II",
        ],
      },
      {
        quarter: 6,
        title: "6to. Cuatrimestre",
        subjects: ["ESTADÍA EN EL SECTOR PRODUCTIVO"],
      },
    ],
  },
  //TSU Inteligencia Artificial --> 1
  {
    id: 1,
    idForeign: 13,
    title: "Inteligencia Artificial",
    pdf: PDF_INTELIGENCIA_ARTIFICIAL,
    img: BANNER_INTELIGENCIA_ARTIFICIAL,
    area: "",
    type: "tsu",
    competencies: [],
    quarters: [
      {
        quarter: 1,
        title: "1er. Cuatrimestre",
        subjects: [
          "INGLÉS I",
          "DESARROLLO HUMANO Y VALORES",
          "FUNDAMENTOS MATEMÁTICOS",
          "FUNDAMENTOS DE REDES",
          "FÍSICA",
          "FUNDAMENTOS DE PROGRAMACIÓN",
          "COMUNICACIÓN Y HABILIDADES DIGITALES",
        ],
      },
      {
        quarter: 2,
        title: "2do. Cuatrimestre",
        subjects: [
          "INGLÉS II",
          "HABILIDADES SOCIOEMOCIONALES Y MANEJO DE CONFLICTOS",
          "CÁLCULO DIFERENCIAL",
          "CONMUTACIÓN Y ENRUTAMIENTO DE REDES",
          "PROBABILIDAD Y ESTADÍSTICA",
          "PROGRAMACIÓN ESTRUCTURADA",
          "SISTEMAS OPERATIVOS",
        ],
      },
      {
        quarter: 3,
        title: "3er. Cuatrimestre",
        subjects: [
          "INGLÉS III",
          "DESARROLLO DEL PENSAMIENTO Y TOMA DE DECISIONES",
          "CÁLCULO INTEGRAL",
          "TÓPICOS DE CALIDAD PARA EL DISEÑO DE SOFTWARE",
          "BASE DE DATOS",
          "PROGRAMACIÓN ORIENTADA A OBJETOS",
          "PROYECTO INTEGRADOR I",
        ],
      },
      {
        quarter: 4,
        title: "4to. Cuatrimestre",
        subjects: [
          "INGLÉS IV",
          "ÉTICA PROFESIONAL",
          "CÁLCULO DE VARIAS VARIABLES",
          "APRENDIZAJE PROFUNDO (DEEP LEARNING)",
          "METODOLOGÍA NO CODE",
          "SISTEMAS DE OPTIMIZACIÓN INTELIGENTE",
          "SISTEMAS EMBEBIDOS",
        ],
      },
      {
        quarter: 5,
        title: "5to. Cuatrimestre",
        subjects: [
          "INGLÉS V",
          "LIDERAZGO DE EQUIPOS DE ALTO DESEMPEÑO",
          "ECUACIONES DIFERENCIALES",
          "MINERÍA DE DATOS",
          "APRENDIZAJE DE MÁQUINAS",
          "FUNDAMENTOS DE VISIÓN POR COMPUTADORA",
          "PROYECTO INTEGRADOR II",
        ],
      },
      {
        quarter: 6,
        title: "6to. Cuatrimestre",
        subjects: ["ESTADÍA EN EL SECTOR PRODUCTIVO"],
      },
    ],
  },
  //TSU Automatización --> 2
  {
    id: 2,
    idForeign: 14,
    title: "Automatización",
    pdf: PDF_AUTOMATIZACION,
    img: BANNER_AUTOMATIZACION,
    area: "",
    type: "tsu",
    competencies: [],
    quarters: [
      {
        quarter: 1,
        title: "1er. Cuatrimestre",
        subjects: [
          "1er. Cuatrimestre",
          "INGLÉS I",
          "DESARROLLO HUMANO Y VALORES",
          "FUNDAMENTOS MATEMÁTICOS",
          "PROCESOS INDUSTRIALES",
          "METODOLOGÍA DE LA PROGRAMACIÓN",
          "METROLOGÍA",
          "COMUNICACIÓN Y HABILIDADES DIGITALES",
        ],
      },
      {
        quarter: 2,
        title: "2do. Cuatrimestre",
        subjects: [
          "INGLÉS II",
          "HABILIDADES SOCIOEMOCIONALES Y MANEJO DE CONFLICTOS",
          "CÁLCULO DIFERENCIAL",
          "FÍSICA",
          "PROBABILIDAD Y ESTADÍSTICA",
          "CIRCUITOS ELÉCTRICOS",
          "DIBUJO PARA INGENIERÍA",
        ],
      },
      {
        quarter: 3,
        title: "3er. Cuatrimestre",
        subjects: [
          "INGLÉS III",
          "DESARROLLO DEL PENSAMIENTO Y TOMA DE DECISIONES",
          "CÁLCULO INTEGRAL",
          "ELEMENTOS MECÁNICOS",
          "ELECTRÓNICA DIGITAL",
          "ELECTRÓNICA ANALÓGICA Y DE POTENCIA",
          "PROYECTO INTEGRADOR I",
        ],
      },
      {
        quarter: 4,
        title: "4to. Cuatrimestre",
        subjects: [
          "INGLÉS IV",
          "ÉTICA PROFESIONAL",
          "CÁLCULO DE VARIAS VARIABLES",
          "ESTRUCTURA Y PROPIEDADES DE LOS MATERIALES",
          "CONTROL DE MOTORES ELÉCTRICOS",
          "SISTEMAS NEUMÁTICOS E HIDRÁULICOS",
          "INSTRUMENTACIÓN INDUSTRIAL",
        ],
      },
      {
        quarter: 5,
        title: "5to. Cuatrimestre",
        subjects: [
          "INGLÉS V",
          "LIDERAZGO DE EQUIPOS DE ALTO DESEMPEÑO",
          "ECUACIONES DIFERENCIALES",
          "CONTROLADORES LÓGICOS PROGRAMABLES",
          "PROCESOS DE MANUFACTURA",
          "IMPLEMENTACIÓN DE SISTEMAS AUTOMÁTICOS",
          "PROYECTO INTEGRADOR II",
        ],
      },
      {
        quarter: 6,
        title: "6to. Cuatrimestre",
        subjects: ["ESTADÍA EN EL SECTOR PRODUCTIVO"],
      },
    ],
  },
  //TSU Robótica --> 3
  {
    id: 3,
    idForeign: 14,
    title: "Robótica",
    pdf: PDF_ROBOTICA,
    img: BANNER_ROBOTICA,
    area: "",
    type: "tsu",
    competencies: [],
    quarters: [
      {
        quarter: 1,
        title: "1er. Cuatrimestre",
        subjects: [
          "INGLÉS I",
          "DESARROLLO HUMANO Y VALORES",
          "FUNDAMENTOS MATEMÁTICOS",
          "PROCESOS INDUSTRIALES",
          "METODOLOGÍA DE LA PROGRAMACIÓN",
          "METROLOGÍA",
          "COMUNICACIÓN Y HABILIDADES DIGITALES",
        ],
      },
      {
        quarter: 2,
        title: "2do. Cuatrimestre",
        subjects: [
          "INGLÉS II",
          "HABILIDADES SOCIOEMOCIONALES Y MANEJO DE CONFLICTOS",
          "CÁLCULO DIFERENCIAL",
          "FÍSICA",
          "PROBABILIDAD Y ESTADÍSTICA",
          "CIRCUITOS ELÉCTRICOS",
          "DIBUJO PARA INGENIERÍA",
        ],
      },
      {
        quarter: 3,
        title: "3er. Cuatrimestre",
        subjects: [
          "INGLÉS III",
          "DESARROLLO DEL PENSAMIENTO Y TOMA DE DECISIONES",
          "CÁLCULO INTEGRAL",
          "ELEMENTOS MECÁNICOS",
          "ELECTRÓNICA DIGITAL",
          "ELECTRÓNICA ANALÓGICA Y DE POTENCIA",
          "PROYECTO INTEGRADOR I",
        ],
      },
      {
        quarter: 4,
        title: "4to. Cuatrimestre",
        subjects: [
          "INGLÉS IV",
          "ÉTICA PROFESIONAL",
          "CÁLCULO DE VARIAS VARIABLES",
          "ESTRUCTURA Y PROPIEDADES DE LOS MATERIALES",
          "INTRODUCCIÓN A LA ROBÓTICA INDUSTRIAL",
          "FUNDAMENTOS DE CINEMÁTICA",
          "SEGURIDAD EN CELDAS ROBÓTICAS",
        ],
      },
      {
        quarter: 5,
        title: "5to. Cuatrimestre",
        subjects: [
          "INGLÉS V",
          "LIDERAZGO DE EQUIPOS DE ALTO DESEMPEÑO",
          "ECUACIONES DIFERENCIALES",
          "INTRODUCCIÓN A LOS SISTEMAS DE VISIÓN",
          "FUNDAMENTOS DE PROGRAMACIÓN DE ROBOTS",
          "MANTENIMIENTO A SISTEMAS ROBÓTICOS",
          "PROYECTO INTEGRADOR II",
        ],
      },
      {
        quarter: 6,
        title: "6to. Cuatrimestre",
        subjects: ["ESTADÍA EN EL SECTOR PRODUCTIVO"],
      },
    ],
  },
  //TSU Mercadotecnia BIS --> 4
  {
    id: 4,
    idForeign: 15,
    title: "Mercadotecnia",
    pdf: PDF_MERCADOTECNIA,
    img: BANNER_MERCADOTECNIA,
    area: "",
    type: "tsu",
    competencies: [],
    quarters: [
      {
        quarter: 0,
        title: "Cuatrimestre 0",
        subjects: [
          "INTRODUCCIÓN A LA LENGUA INGLESA",
          "DESARROLLO DE COMPETENCIAS GLOBALES",
          "DESARROLLO SOSTENIBLE",
          "TUTORÍAS BIS",
        ],
      },
      {
        quarter: 1,
        title: "1er. Cuatrimestre",
        subjects: [
          "INGLÉS I",
          "DESARROLLO HUMANO Y VALORES",
          "MERCADOTECNIA",
          "MATEMÁTICAS",
          "INFORMÁTICA",
          "FUNDAMENTOS DE ADMINISTRACIÓN Y ENTORNO EMPRESARIAL",
          "COMUNICACIÓN Y HABILIDADES DIGITALES",
        ],
      },
      {
        quarter: 2,
        title: "2do. Cuatrimestre",
        subjects: [
          "INGLÉS II",
          "HABILIDADES SOCIOEMOCIONALES Y MANEJO DE CONFLICTOS",
          "ESTADÍSTICA I",
          "PLANEACIÓN ESTRATÉGICA",
          "CONTABILIDAD PARA NEGOCIOS",
          "COMPORTAMIENTO DEL CONSUMIDOR",
          "ECONOMÍA",
        ],
      },
      {
        quarter: 3,
        title: "3er. Cuatrimestre",
        subjects: [
          "INGLÉS III",
          "DESARROLLO DEL PENSAMIENTO Y TOMA DE DECISIONES",
          "LEGISLACIÓN COMERCIAL",
          "ESTADÍSTICA II",
          "SISTEMA DE INVESTIGACIÓN DE MERCADOS I",
          "ESTRATEGIAS DE PRODUCTO Y PRECIO",
          "PROYECTO INTEGRADOR I",
        ],
      },
      {
        quarter: 4,
        title: "4to. Cuatrimestre",
        subjects: [
          "INGLÉS IV",
          "ÉTICA PROFESIONAL",
          "MEZCLA PROMOCIONAL",
          "DISEÑO DIGITAL Y MULTIMEDIA",
          "SISTEMA DE INVESTIGACIÓN DE MERCADOS II",
          "GESTIÓN DE VENTAS",
          "ADMINISTRACIÓN DEL TIEMPO",
        ],
      },
      {
        quarter: 5,
        title: "5to. Cuatrimestre",
        subjects: [
          "INGLÉS V",
          "LIDERAZGO DE EQUIPOS DE ALTO DESEMPEÑO",
          "LOGÍSTICA Y DISTRIBUCIÓN",
          "MERCADOTECNIA DE SERVICIOS",
          "MERCADOTECNIA DIGITAL I",
          "MERCADOTECNIA ESTRATÉGICA",
          "PROYECTO INTEGRADOR II",
        ],
      },
      {
        quarter: 6,
        title: "6to. Cuatrimestre",
        subjects: ["ESTADÍA EN EL SECTOR PRODUCTIVO"],
      },
    ],
  },
  //TSU Ventas BIS --> 5
  {
    id: 5,
    idForeign: 15,
    title: "Ventas",
    pdf: PDF_VENTAS,
    img: BANNER_VENTAS,
    area: "",
    type: "tsu",
    competencies: [],
    quarters: [
      {
        quarter: 0,
        title: "Cuatrimestre 0",
        subjects: [
          "INTRODUCCIÓN A LA LENGUA INGLESA",
          "DESARROLLO DE COMPETENCIAS GLOBALES",
          "DESARROLLO SOSTENIBLE",
          "TUTORÍAS BIS",
        ],
      },
      {
        quarter: 1,
        title: "1er. Cuatrimestre",
        subjects: [
          "INGLÉS I",
          "DESARROLLO HUMANO Y VALORES",
          "MERCADOTECNIA",
          "MATEMÁTICAS",
          "INFORMÁTICA",
          "FUNDAMENTOS DE ADMINISTRACIÓN Y ENTORNO EMPRESARIAL",
          "COMUNICACIÓN Y HABILIDADES DIGITALES",
        ],
      },
      {
        quarter: 2,
        title: "2do. Cuatrimestre",
        subjects: [
          "INGLÉS II",
          "HABILIDADES SOCIOEMOCIONALES Y MANEJO DE CONFLICTOS",
          "ESTADÍSTICA I",
          "PLANEACIÓN ESTRATÉGICA",
          "CONTABILIDAD PARA NEGOCIOS",
          "COMPORTAMIENTO DEL CONSUMIDOR",
          "ECONOMÍA",
        ],
      },
      {
        quarter: 3,
        title: "3er. Cuatrimestre",
        subjects: [
          "INGLÉS III",
          "DESARROLLO DEL PENSAMIENTO Y TOMA DE DECISIONES",
          "LEGISLACIÓN COMERCIAL",
          "ESTADÍSTICA II",
          "SISTEMA DE INVESTIGACIÓN DE MERCADOS",
          "ESTRATEGIAS DE PRODUCTO Y PRECIO",
          "PROYECTO INTEGRADOR I",
        ],
      },
      {
        quarter: 4,
        title: "4to. Cuatrimestre",
        subjects: [
          "INGLÉS IV",
          "ÉTICA PROFESIONAL",
          "MEZCLA PROMOCIONAL",
          "DISEÑO DIGITAL Y MULTIMEDIA",
          "OPERACIÓN DE ALMACENES",
          "MERCADOTECNIA EN EL PUNTO DE VENTA",
          "TÉCNICAS DE VENTA",
        ],
      },
      {
        quarter: 5,
        title: "5to. Cuatrimestre",
        subjects: [
          "INGLÉS V",
          "LIDERAZGO DE EQUIPOS DE ALTO DESEMPEÑO",
          "LOGÍSTICA Y DISTRIBUCIÓN",
          "SERVICIO Y ATENCIÓN AL CLIENTE",
          "MERCADOTECNIA DIGITAL I",
          "ADMINISTRACIÓN Y ESTRATEGIAS DE VENTA",
          "PROYECTO INTEGRADOR II",
        ],
      },
      {
        quarter: 6,
        title: "6to. Cuatrimestre",
        subjects: ["ESTADÍA EN EL SECTOR PRODUCTIVO"],
      },
    ],
  },
  //TSU Manufactura Aeronáutica --> 6
  {
    id: 6,
    idForeign: 16,
    title: "Manufactura Aeronáutica",
    pdf: PDF_AERONAUTICA,
    img: BANNER_AERONAUTICA,
    area: "",
    type: "tsu",
    competencies: [],
    quarters: [
      {
        quarter: 1,
        title: "1er. Cuatrimestre",
        subjects: [
          "INGLÉS I",
          "DESARROLLO HUMANO Y VALORES",
          "FUNDAMENTOS MATEMÁTICOS",
          "INTRODUCCIÓN A LA AERONÁUTICA",
          "INTERPRETACIÓN DE PLANOS",
          "FUNDAMENTOS DE MANUFACTURA AERONÁUTICA",
          "COMUNICACIÓN Y HABILIDADES DIGITALES",
        ],
      },
      {
        quarter: 2,
        title: "2do. Cuatrimestre",
        subjects: [
          "INGLÉS II",
          "HABILIDADES SOCIOEMOCIONALES Y MANEJO DE CONFLICTOS",
          "CÁLCULO DIFERENCIAL",
          "FÍSICA",
          "PROBABILIDAD Y ESTADÍSTICA",
          "QUÍMICA PARA MANUFACTURA AERONÁUTICA",
          "CALIDAD EN MANUFACTURA AERONÁUTICA",
        ],
      },
      {
        quarter: 3,
        title: "3er. Cuatrimestre",
        subjects: [
          "INGLÉS III",
          "DESARROLLO DEL PENSAMIENTO Y TOMA DE DECISIONES",
          "CÁLCULO INTEGRAL",
          "METROLOGÍA DIMENSIONAL",
          "CIENCIA DE LOS MATERIALES",
          "SISTEMAS DE GESTIÓN Y MANUFACTURA ESBELTA",
          "PROYECTO INTEGRADOR I",
        ],
      },
      {
        quarter: 4,
        title: "4to. Cuatrimestre",
        subjects: [
          "INGLÉS IV",
          "ÉTICA PROFESIONAL",
          "CÁLCULO DE VARIAS VARIABLES",
          "FUNDAMENTOS ELÉCTRICOS",
          "DISEÑO ASISTIDO POR COMPUTADORA",
          "PROCESOS DE ENSAMBLES AERONÁUTICOS",
          "MÁQUINAS HERRAMIENTAS CONVENCIONALES",
        ],
      },
      {
        quarter: 5,
        title: "5to. Cuatrimestre",
        subjects: [
          "INGLÉS V",
          "LIDERAZGO DE EQUIPOS DE ALTO DESEMPEÑO",
          "ECUACIONES DIFERENCIALES",
          "MANUFACTURA ADITIVA",
          "MANUFACTURA ASISTIDA POR COMPUTADORA",
          "MECANIZADO CNC",
          "PROYECTO INTEGRADOR II",
        ],
      },
      {
        quarter: 6,
        title: "6to. Cuatrimestre",
        subjects: ["ESTADÍA EN EL SECTOR PRODUCTIVO"],
      },
    ],
  },
  //TSU Procesos productivos --> 7
  {
    id: 7,
    idForeign: 17,
    pdf: PDF_PROCESOS,
    img: BANNER_PROCESOS,
    title: "Procesos productivos",
    area: "",
    type: "tsu",
    competencies: [],
    quarters: [
      {
        quarter: 1,
        title: "1er. Cuatrimestre",
        subjects: [
          "INGLÉS I",
          "DESARROLLO HUMANO Y VALORES",
          "FUNDAMENTOS MATEMÁTICOS",
          "DIBUJO INDUSTRIAL",
          "QUÍMICA BÁSICA",
          "METROLOGÍA",
          "COMUNICACIÓN Y HABILIDADES DIGITALES",
        ],
      },
      {
        quarter: 2,
        title: "2do. Cuatrimestre",
        subjects: [
          "INGLÉS II",
          "HABILIDADES SOCIOEMOCIONALES Y MANEJO DE CONFLICTOS",
          "CÁLCULO DIFERENCIAL",
          "FÍSICA",
          "PROBABILIDAD Y ESTADÍSTICA",
          "SEGURIDAD, HIGIENE Y MEDIO AMBIENTE",
          "COSTOS DE PRODUCCIÓN",
        ],
      },
      {
        quarter: 3,
        title: "3er. Cuatrimestre",
        subjects: [
          "INGLÉS III",
          "DESARROLLO DEL PENSAMIENTO Y TOMA DE DECISIONES",
          "CÁLCULO INTEGRAL",
          "CONTROL DE CALIDAD",
          "PROCESOS DE FABRICACIÓN",
          "ESTUDIO DEL TRABAJO",
          "PROYECTO INTEGRADOR I",
        ],
      },
      {
        quarter: 4,
        title: "4to. Cuatrimestre",
        subjects: [
          "INGLÉS IV",
          "ÉTICA PROFESIONAL",
          "CÁLCULO DE VARIAS VARIABLES",
          "INGENIERÍA DE PLANTA Y ESTUDIO DEL TRABAJO",
          "ADMINISTRACIÓN Y CONTROL DE LA CALIDAD",
          "TECNOLOGÍAS DE TRANSFORMACIÓN DE MATERIALES",
          "INGENIERÍA ECONÓMICA",
        ],
      },
      {
        quarter: 5,
        title: "5to. Cuatrimestre",
        subjects: [
          "INGLÉS V",
          "LIDERAZGO DE EQUIPOS DE ALTO DESEMPEÑO",
          "ECUACIONES DIFERENCIALES",
          "ADMINISTRACIÓN Y CONTROL DE OPERACIONES",
          "GESTIÓN AMBIENTAL EN PROCESOS INDUSTRIALES",
          "SISTEMAS DE MANUFACTURA APLICADA",
          "PROYECTO INTEGRADOR II",
        ],
      },
      {
        quarter: 6,
        title: "6to. Cuatrimestre",
        subjects: ["ESTADÍA EN EL SECTOR PRODUCTIVO"],
      },
    ],
  },
  //TSU Maquinados de Precisión --> 8
  {
    id: 8,
    idForeign: 17,
    title: "Maquinados de Precisión",
    pdf: PDF_MAQUINADOS,
    img: BANNER_MAQUINADOS,
    area: "",
    type: "tsu",
    competencies: [],
    quarters: [
      {
        quarter: 1,
        title: "1er. Cuatrimestre",
        subjects: [
          "INGLÉS I",
          "DESARROLLO HUMANO Y VALORES",
          "FUNDAMENTOS MATEMÁTICOS",
          "DIBUJO INDUSTRIAL",
          "QUÍMICA BÁSICA",
          "METROLOGÍA",
          "COMUNICACIÓN Y HABILIDADES DIGITALES",
        ],
      },
      {
        quarter: 2,
        title: "2do. Cuatrimestre",
        subjects: [
          "INGLÉS II",
          "HABILIDADES SOCIOEMOCIONALES Y MANEJO DE CONFLICTOS",
          "CÁLCULO DIFERENCIAL",
          "FÍSICA",
          "PROBABILIDAD Y ESTADÍSTICA",
          "SEGURIDAD, HIGIENE Y MEDIO AMBIENTE",
          "COSTOS DE PRODUCCIÓN",
        ],
      },
      {
        quarter: 3,
        title: "3er. Cuatrimestre",
        subjects: [
          "INGLÉS III",
          "DESARROLLO DEL PENSAMIENTO Y TOMA DE DECISIONES",
          "CÁLCULO INTEGRAL",
          "CONTROL DE CALIDAD",
          "PROCESOS DE FABRICACIÓN",
          "ESTUDIO DEL TRABAJO",
          "PROYECTO INTEGRADOR I",
        ],
      },
      {
        quarter: 4,
        title: "4to. Cuatrimestre",
        subjects: [
          "INGLÉS IV",
          "ÉTICA PROFESIONAL",
          "CÁLCULO DE VARIAS VARIABLES",
          "PROCESO DE MAQUINADO DE PRECISIÓN NO CONVENCIONAL",
          "PROCESO DE MAQUINADO DE PRECISIÓN CONVENCIONAL",
          "DIBUJO ASISTIDO POR COMPUTADORA",
          "TOLERANCIAS GEOMÉTRICAS Y DIMENSIONALES",
        ],
      },
      {
        quarter: 5,
        title: "5to. Cuatrimestre",
        subjects: [
          "INGLÉS V",
          "LIDERAZGO DE EQUIPOS DE ALTO DESEMPEÑO",
          "ECUACIONES DIFERENCIALES",
          "PROCESO DE MAQUINADO DE PRECISIÓN CNC",
          "MANUFACTURA ASISTIDA POR COMPUTADORA",
          "ESTRUCTURA Y PROPIEDAD DE LOS MATERIALES",
          "PROYECTO INTEGRADOR II",
        ],
      },
      {
        quarter: 6,
        title: "6to. Cuatrimestre",
        subjects: ["ESTADÍA EN EL SECTOR PRODUCTIVO"],
      },
    ],
  },
  //TSU Operaciones Logísticas y Comercio Exterior --> 9
  {
    id: 9,
    idForeign: 18,
    title: "Operaciones Logísticas y Comercio Exterior",
    pdf: PDF_LOGISTICA,
    img: BANNER_LOGISTICA,
    area: "",
    type: "tsu",
    competencies: [],
    quarters: [
      {
        quarter: 1,
        title: "1er. Cuatrimestre",

        subjects: [
          "INGLÉS I",
          "DESARROLLO HUMANO Y VALORES",
          "FUNDAMENTOS MATEMÁTICOS",
          "ESTRUCTURA ORGANIZACIONAL",
          "NORMATIVIDAD APLICADA AL COMERCIO EXTERIOR I",
          "ECONOMÍA INTERNACIONAL",
          "COMUNICACIÓN Y HABILIDADES DIGITALES",
        ],
      },
      {
        quarter: 2,
        title: "2do. Cuatrimestre",
        subjects: [
          "INGLÉS II",
          "HABILIDADES SOCIOEMOCIONALES Y MANEJO DE CONFLICTOS",
          "CÁLCULO DIFERENCIAL",
          "CLASIFICACIÓN ARANCELARIA I",
          "NORMATIVIDAD APLICADA AL COMERCIO EXTERIOR II",
          "MERCADOTECNIA INTERNACIONAL",
          "FUNDAMENTOS DE LOGÍSTICA",
        ],
      },
      {
        quarter: 3,
        title: "3er. Cuatrimestre",
        subjects: [
          "INGLÉS III",
          "DESARROLLO DEL PENSAMIENTO Y TOMA DE DECISIONES",
          "CÁLCULO INTEGRAL",
          "CLASIFICACIÓN ARANCELARIA II",
          "FÍSICA",
          "ADMINISTRACIÓN DE VENTAS",
          "PROYECTO INTEGRADOR I",
        ],
      },
      {
        quarter: 4,
        title: "4to. Cuatrimestre",
        subjects: [
          "INGLÉS IV",
          "ÉTICA PROFESIONAL",
          "CÁLCULO DE VARIAS VARIABLES",
          "CLASIFICACIÓN ARANCELARIA III",
          "TRÁMITES LEGALES APLICADOS",
          "PROBABILIDAD Y ESTADÍSTICA",
          "PRESUPUESTOS LOGÍSTICOS",
        ],
      },
      {
        quarter: 5,
        title: "5to. Cuatrimestre",
        subjects: [
          "INGLÉS V",
          "LIDERAZGO DE EQUIPOS DE ALTO DESEMPEÑO",
          "ECUACIONES DIFERENCIALES",
          "CONTRIBUCIONES AL COMERCIO EXTERIOR",
          "PEDIMENTO Y SU LEGISLACIÓN",
          "SEGUIMIENTO LOGÍSTICO",
          "PROYECTO INTEGRADOR II",
        ],
      },
      {
        quarter: 6,
        title: "6to. Cuatrimestre",
        subjects: ["ESTADÍA EN EL SECTOR PRODUCTIVO"],
      },
    ],
  },
  //TSU Mantenimiento Industrial --> 10
  {
    id: 10,
    idForeign: 19,
    title: "Mantenimiento Industrial",
    pdf: PDF_MANTENIMIENTO,
    img: BANNER_MANTENIMIENTO,
    area: "",
    type: "tsu",
    competencies: [],
    quarters: [
      {
        quarter: 1,
        title: "1er. Cuatrimestre",
        subjects: [
          "INGLÉS I",
          "DESARROLLO HUMANO Y VALORES",
          "FUNDAMENTOS MATEMÁTICOS",
          "FUNDAMENTOS DE MANTENIMIENTO",
          "DIBUJO INDUSTRIAL",
          "SEGURIDAD INDUSTRIAL",
          "COMUNICACIÓN Y HABILIDADES DIGITALES",
        ],
      },
      {
        quarter: 2,
        title: "2do. Cuatrimestre",
        subjects: [
          "INGLÉS II",
          "HABILIDADES SOCIOEMOCIONALES Y MANEJO DE CONFLICTOS",
          "CÁLCULO DIFERENCIAL",
          "FÍSICA",
          "PROBABILIDAD Y ESTADÍSTICA",
          "GESTIÓN DEL MANTENIMIENTO",
          "TERMODINÁMICA",
        ],
      },
      {
        quarter: 3,
        title: "3er. Cuatrimestre",
        subjects: [
          "INGLÉS III",
          "DESARROLLO DEL PENSAMIENTO Y TOMA DE DECISIONES",
          "CÁLCULO INTEGRAL",
          "SISTEMAS ELÉCTRICOS",
          "MÁQUINAS Y MECANISMOS",
          "ELECTRÓNICA ANALÓGICA",
          "PROYECTO INTEGRADOR I",
        ],
      },
      {
        quarter: 4,
        title: "4to. Cuatrimestre",
        subjects: [
          "INGLÉS IV",
          "ÉTICA PROFESIONAL",
          "CÁLCULO DE VARIAS VARIABLES",
          "MÁQUINAS ELÉCTRICAS",
          "MANTENIMIENTO A PROCESOS DE MANUFACTURA",
          "ELECTRÓNICA DIGITAL",
          "SISTEMAS NEUMÁTICOS E HIDRÁULICOS",
        ],
      },
      {
        quarter: 5,
        title: "5to. Cuatrimestre",
        subjects: [
          "INGLÉS V",
          "LIDERAZGO DE EQUIPOS DE ALTO DESEMPEÑO",
          "ECUACIONES DIFERENCIALES",
          "AUTOMATIZACIÓN Y ROBOTICA",
          "SISTEMAS TÉRMICOS E INDUSTRIALES",
          "CIENCIA DE LOS MATERIALES",
          "PROYECTO INTEGRADOR II",
        ],
      },
      {
        quarter: 6,
        title: "6to. Cuatrimestre",
        subjects: ["ESTADÍA EN EL SECTOR PRODUCTIVO"],
      },
    ],
  },
  //TSU Energía Solar --> 11
  {
    id: 11,
    idForeign: 20,
    title: "Energía Solar",
    pdf: PDF_SOLAR,
    img: BANNER_SOLAR,
    area: "",
    type: "tsu",
    competencies: [],
    quarters: [
      {
        quarter: 1,
        title: "1er. Cuatrimestre",
        subjects: [
          "INGLÉS I",
          "DESARROLLO HUMANO Y VALORES",
          "FUNDAMENTOS MATEMÁTICOS",
          "FÍSICA",
          "ENERGÍA Y DESARROLLO SOSTENIBLE",
          "DIBUJO ASISTIDO POR COMPUTADORA",
          "COMUNICACIÓN Y HABILIDADES DIGITALES",
        ],
      },
      {
        quarter: 2,
        title: "2do. Cuatrimestre",
        subjects: [
          "INGLÉS II",
          "HABILIDADES SOCIOEMOCIONALES Y MANEJO DE CONFLICTOS",
          "CÁLCULO DIFERENCIAL",
          "PROBABILIDAD Y ESTADÍSTICA",
          "SEGURIDAD Y MEDIO AMBIENTE",
          "CIRCUITOS ELÉCTRICOS",
          "DIAGNÓSTICOS ENERGÉTICOS",
        ],
      },
      {
        quarter: 3,
        title: "3er. Cuatrimestre",
        subjects: [
          "INGLÉS III",
          "DESARROLLO DEL PENSAMIENTO Y TOMA DE DECISIONES",
          "CÁLCULO INTEGRAL",
          "TEMAS SELECTOS DE QUÍMICA",
          "INSTALACIONES ELÉCTRICAS INDUSTRIALES",
          "ELECTRÓNICA INDUSTRIAL",
          "PROYECTO INTEGRADOR I",
        ],
      },
      {
        quarter: 4,
        title: "4to. Cuatrimestre",
        subjects: [
          "INGLÉS IV",
          "ÉTICA PROFESIONAL",
          "CÁLCULO DE VARIAS VARIABLES",
          "TEMAS SELECTOS DE TERMODINÁMICA Y TRANSFERENCIA DE ENERGÍA",
          "METROLOGÍA",
          "CIENCIA E INGENIERÍA DE MATERIALES",
          "GESTIÓN DEL MANTENIMIENTO",
        ],
      },
      {
        quarter: 5,
        title: "5to. Cuatrimestre",
        subjects: [
          "INGLÉS V",
          "LIDERAZGO DE EQUIPOS DE ALTO DESEMPEÑO",
          "ECUACIONES DIFERENCIALES",
          "SISTEMAS TERMOSOLARES",
          "MECÁNICA DE FLUIDOS",
          "SISTEMAS FOTOVOLTAICOS",
          "PROYECTO INTEGRADOR II",
        ],
      },
      {
        quarter: 6,
        title: "6to. Cuatrimestre",
        subjects: ["ESTADÍA EN EL SECTOR PRODUCTIVO"],
      },
    ],
  },
  //TSU Energía Turbo-Solar --> 12
  {
    id: 12,
    idForeign: 21,
    title: "Energía Turbo-Solar",
    pdf: PDF_TURBO_SOLAR,
    img: BANNER_TURBO_SOLAR,
    area: "",
    type: "tsu",
    competencies: [],
    quarters: [
      {
        quarter: 1,
        title: "1er. Cuatrimestre",
        subjects: [
          "INGLÉS I",
          "DESARROLLO HUMANO Y VALORES",
          "FUNDAMENTOS MATEMÁTICOS",
          "FÍSICA",
          "ENERGÍA Y DESARROLLO SOSTENIBLE",
          "DIBUJO ASISTIDO POR COMPUTADORA",
          "COMUNICACIÓN Y HABILIDADES DIGITALES",
        ],
      },
      {
        quarter: 1,
        title: "2do. Cuatrimestre",
        subjects: [
          "INGLÉS II",
          "HABILIDADES SOCIOEMOCIONALES Y MANEJO DE CONFLICTOS",
          "CÁLCULO DIFERENCIAL",
          "PROBABILIDAD Y ESTADÍSTICA",
          "SEGURIDAD Y MEDIO AMBIENTE",
          "CIRCUITOS ELÉCTRICOS",
          "DIAGNÓSTICOS ENERGÉTICOS",
        ],
      },
      {
        quarter: 1,
        title: "3er. Cuatrimestre",
        subjects: [
          "INGLÉS III",
          "DESARROLLO DEL PENSAMIENTO Y TOMA DE DECISIONES",
          "CÁLCULO INTEGRAL",
          "TEMAS SELECTOS DE QUÍMICA",
          "INSTALACIONES ELÉCTRICAS INDUSTRIALES",
          "ELECTRÓNICA INDUSTRIAL",
          "PROYECTO INTEGRADOR I",
        ],
      },
      {
        quarter: 1,
        title: "4to. Cuatrimestre",
        subjects: [
          "INGLÉS IV",
          "ÉTICA PROFESIONAL",
          "CÁLCULO DE VARIAS VARIABLES",
          "TEMAS SELECTOS DE TERMODINÁMICA Y TRANSFERENCIA DE ENERGÍA",
          "METROLOGÍA",
          "ANÁLISIS DE RECURSO ENERGÉTICO",
          "GESTIÓN DEL MANTENIMIENTO",
        ],
      },
      {
        quarter: 1,
        title: "5to. Cuatrimestre",
        subjects: [
          "INGLÉS V",
          "LIDERAZGO DE EQUIPOS DE ALTO DESEMPEÑO",
          "ECUACIONES DIFERENCIALES",
          "ENERGÍA SOLAR",
          "MÁQUINAS ELÉCTRICAS",
          "SISTEMAS ELECTROMECÁNICOS",
          "PROYECTO INTEGRADOR II",
        ],
      },
      {
        quarter: 1,
        title: "6to. Cuatrimestre",
        subjects: ["ESTADÍA EN EL SECTOR PRODUCTIVO"],
      },
    ],
  },
  //ING Tecnologías de la Información e Información Digital --> 13
  {
    id: 13,
    area: "",
    type: "ing",
    competencies: [],
    quarters: [
      {
        quarter: 7,
        title: "7mo. Cuatrimestre",
        subjects: [
          "INGLÉS VI",
          "HABILIDADES GERENCIALES",
          "FORMACIÓN DE PROYECTOS DE TECNOLOGÍA",
          "FUNDAMENTOS DE INTELIGENCIA ARTIFICIAL",
          "ÉTICA Y LEGISLACIÓN EN TECNOLOGÍAS DE LA INFORMACIÓN",
          "OPTATIVA I",
          "SEGURIDAD INFORMÁTICA",
        ],
      },
      {
        quarter: 8,
        title: "8vo. Cuatrimestre",
        subjects: [
          "INGLÉS VII",
          "ELECTRONICA DIGITAL",
          "GESTIÓN DE PROYECTOS DE TECNOLOGÍA",
          "PROGRAMACIÓN PARA INTELIGENCIA ARTIFICIAL",
          "ADMINISTRACIÓN DE SERVIDORES",
          "OPTATIVA II",
          "INFORMÁTICA FORENCE",
        ],
      },
      {
        quarter: 9,
        title: "9no. Cuatrimestre",
        subjects: [
          "INGLÉS VIII",
          "INTERNET DE LAS COSAS",
          "EVALUACIÓN DE PROYECTOS DE TECNOLOGÍA",
          "CIENCIA DE DATOS",
          "TECNOLOGÍAS DISRUPTIVAS",
          "OPTATIVA III",
          "PROYECTO INTEGRADOR III",
        ],
      },
      {
        quarter: 10,
        title: "10mo. Cuatrimestre",
        subjects: ["ESTADÍA EN EL SECTOR PRODUCTIVO"],
      },
    ],
  },
  //ING Mecatrónica --> 14
  {
    id: 14,
    area: "",
    type: "ing",
    competencies: [],
    quarters: [
      {
        quarter: 7,
        title: "7mo. Cuatrimestre",
        subjects: [
          "INGLÉS VI",
          "HABILIDADES GERENCIALES",
          "MODELADO Y SIMULACIÓN DE SISTEMAS",
          "CINEMÁTICA Y DINÁMICA DE ROBOTS",
          "ANÁLISIS DE MECANISMOS",
          "INSTRUMENTACIÓN VIRTUAL",
          "SISTEMAS EMBEBIDOS",
        ],
      },
      {
        quarter: 7,
        title: "8vo. Cuatrimestre",
        subjects: [
          "INGLÉS VII",
          "DISEÑO ASISTIDO POR COMPUTADORA",
          "INGENIERÍA DE CONTROL",
          "PROGRAMACIÓN DE ROBOTS INDUSTRIALES",
          "DISEÑO MECÁNICO",
          "SISTEMAS CAM CNC",
          "DISEÑO DE SISTEMAS MECATRÓNICOS",
        ],
      },
      {
        quarter: 9,
        title: "9no. Cuatrimestre",
        subjects: [
          "INGLÉS VIII",
          "SISTEMAS ELÉCTRICOS INDUSTRIALES",
          "CONTROL AVANZADO",
          "ADMINISTRACIÓN DE MANTENIMIENTO",
          "INGENIERÍA ASISTIDA POR COMPUTADORA",
          "SISTEMAS DE MANUFACTURA FLEXIBLE",
          "PROYECTO INTEGRADOR III",
        ],
      },
      {
        quarter: 10,
        title: "10mo. Cuatrimestre",
        subjects: ["ESTADÍA EN EL SECTOR PRODUCTIVO"],
      },
    ],
  },
  //LIC Negocios y Mercadotecnia BIS --> 15
  {
    id: 15,
    area: "",
    type: "lic",
    competencies: [],
    quarters: [
      {
        quarter: 7,
        title: "7mo. Cuatrimestre",
        subjects: [
          "INGLÉS VI",
          "HABILIDADES GERENCIALES",
          "ESTADÍSTICA APLICADA A LOS NEGOCIOS",
          "MERCADOTECNIA INTERNACIONAL",
          "DESARROLLO DE NUEVOS PRODUCTOS",
          "TENDENCIAS DEL MERCADO Y CONSUMIDOR GLOBAL",
          "PLANEACIÓN Y ORGANIZACIÓN DEL TRABAJO",
        ],
      },
      {
        quarter: 8,
        title: "8vo. Cuatrimestre",
        subjects: [
          "INGLÉS VII",
          "MERCADOTECNIA DIGITAL II",
          "INTELIGENCIA DE MERCADOS",
          "GESTIÓN DE LA CALIDAD",
          "INTELIGENCIA FINANCIERA",
          "ADMINISTRACIÓN DE LA PRODUCCIÓN",
          "GESTIÓN DEL TALENTO HUMANO",
        ],
      },
      {
        quarter: 9,
        title: "9no. Cuatrimestre",
        subjects: [
          "INGLÉS VIII",
          "CULTURA EMPRENDEDORA",
          "CADENA DE SUMINISTRO",
          "PLAN DE NEGOCIOS",
          "COMUNICACIÓN INTEGRAL DE LA MERCADOTECNIA",
          "DERECHO CORPORATIVO",
          "PROYECTO INTEGRADOR III",
        ],
      },
      {
        quarter: 10,
        title: "10mo. Cuatrimestre",
        subjects: ["ESTADÍA EN EL SECTOR PRODUCTIVO"],
      },
    ],
  },
  //ING Aeronáutica en manufactura --> 16
  {
    id: 16,
    area: "",
    type: "ing",
    competencies: [],
    quarters: [
      {
        quarter: 7,
        title: "7mo. Cuatrimestre",
        subjects: [
          "INGLÉS VI",
          "HABILIDADES GERENCIALES",
          "TÓPICOS DE INGENIERÍA INDUSTRIAL I",
          "PROCESOS DE TRATAMIENTOS SUPERFICIALES",
          "INGENIERÍA ASISTIDA POR COMPUTADORA",
          "MATERIALES COMPUESTOS",
          "PROCESOS DE CONFORMADO DE MATERIALES",
        ],
      },
      {
        quarter: 8,
        title: "8vo. Cuatrimestre",
        subjects: [
          "INGLÉS VII",
          "ENSAYOS NO DESTRUCTIVOS",
          "GESTIÓN DE PROYECTOS DE MANUFACTURA AERONÁUTICA I",
          "PROCESOS DE SOLDADURA",
          "TÓPICOS DE INGENIERÍA INDUSTRIAL II",
          "TERMODINÁMICA APLICADA",
          "SISTEMAS DE AERONAVES",
        ],
      },
      {
        quarter: 9,
        title: "9no. Cuatrimestre",
        subjects: [
          "INGLÉS VIII",
          "EMPRENDIMIENTO E INNOVACIÓN",
          "GESTIÓN DE PROYECTOS DE MANUFACTURA AERONÁUTICA II",
          "CONTROL DE SISTEMA DE MANUFACTURA",
          "MAQUINADO AVANZADO",
          "PROCESOS DE TRATAMIENTOS TÉRMICOS Y TERMOQUÍMICOS",
          "PROYECTO INTEGRADOR III",
        ],
      },
      {
        quarter: 10,
        title: "10mo. Cuatrimestre",
        subjects: ["ESTADÍA EN EL SECTOR PRODUCTIVO"],
      },
    ],
  },
  //ING Industrial --> 17
  {
    id: 17,
    area: "",
    type: "ing",
    competencies: [],
    quarters: [
      {
        quarter: 7,
        title: "7mo. Cuatrimestre",
        subjects: [
          "INGLÉS VI",
          "HABILIDADES GERENCIALES",
          "INGENIERÍA DE PLANTA",
          "INVESTIGACIÓN DE OPERACIONES I",
          "MANUFACTURA ESBELTA",
          "AUTOMATIZACIÓN Y CONTROL DE PROCESOS",
          "TÓPICOS DE NUEVAS TECNOLOGÍAS DE MANUFACTURA",
        ],
      },
      {
        quarter: 8,
        title: "8vo. Cuatrimestre",
        subjects: [
          "INGLÉS VII",
          "SISTEMAS DE GESTIÓN DE LA CALIDAD",
          "LOGÍSTICA",
          "INVESTIGACIÓN DE OPERACIONES II",
          "6 SIGMA",
          "DISEÑO DEL PRODUCTO",
          "EVALUACIÓN Y ADMINISTRACIÓN DE PROYECTOS",
        ],
      },
      {
        quarter: 9,
        title: "9no. Cuatrimestre",
        subjects: [
          "INGLÉS VIII",
          "LEGISLACIÓN INDUSTRIAL",
          "ADMINISTRACIÓN INDUSTRIAL Y DE SERVICIOS",
          "SIMULACIÓN DE PROCESOS",
          "ADMINISTRACIÓN DEL MANTENIMIENTO",
          "MANUFACTURA INTEGRADA POR COMPUTADORA",
          "PROYECTO INTEGRADOR III",
        ],
      },
      {
        quarter: 10,
        title: "10mo. Cuatrimestre",
        subjects: ["ESTADÍA EN EL SECTOR PRODUCTIVO"],
      },
    ],
  },
  //ING Logística Internacional --> 18
  {
    id: 18,
    area: "",
    type: "ing",
    competencies: [],
    quarters: [
      {
        quarter: 7,
        title: "7mo. Cuatrimestre",
        subjects: [
          "INGLÉS VI",
          "HABILIDADES GERENCIALES",
          "ENVASE, EMPAQUE, EMBALAJE",
          "GESTIÓN DE OPERACIÓN ADUANERA",
          "SEGURIDAD EN LA CADENA DE SUMINISTRO",
          "CONTABILIDAD BÁSICA",
          "GESTIÓN DE CADENA DE SUMINISTRO",
        ],
      },
      {
        quarter: 8,
        title: "8vo. Cuatrimestre",
        subjects: [
          "INGLÉS VII",
          "ADMINISTRACIÓN DE OPERACIONES DE TRÁFICO I",
          "INVESTIGACIÓN DE OPERACIONES",
          "CUMPLIMIENTO NORMATIVO",
          "ADMINISTRACIÓN DE SISTEMAS LOGÍSTICOS",
          "FINANZAS INTERNACIONALES",
          "METODOLOGÍA DE LA INVESTIGACIÓN",
        ],
      },
      {
        quarter: 9,
        title: "9no. Cuatrimestre",
        subjects: [
          "INGLÉS VIII",
          "ADMINISTRACIÓN DE OPERACIONES DE TRÁFICO II",
          "LOGÍSTICA DE TRANSPORTE",
          "INFRACCIONES, SANCIONES Y MEDIOS DE DEFENSA",
          "GESTIÓN DE LA CALIDAD EN LA LOGÍSTICA",
          "PROYECTO INTEGRADOR III",
        ],
      },
      {
        quarter: 10,
        title: "10mo. Cuatrimestre",
        subjects: ["ESTADÍA EN EL SECTOR PRODUCTIVO"],
      },
    ],
  },
  //ING Mantenimiento Industrial --> 19
  {
    id: 19,
    area: "",
    type: "ing",
    competencies: [],
    quarters: [
      {
        quarter: 7,
        title: "7mo. Cuatrimestre",
        subjects: [
          "INGLÉS VI",
          "HABILIDADES GERENCIALES",
          "FÍSICA PARA INGENIERÍA",
          "ADMINISTRACIÓN ESTRATÉGICA PARA MANTENIMIENTO",
          "TRIBOLOGÍA",
          "INSTALACIONES ELÉCTRICAS",
          "MÉTODOS Y SISTEMAS DE TRABAJO",
        ],
      },
      {
        quarter: 8,
        title: "8vo. Cuatrimestre",
        subjects: [
          "INGLÉS VII",
          "INGENIERÍA ECONÓMICA",
          "MANTENIMIENTO PREDICTIVO MECÁNICO",
          "TÉCNICAS TPM Y RCM",
          "ENSAYOS DESTRUCTIVOS",
          "SISTEMAS AUTOMATIZADOS Y REDES INDUSTRIALES",
          "PROTOCOLOS DE OPERACIÓN Y MANTENIMIENTO",
        ],
      },
      {
        quarter: 9,
        title: "9no. Cuatrimestre",
        subjects: [
          "INGLÉS VIII",
          "GESTIÓN AMBIENTAL",
          "MANUFACTURA ASISTIDA POR COMPUTADORA",
          "GESTIÓN DEL TALENTO HUMANO",
          "ENSAYOS NO DESTRUCTIVOS",
          "VISUALIZACIÓN Y CONTROL DE PROCESOS",
          "PROYECTO INTEGRADOR III",
        ],
      },
      {
        quarter: 10,
        title: "10mo. Cuatrimestre",
        subjects: ["10mo. Cuatrimestre", "ESTADÍA EN EL SECTOR PRODUCTIVO"],
      },
    ],
  },
  //ING Energía y Desarrollo Sostenible --> 20
  {
    id: 20,
    area: "",
    type: "ing",
    competencies: [],
    quarters: [
      {
        quarter: 7,
        title: "7mo. Cuatrimestre",
        subjects: [
          "INGLÉS VI",
          "HABILIDADES GERENCIALES",
          "SISTEMAS DE ADQUISICIÓN DE DATOS",
          "TEMAS SELECTOS DE FÍSICA",
          "INTRODUCCIÓN A LAS REDES ELÉCTRICAS INTELIGENTES",
          "INGENIERÍA DE EQUIPOS Y SISTEMAS INDUSTRIALES",
          "ELECTROQUÍMICA",
        ],
      },
      {
        quarter: 8,
        title: "8vo. Cuatrimestre",
        subjects: [
          "INGLÉS VII",
          "INGENIERÍA DE LA BIOMASA",
          "SISTEMAS DE GENERACIÓN DISTRIBUIDOS",
          "ARQUITECTURA BIOCLIMÁTICA",
          "NORMATIVIDAD Y SUSTENTABILIDAD ENERGÉTICA",
          "ALMACENAMIENTO DE ENERGÍA",
          "HIDRÓGENO Y CELDAS DE COMBUSTIBLES",
        ],
      },
      {
        quarter: 9,
        title: "9no. Cuatrimestre",
        subjects: [
          "INGLÉS VIII",
          "DISEÑO DE PROYECTOS EÓLICOS",
          "MODELADO Y SIMULACIÓN DE SISTEMAS EN ENERGÍAS RENOVABLES",
          "EFICIENCIA ENERGÉTICA",
          "DISEÑO DE PROYECTOS FOTOVOLTAICOS",
          "INGENIERÍA ECONÓMICA",
          "PROYECTO INTEGRADOR III",
        ],
      },
      {
        quarter: 10,
        title: "10mo. Cuatrimestre",
        subjects: ["ESTADÍA EN EL SECTOR PRODUCTIVO"],
      },
    ],
  },
  //ING Energía y Desarrollo Sostenible --> 21
  {
    id: 21,
    area: "",
    type: "ing",
    competencies: [],
    quarters: [
      {
        quarter: 7,
        title: "7mo. Cuatrimestre",
        subjects: [
          "INGLÉS VI",
          "HABILIDADES GERENCIALES",
          "SISTEMAS DE ADQUISICIÓN DE DATOS",
          "TEMAS SELECTOS DE FÍSICA",
          "INTRODUCCIÓN A LAS REDES ELÉCTRICAS INTELIGENTES",
          "OPTATIVA I",
          "ELECTROQUÍMICA",
        ],
      },
      {
        quarter: 8,
        title: "8vo. Cuatrimestre",
        subjects: [
          "INGLÉS VII",
          "INGENIERÍA DE LA BIOMASA",
          "OPTATIVA II",
          "OPTATIVA III",
          "NORMATIVIDAD Y SUSTENTABILIDAD ENERGÉTICA",
          "ALMACENAMIENTO DE ENERGÍA",
          "HIDRÓGENO Y CELDAS DE COMBUSTIBLES",
        ],
      },
      {
        quarter: 9,
        title: "9no. Cuatrimestre",
        subjects: [
          "INGLÉS VIII",
          "DISEÑO DE PROYECTOS EÓLICOS",
          "OPTATIVA IV",
          "EFICIENCIA ENERGÉTICA",
          "DISEÑO DE PROYECTOS FOTOVOLTAICOS",
          "INGENIERÍA ECONÓMICA",
          "PROYECTO INTEGRADOR III",
        ],
      },
      {
        quarter: 10,
        title: "10mo. Cuatrimestre",
        subjects: ["ESTADÍA EN EL SECTOR PRODUCTIVO"],
      },
    ],
  },
];

export const engineering = [
  {
    id: 0,
    title: "Tecnologías de la Información e Innovación Digital",
    degrees: [0, 1],
  },
  {
    id: 1,
    title: "Mecatrónica",
    degrees: [2, 3],
  },
  {
    id: 2,
    title: "Negocios y Mercadotecnia",
    degrees: [4, 5],
  },
  {
    id: 3,
    title: "Aeronáutica en manufactura",
    degrees: [6],
  },
  {
    id: 4,
    title: "Industrial",
    degrees: [7, 8],
  },
  {
    id: 5,
    title: "Logística Internacional",
    degrees: [9],
  },
  {
    id: 6,
    title: "Mantenimiento Industrial",
    degrees: [10],
  },
  {
    id: 7,
    title: "Energía y Desarrollo Sostenible",
    degrees: [11, 12],
  },
];
