import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "../../images/shree.webp";
import data from "../../mocks/data.json";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/payment", label: "Quick Payment" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-gray-900 text-white py-2 px-4 text-sm">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+91 9822236802</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>shreetravelsngp@yahoo.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Mon-Sat: 10:00 AM - 10:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white'
      }`}>
        <div className="container">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <NavLink to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Shree Travels" 
                className="h-12 w-auto object-contain"
              />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `font-medium transition-colors duration-200 hover:text-primary-600 ${
                      isActive ? 'text-primary-600' : 'text-gray-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => navigate("/contact")}
                className="btn btn-primary btn-lg"
              >
                Request A Ride
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white border-t border-gray-200 py-4">
            <div className="container">
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `font-medium py-2 transition-colors duration-200 hover:text-primary-600 ${
                        isActive ? 'text-primary-600' : 'text-gray-700'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <button
                  onClick={() => {
                    navigate("/contact");
                    setIsOpen(false);
                  }}
                  className="btn btn-primary mt-4 w-full"
                >
                  Request A Ride
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;