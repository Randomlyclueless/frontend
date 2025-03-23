"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaStore, FaUser, FaEnvelope, FaPhone, FaLock, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"

function ShopkeeperSignup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    shopName: "",
  })
  const [location, setLocation] = useState({ lat: null, lng: null })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const mapRef = useRef(null)
  const markerRef = useRef(null)

  useEffect(() => {
    // Simulate map loading
    const loadMap = () => {
      console.log("Map would be loaded here in a real implementation")
      // In a real implementation, we would initialize the map here
    }

    loadMap()

    // Cleanup function
    return () => {
      // Cleanup map resources if needed
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleLocationSelect = (lat, lng) => {
    setLocation({ lat, lng })

    // In a real implementation, we would update the marker position
    console.log(`Location selected: ${lat}, ${lng}`)
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setLocation({ lat: latitude, lng: longitude })

          // In a real implementation, we would update the map and marker
          console.log(`Current location: ${latitude}, ${longitude}`)
        },
        (error) => {
          setError("Unable to retrieve your location. Please select manually.")
          console.error("Geolocation error:", error)
        },
      )
    } else {
      setError("Geolocation is not supported by your browser.")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    // Basic validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword || !formData.shopName) {
      setError("All fields are required!")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!")
      return
    }

    if (!location.lat || !location.lng) {
      setError("Please select a location for your shop!")
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setSuccess(true)

      // Redirect after showing success for a moment
      setTimeout(() => {
        navigate("/shopkeeper_login")
      }, 3000)
    }, 1500)
  }

  if (success) {
    return (
      <div className="auth-container shopkeeper-signup-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card auth-card border-0 shadow-lg">
                <div className="card-body p-5 text-center">
                  <FaCheckCircle className="text-success mb-4" size={60} />
                  <h2 className="mb-3">Registration Successful!</h2>
                  <p className="mb-4">
                    Your shopkeeper account has been created successfully. You will be redirected to the login page
                    shortly.
                  </p>
                  <Link to="/shopkeeper_login" className="btn btn-success">
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
    <div className="auth-container shopkeeper-signup-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card auth-card border-0 shadow-lg">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div className="auth-logo-container mb-3">
                    <FaStore className="auth-logo" />
                  </div>
                  <h2 className="auth-title">Shopkeeper Signup</h2>
                  <p className="text-muted">Create a shopkeeper account to access the SupplyConnect platform</p>
                </div>

                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">
                        Full Name
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaUser />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
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

                  <div className="row">
                    <div className="col-md-6 mb-3">
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

                    <div className="col-md-6 mb-3">
                      <label htmlFor="shopName" className="form-label">
                        Shop Name
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaStore />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="shopName"
                          name="shopName"
                          placeholder="Enter your shop name"
                          value={formData.shopName}
                          onChange={handleChange}
                          required
                        />
                      </div>
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

                  <div className="mb-3">
                    <label className="form-label">Shop Location</label>
                    <div
                      ref={mapRef}
                      className="map-container mb-2"
                      style={{
                        height: "300px",
                        backgroundColor: "#e9ecef",
                        borderRadius: "0.375rem",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Map placeholder - in a real implementation, this would be a Google Map */}
                      <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-center">
                          <FaMapMarkerAlt className="mb-2" size={30} color="#dc3545" />
                          <p>Click on the map to select your shop location</p>
                          {location.lat && location.lng && (
                            <div className="mt-2 p-2 bg-light rounded">
                              <strong>Selected Location:</strong>
                              <br />
                              Latitude: {location.lat.toFixed(6)}
                              <br />
                              Longitude: {location.lng.toFixed(6)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <button type="button" className="btn btn-outline-success w-100" onClick={getCurrentLocation}>
                      <FaMapMarkerAlt className="me-2" />
                      Use Current Location
                    </button>
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

                  <button type="submit" className="btn btn-success w-100 py-2" disabled={isLoading}>
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
                  <Link to="/shopkeeper_login" className="btn btn-outline-success w-100">
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

export default ShopkeeperSignup

