import { ImSortAmountAsc, ImSortAmountDesc } from "react-icons/im";
import laptopStore from "../../../store";
export default function SortingButton(props: any) {
  const isAscendingOrder = laptopStore((state) => state.isAscendingOrder);

  return (
    <div>
      <button
        type="button"
        className="text-gray-500  bg-gray-300 hover:text-gray-700  hover:bg-gray-400 ring-1 ring-inset ring-gray-300 focus:outline-none font-medium rounded-md h-10 text-sm p-2 text-center inline-flex items-center "
        onClick={() => {
          props.handleClick();
        }}
      >
        {!isAscendingOrder ? (
          <ImSortAmountAsc size={22} />
        ) : (
          <ImSortAmountDesc size={22} />
        )}
      </button>
    </div>
  );
}
