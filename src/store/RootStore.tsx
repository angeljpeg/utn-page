import { create } from "zustand";


// Define la interfaz para el store
export interface HomeStore {
  isHome: boolean;
  title: string | undefined;
  component: JSX.Element | undefined;
  banner: string;
  updateHome: (newHome: boolean) => void;
  updateTitle: (newTitle: string) => void;
  updateComponent: (newComponent: JSX.Element) => void;
  updateBanner: (newBanner: string) => void;
}


// Crea el store usando Zustand
export const useHomeStore = create<HomeStore>((set) => ({
  isHome: false,
  title: "",
  component: undefined,
  banner: "",
  updateHome: (newHome) => set({ isHome: newHome }),
  updateTitle: (newTitle) => set({ title: newTitle, component: undefined }),
  updateComponent: (newComponent) => set({ component: newComponent, title: undefined }),
  updateBanner: (newBanner) => set({ banner: newBanner }),
}));