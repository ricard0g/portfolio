import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data: any = [
  {
    name: "Jan",
    "Sales Test 1": 300,
    "Sales Test 2": 400,
  },
  {
    name: "Feb",
    "Sales Test 1": 400,
    "Sales Test 2": 300,
  },
  {
    name: "Mar",
    "Sales Test 1": 200,
    "Sales Test 2": 500,
  },
  {
    name: "Apr",
    "Sales Test 1": 500,
    "Sales Test 2": 400,
  },
  {
    name: "May",
    "Sales Test 1": 400,
    "Sales Test 2": 300,
  },
  {
    name: "Jun",
    "Sales Test 1": 300,
    "Sales Test 2": 200,
  },
  {
    name: "Jul",
    "Sales Test 1": 400,
    "Sales Test 2": 300,
  },
];

export default function Chart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="Sales Test 1" stroke="#8884d8" />
        <Line type="monotone" dataKey="Sales Test 2" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
