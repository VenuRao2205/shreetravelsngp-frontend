import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Star, Award } from "lucide-react";
import logo from "../../images/shree.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/payment", label: "Quick Payment" },
    { path: "/contact", label: "Contact Us" }
  ];

  const legalLinks = [
    { path: "/privacy", label: "Privacy Policy" },
    { path: "/terms", label: "Terms & Conditions" },
    { path: "/cancellation", label: "Cancellation & Refund" }
  ];

  const services = [
    "Corporate Car Rental",
    "Employee Transportation",
    "Airport Transfers",
    "Executive Travel"
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 border border-white rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-white rounded-full"></div>
      </div>

      <div className="container py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Shree Travels" className="h-12 w-auto" />
              <div>
                <h3 className="text-2xl font-bold text-white">Shree Travels</h3>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-accent-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-400 ml-2">30+ Years of Excellence</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Your trusted partner in corporate transportation solutions with 30 years 
              of experience. We provide reliable, efficient, and comfortable cab services 
              tailored for corporate clients across Nagpur.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-accent-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Plot No. 1066, Near Law College Square, Gorepeth, Nagpur- 440010
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent-500" />
                <a href="tel:+919822236802" className="text-gray-300 hover:text-accent-400 transition-colors">
                  +91 9822236802
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent-500" />
                <a href="mailto:shreetravelsngp@yahoo.com" className="text-gray-300 hover:text-accent-400 transition-colors">
                  shreetravelsngp@yahoo.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-accent-500" />
                <span className="text-gray-300">Mon-Sat: 10:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
              <Award size={20} className="text-accent-500" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-accent-500 rounded-full group-hover:w-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h5 className="text-lg font-semibold mt-8 mb-4 text-white">Our Services</h5>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary-500 rounded-full"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Legal & Support</h4>
            <ul className="space-y-4">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-accent-500 rounded-full group-hover:w-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl">
              <h5 className="font-semibold mb-2">Need Immediate Assistance?</h5>
              <p className="text-sm text-primary-100 mb-4">Our team is ready to help you 24/7</p>
              <a 
                href="tel:+919822236802"
                className="btn btn-secondary btn-sm w-full"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 relative z-10">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {currentYear} Shree Travels. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Award size={16} className="text-accent-500" />
                <span className="text-gray-400">Trusted Since 1994</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              {legalLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="text-gray-600">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;