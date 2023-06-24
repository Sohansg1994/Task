import { useState, useEffect } from "react";
import laptopStore from "../../../store";

export default function PaginationBar(props: any) {
  const tableData = laptopStore((state) => state.tableData);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [updateRecords, setUpdateRecords] = useState<any>([]);
  const recordPerPage: number = 100;
  const lastIndex: number = currentPage * recordPerPage;
  const firstIndex: number = lastIndex - recordPerPage;

  const records: any = tableData.slice(firstIndex, lastIndex);
  const nPage: number = Math.ceil(tableData.length / recordPerPage);
  const numbers: any = [...Array(nPage + 1).keys()].slice(1);

  useEffect(() => {
    props.setRecords(records);
  }, [props.data, updateRecords, tableData]);

  const prePage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
      setUpdateRecords(tableData.slice(firstIndex, lastIndex));
    }
  };

  const changeCurrentPage = (id: any) => {
    setCurrentPage(id);
    setUpdateRecords(tableData.slice(firstIndex, lastIndex));
  };

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
      setUpdateRecords(tableData.slice(firstIndex, lastIndex));
    }
  };
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px">
          <li>
            <a
              href="#"
              onClick={prePage}
              className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          {numbers.map((n: any, i: number) => (
            <li key={i}>
              <a
                href="#"
                onClick={() => changeCurrentPage(n)}
                className={
                  currentPage === n
                    ? "px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    : "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }
              >
                {n}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              onClick={nextPage}
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
