import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  
  // Check if user is logged in
  const isAuthenticated = localStorage.getItem("isLoggedIn");

  const handleLoginClick = () => {
    if (isAuthenticated) {
      navigate("/quotation");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-display text-2xl text-secondary">
              The Ds Interiors
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/projects" className="nav-link">Completed Projects</Link>
            <Link to="/designs" className="nav-link">Designs</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link 
              to="https://calendly.com/dsenterprises24-in/30min" 
              className="px-6 py-2 bg-primary/90 text-white rounded-full hover:bg-primary transition-colors"
            >
              Book Consultation
            </Link>
            <button 
              onClick={handleLoginClick} 
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/projects" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Our Projects</Link>
            <Link to="/designs" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Designs</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Contact</Link>
            <Link 
              to="/consultation" 
              className="block px-3 py-2 bg-primary/90 text-white rounded-md hover:bg-primary"
            >
              Book Consultation
            </Link>
            <button 
              onClick={handleLoginClick} 
              className="w-full px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
