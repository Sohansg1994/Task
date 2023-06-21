import { useEffect, useState } from "react";
import BrandSelectionMenu from "../../atoms/brandSelectionMenu/BrandSelectionMenu";
import SearchButton from "../../atoms/SearchButton/SearchButton";
import SortingButton from "../../atoms/sortingButton/SortingButton";
import PriceBox from "../../atoms/priceBox/PriceBox";

export default function AdvanceSearchBar() {
  const [selectedOption, setSelectedOption] = useState<number>(0);

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);
  return (
    <div className="flex justify-start gap-x-8 border-2 border-gray-300 bg-white mt-3 mb-10">
      <div className="flex flex-col border-2 border-gray-300 w-fit">
        <div>Price Range</div>
        <div className="flex gap-x-2">
          <PriceBox placeholder={"Min"} />
          <PriceBox placeholder={"Max"} />
        </div>
      </div>

      <div className="flex flex-col border-2 border-gray-300 w-fit">
        <div>Brand</div>
        <div>
          <BrandSelectionMenu setSelectedOption={setSelectedOption} />
        </div>
      </div>

      <div className="flex items-center border-2 border-gray-300 w-fit">
        <div>
          <SearchButton />
        </div>
      </div>
      <div className="flex items-center border-2 border-gray-300 w-fit">
        <div>
          <SortingButton />
        </div>
      </div>
    </div>
  );
}
