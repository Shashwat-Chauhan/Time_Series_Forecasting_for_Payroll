import React, { useState } from "react";

const ScenarioAdjustment = ({ data, setForecastData }) => {
  const [adjustment, setAdjustment] = useState(0);

  const applyAdjustment = () => {
    if (!data.length) return;
    const multiplier = 1 + adjustment / 100;
    const adjusted = data.map(row => ({
      ...row,
      yhat: row.yhat * multiplier,
      yhat_lower: row.yhat_lower * multiplier,
      yhat_upper: row.yhat_upper * multiplier,
    }));
    setForecastData(adjusted);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto mb-8">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Scenario Adjustment</h2>
      <label className="block mb-2">Expected Salary Increase (%)</label>
      <input
        type="number"
        value={adjustment}
        onChange={(e) => setAdjustment(Number(e.target.value))}
        className="border px-4 py-2 rounded w-full"
      />
      <button
        onClick={applyAdjustment}
        disabled={!data.length}
        className={`mt-4 px-4 py-2 rounded text-white ${!data.length ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        Apply Changes
      </button>
    </div>
  );
};

export default ScenarioAdjustment;
