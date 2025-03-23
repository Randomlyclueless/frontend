import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation after login
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"; // Assuming style.css is in the same directory

function ShopkeeperLogin() {
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const navigate = useNavigate(); // React Router hook for redirection

  // Fake credentials for testing
  const fakeUsers = [
    { username: "shopkeeper1", password: "shop123" },
    { username: "shopkeeper2", password: "shop456" },
    { username: "admin", password: "admin123" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Entered Username:", username); // Debug entered username
    console.log("Entered Password:", password); // Debug entered password

    // Check if entered username and password match any fake credentials
    const isAuthenticated = fakeUsers.some(
      (user) =>
        user.username === username.trim() && user.password === password.trim()
    );

    if (isAuthenticated) {
      alert("Login successful!");
      navigate("/shopkeeper_landing"); // Redirect to shopkeeper landing page
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow-lg p-4"
        style={{
          width: "28rem",
          backgroundColor: "#fff",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#333" }}>
          Shopkeeper Login{" "}
        </h2>{" "}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label text-secondary">
              Username{" "}
            </label>{" "}
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update username state
              required
            />
          </div>{" "}
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-secondary">
              Password{" "}
            </label>{" "}
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              required
            />
          </div>{" "}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label
              className="form-check-label text-secondary"
              htmlFor="rememberMe"
            >
              Remember me{" "}
            </label>{" "}
          </div>{" "}
          <button type="submit" className="btn btn-dark w-100">
            Login{" "}
          </button>{" "}
        </form>
        <div className="mt-4 text-center">
          <p className="text-secondary"> Don’ t have an account ? </p>{" "}
          <a
            href="shopkeeper_register.html"
            className="btn btn-outline-dark w-100"
          >
            Register Here{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default ShopkeeperLogin;
