"use client"

import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import BIRDS from "vanta/dist/vanta.birds.min"
import * as THREE from "three"
import "./style.css"

function LandingPage() {
  const vantaRef = useRef(null)

  useEffect(() => {
    // Initialize Vanta.js effect
    const vantaEffect = BIRDS({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x0a0a0a,
      color1: 0xffcc00,
      color2: 0x3366ff,
      colorMode: "variance",
      birdSize: 1.5,
      wingSpan: 30.0,
      speedLimit: 5.0,
      separation: 60.0,
      alignment: 50.0,
      cohesion: 40.0,
    })

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [])

  return (
    <div ref={vantaRef} className="landing-container">
      <div className="container py-5">
        <header className="text-center mb-5">
          <h1 className="display-3 fw-bold text-warning">SupplyConnect</h1>
          <p className="lead text-white">Streamlining Supply Chain Operations</p>
        </header>

        <section className="text-center text-white py-5">
          <div className="container">
            <h2 className="display-5 mb-4">Welcome to SupplyConnect</h2>
            <p className="lead mb-5">
              Streamlining operations for dealers and shopkeepers to manage inventory, orders, and grow their network
              with powerful analytics.
            </p>
          </div>
        </section>

        <div className="row g-4 justify-content-center">
          <div className="col-md-6">
            <div className="card portal-card h-100 shadow-lg border-0">
              <div className="card-body text-center p-5">
                <div className="portal-icon mb-3">
                  <i className="fas fa-truck fa-3x text-primary"></i>
                </div>
                <h3 className="card-title mb-3">Dealer Portal</h3>
                <p className="card-text mb-4">
                  Access inventory, manage orders, and connect with shopkeepers seamlessly. Get real-time analytics and
                  insights to grow your business.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                  <Link to="/dealer_login" className="btn btn-primary btn-lg px-4">
                    Login as Dealer
                  </Link>
                  <Link to="/dealer_signup" className="btn btn-outline-primary btn-lg px-4">
                    Register as Dealer
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card portal-card h-100 shadow-lg border-0">
              <div className="card-body text-center p-5">
                <div className="portal-icon mb-3">
                  <i className="fas fa-store fa-3x text-success"></i>
                </div>
                <h3 className="card-title mb-3">Shopkeeper Portal</h3>
                <p className="card-text mb-4">
                  Discover products, place bulk orders, and manage your store more effectively. Connect with trusted
                  dealers and optimize your inventory.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                  <Link to="/shopkeeper_login" className="btn btn-success btn-lg px-4">
                    Login as Shopkeeper
                  </Link>
                  <Link to="/shopkeeper_signup" className="btn btn-outline-success btn-lg px-4">
                    Register as Shopkeeper
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center text-white py-4 mt-5">
          <p className="mb-0">© {new Date().getFullYear()} SupplyConnect. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default LandingPage

