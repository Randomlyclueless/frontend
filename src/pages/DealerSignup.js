import React, { useState } from "react";

export default function UserSignup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Form validation and submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, phone, password, confirmPassword } = user;

    // Basic validation
    if (!username || !email || !phone || !password || !confirmPassword) {
      setError("All fields are required!");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    try {
      // Mock backend integration
      const response = await fetch("http://localhost:5000/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, phone, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setSuccess("User signup successful!");
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        setError(data.message || "Failed to sign up user");
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          User Signup{" "}
        </h2>{" "}
        {error && <p className="text-red-500 mb-4"> {error} </p>}{" "}
        {success && <p className="text-green-500 mb-4"> {success} </p>}{" "}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {" "}
              Username{" "}
            </label>{" "}
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Username"
            />
          </div>{" "}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {" "}
              Email{" "}
            </label>{" "}
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Email"
            />
          </div>{" "}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {" "}
              Phone Number{" "}
            </label>{" "}
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Phone Number"
            />
          </div>{" "}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {" "}
              Password{" "}
            </label>{" "}
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Password"
            />
          </div>{" "}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {" "}
              Confirm Password{" "}
            </label>{" "}
            <input
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Confirm Password"
            />
          </div>{" "}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Signup{" "}
          </button>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
}
