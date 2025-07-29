import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    { name: "Home", type: "scroll", target: "home" },
    { name: "About", type: "scroll", target: "About" },
    { name: "DAMS", type: "link", path: "/doctorAppoitment" },
    { name: "Check Appointment", type: "link", path: "/check-appoitment" },
    { name: "Booking", type: "scroll", target: "Booking" },
    { name: "Contact", type: "scroll", path: "Contact" },
    { name: "Doctor", type: "link", path: "/doctor" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        const offset = 80;
        const position = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: position - offset, behavior: "smooth" });
      }
    }
  }, [location]);

  const handleScrollClick = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 shadow-md text-gray-700 py-3"
          : "bg-gray-200 py-4"
      }`}
    >
      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center justify-center gap-6 lg:gap-8">
        {navLinks.map((link, i) =>
          link.type === "link" ? (
            <Link
              key={i}
              to={link.path}
              className="group relative text-gray-700"
              style={{ textDecoration: "none", color: "gray" }}
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-0.5 bg-blue-600 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ) : (
            <button
              key={i}
              onClick={() => handleScrollClick(link.target)}
              className="group relative text-gray-700"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-0.5 bg-blue-600 w-0 group-hover:w-full transition-all duration-300"></span>
            </button>
          )
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex items-start gap-3 sm:hidden px-4">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-blue-50 flex flex-col items-center justify-center gap-6 font-medium text-gray-800 z-40">
          {navLinks.map((link, i) =>
            link.type === "link" ? (
              <Link
                key={i}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="group relative pb-2 text-gray-700"
                style={{ textDecoration: "none", color: "gray" }}
              >
                {link.name}
                <span className="absolute left-0 -bottom-0 h-0.5 bg-red-600 w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ) : (
              <button
                key={i}
                onClick={() => handleScrollClick(link.target)}
                className="group relative pb-2 text-gray-700"
              >
                {link.name}
                <span className="absolute left-0 -bottom-0 h-0.5 bg-red-600 w-0 group-hover:w-full transition-all duration-300"></span>
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
