import React from 'react';
import AmountItem from '../components/b-level/Amount-item';
import ExpenseBarChart from '../components/a-level/BarChart/Bar-Chart';
import ExpenseLineChart from '../components/a-level/LineChart/Line-Chart';
import ExpensePieChart from '../components/a-level/PieChart/Pie-Chart';
import TransactionItem from '../components/b-level/Transaction-item';
import { CONTENT_HEIGHT } from '../utils/constants';

// Sample transaction data for dashboard
const recentTransactions = [
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
];

export default function Dashboard() {
  return (
    <div className="p-6 flex flex-col gap-6 bg-gray-50" style={{ height: CONTENT_HEIGHT }}>
      {/* First Row */}
      <div className="grid grid-cols-[auto_1fr] gap-6 min-h-0 h-full shrink-0 overflow-hidden pb-2">
        {/* Amount Items Column */}
        <div className="grid grid-rows-3 gap-6 min-h-0 h-full">
          <AmountItem
            heading="Total Balance"
            amount={45230}
            icon="💰"
            trend="up"
            trendPercentage={12.5}
          />

          <AmountItem
            heading="Monthly Income"
            amount={8750}
            icon="💵"
            trend="up"
            trendPercentage={8.3}
          />

          <AmountItem
            heading="Monthly Expenses"
            amount={3420}
            icon="💳"
            trend="down"
            trendPercentage={5.2}
          />
        </div>

        {/* Right Column - Split into Charts (60%) and Transactions (40%) */}
        <div className="grid grid-cols-[60%_40%] gap-6 min-h-0 h-full">
          {/* Charts Column */}
          <div className="grid grid-rows-2 gap-6 min-h-0 h-full">
            {/* Line Chart */}
            <div className="bg-white rounded-xl shadow-md p-3 flex flex-col min-h-0 border border-career-lightGray/20">
              <h2 className="text-xl font-semibold text-career-darkGreen mb-1">Range of expense</h2>
              <div className="flex-1 min-h-0">
                <ExpenseLineChart />
              </div>
            </div>

            {/* Bar Chart */}
            <div className="bg-white rounded-xl shadow-md p-3 flex flex-col min-h-0 border border-career-lightGray/20">
              <h2 className="text-xl font-semibold text-career-darkGreen mb-1">Last week Expense</h2>
              <div className="flex-1 min-h-0">
                <ExpenseBarChart />
              </div>
            </div>
          </div>

          {/* Transaction Section */}
          <div className="bg-white rounded-xl shadow-md p-4 flex flex-col min-h-0 h-full border border-career-lightGray/20 overflow-hidden">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-career-darkGreen">Recent Transactions</h2>
              <button className="text-xs text-career-darkGreen hover:underline">
                View All
              </button>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto space-y-3">
              {recentTransactions.map((transaction) => (
                <TransactionItem
                  key={transaction.id}
                  amount={transaction.amount}
                  date={transaction.date}
                  icon={transaction.icon}
                  name={transaction.name}
                  time={transaction.time}
                  type={transaction.type}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-[auto_1fr] gap-6 min-h-0 h-full shrink-0 overflow-hidden pb-4">
        {/* Additional Amount Items Column */}
        <div className="grid grid-rows-2 gap-6 min-h-0 h-full">
          <AmountItem
            heading="Total Debt"
            amount={15000}
            icon="💸"
            trend="up"
            trendPercentage={10.0}
          />

          <AmountItem
            heading="Receivables"
            amount={1000}
            icon="💹"
            trend="up"
            trendPercentage={10.0}
          />

          <AmountItem
            heading="Saving Goal"
            amount={25000}
            icon="🎯"
            trend="up"
            trendPercentage={15.2}
          />
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-xl shadow-md p-3 flex flex-col min-h-0 h-full border border-career-lightGray/20">
          <h2 className="text-xl font-semibold text-career-darkGreen mb-1">Expense Categories</h2>
          <div className="flex-1 min-h-0">
            <ExpensePieChart />
          </div>
        </div>
      </div>
    </div>
  );
}