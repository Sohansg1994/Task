import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

interface LaptopState {
  rawData: any[];
  brands: string[];
  addLaptop: (laptop: any) => void;
  addLaptops: (laptops: any[]) => void;
  addBrands: (uniqueBrands: any[]) => void;
  clearData: () => void;
  clearBrandData: () => void;
}

const laptopStore = create<LaptopState>()(
  devtools((set) => ({
    rawData: [],
    brands: ["Any"],
    addLaptop: (laptop) =>
      set((state) => ({ rawData: [...state.rawData, laptop] })),
    addLaptops: (laptops) =>
      set((state) => ({ rawData: [...state.rawData, ...laptops] })),
    addBrands: (uniqueBrands) =>
      set((state) => ({ brands: [...state.brands, ...uniqueBrands] })),
    clearData: () => set({ rawData: [] }),
    clearBrandData: () => set({ brands: ["Any"] }),
  }))
);

export default laptopStore;
