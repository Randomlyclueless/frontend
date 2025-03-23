"use client"

import { useState } from "react"
import { FaStore, FaBoxOpen, FaChartLine, FaMapMarkerAlt, FaSignOutAlt, FaUser, FaBell, FaCog } from "react-icons/fa"
import { Doughnut, Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"

// Register ChartJS components
ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const ShopkeeperLanding = () => {
  const [inventoryItems, setInventoryItems] = useState([
    { id: 1, name: "Product A", level: "medium", quantity: 15 },
    { id: 2, name: "Product B", level: "high", quantity: 30 },
    { id: 3, name: "Product C", level: "low", quantity: 5 },
    { id: 4, name: "Product D", level: "medium", quantity: 12 },
    { id: 5, name: "Product E", level: "low", quantity: 3 },
  ])

  const [salesData, setSalesData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales 2025",
        data: [30, 45, 35, 60, 50, 75],
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.4,
      },
    ],
  })

  const [inventoryDistribution, setInventoryDistribution] = useState({
    labels: ["Low Stock", "Medium Stock", "High Stock"],
    datasets: [
      {
        data: [2, 2, 1], // Count of items in each level
        backgroundColor: ["rgba(255, 99, 132, 0.7)", "rgba(255, 206, 86, 0.7)", "rgba(75, 192, 192, 0.7)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  })

  const updateInventoryLevel = (itemId, newLevel) => {
    const updatedItems = inventoryItems.map((item) => (item.id === itemId ? { ...item, level: newLevel } : item))
    setInventoryItems(updatedItems)

    // Update the doughnut chart data
    const lowCount = updatedItems.filter((item) => item.level === "low").length
    const mediumCount = updatedItems.filter((item) => item.level === "medium").length
    const highCount = updatedItems.filter((item) => item.level === "high").length

    setInventoryDistribution((prev) => ({
      ...prev,
      datasets: [
        {
          ...prev.datasets[0],
          data: [lowCount, mediumCount, highCount],
        },
      ],
    }))
  }

  const getLevelBadge = (level) => {
    switch (level) {
      case "low":
        return <span className="badge bg-danger">Low</span>
      case "medium":
        return <span className="badge bg-warning text-dark">Medium</span>
      case "high":
        return <span className="badge bg-success">High</span>
      default:
        return null
    }
  }

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Inventory Status Distribution",
        font: {
          size: 16,
        },
      },
    },
    cutout: "70%",
  }

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales Trend",
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
  }

  return (
    <div className="shopkeeper-dashboard">
      {/* Sidebar */}
      <div className="sidebar bg-dark text-white">
        <div className="sidebar-header">
          <h2 className="text-center py-4 m-0">Shopkeeper</h2>
        </div>
        <div className="sidebar-menu">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="#" className="nav-link text-white active">
                <FaStore className="me-2" /> Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                <FaUser className="me-2" /> Profile
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                <FaBoxOpen className="me-2" /> Products
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                <FaChartLine className="me-2" /> Sales
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                <FaBell className="me-2" /> Notifications
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                <FaCog className="me-2" /> Settings
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

      {/* Main Content */}
      <div className="main-content bg-light">
        <div className="container-fluid p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Shopkeeper Dashboard</h2>
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
                      <h6 className="text-muted">Total Products</h6>
                      <h3 className="mb-0">5</h3>
                    </div>
                    <div className="stat-icon bg-primary-light text-primary">
                      <FaBoxOpen />
                    </div>
                  </div>
                  <div className="mt-3">
                    <small>2 items low in stock</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card stat-card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted">Monthly Sales</h6>
                      <h3 className="mb-0">$4,250</h3>
                    </div>
                    <div className="stat-icon bg-success-light text-success">
                      <FaChartLine />
                    </div>
                  </div>
                  <div className="mt-3 text-success">
                    <small>↑ 15% from last month</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card stat-card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted">Customers</h6>
                      <h3 className="mb-0">128</h3>
                    </div>
                    <div className="stat-icon bg-warning-light text-warning">
                      <FaUser />
                    </div>
                  </div>
                  <div className="mt-3 text-success">
                    <small>↑ 8% from last month</small>
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
                      <h3 className="mb-0">5</h3>
                    </div>
                    <div className="stat-icon bg-danger-light text-danger">
                      <FaBell />
                    </div>
                  </div>
                  <div className="mt-3">
                    <small>3 unread messages</small>
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
                  <h5 className="card-title">Inventory Status</h5>
                  <div className="chart-container">
                    <Doughnut options={doughnutOptions} data={inventoryDistribution} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inventory Management */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title mb-0">Inventory Management</h5>
                    <button className="btn btn-sm btn-outline-primary">Add New Product</button>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead className="table-light">
                        <tr>
                          <th>ID</th>
                          <th>Product Name</th>
                          <th>Quantity</th>
                          <th>Current Status</th>
                          <th>Update Level</th>
                        </tr>
                      </thead>
                      <tbody>
                        {inventoryItems.map((item) => (
                          <tr key={item.id}>
                            <td>{item.id}</td>
                            <td className="fw-medium">{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{getLevelBadge(item.level)}</td>
                            <td>
                              <div className="btn-group" role="group">
                                <button
                                  className={`btn btn-sm ${item.level === "low" ? "btn-danger" : "btn-outline-danger"}`}
                                  onClick={() => updateInventoryLevel(item.id, "low")}
                                >
                                  Low
                                </button>
                                <button
                                  className={`btn btn-sm ${item.level === "medium" ? "btn-warning" : "btn-outline-warning"}`}
                                  onClick={() => updateInventoryLevel(item.id, "medium")}
                                >
                                  Medium
                                </button>
                                <button
                                  className={`btn btn-sm ${item.level === "high" ? "btn-success" : "btn-outline-success"}`}
                                  onClick={() => updateInventoryLevel(item.id, "high")}
                                >
                                  High
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Store Location */}
          <div className="row">
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">
                    <FaMapMarkerAlt className="me-2" />
                    Store Location
                  </h5>
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.71637333491515!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1648642762566!5m2!1sen!2sin"
                      className="rounded"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
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

export default ShopkeeperLanding

