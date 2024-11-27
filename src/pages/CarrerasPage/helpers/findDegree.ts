import {degreesType} from "@/interfaces/carrera.interface"

export const findDegree = (degrees : degreesType[], id : number | undefined) =>
  degrees.find((degree) => degree.id === id);
