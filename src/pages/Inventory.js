import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"; // Your styles

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

function Inventory() {
  const [fileData, setFileData] = useState({});
  const [chartData, setChartData] = useState({
    labels: ["Shop 1", "Shop 2", "Shop 3", "Shop 4", "Shop 5", "Shop 6"],
    datasets: [
      {
        label: "Predicted Sales",
        data: [50, 60, 70, 80, 90, 100], // Initial placeholder data
        backgroundColor: [
          "#FF6384", // Pinkish-red
          "#36A2EB", // Blue
          "#FFCE56", // Yellow
          "#4BC0C0", // Teal
          "#9966FF", // Purple
          "#FF9F40", // Orange
        ],
        borderColor: "#333",
        borderWidth: 1,
      },
    ],
  });

  // Handle CSV Upload and Simulate Prediction (dummy AI function for now)
  const handleFileChange = async (event, shopIndex) => {
    const file = event.target.files[0];
    if (!file) return;

    setFileData((prev) => ({ ...prev, [shopIndex]: file }));
    console.log(`File uploaded for Shop ${shopIndex + 1}:`, file.name);

    // Simulate an AI prediction process and update chart dynamically
    const predictions = await fakeAIPredict(shopIndex);
    updateChart(shopIndex, predictions);
  };

  // Simulated AI Model Prediction Function (returns random data for demo)
  const fakeAIPredict = async (shopIndex) => {
    console.log("Processing AI prediction for Shop", shopIndex + 1);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
    return Math.floor(Math.random() * 100) + 50; // Random predicted sales
  };

  // Update Chart Data with AI Predictions
  const updateChart = (shopIndex, prediction) => {
    const updatedData = [...chartData.datasets[0].data];
    updatedData[shopIndex] = prediction; // Replace the shop's data point

    setChartData((prev) => ({
      ...prev,
      datasets: [{ ...prev.datasets[0], data: updatedData }],
    }));
  };

  return (
    <div className="container vh-100 p-4">
      <h2 className="mb-4 text-center"> Inventory Management </h2>
      <div className="row">
        {" "}
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title"> Shop {index + 1} </h5>
                <div className="mb-3">
                  <label htmlFor={`file-input-${index}`} className="form-label">
                    Add data.csv file:
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id={`file-input-${index}`}
                    accept=".csv"
                    onChange={(event) => handleFileChange(event, index)}
                  />{" "}
                </div>
                <button
                  className="btn btn-success w-100"
                  onClick={() =>
                    console.log("Processing Shop", index + 1, fileData[index])
                  }
                >
                  Predict Sales{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>
      <div className="mt-5">
        <h3> Prediction Results Graph </h3> <Bar data={chartData} />{" "}
      </div>{" "}
    </div>
  );
}

export default Inventory;
