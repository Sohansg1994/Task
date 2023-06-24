import { useEffect, useState } from "react";
import laptopStore from "../../../store";

export default function EditButton() {
  const addLaptop = laptopStore((state) => state.addLaptop);
  const setTableData = laptopStore((state) => state.setTableData);
  const rawData = laptopStore((state) => state.rawData);
  const [isAddData, setIsAddData] = useState<boolean>(false);

  const data: any = {
    laptop_ID: "1325",
    Company: "Razer",
    Product: "Blade Pro",
    TypeName: "Gaming",
    Inches: "17.3",
    ScreenResolution: "4K Ultra HD / Touchscreen 3840x2160",
    Cpu: "Intel Core i7 7820HK 2.9GHz",
    Ram: "32GB",
    Memory: "1TB SSD",
    Gpu: "Nvidia GeForce GTX 1080",
    OpSys: "Windows 10",
    Weight: "3.49kg",
    Price_in_euros: "6099",
  };

  const handleClick = () => {
    addLaptop(data);
    setIsAddData(!isAddData);
  };

  /*useEffect(() => {
    setTableData(rawData);
  }, [isAddData]);*/
  return (
    <div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </button>
    </div>
  );
}
