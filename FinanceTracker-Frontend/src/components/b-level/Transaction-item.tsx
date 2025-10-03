import React from 'react';

type TransactionItemProps = {
  name: string;
  date: string;
  time: string;
  amount: number;
  type?: 'INCOME' | 'EXPENSE';
  icon?: React.ReactNode;
  className?: string;
};

const TransactionItem: React.FC<TransactionItemProps> = ({
  name,
  date,
  time,
  amount,
  type = 'EXPENSE',
  icon,
  className = '',
}) => {
  const isExpense = type === 'EXPENSE';

  return (
    <div
      className={`
        bg-white
        rounded-lg
        p-4
        shadow-sm
        hover:shadow-md
        transition-all
        duration-200
        border border-career-lightGray/20
        flex
        items-center
        justify-between
        gap-4
        ${className}
      `}
    >
      {/* Left: Icon */}
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-career-darkGreen/10 flex items-center justify-center">
          {icon || (
            <span className="text-lg">
              {isExpense ? '💸' : '💰'}
            </span>
          )}
        </div>
      </div>

      {/* Middle: Name, Date & Time */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-gray-800 truncate">
          {name}
        </h4>
        <p className="text-xs text-gray-500 mt-0.5">
          {date} • {time}
        </p>
      </div>

      {/* Right: Amount */}
      <div className="flex-shrink-0">
        <p
          className={`text-sm font-bold ${
            isExpense ? 'text-red-600' : 'text-green-600'
          }`}
        >
          {isExpense ? '-' : '+'}
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
          }).format(Math.abs(amount))}
        </p>
      </div>
    </div>
  );
};

export default TransactionItem;
