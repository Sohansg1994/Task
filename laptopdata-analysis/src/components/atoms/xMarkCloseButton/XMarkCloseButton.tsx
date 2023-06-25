import { HiXMark } from "react-icons/hi2";

function XMarkCloseButton(props: any) {
  const onClose = props.onClick;
  return (
    <div>
      <button
        onClick={onClose}
        className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
      >
        <HiXMark className="mx-auto text-red-500" />
      </button>
    </div>
  );
}

export default XMarkCloseButton;
