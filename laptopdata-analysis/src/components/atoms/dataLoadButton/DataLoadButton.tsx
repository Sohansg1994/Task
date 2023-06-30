import laptopStore from "../../../store";
import csvtojson from "csvtojson";
import { FaFileDownload } from "react-icons/fa";

export default function DataLoadButton() {
  const addLaptops = laptopStore((state) => state.addLaptops);
  const setTableData = laptopStore((state) => state.setTableData);
  const setIsDataLoaded = laptopStore((state) => state.setIsDataLoaded);
  const isDataLoaded = laptopStore((state) => state.isDataLoaded);

  console.log();

  const fetchCSVData = async () => {
    const response = await fetch("laptop_prices.csv");
    const csvData = await response.text();
    const jsonObj = await csvtojson().fromString(csvData);
    addLaptops(jsonObj);
    setTableData(jsonObj);
    setIsDataLoaded(true);
  };
  return (
    <div>
      <button
        disabled={isDataLoaded}
        onClick={fetchCSVData}
        type="button"
        className={
          !isDataLoaded
            ? "text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            : "text-white bg-green-200 cursor-not-allowed  focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center mr-2 "
        }
      >
        <FaFileDownload size={25} />
        <span className="flex ml-2"> LOAD DATA</span>
      </button>
    </div>
  );
}
