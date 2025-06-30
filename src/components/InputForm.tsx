import type { InputFieldProps } from "@/assets/interfaces/interfaces";
export default function InputForm({ field }: InputFieldProps) {
  const {
    label,
    name,
    value,
    onChange,
    placeholder,
    type,
    className,
    options,
  } = field;

  return (
    <div className={className}>
      {label && <label className="text-sm text-gray-600">{label}</label>}
      {options ? (
        <select
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className="w-full p-2 border border-gray-200 text-gray-500 rounded-md focus:border-primaryy focus:outline-none"
        >
          <option value="" disabled>
            {placeholder || "Selecione uma opção"}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={type === "number" ? String(value) : value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-2 border border-gray-200 focus:border-primaryy focus:outline-none rounded-md"
        />
      )}
    </div>
  );
}
