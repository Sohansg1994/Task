import XMarkCloseButton from "../../atoms/xMarkCloseButton/XMarkCloseButton";
import ItemAddForm from "../ItemAddForm/ItemAddForm";

export default function AddModel(props: any) {
  const open = props.open;
  const onClose = props.onClose;
  return (
    <div
      onClick={onClose}
      className={`fixed inset-1 flex justify-center items-center transition-colors   ${
        open ? "visible bg-black/40" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl w-3/5 shadow p-6 transition-all text-center  ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <XMarkCloseButton onClick={onClose} />

        <div>
          <ItemAddForm onClose={onClose} open={open} key={open} />
        </div>
      </div>
    </div>
  );
}
