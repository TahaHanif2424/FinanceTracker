import React from 'react';
import AmountItem from '../components/b-level/Amount-item';
import ExpenseBarChart from '../components/a-level/BarChart/Bar-Chart';
import ExpenseLineChart from '../components/a-level/LineChart/Line-Chart';
import ExpensePieChart from '../components/a-level/PieChart/Pie-Chart';
import { CONTENT_HEIGHT } from '../utils/constants';

export default function Dashboard() {
  return (
    <div className="p-6">
      {/* First Row */}
      <div className="grid grid-cols-[auto_1fr] gap-6" style={{ height: CONTENT_HEIGHT }}>
        {/* Amount Items Column */}
        <div className="grid grid-rows-3 gap-6">
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

        {/* Charts Column */}
        <div className="grid grid-rows-2 gap-6">
          {/* Line Chart */}
          <div className="bg-white rounded-xl shadow-sm p-3 flex flex-col">
            <h2 className="text-xl font-semibold text-career-darkGreen mb-1">Range of expense</h2>
            <div className="flex-1 min-h-0">
              <ExpenseLineChart />
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white rounded-xl shadow-sm p-3 flex flex-col">
            <h2 className="text-xl font-semibold text-career-darkGreen mb-1">Last week Expense</h2>
            <div className="flex-1 min-h-0">
              <ExpenseBarChart />
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-[auto_1fr] gap-6 mt-6" style={{ height: CONTENT_HEIGHT }}>
        {/* Additional Amount Items Column */}
        <div className="grid grid-rows-2 gap-6">
          <AmountItem
            heading="Savings Goal"
            amount={15000}
            icon="🎯"
            trend="up"
            trendPercentage={10.0}
          />

          <AmountItem
            heading="Investments"
            amount={25000}
            icon="📈"
            trend="up"
            trendPercentage={15.2}
          />
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-xl shadow-sm p-3 flex flex-col">
          <h2 className="text-xl font-semibold text-career-darkGreen mb-1">Expense Categories</h2>
          <div className="flex-1 min-h-0">
            <ExpensePieChart />
          </div>
        </div>
      </div>
    </div>
  );
}