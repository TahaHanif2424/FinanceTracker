import React from 'react';
import AmountItem from '../components/b-level/Amount-item';
import ExpenseBarChart from '../components/a-level/BarChart/Bar-Chart';
import ExpenseLineChart from '../components/a-level/LineChart/Line-Chart';
import { CONTENT_HEIGHT } from '../utils/constants';

export default function Dashboard() {
  return (
    <div className="flex gap-6 p-6" style={{ height: CONTENT_HEIGHT }}>
      {/* Amount Items Container */}
      <div className="flex flex-col gap-6 flex-shrink-0 h-full justify-between">
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

      {/* Line Chart Container */}
      <div className="bg-white rounded-xl shadow-sm p-6 flex-1 flex flex-col" style={{ maxHeight: '400px' }}>
        <h2 className="text-xl font-semibold text-career-darkGreen mb-4">Expense Trends</h2>
        <div className="flex-1 min-h-0">
          <ExpenseLineChart />
        </div>
      </div>

      {/* Bar Chart Container */}
      <div className="bg-white rounded-xl shadow-sm p-6 flex-1 flex flex-col" style={{ maxHeight: '400px' }}>
        <h2 className="text-xl font-semibold text-career-darkGreen mb-4">Weekly Expenses</h2>
        <div className="flex-1 min-h-0">
          <ExpenseBarChart />
        </div>
      </div>
    </div>
  );
}