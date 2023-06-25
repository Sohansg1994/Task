import { HiOutlineTrash } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";

export default function DeleteModal(props: any) {
  const onClose = props.onClose;
  const open = props.open;
  const handleDelete = props.handleDelete;

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors   ${
        open ? "visible bg-black/40" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl w-100 shadow p-6 transition-all text-center  ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <HiXMark className="mx-auto text-red-500" />
        </button>
        <HiOutlineTrash size={70} className="mx-auto text-red-500" />
        <h3 className="text-xl font-black text-gray-800 py-2">
          Confirm Delete
        </h3>
        <p className="text-lg text-gray-500 py-2">
          Are you sure you want to delete this item?{" "}
        </p>
        <div className="flex gap-4 py-3">
          <button
            onClick={() => {
              handleDelete();
              onClose();
            }}
            className="text-white w-full bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-base items-center px-5 py-2.5 text-center mr-2"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="text-gray-500 w-full bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-base font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
