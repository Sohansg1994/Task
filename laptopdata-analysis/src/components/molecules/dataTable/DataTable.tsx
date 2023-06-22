import { useEffect, useState } from "react";

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

function DataTable(props: any) {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setData(props.laptopData);
  }, [props.trigger, props.laptopData]);
  return (
    <div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headersNames.map((headerName: any, index: number) => (
              <th
                key={index}
                className="text-base px-4 py-1"
                style={{ width: "120px" }}
              >
                {headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((laptop: any) => (
            <tr
              key={laptop.laptop_ID}
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
              <td className="text-sm px-4 py-1" style={{ width: "120px" }}>
                {laptop.Inches}
              </td>
              <td className="text-sm px-4 py-1" style={{ width: "120px" }}>
                {laptop.ScreenResolution}
              </td>
              <td className="text-sm px-4 py-1" style={{ width: "120px" }}>
                {laptop.Cpu}
              </td>
              <td className="text-sm px-4 py-1" style={{ width: "120px" }}>
                {laptop.Ram}
              </td>
              <td className="text-sm px-4 py-1" style={{ width: "120px" }}>
                {laptop.Memory}
              </td>
              <td className="text-sm px-4 py-1" style={{ width: "120px" }}>
                {laptop.Gpu}
              </td>
              <td className="text-sm px-4 py-1" style={{ width: "120px" }}>
                {laptop.OpSys}
              </td>
              <td className="text-sm px-4 py-1" style={{ width: "120px" }}>
                {laptop.Weight}
              </td>
              <td className="text-sm px-4 py-1" style={{ width: "120px" }}>
                {laptop.Price_in_euros}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default DataTable;
