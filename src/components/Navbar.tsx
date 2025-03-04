import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;