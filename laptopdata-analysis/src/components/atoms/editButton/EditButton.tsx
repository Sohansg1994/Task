import { useState } from "react";
import AddModel from "../../molecules/addModel/AddModel";
import EditForm from "../../organisms/editForm/EditForm";
import laptopStore from "../../../store";

export default function EditButton(props: any) {
  const [open, setOpen] = useState<boolean>(false);
  const rawData = laptopStore((state) => state.rawData);

  const [laptopData, setLaptopData] = useState<any>({
    laptop_ID: "",
    Company: "",
    Product: "",
    TypeName: "",
    Inches: `0`,
    ScreenResolution: "",
    Cpu: "",
    Ram: `0`,
    Memory: "",
    Gpu: "",
    OpSys: "",
    Weight: `0`,
    Price_in_euros: `0`,
  });

  const handleFindData = () => {
    const laptop: any = rawData.find((laptop) => laptop.laptop_ID === props.id);
    setLaptopData(laptop);
  };

  return (
    <div>
      <button
        onClick={() => {
          setOpen(true);
          handleFindData();
        }}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </button>
      <AddModel open={open} onClose={() => setOpen(false)}>
        <EditForm
          onClose={() => setOpen(false)}
          open={open}
          key={open}
          laptopData={laptopData}
        />
      </AddModel>
    </div>
  );
}
