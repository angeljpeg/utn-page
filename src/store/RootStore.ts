import { create } from "zustand";

export const IsHomeStore = create((set) => ({
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
