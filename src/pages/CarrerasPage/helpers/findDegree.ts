import {degreesType} from "../data/interfaces"

export const findDegree = (degrees : degreesType[], id : number | undefined) =>
  degrees.find((degree) => degree.id === id);
