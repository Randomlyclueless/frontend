import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import DealerLogin from "./pages/DealerLogin"
import DealerLanding from "./pages/DealerLanding"
import Inventory from "./pages/Inventory"
import Landing from "./pages/Landing"
import DealerSignup from "./pages/DealerSignup"
import ShopkeeperLogin from "./pages/ShopkeeperLogin"
import ShopkeeperLanding from "./pages/ShopkeeperLanding"
import ShopkeeperSignup from "./pages/ShopkeeperSignup"
import Navbar from "./components/Navbar"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/dealer_login"
            element={
              <>
                <Navbar />
                <DealerLogin />
              </>
            }
          />
          <Route
            path="/dealer_landing"
            element={
              <>
                <DealerLanding />
              </>
            }
          />
          <Route
            path="/dealer_signup"
            element={
              <>
                <Navbar />
                <DealerSignup />
              </>
            }
          />
          <Route
            path="/inventory"
            element={
              <>
                <Navbar />
                <Inventory />
              </>
            }
          />
          <Route
            path="/shopkeeper_login"
            element={
              <>
                <Navbar />
                <ShopkeeperLogin />
              </>
            }
          />
          <Route
            path="/shopkeeper_landing"
            element={
              <>
                <ShopkeeperLanding />
              </>
            }
          />
          <Route
            path="/shopkeeper_signup"
            element={
              <>
                <Navbar />
                <ShopkeeperSignup />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App

