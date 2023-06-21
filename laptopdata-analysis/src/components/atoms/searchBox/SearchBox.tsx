import { ChangeEvent } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

interface SearchBoxProps {
  name: string;
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function SearchBox(props: SearchBoxProps) {
  return (
    <div>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="search"
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          placeholder="Search"
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        />
        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2 mr-3">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </div>
    </div>
  );
}

export default SearchBox;
