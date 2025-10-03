import React from 'react';

interface CategorySelectProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  name,
  value,
  onChange,
  options,
  required = false
}) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="
        w-full px-4 py-3 rounded-2xl shadow-sm border border-career-mediumGreen
        bg-career-lightGray text-career-darkGreen
        focus:outline-none focus:ring-2 focus:ring-career-darkGreen focus:border-career-darkGreen
        transition duration-300 ease-in-out
        appearance-none cursor-pointer
        hover:border-career-darkGreen
      "
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230F4C5C'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 0.75rem center',
        backgroundSize: '1.5em 1.5em',
        paddingRight: '2.5rem'
      }}
    >
      <option value="">Select a category</option>
      {options.map((option: string) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
