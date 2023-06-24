import laptopStore from "../../../store";
import * as csvtojson from "csvtojson";

export default function DataLoadButton() {
  const addLaptops = laptopStore((state) => state.addLaptops);
  const setTableData = laptopStore((state) => state.setTableData);
  const setIsDataLoaded = laptopStore((state) => state.setIsDataLoaded);
  const isDataLoaded = laptopStore((state) => state.isDataLoaded);

  const fetchCSVData = async () => {
    const response = await fetch("/src/data/laptop_prices.csv");
    const csvData = await response.text();
    const jsonObj = await csvtojson().fromString(csvData);

    addLaptops(jsonObj);
    setTableData(jsonObj);

    setIsDataLoaded(true);
  };
  return (
    <div>
      {!isDataLoaded && (
        <button
          onClick={fetchCSVData}
          type="button"
          className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
        >
          LOAD DATA
        </button>
      )}
    </div>
  );
}
