"use client"

import { useState } from "react"
import { Bar } from "react-chartjs-2"
import "bootstrap/dist/css/bootstrap.min.css"
import { FaUpload, FaChartBar, FaFileAlt, FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./style.css"

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend)

function Inventory() {
  const [fileData, setFileData] = useState({})
  const [isLoading, setIsLoading] = useState({})
  const [chartData, setChartData] = useState({
    labels: ["Shop 1", "Shop 2", "Shop 3", "Shop 4", "Shop 5", "Shop 6"],
    datasets: [
      {
        label: "Predicted Sales",
        data: [50, 60, 70, 80, 90, 100],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  })

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Predicted Sales by Shop",
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `Sales: $${context.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Sales Volume ($)",
        },
        ticks: {
          callback: (value) => "$" + value,
        },
      },
      x: {
        title: {
          display: true,
          text: "Shop Location",
        },
      },
    },
    animation: {
      duration: 2000,
      easing: "easeInOutQuart",
    },
  }

  // Handle CSV Upload and Simulate Prediction
  const handleFileChange = async (event, shopIndex) => {
    const file = event.target.files[0]
    if (!file) return

    setFileData((prev) => ({ ...prev, [shopIndex]: file }))
    console.log(`File uploaded for Shop ${shopIndex + 1}:`, file.name)
  }

  // Simulated AI Model Prediction Function
  const predictSales = async (shopIndex) => {
    if (!fileData[shopIndex]) {
      alert("Please upload a CSV file first!")
      return
    }

    setIsLoading((prev) => ({ ...prev, [shopIndex]: true }))

    // Simulate an AI prediction process and update chart dynamically
    console.log("Processing AI prediction for Shop", shopIndex + 1)
    await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate delay

    // Generate a random prediction between 50 and 150
    const prediction = Math.floor(Math.random() * 100) + 50

    updateChart(shopIndex, prediction)
    setIsLoading((prev) => ({ ...prev, [shopIndex]: false }))

    return prediction
  }

  // Update Chart Data with AI Predictions
  const updateChart = (shopIndex, prediction) => {
    const updatedData = [...chartData.datasets[0].data]
    updatedData[shopIndex] = prediction // Replace the shop's data point

    setChartData((prev) => ({
      ...prev,
      datasets: [{ ...prev.datasets[0], data: updatedData }],
    }))
  }

  return (
    <div className="inventory-container">
      <div className="container-fluid py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <Link to="/dealer_landing" className="btn btn-outline-primary mb-2">
              <FaArrowLeft className="me-2" /> Back to Dashboard
            </Link>
            <h2 className="mb-0">Inventory Management & Sales Prediction</h2>
            <p className="text-muted">Upload shop data files to predict sales using our AI model</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h4 className="card-title mb-4">Shop Data Upload</h4>

                <div className="row">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={index}>
                      <div className="card shop-card h-100">
                        <div className="card-body">
                          <div className="shop-icon mb-3">
                            <FaChartBar />
                          </div>
                          <h5 className="card-title">Shop {index + 1}</h5>

                          <div className="mb-3">
                            <label htmlFor={`file-input-${index}`} className="form-label">
                              Upload sales data (CSV):
                            </label>
                            <div className="input-group mb-3">
                              <input
                                type="file"
                                className="form-control"
                                id={`file-input-${index}`}
                                accept=".csv"
                                onChange={(event) => handleFileChange(event, index)}
                              />
                              <span className="input-group-text">
                                <FaFileAlt />
                              </span>
                            </div>
                          </div>

                          <button
                            className="btn btn-primary w-100"
                            onClick={() => predictSales(index)}
                            disabled={isLoading[index] || !fileData[index]}
                          >
                            {isLoading[index] ? (
                              <>
                                <span
                                  className="spinner-border spinner-border-sm me-2"
                                  role="status"
                                  aria-hidden="true"
                                ></span>
                                Processing...
                              </>
                            ) : (
                              <>
                                <FaUpload className="me-2" /> Predict Sales
                              </>
                            )}
                          </button>

                          {fileData[index] && <div className="mt-2 small text-muted">File: {fileData[index].name}</div>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h4 className="card-title mb-3">How It Works</h4>
                <ol className="ps-3">
                  <li className="mb-2">Upload your shop's sales data CSV file</li>
                  <li className="mb-2">Click "Predict Sales" to run our AI model</li>
                  <li className="mb-2">View the prediction results in the chart below</li>
                  <li>Use insights to optimize your inventory management</li>
                </ol>

                <div className="alert alert-info mt-3">
                  <strong>Tip:</strong> For best results, ensure your CSV files include historical sales data, seasonal
                  trends, and product categories.
                </div>
              </div>
            </div>

            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="card-title mb-3">Data Requirements</h4>
                <p>Your CSV file should include the following columns:</p>
                <ul className="ps-3">
                  <li>Date (YYYY-MM-DD format)</li>
                  <li>Product ID</li>
                  <li>Quantity Sold</li>
                  <li>Price</li>
                  <li>Customer Demographics (optional)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title mb-4">Sales Prediction Results</h3>
                <div style={{ height: "400px" }}>
                  <Bar data={chartData} options={chartOptions} />
                </div>

                <div className="mt-4">
                  <h5>Analysis Summary</h5>
                  <p>
                    Based on the predicted sales data, Shop 5 shows the highest potential revenue, followed by Shop 4
                    and Shop 6. Consider allocating more inventory to these locations to maximize sales. Shops 1 and 2
                    may need marketing support or product mix adjustments to improve performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inventory

