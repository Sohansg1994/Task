import { useState } from "react";
import NumberInput from "../../atoms/numberInput/NumberInput";

interface FormLabelInputProps {
  label: string;
  symbol: string;
  value: any;
  id: string;
  placeholder: string;
  required: boolean;
  setValue: (value: number) => void;
}

export default function FormLabelNumberInput({
  label,
  symbol,
  value,
  id,
  placeholder,
  required,
  setValue,
}: FormLabelInputProps): JSX.Element {
  const [isWarning, setIsWarning] = useState<boolean>(false);

  return (
    <div>
      <label
        className={
          isWarning
            ? "block mb-2 text-sm font-medium text-red-700 dark:text-red-500 text-left"
            : "block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white"
        }
      >
        {label}
      </label>
      <div className="relative ">
        <NumberInput
          isWarning={isWarning}
          setIsWarning={setIsWarning}
          value={value}
          setValue={setValue}
          id={id}
          placeholder={placeholder}
          required={required}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
          {symbol}
        </div>
      </div>

      {isWarning && (
        <p className="mt-1 text-xs text-red-600 dark:text-red-500 text-right">
          ! Invalid
        </p>
      )}
    </div>
  );
}
