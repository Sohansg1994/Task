import { useState } from "react";
import PaginationBar from "../../atoms/paginationBar/PaginationBar";
import DeleteButton from "../../atoms/deleteButton/DeleteButton";
import EditButton from "../../atoms/editButton/EditButton";
import laptopStore from "../../../store";
import AddButton from "../../atoms/addButton/AddButton";

const headersNames = [
  "ID",
  "Brand",
  "Product",
  "Type",
  "Features",
  "Price",
  "Action",
];

const tdStyle1 = "text-sm px-4 py-1 whitespace-normal w-1/12 text-center ";
const subThStyle = "font-bold mb-1";

function DataTable() {
  const isDataEdited = laptopStore((state) => state.isDataEdited);
  const [records, setRecords] = useState<any>([]);

  return (
    <>
      <div className="relative overflow-x-auto shadow-2xl  ">
        <div className="py-4 flex justify-between items-center px-5 flex-wrap gap-y-4">
          <PaginationBar setRecords={setRecords} key={isDataEdited} />
          <AddButton />
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 md:shrink-0 lg:shrink-0">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              {headersNames.map((headerName: any, index: number) => (
                <th
                  key={index}
                  className={`text-base px-4 py-3 text-center ${
                    index === 4
                      ? "w-5/12 lg:hidden"
                      : index == 6
                      ? "w-2/12"
                      : "w-1/12"
                  } ${index == 3 ? "xl:hidden" : ""}`}
                >
                  {index == 5 ? `${headerName} (€)` : `${headerName}`}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records.map((laptop: any, index: number) => (
              <tr
                key={`${laptop.laptop_ID}-${index}`}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className={tdStyle1}>{laptop.laptop_ID}</td>

                <td className={tdStyle1}>{laptop.Company}</td>
                <td className={tdStyle1}>{laptop.Product}</td>
                <td className={`${tdStyle1} xl:hidden`}>{laptop.TypeName}</td>
                <td className="text-sm px-4 py-4 w-5/12 text-center lg:hidden">
                  <div className="flex flex-wrap ">
                    <div className="p-4 w-2/12 ">
                      <div className={subThStyle}>Screen Size</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-normal">
                        {laptop.Inches}
                      </span>
                    </div>
                    <div className="p-4  w-4/12">
                      <div className={subThStyle}>Screen Resolution</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-normal">
                        {laptop.ScreenResolution}
                      </span>
                    </div>
                    <div className="p-4  w-4/12">
                      <div className={subThStyle}>Processor</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-normal ">
                        {laptop.Cpu}
                      </span>
                    </div>
                    <div className="p-4 w-2/12">
                      <div className={subThStyle}>OS</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-normal">
                        {laptop.OpSys}
                      </span>
                    </div>
                    <div className="p-4 w-2/12">
                      <div className={subThStyle}>Memory</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-normal">
                        {laptop.Ram}
                      </span>
                    </div>
                    <div className="p-4 w-4/12">
                      <div className={subThStyle}>Graphic</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-normal">
                        {laptop.Gpu}
                      </span>
                    </div>

                    <div className="p-4 w-4/12">
                      <div className={subThStyle}>Intenal Storage</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-normal">
                        {laptop.Memory}
                      </span>
                    </div>

                    <div className="p-4 w-2/12">
                      <div className={subThStyle}>Weight</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-normal">
                        {laptop.Weight}
                      </span>
                    </div>
                  </div>
                </td>

                <td className="text-sm px-4 py-1 w-1/12 text-center ">
                  {laptop.Price_in_euros}
                </td>
                <td className="  px-3 py-1 w-2/12 text-center">
                  <div className="flex justify-center items-center  h-fit ">
                    <EditButton id={laptop.laptop_ID} />
                    <DeleteButton id={laptop.laptop_ID} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default DataTable;
