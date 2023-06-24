import { ChangeEvent, useEffect, useState } from "react";
import SelectMenu from "../../atoms/selectMenu/SelectMenu";
import AdvanceSearchBar from "../../molecules/AdvanceSearchBar/AdvanceSearchBar";
import SearchBox from "../../atoms/searchBox/SearchBox";
import DropButton from "../../atoms/dropButton/DropButton";
import laptopStore from "../../../store";
import DataLoadButton from "../../atoms/dataLoadButton/DataLoadButton";
import DataTableCopy from "../../molecules/dataTable/DataTable";

export default function LaptopDataAnalysingTable() {
  const [searchValue, setSearchValue] = useState<any>("");
  const [selectedOption, setSelectedOption] = useState<Number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [trigger, setTrigger] = useState<boolean>(false);
  const rawData = laptopStore((state) => state.rawData);
  const addBrands = laptopStore((state) => state.addBrands);
  const clearBrandData = laptopStore((state) => state.clearBrandData);
  const setTableData = laptopStore((state) => state.setTableData);
  const isDataLoaded = laptopStore((state) => state.isDataLoaded);

  useEffect(() => {
    const uniqueBrands = [
      ...new Set(rawData.map((product: any) => product.Company)),
    ];
    clearBrandData();
    addBrands(uniqueBrands);
  }, [rawData]);

  useEffect(() => {
    handleFilter(searchValue, selectedOption);
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
    const newData = rawData.filter((laptop: any) => {
      return laptop[option]?.toLowerCase()?.includes(searchValue.toLowerCase());
    });
    setTableData(newData);
  };

  return (
    <div className="w-screen grid grid-cols-6 gap-4 " style={{ width: "85vw" }}>
      <div className="col-start-1 col-span-6 border-2 border-gray-300 bg-white mt-3 mb-10 relative  shadow-md sm:rounded-lg">
        <div className="flex justify-between mt-3 ml-5">
          <div className="flex mr-4">
            <div className=" w-auto h-auto ">
              <SelectMenu setSelected={setSelectedOption} />
            </div>
            <div>
              <SearchBox
                name="price"
                id="price"
                value={searchValue}
                onChange={handleSearchChange}
              />
            </div>
            <div className="mt-2 ml-3">
              <DropButton setIsOpen={setIsOpen} />
            </div>
            <div className="mt-2 ml-3">
              <DataLoadButton />
            </div>
          </div>
        </div>
        {isOpen && (
          <AdvanceSearchBar trigger={trigger} setTrigger={setTrigger} />
        )}
      </div>
      {isDataLoaded && (
        <div className="col-start-1 col-span-6 ">
          <DataTableCopy key={trigger} />
        </div>
      )}
    </div>
  );
}
