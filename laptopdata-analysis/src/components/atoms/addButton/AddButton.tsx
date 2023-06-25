import { useState } from "react";
import { MdOutlineAddCircle } from "react-icons/md";
import AddModel from "../../molecules/addModel/AddModel";

import ItemAddForm from "../../molecules/ItemAddForm/ItemAddForm";

export default function AddButton() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => {
          setOpen(true);
        }}
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        <MdOutlineAddCircle size={25} />
        <span className="flex ml-2"> ADD ITEM</span>
      </button>

      <AddModel open={open} onClose={() => setOpen(false)}>
        <ItemAddForm onClose={() => setOpen(false)} open={open} key={open} />
      </AddModel>
    </div>
  );
}
