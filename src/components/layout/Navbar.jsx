import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Mail, Clock, MapPin } from "lucide-react";
import logo from "../../images/shree.webp";

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
      {/* Top Contact Bar */}
      <div className="bg-secondary-900 text-white py-2 hidden lg:block">
        <div className="container">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-primary-400" />
                <span>+91 9822236802</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-primary-400" />
                <span>shreetravelsngp@yahoo.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-primary-400" />
                <span>Nagpur, Maharashtra</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-primary-400" />
              <span>Mon-Sat: 10:00 AM - 10:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-secondary-200' 
          : 'bg-white shadow-sm'
      }`}>
        <div className="container">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <NavLink to="/" className="flex items-center group">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Shree Travels" 
                  className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative font-medium text-lg transition-all duration-300 hover:text-primary-600 group ${
                      isActive ? 'text-primary-600' : 'text-secondary-700'
                    }`
                  }
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => navigate("/contact")}
                className="btn btn-primary btn-lg group relative overflow-hidden"
              >
                <span className="relative z-10">Request A Ride</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-xl hover:bg-secondary-100 transition-colors duration-200 group"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                  }`} 
                />
                <X 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white border-t border-secondary-200 shadow-xl">
            <div className="container py-6">
              <div className="flex flex-col gap-6">
                {/* Mobile Contact Info */}
                <div className="grid grid-cols-1 gap-4 pb-6 border-b border-secondary-200">
                  <div className="flex items-center gap-3 text-sm text-secondary-600">
                    <Phone size={16} className="text-primary-500" />
                    <span>+91 9822236802</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-secondary-600">
                    <Mail size={16} className="text-primary-500" />
                    <span>shreetravelsngp@yahoo.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-secondary-600">
                    <Clock size={16} className="text-primary-500" />
                    <span>Mon-Sat: 10:00 AM - 10:00 PM</span>
                  </div>
                </div>

                {/* Mobile Menu Items */}
                {menuItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `font-medium text-lg py-3 px-4 rounded-xl transition-all duration-300 hover:bg-primary-50 hover:text-primary-600 ${
                        isActive ? 'text-primary-600 bg-primary-50' : 'text-secondary-700'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                {/* Mobile CTA Button */}
                <button
                  onClick={() => {
                    navigate("/contact");
                    setIsOpen(false);
                  }}
                  className="btn btn-primary w-full mt-4"
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