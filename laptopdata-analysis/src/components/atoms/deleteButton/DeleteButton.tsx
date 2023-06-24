import laptopStore from "../../../store";
import { useState } from "react";
import DeleteModal from "../../molecules/deleteModal/DeleteModal";

export default function DeleteButton(props: any) {
  const setTableData = laptopStore((state) => state.setTableData);
  const setRawData = laptopStore((state) => state.setRawData);
  const rawData = laptopStore((state) => state.rawData);
  const [open, setOpen] = useState<boolean>(false);

  const handleDelete = (id: any) => {
    const newData = rawData.filter((laptop: any) => laptop.laptop_ID !== id);
    setRawData(newData);
    setTableData(newData);
  };

  return (
    <div>
      <button
        type="button"
        className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-1.5 text-center  dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        onClick={() => setOpen(true)}
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
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>

      <DeleteModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        handleDelete={() => {
          handleDelete(props.id);
        }}
      />
    </div>
  );
}
