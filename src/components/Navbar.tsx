import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../lib/axios";
import toast from "react-hot-toast";
import { SmoothCursor } from '../components/ui/smooth-cursor';

const NAVBAR_HEIGHT = 64;

interface NavbarProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

export default function Navbar({ isAuthenticated, setIsAuthenticated }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout", {}, { withCredentials: true });
      localStorage.removeItem("token");
      toast.success("Logout successful!");
    } catch {
      // even if backend fails, clear auth locally
      console.error("Logout failed");
      toast.error("Logout failed. Please try again.");
    }
    setIsAuthenticated(false);
    navigate("/");
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Teams", href: "#counsellor" },
    { name: "Services", href: "/Councellors" },
    { name: "Contact", href: "management-team" },
  ];

  return (
    <>
    {/* <SmoothCursor /> */}
    <nav
      className="bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg fixed w-full z-50"
      style={{ height: NAVBAR_HEIGHT }}
    >
      <div className="max-w-7xl mx-auto h-full py-4">
        <div className="grid grid-cols-3 items-center h-full">
          {/* Logo */}
          <div className="flex items-center gap-1 justify-start">
            <img src={logo} alt="Adhyaay Logo" className="h-8 w-8 ml-2" />
            <span className="text-xl md:text-2xl font-bold tracking-wide text-gray-900">ADHYAAY</span>
          </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 text-gray-800 font-medium justify-center">
          {navItems.map((item) => (
            <li key={item.name} className="relative group cursor-pointer">
              <a
                href={item.href}
                className="relative inline-block transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-yellow-500 group-hover:bg-clip-text"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-300 ease-in-out group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>


          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex gap-3 justify-end">
            {isAuthenticated ? (
              <Button onClick={handleLogout} variant="outline" className="bg-red-600 text-white">
                Logout
              </Button>
            ) : (
              <>
                <Button asChild variant="outline" className="bg-[#fe7500] text-white">
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button asChild variant="outline" className="border border-[#fe7500] text-[#fe7500]">
                  <Link to="/register">Sign Up</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden col-start-3 justify-self-end mx-5">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-800 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block hover:text-blue-600 transition duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
          {isAuthenticated ? (
            <li>
              <Button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="w-full bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Logout
              </Button>
            </li>
          ) : (
            <>
              <li>
                <Button asChild className="w-full bg-blue-900 text-white px-4 py-2 rounded-md">
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    Sign In
                  </Link>
                </Button>
              </li>
              <li>
                <Button asChild className="w-full border border-blue-900 text-blue-900 px-4 py-2 rounded-md">
                  <Link to="/register" onClick={() => setIsOpen(false)}>
                    Sign Up
                  </Link>
                </Button>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
    </>
  );
}
