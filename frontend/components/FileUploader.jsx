import React, { useState } from "react";
import axios from "axios";

const FileUploader = ({ setForecastData, setMetrics }) => {
  const [uploaded, setUploaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [months, setMonths] = useState(12); // default to 12 months
  const [fileName, setFileName] = useState("");

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("months", months);

    setLoading(true);

    try {
      const response = await axios.post(
        "https://time-series-forecasting-for-payroll.onrender.com/forecast",
        formData
      );
      setForecastData(response.data.forecast);
      setMetrics(response.data.metrics);
      setUploaded(true);
    } catch (error) {
      console.error(error);
      alert("Failed to upload or fetch forecast");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto mb-8">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Upload Payroll Data</h2>

      <label className="block mb-1 text-gray-700 font-medium">Forecast Months</label>
      <input
        type="number"
        value={months}
        onChange={(e) => setMonths(Number(e.target.value))}
        className="border px-4 py-2 mb-4 rounded w-full"
        min={1}
      />

      <div className="mb-4">
        <label
          htmlFor="fileUpload"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded cursor-pointer inline-block"
        >
          📁 Choose File
        </label>
        <input
          id="fileUpload"
          type="file"
          onChange={handleUpload}
          className="hidden"
        />
        {fileName && <p className="mt-2 text-sm text-gray-600">Selected: {fileName}</p>}
      </div>

      {loading && <p className="text-blue-500">⏳ Uploading...</p>}
      {uploaded && <p className="text-green-600">✅ File uploaded successfully!</p>}
    </div>
  );
};

export default FileUploader;
