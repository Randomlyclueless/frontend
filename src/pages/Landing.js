import React from "react"; // Import React
import { Link } from "react-router-dom"; // Import React Router's Link
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const PortalSection = ({ title, description, loginLink, registerLink }) => {
  const sectionStyle = {
    padding: "4rem 0",
    textAlign: "center",
  };
  const cardStyle = {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    margin: "0 auto",
    maxWidth: "600px",
  };
  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  };

  return (
    <section style={sectionStyle}>
      <div style={cardStyle}>
        <h2>
          {" "}
          {title}
          Portal{" "}
        </h2>{" "}
        <p> {description} </p>{" "}
        <div style={buttonContainerStyle}>
          <Link to={loginLink} className="btn btn-dark btn-lg">
            Login as {title}{" "}
          </Link>{" "}
          <Link to={registerLink} className="btn btn-outline-dark btn-lg">
            Register as {title}{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

function LandingPage() {
  const pageStyle = {
    height: "100vh", // Full height of the viewport
    width: "100vw", // Full width of the viewport
    backgroundColor: "black", // Set background to black
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // Ensure even spacing
  };

  const introStyle = {
    textAlign: "center",
    padding: "4rem 2rem",
    color: "white",
  };

  return (
    <div style={pageStyle}>
      <header style={{ padding: "20px", textAlign: "center" }}>
        <h1 style={{ fontWeight: "bold", color: "#ffcc00" }}>
          {" "}
          SupplyConnect{" "}
        </h1>{" "}
      </header>{" "}
      <section style={introStyle}>
        <h1> Welcome to SupplyConnect </h1>{" "}
        <p className="lead">
          Streamlining operations for dealers and shopkeepers to manage
          inventory, orders, and grow their network.{" "}
        </p>{" "}
      </section>{" "}
      <PortalSection
        title="Dealer"
        description="Access inventory, manage orders, and connect with shopkeepers seamlessly."
        loginLink="/dealer_login"
        registerLink="/dealer_signup"
      />
      <PortalSection
        title="Shopkeeper"
        description="Discover products, place bulk orders, and manage your store more effectively."
        loginLink="/shopkeeper_login"
        registerLink="/shopkeeper_signup"
      />
      <footer
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          textAlign: "center",
          color: "#fff",
          padding: "15px 0",
        }}
      >
        <p> & copy; 2025 SupplyConnect.All rights reserved. </p>{" "}
      </footer>{" "}
    </div>
  );
}

export default LandingPage;
