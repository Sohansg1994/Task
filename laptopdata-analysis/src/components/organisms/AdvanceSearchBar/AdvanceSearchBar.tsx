import { useState, ChangeEvent } from "react";
import BrandSelectionMenu from "../../atoms/brandSelectionMenu/BrandSelectionMenu";
import SearchButton from "../../atoms/SearchButton/SearchButton";
import SortingButton from "../../atoms/sortingButton/SortingButton";
import PriceBox from "../../atoms/priceBox/PriceBox";
import laptopStore from "../../../store";

export default function AdvanceSearchBar() {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const isAscendingOrder = laptopStore((state) => state.isAscendingOrder);
  const rawData = laptopStore((state) => state.rawData);
  const setTableData = laptopStore((state) => state.setTableData);
  const tableData = laptopStore((state) => state.tableData);
  const setIsDataEdited = laptopStore((state) => state.setIsDataEdited);
  const isDataEdited = laptopStore((state) => state.isDataEdited);
  const setAscendingOrder = laptopStore((state) => state.setAscendingOrder);
  const setDescendingOrder = laptopStore((state) => state.setDescendingOrder);

  //to update min value changes
  const handleMinValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const minValue = parseFloat(event.target.value);
    setMinPrice(minValue);
  };
  //to update max value changes
  const handleMaxValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const maxValue = parseFloat(event.target.value);
    setMaxPrice(maxValue);
  };

  // searching function
  const handleClick = () => {
    if (selectedOption != "Any") {
      const newData = rawData.filter((laptop: any) => {
        const laptopPrice = parseInt(laptop.Price_in_euros);

        return (
          laptopPrice >= minPrice &&
          laptopPrice <= maxPrice &&
          laptop.Company.toLowerCase().includes(selectedOption.toLowerCase())
        );
      });

      setTableData(newData);
    } else if (selectedOption === "Any") {
      const newData = rawData.filter((laptop: any) => {
        const laptopPrice = parseInt(laptop.Price_in_euros);

        return (
          laptopPrice >= minPrice &&
          laptopPrice <= maxPrice &&
          laptop.Company.toLowerCase()
        );
      });

      setTableData(newData);
    }
  };

  //sorting function
  const handleSortData = () => {
    if (!isAscendingOrder) {
      const newData = tableData.sort((a: any, b: any) => {
        let laptopPriceA = parseInt(a.Price_in_euros);
        let laptopPriceB = parseInt(b.Price_in_euros);

        if (laptopPriceA < laptopPriceB) {
          return -1;
        } else if (laptopPriceA > laptopPriceB) {
          return 1;
        } else {
          return 0;
        }
      });
      setAscendingOrder();
      setTableData(newData);
      setIsDataEdited(isDataEdited);
    } else {
      const newData = tableData.sort((a: any, b: any) => {
        let laptopPriceA = parseInt(a.Price_in_euros);
        let laptopPriceB = parseInt(b.Price_in_euros);

        if (laptopPriceA > laptopPriceB) {
          return -1;
        } else if (laptopPriceA < laptopPriceB) {
          return 1;
        } else {
          return 0;
        }
      });
      setDescendingOrder();
      setTableData(newData);
      setIsDataEdited(isDataEdited);
    }
  };

  return (
    <div className="border-2 flex justify-between shadow-lg  bg-gray-50 border-t dark:bg-gray-800 dark:border-gray-700 mt-3  px-4 pt-3 pb-5 sm:rounded-lg ">
      <div className="flex justify-start  flex-wrap gap-y-4 ">
        <div className="flex flex-col  w-fit mr-3">
          <div className="flex font-sans font-medium ml-1">Price Range</div>
          <div className="flex gap-x-2">
            <PriceBox placeholder={"Min"} onChange={handleMinValueChange} />
            <PriceBox placeholder={"Max"} onChange={handleMaxValueChange} />
          </div>
        </div>

        <div className="flex flex-col  w-fit mr-3">
          <div className="flex font-sans font-medium ml-3">Brand</div>
          <div>
            <BrandSelectionMenu setSelectedOption={setSelectedOption} />
          </div>
        </div>

        <div className="flex items-end  w-fit mr-3">
          <div>
            <SearchButton handleClick={handleClick} />
          </div>
        </div>
        <div className="flex items-end w-fit mr-3">
          <div>
            <SortingButton handleClick={handleSortData} />
          </div>
        </div>
      </div>
    </div>
  );
}
