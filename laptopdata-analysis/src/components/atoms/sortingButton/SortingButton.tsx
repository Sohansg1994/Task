import React, { useState } from "react";
import { GrAscend, GrDescend } from "react-icons/gr";

export default function SortingButton() {
  const [isAscending, setIsAscending] = useState<boolean>(true);
  return (
    <div>
      <button
        type="button"
        className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center m-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
        onClick={() => {
          setIsAscending(!isAscending);
        }}
      >
        <span style={{ color: "blue" }}>
          {isAscending ? <GrAscend size={24} /> : <GrDescend size={24} />}
        </span>
      </button>
    </div>
  );
}
