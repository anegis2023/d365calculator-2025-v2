import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-gray-400">
              We specialize in Microsoft Dynamics 365 implementations and consulting services.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://linkedin.com/company/your-company" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="https://youtube.com/c/your-company" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaYoutube size={24} />
              </a>
              <a 
                href="https://facebook.com/your-company" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/questions" className="text-gray-400 hover:text-white">Questions</Link></li>
              <li><Link to="/selection" className="text-gray-400 hover:text-white">Selection</Link></li>
              <li><Link to="/review" className="text-gray-400 hover:text-white">Review</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Dynamics 365 Sales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Dynamics 365 Finance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Dynamics 365 Supply Chain</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Customer Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contact@example.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: Your Business Address</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
