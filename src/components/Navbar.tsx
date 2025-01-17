import React, { useState, useEffect } from 'react';
import { Menu, User, LogOut, ChevronDown } from 'lucide-react';
import logo from '../assets/anegis-logo.svg';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onLogoClick?: () => void;
  isAdmin?: boolean;
  userEmail?: string;
  onLogout?: () => void;
}

export function Navbar({ onLogoClick, isAdmin, userEmail, onLogout }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isDynamicsMenuOpen, setIsDynamicsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dynamics-menu-container')) {
        setIsDynamicsMenuOpen(false);
      }
      if (!target.closest('.user-menu-container')) {
        setIsUserMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    }
    setIsMenuOpen(false);
  };

  const dynamicsProducts = [
    { name: 'Sales', path: '/dynamics-365-sales' },
    { name: 'Customer Insights', path: '/dynamics-365-customer-insights' },
    { name: 'Customer Service', path: '/dynamics-365-customer-service' },
    { name: 'Field Service', path: '/dynamics-365-field-service' },
    { name: 'Supply Chain Management', path: '/dynamics-365-supply-chain' },
    { name: 'Commerce', path: '/dynamics-365-commerce' },
    { name: 'Finance', path: '/dynamics-365-finance' },
    { name: 'Project Operations', path: '/dynamics-365-project-operations' },
    { name: 'Human Resources', path: '/dynamics-365-human-resources' },
  ];

  const navigationItems = [
    { name: 'Przykłady wdrożeń', href: '/przyklady-wdrozen' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 bg-white border-b border-[#e1dfdd] z-50 transition-shadow ${
        hasScrolled ? 'shadow-sm' : ''
      }`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-[48px]">
            <div className="flex">
              <div className="flex items-center lg:hidden">
                <button
                  type="button"
                  className="text-[#616161] hover:text-[#323130] p-2"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Menu className="h-5 w-5" />
                </button>
              </div>

              <Link 
                to="/"
                className="flex items-center cursor-pointer"
                onClick={handleLogoClick}
              >
                <img src={logo} alt="ANEGIS a Microsoft Dynamics 365 Business Partner" className="h-8 w-auto" />
              </Link>

              <div className="hidden lg:flex lg:items-center lg:ml-8 space-x-8">
                <div className="relative dynamics-menu-container">
                  <button
                    onClick={() => setIsDynamicsMenuOpen(!isDynamicsMenuOpen)}
                    className="flex items-center text-[#616161] hover:text-[#323130] text-sm"
                  >
                    Dynamics 365
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  {isDynamicsMenuOpen && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                      {dynamicsProducts.map((product) => (
                        <Link
                          key={product.path}
                          to={product.path}
                          className="block px-4 py-2 text-sm text-[#616161] hover:text-[#323130] hover:bg-gray-100"
                          onClick={() => setIsDynamicsMenuOpen(false)}
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-[#616161] hover:text-[#323130] text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {isAdmin ? (
                <div className="relative user-menu-container">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 text-[#616161] hover:text-[#323130] p-2 rounded-md"
                  >
                    <User className="h-5 w-5" />
                    <span className="text-sm hidden md:inline">{userEmail}</span>
                  </button>
                  
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <button
                        onClick={() => {
                          setIsUserMenuOpen(false);
                          onLogout?.();
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-[#616161] hover:text-[#323130] hover:bg-gray-100"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Wyloguj się
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href="/admin"
                  className="inline-flex items-center justify-center p-2 text-[#616161] hover:text-[#323130] transition-colors"
                  title="Admin Panel"
                >
                  <User className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setIsMenuOpen(false)}></div>
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50">
            <div className="p-4 pt-16">
              <div className="space-y-4">
                {dynamicsProducts.map((product) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    className="block text-[#616161] hover:text-[#323130] text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))}
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block text-[#616161] hover:text-[#323130] text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
