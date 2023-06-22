import { ChangeEvent, useEffect, useState } from "react";
import SelectMenu from "../../atoms/selectMenu/SelectMenu";
import AdvanceSearchBar from "../../molecules/AdvanceSearchBar/AdvanceSearchBar";
import SearchBox from "../../atoms/searchBox/SearchBox";
import DataTable from "../../molecules/dataTable/DataTable";
import DropButton from "../../atoms/dropButton/dropButton";

export default function LaptopDataAnalysingTable({ data }: any) {
  const [laptopData, setLaptopData] = useState<any[]>([]);
  const [initialData, setInitialData] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState<any>("");
  const [selectedOption, setSelectedOption] = useState<Number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [trigger, setTrigger] = useState<boolean>(false);

  useEffect(() => {
    setLaptopData(data);
    setInitialData(data);
    const uniqueBrands = [
      ...new Set(data.map((product: any) => product.Company)),
    ];
    console.log(uniqueBrands);
  }, [data]);

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
    const newData = initialData.filter((laptop: any) => {
      return laptop[option]?.toLowerCase()?.includes(searchValue.toLowerCase());
    });
    setLaptopData(newData);
  };

  return (
    <div className="w-screen " style={{ width: "90vw" }}>
      <div className="border-2 border-gray-300 bg-white mt-3 mb-10 relative  shadow-md sm:rounded-lg">
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
          </div>
          {/*
            <div className="flex text-4xl font-semibold mt-3 text-gray-700 mr-4">
              Laptop Data List
            </div>
  */}
        </div>
        {isOpen && (
          <AdvanceSearchBar
            initialData={initialData}
            laptopData={laptopData}
            setLaptopData={setLaptopData}
            trigger={trigger}
            setTrigger={setTrigger}
          />
        )}
      </div>

      <DataTable key={trigger} laptopData={laptopData} />
    </div>
  );
}
