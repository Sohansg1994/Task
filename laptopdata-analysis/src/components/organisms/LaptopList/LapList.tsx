import React, { useEffect, useState } from "react";
import * as csvtojson from "csvtojson";
import Table from "../../molecules/Table/Table";

const LapList: React.FC = () => {
  const [laptopData, setLaptopData] = useState<any[]>([]);
  useEffect(() => {
    const fetchCSVData = async () => {
      const response = await fetch("/src/data/laptop_prices.csv");
      const csvData = await response.text();

      const jsonObj = await csvtojson().fromString(csvData);

      setLaptopData(jsonObj); // Set the entire JSON array at once
    };

    fetchCSVData();
  }, []);

  return (
    <>
      <Table data={laptopData} />
    </>
  );
};

export default LapList;
