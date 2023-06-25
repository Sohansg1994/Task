import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface LaptopState {
  rawData: any[];
  tableData: any[];
  records: any[];
  brands: string[];
  isDataLoaded: boolean;
  isDataEdited: boolean;

  addLaptop: (laptop: any) => void;
  addLaptops: (laptops: any[]) => void;
  setTableData: (laptops: any[]) => void;
  setRecords: (laptops: any[]) => void;
  setRawData: (laptops: any[]) => void;
  addBrands: (uniqueBrands: any[]) => void;
  clearData: () => void;
  clearBrandData: () => void;
  setIsDataLoaded: (argument: boolean) => void;
  setIsDataEdited: (isDataEdited: boolean) => void;
}

const laptopStore = create<LaptopState>()(
  devtools((set) => ({
    rawData: [],
    tableData: [],
    records: [],
    brands: ["Any"],
    isDataLoaded: false,
    isDataEdited: false,

    addLaptop: (laptop) =>
      set((state) => ({ rawData: [...state.rawData, laptop] })),
    addLaptops: (laptops) =>
      set((state) => ({ rawData: [...state.rawData, ...laptops] })),
    addBrands: (uniqueBrands) =>
      set((state) => ({ brands: [...state.brands, ...uniqueBrands] })),
    clearData: () => set({ rawData: [] }),
    clearBrandData: () => set({ brands: ["Any"] }),
    setTableData: (laptops) => {
      set({ tableData: laptops });
    },
    setRecords: (laptops) => {
      set({ records: laptops });
    },

    setRawData: (laptops) => {
      set({ rawData: laptops });
    },

    setIsDataLoaded: (argument) => {
      set({ isDataLoaded: argument });
    },
    setIsDataEdited: (isDataEdited) => {
      set({ isDataEdited: !isDataEdited });
    },
  }))
);

export default laptopStore;
