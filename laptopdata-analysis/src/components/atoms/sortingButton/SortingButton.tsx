import { useEffect, useState } from "react";
import { GrAscend, GrDescend } from "react-icons/gr";

export default function SortingButton(props: any) {
  const [isUp, setIsUp] = useState<boolean>(true);

  useEffect(() => {
    console.log(props.isAscending);
  }, [props.isAscending]);

  return (
    <div>
      <button
        type="button"
        className="text-gray-500  bg-gray-300 hover:text-gray-700  hover:bg-gray-500  ring-1 ring-inset ring-gray-300 focus:outline-none font-medium rounded-md h-10 text-sm p-3 text-center inline-flex items-center mr-2"
        onClick={() => {
          props.handleClick();
          setIsUp(!isUp);
        }}
      >
        {isUp ? <GrAscend size={20} /> : <GrDescend size={20} />}
      </button>
    </div>
  );
}
