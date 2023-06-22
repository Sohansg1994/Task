import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function SearchButton(props: any) {
  return (
    <div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mx-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-48"
        onClick={props.handleClick}
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5 mr-3 -ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <MagnifyingGlassIcon />
        </svg>
        SEARCH
      </button>
    </div>
  );
}
