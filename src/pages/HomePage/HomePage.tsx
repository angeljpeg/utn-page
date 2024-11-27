import { useEffect } from "react";
// Store
import { useHomeStore } from "@/store/RootStore";

// Components

export default function HomePage() {
  const updateHome = useHomeStore((state) => state.updateHome);
  const updateComponent = useHomeStore((state) => state.updateComponent);

  useEffect(() => {
    updateHome(true);
    updateComponent(<h1>hola mundo</h1>)
  }, [updateHome, updateComponent]);

  return <section className="w-full">Este es el homepage</section>;
}
