import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="backdrop-blur-lg bg-white/50 shadow-sm border-b border-gray-50 fixed top-0 left-0 w-full pt-2 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
          <div className="flex items-center">
            <img src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1756050333/Screenshot_2025-08-24_163342_kjlwnx_e_improve_e_sharpen_wx0hbc.png" alt="Brand-logo" className='w-16 h-10 rounded-sm' />
          </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-gray-700 poppins-regular font-medium hover:text-[#9E1E8D] after:content-[''] after:block after:h-0.5 after:bg-[#9E1E8D] after:scale-x-0 after:origin-center after:transition-transform after:duration-700 hover:after:scale-x-100"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-700 hover:text-[#9E1E8D] p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 text-gray-700 hover:text-[#9E1E8D] font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
      
            </div>
          </div>
        )}
      </div>
    </header>
  );
}