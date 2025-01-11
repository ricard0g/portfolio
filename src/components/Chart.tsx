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
    "Sales Test A": 300,
    "Sales Test B": 400,
  },
  {
    name: "Feb",
    "Sales Test A": 400,
    "Sales Test B": 300,
  },
  {
    name: "Mar",
    "Sales Test A": 200,
    "Sales Test B": 500,
  },
  {
    name: "Apr",
    "Sales Test A": 500,
    "Sales Test B": 400,
  },
  {
    name: "May",
    "Sales Test A": 400,
    "Sales Test B": 300,
  },
  {
    name: "Jun",
    "Sales Test A": 300,
    "Sales Test B": 200,
  },
  {
    name: "Jul",
    "Sales Test A": 400,
    "Sales Test B": 300,
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
        <Line type="monotone" dataKey="Sales Test A" stroke="#8884d8" />
        <Line type="monotone" dataKey="Sales Test B" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
