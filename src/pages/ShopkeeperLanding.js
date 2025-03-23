import React, { useState } from "react";

const ShopkeeperLanding = () => {
  const [inventoryItems, setInventoryItems] = useState([
    { id: 1, name: "Product A", level: "medium", quantity: 15 },
    { id: 2, name: "Product B", level: "high", quantity: 30 },
    { id: 3, name: "Product C", level: "low", quantity: 5 },
    { id: 4, name: "Product D", level: "medium", quantity: 12 },
    { id: 5, name: "Product E", level: "low", quantity: 3 },
  ]);

  const updateInventoryLevel = (itemId, newLevel) => {
    const updatedItems = inventoryItems.map((item) =>
      item.id === itemId ? { ...item, level: newLevel } : item
    );
    setInventoryItems(updatedItems);
    console.log(`Updated item ${itemId} to level: ${newLevel}`);
  };

  const levelStyles = {
    low: {
      backgroundColor: "#ff4d4d",
      color: "white",
      padding: "5px 10px",
      borderRadius: "5px",
    },
    medium: {
      backgroundColor: "#ffcc00",
      color: "black",
      padding: "5px 10px",
      borderRadius: "5px",
    },
    high: {
      backgroundColor: "#4caf50",
      color: "white",
      padding: "5px 10px",
      borderRadius: "5px",
    },
  };

  const tableStyles = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  };

  const thTdStyles = {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "left",
  };

  const iframeStyles = {
    width: "100%",
    height: "400px",
    border: "none",
    borderRadius: "8px",
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "auto",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ color: "#333" }}> Shopkeeper Dashboard </h1>{" "}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#333" }}> Inventory Management </h2>{" "}
        <p> Click the buttons to update inventory levels. </p>{" "}
        <table style={tableStyles}>
          <thead>
            <tr>
              <th style={{ ...thTdStyles, backgroundColor: "#f1f1f1" }}> # </th>{" "}
              <th style={{ ...thTdStyles, backgroundColor: "#f1f1f1" }}>
                {" "}
                Product Name{" "}
              </th>{" "}
              <th style={{ ...thTdStyles, backgroundColor: "#f1f1f1" }}>
                {" "}
                Quantity{" "}
              </th>{" "}
              <th style={{ ...thTdStyles, backgroundColor: "#f1f1f1" }}>
                {" "}
                Current Status{" "}
              </th>{" "}
              <th style={{ ...thTdStyles, backgroundColor: "#f1f1f1" }}>
                {" "}
                Update Level{" "}
              </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {" "}
            {inventoryItems.map((item) => (
              <tr key={item.id}>
                <td style={thTdStyles}> {item.id} </td>{" "}
                <td style={thTdStyles}> {item.name} </td>{" "}
                <td style={thTdStyles}> {item.quantity} </td>{" "}
                <td style={thTdStyles}>
                  <span style={levelStyles[item.level]}>
                    {" "}
                    {item.level.charAt(0).toUpperCase() +
                      item.level.slice(1)}{" "}
                  </span>{" "}
                </td>{" "}
                <td style={thTdStyles}>
                  <div>
                    <button
                      style={{
                        padding: "8px 12px",
                        marginRight: "5px",
                        border: "none",
                        borderRadius: "4px",
                        backgroundColor: "#ff4d4d",
                        color: "white",
                        cursor: "pointer",
                        outline:
                          item.level === "low" ? "2px solid #333" : "none",
                      }}
                      onClick={() => updateInventoryLevel(item.id, "low")}
                    >
                      Low{" "}
                    </button>{" "}
                    <button
                      style={{
                        padding: "8px 12px",
                        marginRight: "5px",
                        border: "none",
                        borderRadius: "4px",
                        backgroundColor: "#ffcc00",
                        color: "black",
                        cursor: "pointer",
                        outline:
                          item.level === "medium" ? "2px solid #333" : "none",
                      }}
                      onClick={() => updateInventoryLevel(item.id, "medium")}
                    >
                      Medium{" "}
                    </button>{" "}
                    <button
                      style={{
                        padding: "8px 12px",
                        marginRight: "5px",
                        border: "none",
                        borderRadius: "4px",
                        backgroundColor: "#4caf50",
                        color: "white",
                        cursor: "pointer",
                        outline:
                          item.level === "high" ? "2px solid #333" : "none",
                      }}
                      onClick={() => updateInventoryLevel(item.id, "high")}
                    >
                      High{" "}
                    </button>{" "}
                  </div>{" "}
                </td>{" "}
              </tr>
            ))}{" "}
          </tbody>{" "}
        </table>{" "}
      </div>{" "}
      <div>
        <h2 style={{ color: "#333" }}> Store Location </h2>{" "}
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1-UWyOB4zzTVdVY_C4tC6Qnq_sIVAROU&ehbc=2E312F"
          style={iframeStyles}
        ></iframe>{" "}
      </div>{" "}
    </div>
  );
};

export default ShopkeeperLanding;
