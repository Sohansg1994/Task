import { useEffect, useState } from "react";
import AddModel from "../../molecules/addModel/AddModel";
import laptopStore from "../../../store";
const subThStyle = "font-bold mb-1";
export default function FeatureDisplayButton(props: any) {
  const [open, setOpen] = useState<boolean>(false);
  const rawData = laptopStore((state) => state.rawData);
  const [laptop, setLaptop] = useState<any>({
    laptop_ID: "",
    Company: "",
    Product: "",
    TypeName: "",
    Inches: "",
    ScreenResolution: "",
    Cpu: "",
    Ram: "",
    Memory: "",
    Gpu: "",
    OpSys: "",
    Weight: "",
    Price_in_euros: "",
  });

  const handleDisplay = () => {
    const laptopData = rawData.find((laptop) => laptop.laptop_ID == props.id);
    setLaptop(laptopData);
  };

  return (
    <div>
      <button
        onClick={() => {
          handleDisplay();
          setOpen(true);
        }}
        className=" p-1  rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600 hidden lg:block "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </button>
      <AddModel
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="text-base px-4 py-3 text-center font-bold">
          FEATURES
        </div>
        <div className="flex flex-wrap ">
          <div className="p-4 w-2/12 ">
            <div className={subThStyle}>Screen Size</div>
            <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-normal">
              {laptop.Inches}
            </span>
          </div>
          <div className="p-4  w-4/12">
            <div className={subThStyle}>Screen Resolution</div>
            <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-normal">
              {laptop.ScreenResolution}
            </span>
          </div>
          <div className="p-4  w-4/12">
            <div className={subThStyle}>Processor</div>
            <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-normal ">
              {laptop.Cpu}
            </span>
          </div>
          <div className="p-4 w-2/12">
            <div className={subThStyle}>OS</div>
            <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-normal">
              {laptop.OpSys}
            </span>
          </div>
          <div className="p-4 w-2/12">
            <div className={subThStyle}>Memory</div>
            <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-normal">
              {laptop.Ram}
            </span>
          </div>
          <div className="p-4 w-4/12">
            <div className={subThStyle}>Graphic</div>
            <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-normal">
              {laptop.Gpu}
            </span>
          </div>

          <div className="p-4 w-4/12">
            <div className={subThStyle}>Intenal Storage</div>
            <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-normal">
              {laptop.Memory}
            </span>
          </div>

          <div className="p-4 w-2/12">
            <div className={subThStyle}>Weight</div>
            <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-normal">
              {laptop.Weight}
            </span>
          </div>
        </div>
      </AddModel>
    </div>
  );
}
