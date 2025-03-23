import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DealerLogin from "./pages/DealerLogin";
import DealerLanding from "./pages/DealerLanding";
import Inventory from "./pages/Inventory";
import Landing from "./pages/Landing"; // Import Inventory page
import "./App.css"; // Import your CSS
import DealerSignup from "./pages/DealerSignup";
import ShopkeeperLogin from "./pages/ShopkeeperLogin";
import ShopkeeperLanding from "./pages/ShopkeeperLanding";
import ShopkeeperSignup from "./pages/ShopkeeperSignup";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />{" "}
          <Route path="/dealer_login" element={<DealerLogin />} />{" "}
          <Route path="/dealer_landing" element={<DealerLanding />} />{" "}
          <Route path="/dealer_signup" element={<DealerSignup />} />{" "}
          <Route path="/inventory" element={<Inventory />} />{" "}
          <Route path="/landing" element={<Landing />} />{" "}
          <Route path="/shopkeeper_login" element={<ShopkeeperLogin />} />{" "}
          <Route path="/shopkeeper_landing" element={<ShopkeeperLanding />} />{" "}
          <Route path="/shopkeeper_signup" element={<ShopkeeperSignup />} />{" "}
        </Routes>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;
