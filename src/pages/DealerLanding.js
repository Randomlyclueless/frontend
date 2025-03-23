import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaTruck, FaWarehouse, FaBell } from "react-icons/fa";

function DealerDashboard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100vw",
        margin: 0,
      }}
    >
      {/* Sidebar */}{" "}
      <div
        style={{
          backgroundColor: "#343a40",
          color: "white",
          padding: "20px",
          width: "250px",
          height: "100%",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Dealer Dashboard{" "}
        </h2>{" "}
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "20px" }}>
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
              <FaUser style={{ marginRight: "10px" }} /> Profile{" "}
            </a>{" "}
          </li>{" "}
          <li style={{ marginBottom: "20px" }}>
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
              <FaTruck style={{ marginRight: "10px" }} /> Orders{" "}
            </a>{" "}
          </li>{" "}
          <li style={{ marginBottom: "20px" }}>
            <a
              href="./Inventory.js"
              style={{ textDecoration: "none", color: "white" }}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "./Inventory";
              }}
            >
              <FaWarehouse style={{ marginRight: "10px" }} /> Inventory{" "}
            </a>{" "}
          </li>{" "}
          <li>
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
              <FaBell style={{ marginRight: "10px" }} /> Notifications{" "}
            </a>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
      {/* Main Content Area */}{" "}
      <div
        style={{
          flexGrow: 1,
          backgroundColor: "#f8f9fa",
          padding: "40px",
          height: "100%",
          overflowY: "auto",
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>
          {" "}
          Welcome to the Dealer Dashboard{" "}
        </h2>{" "}
        <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
          {" "}
          {/* Highest Sales */}{" "}
          <div
            style={{
              flex: 1,
              backgroundColor: "#d4edda",
              padding: "20px",
              borderRadius: "10px",
              height: "150px",
            }}
          >
            <h4 style={{ color: "#155724" }}> Highest Sales </h4>{" "}
            <p>
              Product: <strong> Product A </strong>{" "}
            </p>{" "}
            <p> This product had the highest sales this month! </p>{" "}
          </div>{" "}
          {/* Lowest Sales */}{" "}
          <div
            style={{
              flex: 1,
              backgroundColor: "#f8d7da",
              padding: "20px",
              borderRadius: "10px",
              height: "150px",
            }}
          >
            <h4 style={{ color: "#721c24" }}> Lowest Sales </h4>{" "}
            <p>
              Product: <strong> Product B </strong>{" "}
            </p>{" "}
            <p> This product had the lowest sales this month. </p>{" "}
          </div>{" "}
        </div>{" "}
        {/* Sales Chart Section */}{" "}
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            height: "300px",
          }}
        >
          <h4 style={{ color: "#007bff" }}> Sales Chart </h4>{" "}
          <p>
            {" "}
            This section will visualize sales trends and comparisons using a
            chart.{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default DealerDashboard;
