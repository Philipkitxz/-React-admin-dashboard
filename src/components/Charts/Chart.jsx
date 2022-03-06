import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  Legend,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({title, data, datakey, grid}) => {


  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#7474D8" />
          <Line type="monotone" dataKey={datakey} stroke="#7474D8" />
          <Tooltip />
          {grid &&<CartesianGrid stroke="#c0dfdf" strokeDasharray='5 5'/>}
          <Legend/>
        </LineChart>

      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
