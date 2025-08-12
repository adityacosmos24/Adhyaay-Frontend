import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useState, useEffect } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { api } from "./lib/axios";
import Footerdemo from "./components/Footer";

const Home = lazy(() => import("./pages/Homepage"));

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication on first load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.get("/auth/check", { withCredentials: true });
        if (res.status === 200 && res.data?.authenticated) {
          setIsAuthenticated(true);
        }
      } catch {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  return (
    <Router>
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
        </Routes>
      </Suspense>
      <Footerdemo/>
    </Router>
  );
}
