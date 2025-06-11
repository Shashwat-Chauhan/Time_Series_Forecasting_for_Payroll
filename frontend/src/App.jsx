import React, { useState } from "react";
import ForecastChart from "../components/ForecastChart";
import ScenarioAdjustment from "../components/ScenarioAdjustment";
import ModelEvaluation from "../components/ModelEvaluation";
import FileUploader from "../components/fileUploader";

function App() {
  const [forecastData, setForecastData] = useState([]);
  const [metrics, setMetrics] = useState(null);

  return (  
    <div className="p-8 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Payroll Forecasting Dashboard</h1>
      <FileUploader setForecastData={setForecastData} setMetrics={setMetrics} />
      {forecastData.length > 0 && <ForecastChart data={forecastData} />}
      <ScenarioAdjustment data={forecastData} setForecastData={setForecastData} />
      {metrics && <ModelEvaluation metrics={metrics} />}
    </div>
  );
}

export default App;
