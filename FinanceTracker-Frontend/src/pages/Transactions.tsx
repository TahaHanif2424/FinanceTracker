import React from 'react';
import TransactionContainer from '../components/a-level/Transaction-container';
import { CONTENT_HEIGHT } from '../utils/constants';

// Sample transaction data
const sampleTransactions = [
  {
    id: '1',
    name: 'Grocery Store',
    date: '2024-03-15',
    time: '10:30 AM',
    amount: 125.50,
    type: 'expense' as const,
    icon: '🛒',
  },
  {
    id: '2',
    name: 'Salary Deposit',
    date: '2024-03-14',
    time: '09:00 AM',
    amount: 3500.00,
    type: 'income' as const,
    icon: '💵',
  },
  {
    id: '3',
    name: 'Coffee Shop',
    date: '2024-03-14',
    time: '03:45 PM',
    amount: 4.50,
    type: 'expense' as const,
    icon: '☕',
  },
  {
    id: '4',
    name: 'Electric Bill',
    date: '2024-03-13',
    time: '02:15 PM',
    amount: 89.99,
    type: 'expense' as const,
    icon: '⚡',
  },
  {
    id: '5',
    name: 'Freelance Payment',
    date: '2024-03-12',
    time: '11:20 AM',
    amount: 850.00,
    type: 'income' as const,
    icon: '💼',
  },
];

export default function Transactions() {
  return (
    <div className="p-6 bg-gray-50" style={{ height: CONTENT_HEIGHT }}>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-career-darkGreen">Transactions</h1>
        <p className="text-gray-600 mt-1">View and manage your transaction history</p>
      </div>

      <TransactionContainer
        className="h-[calc(100%-120px)]"
        transactions={sampleTransactions}
      />
    </div>
  );
}
