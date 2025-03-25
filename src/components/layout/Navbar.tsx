
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/assessment", label: "Assessment" },
  { href: "/training", label: "Training" },
  { href: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold gradient-text">FacultySkills</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-1">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="px-4 py-2 rounded-md text-foreground/80 hover:text-primary transition-all-300 hover-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center pl-4 ml-4 border-l border-border">
              <Link
                to="/login"
                className="px-4 py-2 rounded-md text-foreground/80 hover:text-primary transition-all-300 mr-2"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="btn-primary bg-primary text-white rounded-md shadow-sm hover:shadow-md transition-all-300"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center p-2 rounded-md text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg shadow-lg"
          >
            <div className="section-container py-4">
              <ul className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="block px-4 py-2 rounded-md hover:bg-secondary transition-all-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2 mt-2 border-t border-border">
                  <Link
                    to="/login"
                    className="block px-4 py-2 rounded-md hover:bg-secondary transition-all-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="block px-4 py-2 bg-primary text-white rounded-md transition-all-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
