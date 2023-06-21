import { ChangeEvent, useEffect, useState } from "react";

import SelectMenu from "../../atoms/selectMenu/SelectMenu";

import AdvanceSearchBar from "../AdvanceSearchBar/AdvanceSearchBar";
import SearchBox from "../../atoms/searchBox/SearchBox";

const headersNames = [
  "ID",
  "Brand",
  "Product",
  "Type",
  "Screen Size",
  "	Screen Resolution",
  "Processor",
  "Memory",
  "Internal Storage",
  "Graphics",
  " OS",
  "	Weight",
  "Price (Euros)",
];

export default function Table({ data }: any) {
  const [laptopData, setLaptopData] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState<any>("");
  const [selectedOption, setSelectedOption] = useState<Number>(1);

  useEffect(() => {
    setLaptopData(data);
    const uniqueBrands = [
      ...new Set(data.map((product: any) => product.Company)),
    ];
    console.log(uniqueBrands);
  }, [data]);

  useEffect(() => {
    handleFilter(searchValue, selectedOption);
    console.log(selectedOption);
  }, [searchValue]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  };

  const handleFilter = (searchValue: string, selectedOption: Number) => {
    let option = "Company";
    switch (selectedOption) {
      case 1:
        option = "Company";
        break;

      case 2:
        option = "Product";
        break;
      case 3:
        option = "TypeName";
        break;

      default:
        break;
    }
    const newData = data.filter((laptop: any) => {
      return laptop[option]?.toLowerCase()?.includes(searchValue.toLowerCase());
    });
    setLaptopData(newData);
  };
  return (
    <div className="w-screen flex" style={{ width: "90vw" }}>
      <div className="flex ">
        <div className=" w-auto h-auto">
          <SelectMenu setSelected={setSelectedOption} />
        </div>
        <div className="  w-64 ...">
          <SearchBox
            name="price"
            id="price"
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            {headersNames.map((headerName, index) => (
              <th key={index} className="text-base px-4 py-1">
                {headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {laptopData.map((laptop) => (
            <tr key={laptop.laptop_ID}>
              <td className="text-sm px-4 py-1">{laptop.laptop_ID}</td>

              <td className="text-sm px-4 py-1">{laptop.Company}</td>
              <td className="text-sm px-4 py-1"> {laptop.Product}</td>
              <td className="text-sm px-4 py-1">{laptop.TypeName}</td>
              <td className="text-sm px-4 py-1">{laptop.Inches}</td>
              <td className="text-sm px-4 py-1">{laptop.ScreenResolution}</td>
              <td className="text-sm px-4 py-1">{laptop.Cpu}</td>
              <td className="text-sm px-4 py-1">{laptop.Ram}</td>
              <td className="text-sm px-4 py-1">{laptop.Memory}</td>
              <td className="text-sm px-4 py-1">{laptop.Gpu}</td>
              <td className="text-sm px-4 py-1">{laptop.OpSys}</td>
              <td className="text-sm px-4 py-1">{laptop.Weight}</td>
              <td className="text-sm px-4 py-1">{laptop.Price_in_euros}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
