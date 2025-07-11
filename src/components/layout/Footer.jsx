import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-white">Shree Travels</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in corporate transportation solutions with 30 years 
              of experience. We provide reliable, efficient, and comfortable cab services 
              tailored for corporate clients.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Plot No. 1066, Near Law College Square, Gorepeth, Nagpur- 440010
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary-500" />
                <span className="text-gray-300">+91 9822236802</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary-500" />
                <span className="text-gray-300">shreetravelsngp@yahoo.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-primary-500" />
                <span className="text-gray-300">Mon-Sat: 10:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/payment" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Quick Payment
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/privacy" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link 
                  to="/cancellation" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Cancellation & Refund
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Shree Travels. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link 
                to="/privacy" 
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Terms & Conditions
              </Link>
              <span className="text-gray-600">|</span>
              <Link 
                to="/cancellation" 
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Cancellation & Refund
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;