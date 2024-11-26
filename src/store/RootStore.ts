import { create } from "zustand";

export interface HomeStoreState {
  isHome: boolean;
}

export interface HomeStoreActions {
  updateHome: () => void;
}

export const UseHomeStore = create((set) => ({
  isHome: false,
  updateHome: (newHome) => set({ isHome: true }),
}));

export const HeaderStore = create((set) => ({
  header: "",
  updateHeader: (newHeader) => set({ header: newHeader }),
}));

export const BannerStore = create((set) => ({
  banner: "",
  updateBanner: (newBanner) => set({ banner: newBanner }),
}));
