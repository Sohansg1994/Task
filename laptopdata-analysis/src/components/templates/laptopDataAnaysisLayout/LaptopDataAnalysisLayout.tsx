import { useEffect, useState } from "react";
import * as csvtojson from "csvtojson";
import LaptopDataAnalysingTable from "../../organisms/Table/LaptopDataAnalysingTable";

function LaptopDataAnalysisLayout() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchCSVData = async () => {
      const response = await fetch("/src/data/laptop_prices.csv");
      const csvData = await response.text();

      const jsonObj = await csvtojson().fromString(csvData);

      setData(jsonObj);
    };

    fetchCSVData();
  }, []);

  return (
    <div>
      <LaptopDataAnalysingTable data={data} />
    </div>
  );
}

export default LaptopDataAnalysisLayout;
