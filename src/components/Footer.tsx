import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 w-[115%] mx-auto">
            <h3 className="text-lg font-semibold">O ANEGIS</h3>
            <p className="text-gray-400">
            Grupa ANEGIS jest jednym z europejskich liderów w optymalizacji i automatyzacji procesów biznesowych. Swoje działania opiera na najnowszych rozwiązaniach technologicznych systemach ERP, CRM, MRP wykorzystujących sztuczną inteligencję, rozszerzoną rzeczywistość, systemy wizyjne, technologie kognitywne, cloud oraz systemach pracy zdalnej (modern workplace).
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
          <div className="space-y-4 ml-[35%]">
            <h3 className="text-lg font-semibold">Eksploruj</h3>
            <ul className="space-y-2">
              <li><Link to="/selection" className="text-gray-400 hover:text-white">O nas</Link></li>
              <li><Link to="https://www.anegis.com/pl/klienci" className="text-gray-400 hover:text-white">Klienci</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white">Kalkulator licencji</Link></li>
              <li><Link to="https://www.anegis.com/pl/baza-wiedzy/witamy" className="text-gray-400 hover:text-white">Baza wiedzy</Link></li>
              <li><Link to="https://www.anegis.com/pl/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="https://www.anegis.com/pl/wydarzenia" className="text-gray-400 hover:text-white">Wydarzenia</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dynamics 365</h3>
            <ul className="space-y-2">
              <li><a href="/dynamics-365-sales" className="text-gray-400 hover:text-white">Dynamics 365 Sales</a></li>
              <li><a href="/dynamics-365-finance" className="text-gray-400 hover:text-white">Dynamics 365 Finance</a></li>
              <li><a href="/dynamics-365-supply-chain" className="text-gray-400 hover:text-white">Dynamics 365 Supply Chain</a></li>
              <li><a href="/dynamics-365-customer-service" className="text-gray-400 hover:text-white">Dynamics 365 Customer Service</a></li>
              <li><a href="/dynamics-365-field-service" className="text-gray-400 hover:text-white">Dynamics 365 Field Service</a></li>
              <li><a href="/dynamics-365-commerce" className="text-gray-400 hover:text-white">Dynamics 365 Commerce</a></li>
              <li><a href="/dynamics-365-project-operations" className="text-gray-400 hover:text-white">Dynamics 365 Project Operations</a></li>
              <li><a href="/dynamics-365-human-resources" className="text-gray-400 hover:text-white">Dynamics 365 Human Resources</a></li>
              <li><a href="/dynamics-365-customer-insights" className="text-gray-400 hover:text-white">Dynamics 365 Customer Insights</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: sales@anegis.com</li>
              <li>Telefon: +48 71 661 90 25</li>
              <li>Address: Centrum Południe, ul. Powstańców Śląskich 17, bud. D, 53-332 Wrocław</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {new Date().getFullYear()} ANEGIS Sp. z o.o. All rights reserved.
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
