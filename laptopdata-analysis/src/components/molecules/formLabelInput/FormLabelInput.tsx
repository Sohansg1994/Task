import { ChangeEvent } from "react";
import FormInput from "../../atoms/formInput/FormInput";

interface FormLabelInputProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  placeholder: string;
  required: boolean;
}

export default function FormLabelInput({
  label,
  value,
  onChange,
  id,
  placeholder,
  required,
}: FormLabelInputProps): JSX.Element {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white">
        {label}
      </label>
      <FormInput
        value={value}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
