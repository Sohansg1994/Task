import { useEffect, useState } from "react";
import PaginationBar from "../../atoms/paginationBar/PaginationBar";
import DeleteButton from "../../atoms/deleteButton/DeleteButton";
import EditButton from "../../atoms/editButton/EditButton";
import laptopStore from "../../../store";

const headersNames = [
  "ID",
  "Brand",
  "Product",
  "Type",
  "Features",
  "Price",
  "Action",
];

function DataTable(props: any) {
  const [records, setRecords] = useState<any>([]);

  useEffect(() => {}, [props.trigger]);

  return (
    <>
      <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg ">
        <div className="py-4 flex justify-end ">
          <PaginationBar setRecords={setRecords} />
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 pl-5 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              {headersNames.map((headerName: any, index: number) => (
                <th
                  key={index}
                  className={
                    index == 4 || index == 6
                      ? "text-base px-4 py-3 text-center"
                      : "text-base px-4 py-3 "
                  }
                  style={{ width: "120px" }}
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
                <td className="text-sm px-4 py-1" style={{ width: "120px" }}>
                  {laptop.laptop_ID}
                </td>

                <td className="text-sm px-4 py-1" style={{ width: "120px" }}>
                  {laptop.Company}
                </td>
                <td className="text-sm px-4 py-1" style={{ width: "120px" }}>
                  {" "}
                  {laptop.Product}
                </td>
                <td className="text-sm px-4 py-1" style={{ width: "120px" }}>
                  {laptop.TypeName}
                </td>
                <td className="text-sm px-4 py-1" style={{ width: "800px" }}>
                  <div className="grid max-w-screen-md px-2 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-4 md:px-6">
                    <ul style={{ width: "120px" }}>
                      <li>
                        <a className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                          <div className="font-semibold">Screen Size</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {laptop.Inches}
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <div className="font-semibold">Screen Resolution</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {laptop.ScreenResolution}
                          </span>
                        </a>
                      </li>
                    </ul>
                    <ul style={{ width: "120px" }}>
                      <li>
                        <a className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                          <div className="font-semibold">Graphic</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {laptop.Gpu}
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <div className="font-semibold">Processor</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {laptop.Cpu}
                          </span>
                        </a>
                      </li>
                    </ul>
                    <ul style={{ width: "120px" }}>
                      <li>
                        <a className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                          <div className="font-semibold">Memory</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {laptop.Ram}
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <div className="font-semibold">Intenal Storage</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {laptop.Memory}
                          </span>
                        </a>
                      </li>
                    </ul>
                    <ul style={{ width: "120px" }}>
                      <li>
                        <a className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                          <div className="font-semibold">OS</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {laptop.OpSys}
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <div className="font-semibold">Weight</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {laptop.Weight}
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>

                <td className="text-sm px-4 py-1" style={{ width: "120px" }}>
                  {laptop.Price_in_euros}
                </td>
                <td className="  px-4 py-1" style={{ width: "200px" }}>
                  <div className="flex justify-center items-center  h-fit ">
                    <EditButton />
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
