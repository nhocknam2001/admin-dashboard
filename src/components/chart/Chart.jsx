import "./chart.scss";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <div className="chartTitle">
        <h3>{title}</h3>
        {/* Chart Container */}
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd" />
            {/* X line of chart - bottom*/}
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
            {/* Line of chart reveal number */}
            <Tooltip /> {/* Show number by moving mouse */}
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
            {/* Grid background */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
