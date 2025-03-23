import { Link, useLocation } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

function Navbar() {
  const location = useLocation()

  // Determine if we're in dealer or shopkeeper section
  const isDealerSection = location.pathname.includes("dealer")
  const isShopkeeperSection = location.pathname.includes("shopkeeper")

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          SupplyConnect
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {isDealerSection && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/dealer_landing">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/inventory">
                    Inventory
                  </Link>
                </li>
              </>
            )}
            {isShopkeeperSection && (
              <li className="nav-item">
                <Link className="nav-link" to="/shopkeeper_landing">
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
          <div className="d-flex">
            {!isDealerSection && !isShopkeeperSection ? (
              <>
                <Link to="/dealer_login" className="btn btn-outline-light me-2">
                  Dealer Login
                </Link>
                <Link to="/shopkeeper_login" className="btn btn-outline-light">
                  Shopkeeper Login
                </Link>
              </>
            ) : (
              <Link to="/" className="btn btn-outline-light">
                Logout
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

