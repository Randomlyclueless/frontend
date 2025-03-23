"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaTruck, FaUser, FaEnvelope, FaPhone, FaLock, FaCheckCircle } from "react-icons/fa"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"

export default function DealerSignup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Form validation and submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { username, email, phone, password, confirmPassword } = formData

    // Reset error state
    setError("")

    // Basic validation
    if (!username || !email || !phone || !password || !confirmPassword) {
      setError("All fields are required!")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long!")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address!")
      return
    }

    setIsLoading(true)

    // Simulate API call with timeout
    setTimeout(() => {
      setIsLoading(false)
      setSuccess(true)

      // Redirect after showing success for a moment
      setTimeout(() => {
        navigate("/dealer_login")
      }, 3000)
    }, 1500)
  }

  if (success) {
    return (
      <div className="auth-container dealer-signup-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card auth-card border-0 shadow-lg">
                <div className="card-body p-5 text-center">
                  <FaCheckCircle className="text-success mb-4" size={60} />
                  <h2 className="mb-3">Registration Successful!</h2>
                  <p className="mb-4">
                    Your dealer account has been created successfully. You will be redirected to the login page shortly.
                  </p>
                  <Link to="/dealer_login" className="btn btn-primary">
                    Go to Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="auth-container dealer-signup-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card auth-card border-0 shadow-lg">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div className="auth-logo-container mb-3">
                    <FaTruck className="auth-logo" />
                  </div>
                  <h2 className="auth-title">Dealer Signup</h2>
                  <p className="text-muted">Create a dealer account to access the SupplyConnect platform</p>
                </div>

                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaUser />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          name="username"
                          placeholder="Choose a username"
                          value={formData.username}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaEnvelope />
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaPhone />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaLock />
                        </span>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Create a password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <small className="form-text text-muted">Password must be at least 6 characters long</small>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaLock />
                        </span>
                        <input
                          type="password"
                          className="form-control"
                          id="confirmPassword"
                          name="confirmPassword"
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 form-check">
                    <input type="checkbox" className="form-check-input" id="termsCheck" required />
                    <label className="form-check-label small" htmlFor="termsCheck">
                      I agree to the{" "}
                      <a href="#" className="text-decoration-none">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-decoration-none">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary w-100 py-2" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Creating Account...
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </button>
                </form>

                <div className="mt-4 text-center">
                  <p className="mb-2">Already have an account?</p>
                  <Link to="/dealer_login" className="btn btn-outline-primary w-100">
                    Login to Your Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

