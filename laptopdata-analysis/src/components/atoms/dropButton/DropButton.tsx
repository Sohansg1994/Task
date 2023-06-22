import { BiChevronsDown, BiChevronsUp } from "react-icons/bi";
import { useState } from "react";

export default function DropButton(props: any) {
  const [isup, setIsUp] = useState<boolean>(false);
  return (
    <div>
      <button
        type="button"
        className="text-gray-500  bg-gray-100 hover:text-gray-700  hover:bg-gray-200  ring-1 ring-inset ring-gray-300 focus:outline-none font-medium rounded-md h-10 text-sm p-0.5 text-center inline-flex items-center mr-2"
        onClick={() => {
          props.setIsOpen(!isup);
          setIsUp(!isup);
        }}
      >
        {!isup ? <BiChevronsDown size={24} /> : <BiChevronsUp size={24} />}
      </button>
    </div>
  );
}
