import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white bg-opacity-90 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-brand-primary">NXCSOL</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-brand-text hover:text-brand-primary transition-colors">
            Home
          </Link>
          <div className="relative group">
            <button className="text-brand-text hover:text-brand-primary transition-colors flex items-center">
              Services
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 py-1">
              <Link
                to="/services/web-development"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Web Development
              </Link>
              <Link
                to="/services/mobile-apps"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Mobile Apps
              </Link>
              <Link
                to="/services/saas-platforms"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                SaaS Platforms
              </Link>
              <Link
                to="/services/ai-integration"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                AI Integration
              </Link>
              <Link
                to="/services/3d-experiences"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                3D Experiences
              </Link>
            </div>
          </div>
          <Link to="/portfolio" className="text-brand-text hover:text-brand-primary transition-colors">
            Portfolio
          </Link>
          <Link to="/about" className="text-brand-text hover:text-brand-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-brand-text hover:text-brand-primary transition-colors">
            Contact
          </Link>
          <Link to="/contact" className="btn-primary">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-brand-text" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col pt-20`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link
            to="/"
            className="text-xl py-2 border-b border-gray-200"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <div className="py-2 border-b border-gray-200">
            <span className="text-xl mb-2 block">Services</span>
            <div className="ml-4 flex flex-col space-y-2 my-2">
              <Link
                to="/services/web-development"
                className="text-gray-600"
                onClick={toggleMenu}
              >
                Web Development
              </Link>
              <Link
                to="/services/mobile-apps"
                className="text-gray-600"
                onClick={toggleMenu}
              >
                Mobile Apps
              </Link>
              <Link
                to="/services/saas-platforms"
                className="text-gray-600"
                onClick={toggleMenu}
              >
                SaaS Platforms
              </Link>
              <Link
                to="/services/ai-integration"
                className="text-gray-600"
                onClick={toggleMenu}
              >
                AI Integration
              </Link>
              <Link
                to="/services/3d-experiences"
                className="text-gray-600"
                onClick={toggleMenu}
              >
                3D Experiences
              </Link>
            </div>
          </div>
          <Link
            to="/portfolio"
            className="text-xl py-2 border-b border-gray-200"
            onClick={toggleMenu}
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className="text-xl py-2 border-b border-gray-200"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-xl py-2 border-b border-gray-200"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className="btn-primary text-center mt-4"
            onClick={toggleMenu}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
