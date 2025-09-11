import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

// Reusable component for each item in the mega menu
const MegaMenuItem = ({ icon, title, link, children }) => (
  <Link to={link} className="block p-4 rounded-lg hover:bg-gray-50 group">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <i className={`${icon} text-2xl text-cyan-500 transition-colors group-hover:text-cyan-600`}></i>
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{children}</p>
      </div>
    </div>
  </Link>
);


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? 'text-cyan-500 font-semibold border-b-2 border-cyan-500'
      : 'text-gray-700 hover:text-cyan-500 transition-colors pb-1 border-b-2 border-transparent';

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="Vidyamate Logo" 
              className="w-auto" 
              style={{ height: '1.75rem' }}
            />
            <span className="text-xl font-bold text-gray-800">VidyaMate</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow items-center justify-center space-x-8">
          <NavLink to="/" end className={getNavLinkClass}>Home</NavLink>
          <NavLink to="/about" className={getNavLinkClass}>About Us</NavLink>
          <NavLink to="/plans" className={getNavLinkClass}>Plans</NavLink>
          
          {/* Product Mega Menu - The entire div now controls the hover state */}
          <div 
            className="relative" 
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            {/* The button is now just a visual element within the hover area */}
            <button
              className="flex items-center space-x-1 text-gray-700 hover:text-cyan-500 transition-colors focus:outline-none pb-1"
            >
              <span>Product</span>
              <i className={`bi bi-chevron-down transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
            </button>
            
            {/* Mega Menu Content - The pt-4 creates the visual gap without breaking the hover */}
            {isDropdownOpen && (
              <div 
                className="absolute left-1/2 -translate-x-1/2 pt-4 w-screen max-w-4xl"
              >
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <MegaMenuItem icon="fa-solid fa-school" title="School Management System" link="/school-management">
                      Simplify administrative processes through digitization and automation.
                    </MegaMenuItem>
                    <MegaMenuItem icon="fa-solid fa-user-plus" title="Admission Management System" link="/admission-management">
                      Streamline the entire enrollment process from inquiry to acceptance.
                    </MegaMenuItem>
                    <MegaMenuItem icon="fa-solid fa-book-open-reader" title="Learning Management System" link="/learning-management">
                      Extend the classroom with a dynamic digital learning environment.
                    </MegaMenuItem>
                    <MegaMenuItem icon="fa-solid fa-bus" title="Transport Management System" link="/transport-management">
                      Enhance student safety and operational efficiency for your school fleet.
                    </MegaMenuItem>
                    <MegaMenuItem icon="fa-solid fa-receipt" title="Fees Management System" link="/fee-management">
                      Automate fee collection, invoicing, and financial tracking.
                    </MegaMenuItem>
                    <MegaMenuItem icon="fa-solid fa-file-invoice-dollar" title="Payroll Management System" link="/payroll-management">
                      Ensure accurate, timely, and compliant payroll for all staff.
                    </MegaMenuItem>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink>
        </nav>

        {/* Right Section */}
        <div className="flex-shrink-0 flex items-center">
            <Link to="/get-started" className="hidden md:inline-block bg-cyan-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
              Get Started
            </Link>
            <div className="md:hidden ml-4">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 focus:outline-none">
                  <i className="bi bi-list text-2xl"></i>
              </button>
            </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          {/* Mobile menu links */}
        </div>
      )}
    </header>
  );
};

export default Header;

