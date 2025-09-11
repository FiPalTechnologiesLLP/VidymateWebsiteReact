import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-footer.JPG';

// A small, reusable component for social media icons to keep the code clean
const SocialIcon = ({ href, children, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label={label}
    className="text-gray-500 hover:text-cyan-500 transition-colors"
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-sky-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8">
          
          {/* Column 1: Useful Links */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-gray-800 mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-cyan-500">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-cyan-500">About us</Link></li>
              <li><Link to="/plans" className="text-gray-600 hover:text-cyan-500">Plans</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-cyan-500">Products</a></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-cyan-500">Contact</Link></li>
            </ul>
          </div>

          {/* Column 2: Our Services */}
          <div className="col-span-1 md:col-span-4">
            <h4 className="font-bold text-gray-800 mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/school-management" className="text-gray-600 hover:text-cyan-500">School Management System</Link></li>
              <li><Link to="/admission-management" className="text-gray-600 hover:text-cyan-500">Admission Management System</Link></li>
              <li><Link to="/learning-management" className="text-gray-600 hover:text-cyan-500">Learning Management System</Link></li>
              <li><Link to="/transport-management" className="text-gray-600 hover:text-cyan-500">Transport Management System</Link></li>
              <li><Link to="/fee-management" className="text-gray-600 hover:text-cyan-500">Fees Management System</Link></li>
              <li><Link to="/payroll-management" className="text-gray-600 hover:text-cyan-500">Payroll Management System</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Contact Details */}
          <div className="col-span-2 md:col-span-3">
            <h4 className="font-bold text-gray-800 mb-4">Contact Details</h4>
            <div className="text-gray-600 space-y-3">
              <p><i className="fa-solid fa-envelope mr-2 text-gray-400"></i>support@vidyamate.in</p>
              <p><i className="fa-solid fa-phone mr-2 text-gray-400"></i>+91 93467 30371</p>
              <div className="flex">
                <i className="fa-solid fa-location-dot mr-2 text-gray-400 mt-1"></i>
                <span>FiPal Technologies LLP,<br />Vannaiah Zinna Colony, Kanekal,<br />Anantapur, Andhra Pradesh</span>
              </div>
            </div>
          </div>

          {/* Column 4: About & Social Links */}
          <div className="col-span-2 md:col-span-3">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              {/* Updated logo styling with mix-blend-multiply */}
              <img 
                src={logo} 
                alt="Vidyamate Logo" 
                className="h-12 w-auto rounded-md shadow-sm mix-blend-multiply" 
              />
            </Link>
            <p className="text-sm text-gray-600 mt-2">Empowering education through innovative and intuitive software solutions.</p>
            
            {/* Social Media Links using SVGs */}
            <div className="flex space-x-4 mt-4">
              <SocialIcon href="https://twitter.com" label="Twitter">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </SocialIcon>
              <SocialIcon href="https://facebook.com" label="Facebook">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </SocialIcon>
              <SocialIcon href="https://instagram.com" label="Instagram">
                <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.355 2.175 8.743 2.163 12 2.163m0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" clipRule="evenodd" />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com" label="LinkedIn">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <path d="M4 2a2 2 0 100 4 2 2 0 000-4z" />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>@ Copyright 2024 | Vidyamate. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

