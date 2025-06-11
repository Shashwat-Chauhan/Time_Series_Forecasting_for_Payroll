import React from "react";

const ModelEvaluation = ({ metrics }) => {
  const { MAE, RMSE, MAPE } = metrics;
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto mb-8">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Model Evaluation</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>🔹 MAE: <strong>{MAE}</strong></li>
        <li>🔹 RMSE: <strong>{RMSE}</strong></li>
        <li>🔹 MAPE: <strong>{MAPE}%</strong></li>
      </ul>
    </div>
  );
};

export default ModelEvaluation;
