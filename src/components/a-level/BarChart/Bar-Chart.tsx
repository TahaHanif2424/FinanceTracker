import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Mon', expenses: 400 },
  { name: 'Tue', expenses: 300 },
  { name: 'Wed', expenses: 500 },
  { name: 'Thur', expenses: 200 },
  { name: 'Fri', expenses: 100 },
  { name: 'Sat', expenses: 250 },
  { name: 'Sun', expenses: 350 },
];

export default function ExpenseBarChart() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <BarChart width={600} height={350} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="expenses" fill="#8884d8" />
      </BarChart>
    </div>
  );
}
