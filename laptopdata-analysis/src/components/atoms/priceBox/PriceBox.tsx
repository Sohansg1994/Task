// eslint-disable-next-line
import React from "react";
import { CurrencyEuroIcon } from "@heroicons/react/20/solid";

export default function PriceBox(props: any) {
  return (
    <div>
      <div className="relative mt-2 rounded-md shadow-sm ">
        <input
          type="text"
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-48"
        />
        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2 mr-3">
          <CurrencyEuroIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </div>
    </div>
  );
}
