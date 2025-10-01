import React from 'react';
import TransactionItem from '../b-level/Transaction-item';

type Transaction = {
  id: string;
  name: string;
  date: string;
  time: string;
  amount: number;
  type: 'income' | 'expense';
  icon?: React.ReactNode;
};

type TransactionContainerProps = {
  transactions?: Transaction[];
  className?: string;
  showHeader?: boolean;
};

const TransactionContainer: React.FC<TransactionContainerProps> = ({
  transactions = [],
  className = '',
  showHeader = true,
}) => {
  return (
    <div
      className={`
        bg-white
        rounded-xl
        shadow-md
        p-4
        flex
        flex-col
        border border-career-lightGray/20
        ${className}
      `}
    >
      {showHeader && (
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-career-darkGreen">
            Recent Transactions
          </h2>
          <button className="text-sm text-career-darkGreen hover:underline">
            View All
          </button>
        </div>
      )}

      <div className="flex-1 overflow-y-auto space-y-3">
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              amount={transaction.amount}
              date={transaction.date}
              icon={transaction.icon}
              name={transaction.name}
              time={transaction.time}
              type={transaction.type}
            />
          ))
        ) : (
          <div className="flex items-center justify-center py-12">
            <p className="text-gray-500 text-sm">No transactions to display</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionContainer;
