import { useEffect, useState } from "react";
import * as csvtojson from "csvtojson";
import LaptopDataAnalysingTable from "../../organisms/Table/LaptopDataAnalysingTable";
import laptopStore from "../../../store";

function LaptopDataAnalysisLayout() {
  const addLaptops = laptopStore((state) => state.addLaptops);

  /* useEffect(() => {
    const fetchCSVData = async () => {
      const response = await fetch("/src/data/laptop_prices.csv");
      const csvData = await response.text();
      const jsonObj = await csvtojson().fromString(csvData);
      setData(jsonObj);

      console.log("inside");
      addLaptops(jsonObj);
    };
    localStorage.setItem("hasFetchedData", "true");

    fetchCSVData();
  }, []);*/

  const fetchCSVData = async () => {
    const response = await fetch("/src/data/laptop_prices.csv");
    const csvData = await response.text();
    const jsonObj = await csvtojson().fromString(csvData);

    addLaptops(jsonObj);
  };

  return (
    <div>
      <button onClick={fetchCSVData}>load data</button>
      <LaptopDataAnalysingTable />
    </div>
  );
}

export default LaptopDataAnalysisLayout;
