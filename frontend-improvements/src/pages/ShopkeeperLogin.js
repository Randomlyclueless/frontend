"use client"

import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import { FaStore, FaLock, FaUser } from "react-icons/fa"
import "./style.css"

function ShopkeeperLogin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  // Fake credentials for testing
  const fakeUsers = [
    { username: "shopkeeper1", password: "shop123" },
    { username: "shopkeeper2", password: "shop456" },
    { username: "admin", password: "admin123" },
  ]

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API call with timeout
    setTimeout(() => {
      // Check if entered username and password match any fake credential
      const isAuthenticated = fakeUsers.some(
        (user) => user.username === username.trim() && user.password === password.trim(),
      )

      if (isAuthenticated) {
        navigate("/shopkeeper_landing")
      } else {
        setError("Invalid username or password. Please try again.")
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="auth-container shopkeeper-login-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card auth-card border-0 shadow-lg">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div className="auth-logo-container mb-3">
                    <FaStore className="auth-logo" />
                  </div>
                  <h2 className="auth-title">Shopkeeper Login</h2>
                  <p className="text-muted">Enter your credentials to access your shopkeeper account</p>
                </div>

                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                <form onSubmit={handleLogin}>
                  <div className="mb-3">
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
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <a href="#" className="text-decoration-none small">
                        Forgot password?
                      </a>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaLock />
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4 form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label small" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>

                  <button type="submit" className="btn btn-success w-100 py-2" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Logging in...
                      </>
                    ) : (
                      "Login"
                    )}
                  </button>
                </form>

                <div className="mt-4 text-center">
                  <p className="mb-2">Don't have an account?</p>
                  <Link to="/shopkeeper_signup" className="btn btn-outline-success w-100">
                    Create Shopkeeper Account
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

export default ShopkeeperLogin

