import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const ForecastChart = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-5xl mx-auto mb-8">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Forecast Visualization</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ds" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="yhat" stroke="#6366f1" strokeWidth={2} name="Forecast" />
          <Line type="monotone" dataKey="yhat_lower" stroke="#10b981" strokeWidth={1} name="Lower Bound" />
          <Line type="monotone" dataKey="yhat_upper" stroke="#ef4444" strokeWidth={1} name="Upper Bound" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForecastChart;
