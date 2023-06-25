import XMarkCloseButton from "../../atoms/xMarkCloseButton/XMarkCloseButton";

export default function AddModel(props: any) {
  const open = props.open;
  const onClose = props.onClose;
  const children = props.children;

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
        {children}
      </div>
    </div>
  );
}
