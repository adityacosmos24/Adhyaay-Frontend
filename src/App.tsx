import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useState, useEffect } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footerdemo from "./components/Footer";
import ManagementTeam from "./pages/ManagementTeam";
import Councellors from "./pages/Councellors";
import Mentors from "./pages/Mentors";
import Booking from "./pages/Booking";
import ScrollToTop from "./components/ScrollToTop"; // ✅ fixed path
import {jwtDecode} from "jwt-decode";

const Home = lazy(() => import("./pages/Homepage"));

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      try {
        const token = localStorage.getItem("token"); // check localStorage
        if (!token) {
          setIsAuthenticated(false);
          return;
        }

        // decode token to check expiry
        const decoded: any = jwtDecode(token);
        if (decoded.exp * 1000 > Date.now()) {
          setIsAuthenticated(true);
        } else {
          // expired
          localStorage.removeItem("token");
          setIsAuthenticated(false);
        }
      } catch {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  return (
  <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />

      <ScrollToTop />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/management-team" element={<ManagementTeam />} />
          <Route path="/councellors" element={<Councellors />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/book" element={<Booking />} />
        </Routes> 

      <div id="footer">
        <Footerdemo />
      </div>
    </Router>
  </Suspense>
  );
}
