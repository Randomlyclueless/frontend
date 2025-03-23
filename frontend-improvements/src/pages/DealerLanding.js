"use client"

import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { FaUser, FaTruck, FaWarehouse, FaBell, FaChartLine, FaSignOutAlt } from "react-icons/fa"
import { Line, Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"
import "./style.css"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler)

function DealerDashboard() {
  const [salesData, setSalesData] = useState({
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales 2025",
        data: [65, 59, 80, 81, 56, 55],
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgb(75, 192, 192)",
        tension: 0.4,
      },
      {
        label: "Sales 2024",
        data: [45, 49, 60, 71, 46, 45],
        fill: true,
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgb(153, 102, 255)",
        tension: 0.4,
      },
    ],
  })

  const productPerformance = {
    labels: ["Product A", "Product B", "Product C", "Product D", "Product E"],
    datasets: [
      {
        label: "Sales Volume",
        data: [120, 90, 70, 60, 50],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales Performance",
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    animation: {
      duration: 2000,
      easing: "easeInOutQuart",
    },
  }

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Product Performance",
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    animation: {
      duration: 2000,
      easing: "easeInOutQuart",
    },
  }

  return (
    <div className="dealer-dashboard">
      {/* Sidebar */}
      <div className="sidebar bg-dark text-white">
        <div className="sidebar-header">
          <h2 className="text-center py-4 m-0">Dealer Dashboard</h2>
        </div>
        <div className="sidebar-menu">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="#" className="nav-link text-white active">
                <FaChartLine className="me-2" /> Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                <FaUser className="me-2" /> Profile
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                <FaTruck className="me-2" /> Orders
              </a>
            </li>
            <li className="nav-item">
              <a href="/inventory" className="nav-link text-white">
                <FaWarehouse className="me-2" /> Inventory
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                <FaBell className="me-2" /> Notifications
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar-footer mt-auto">
          <a href="/" className="nav-link text-white">
            <FaSignOutAlt className="me-2" /> Logout
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-content bg-light">
        <div className="container-fluid p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Welcome to the Dealer Dashboard</h2>
            <div className="date-display">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="row mb-4">
            <div className="col-md-3 mb-3">
              <div className="card stat-card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted">Total Sales</h6>
                      <h3 className="mb-0">$24,580</h3>
                    </div>
                    <div className="stat-icon bg-primary-light text-primary">
                      <FaChartLine />
                    </div>
                  </div>
                  <div className="mt-3 text-success">
                    <small>↑ 12.5% from last month</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card stat-card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted">Orders</h6>
                      <h3 className="mb-0">45</h3>
                    </div>
                    <div className="stat-icon bg-success-light text-success">
                      <FaTruck />
                    </div>
                  </div>
                  <div className="mt-3 text-success">
                    <small>↑ 8.2% from last month</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card stat-card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted">Inventory Items</h6>
                      <h3 className="mb-0">128</h3>
                    </div>
                    <div className="stat-icon bg-warning-light text-warning">
                      <FaWarehouse />
                    </div>
                  </div>
                  <div className="mt-3 text-danger">
                    <small>↓ 3.1% from last month</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card stat-card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted">Notifications</h6>
                      <h3 className="mb-0">12</h3>
                    </div>
                    <div className="stat-icon bg-danger-light text-danger">
                      <FaBell />
                    </div>
                  </div>
                  <div className="mt-3">
                    <small>5 unread messages</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="row mb-4">
            <div className="col-lg-8 mb-3">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Sales Overview</h5>
                  <div className="chart-container">
                    <Line options={lineChartOptions} data={salesData} />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-3">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Product Performance</h5>
                  <div className="chart-container">
                    <Bar options={barChartOptions} data={productPerformance} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="row">
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title mb-0">Recent Orders</h5>
                    <button className="btn btn-sm btn-outline-primary">View All</button>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead className="table-light">
                        <tr>
                          <th>Order ID</th>
                          <th>Customer</th>
                          <th>Date</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#ORD-001</td>
                          <td>Shop A</td>
                          <td>2025-03-15</td>
                          <td>$1,200</td>
                          <td>
                            <span className="badge bg-success">Delivered</span>
                          </td>
                          <td>
                            <button className="btn btn-sm btn-outline-secondary">Details</button>
                          </td>
                        </tr>
                        <tr>
                          <td>#ORD-002</td>
                          <td>Shop B</td>
                          <td>2025-03-14</td>
                          <td>$850</td>
                          <td>
                            <span className="badge bg-warning text-dark">Processing</span>
                          </td>
                          <td>
                            <button className="btn btn-sm btn-outline-secondary">Details</button>
                          </td>
                        </tr>
                        <tr>
                          <td>#ORD-003</td>
                          <td>Shop C</td>
                          <td>2025-03-12</td>
                          <td>$2,100</td>
                          <td>
                            <span className="badge bg-info">Shipped</span>
                          </td>
                          <td>
                            <button className="btn btn-sm btn-outline-secondary">Details</button>
                          </td>
                        </tr>
                        <tr>
                          <td>#ORD-004</td>
                          <td>Shop D</td>
                          <td>2025-03-10</td>
                          <td>$950</td>
                          <td>
                            <span className="badge bg-success">Delivered</span>
                          </td>
                          <td>
                            <button className="btn btn-sm btn-outline-secondary">Details</button>
                          </td>
                        </tr>
                        <tr>
                          <td>#ORD-005</td>
                          <td>Shop E</td>
                          <td>2025-03-08</td>
                          <td>$1,450</td>
                          <td>
                            <span className="badge bg-danger">Cancelled</span>
                          </td>
                          <td>
                            <button className="btn btn-sm btn-outline-secondary">Details</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DealerDashboard

