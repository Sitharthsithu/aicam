import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/auto-location', label: 'Auto Location' },
    { path: '/call-services', label: 'Call Services' },
    { path: '/hotels', label: 'Hotels & Resorts' },
    { path: '/medical', label: 'Medical Services' },
    { path: '/about', label: 'About Us' },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">BAT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-600 hover:text-blue-600 transition-colors ${
                  location.pathname === item.path ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <LogIn size={20} />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 text-gray-600 hover:text-blue-600 transition-colors ${
                  location.pathname === item.path ? 'text-blue-600 font-semibold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/login"
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors my-4 w-full justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn size={20} />
              <span>Login</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;