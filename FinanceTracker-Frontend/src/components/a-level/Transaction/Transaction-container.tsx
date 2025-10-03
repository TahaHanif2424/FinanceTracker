import React from 'react';
import TransactionItem from '../../b-level/Transaction-item';
import useTransaction from './usetransactions';
import { getCategoryIcon } from '../../../utils/categoryIcons';
import type { Transaction as APITransaction } from './types';
import Loader from '../../c-level/Loader';

type Transaction = {
  id: string;
  name: string;
  date: string;
  time: string;
  amount: number;
  type: 'INCOME' | 'EXPENSE';
  icon?: React.ReactNode;
};

type TransactionContainerProps = {
  transactions?: Transaction[];
  className?: string;
  showHeader?: boolean;
};

const TransactionContainer: React.FC<TransactionContainerProps> = ({
  className = '',
  showHeader = true,
}) => {
  const {data, isLoading}=useTransaction();

  // Transform API data to include icons based on category
  const transactions = (data || []).map((transaction: APITransaction) => {
    const transactionDate = new Date(transaction.date);
    return {
      id: String(transaction.userId) + transaction.date,
      name: transaction.category,
      date: transactionDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      time: transactionDate.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }),
      amount: transaction.amount,
      type: transaction.type,
      icon: getCategoryIcon(transaction.category),
    };
  });

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
        </div>
      )}

      <div className="flex-1 overflow-y-auto space-y-3">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader size="md" text="Loading transactions..." />
          </div>
        ) : transactions.length > 0 ? (
          transactions.map((transaction: Transaction) => (
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
