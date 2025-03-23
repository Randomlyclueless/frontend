import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation after login
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"; // Assuming style.css is in the same directory

function DealerLogin() {
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const navigate = useNavigate(); // React Router hook for redirection

  // Fake credentials for testing (you can expand this list)
  const fakeUsers = [
    { username: "dealer1", password: "pass123" },
    { username: "dealer2", password: "password" },
    { username: "admin", password: "admin123" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if entered username and password match any fake credential
    const isAuthenticated = fakeUsers.some(
      (user) => user.username === username && user.password === password
    );

    if (isAuthenticated) {
      alert("Login successful!");
      navigate("/dealer_landing"); // Redirect to DealerLanding page
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
          Dealer Login{" "}
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
        </form>{" "}
        <div className="mt-4 text-center">
          <p className="text-secondary"> Don 't have an account?</p>{" "}
          <a href="dealer_register.html" className="btn btn-outline-dark w-100">
            Register Here{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default DealerLogin;
