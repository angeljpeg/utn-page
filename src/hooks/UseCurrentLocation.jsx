import { useContext } from "react";
import { CurrentLocationContext } from "@context/CurrentLocation";

export const useCurrentLocation = () => {
  const context = useContext(CurrentLocationContext);
  return context;
};
