type InputProps = {
  value: string;
  type:string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
};

const Input: React.FC<InputProps> = ({
  value,
  type,
  onChange,
  placeholder = "",
  className = "",
  disabled = false,
  required = false,
}) => {
  const baseClasses = `
    w-full 
    px-4 py-2 
    rounded-2xl 
    font-small
    shadow-sm 
    border 
    border-career-mediumGreen 
    focus:outline-none 
    focus:ring-2 
    focus:ring-career-darkGreen 
    focus:border-career-darkGreen
    transition 
    duration-300 
    ease-in-out
  `;

  const disabledClasses = disabled
    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
    : "bg-career-lightGray text-career-darkGreen";

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`${baseClasses} ${disabledClasses} ${className}`}
      required={required}
    />
  );
};

export default Input;
