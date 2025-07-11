import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import aboutImage from "../../images/gif.jpeg";

const About = () => {
  const navigate = useNavigate();

  const highlights = [
    "30+ years of trusted service in Nagpur",
    "Professional and courteous chauffeurs",
    "Well-maintained fleet of vehicles",
    "Customizable corporate packages",
    "24/7 customer support",
    "Competitive and transparent pricing"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>About Shree Travels</span>
            </div>
            
            <h2 className="mb-6">
              <span className="text-primary-600">Efficiency.</span> Reliability. <span className="text-primary-600">Excellence.</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Welcome to Shree Travels, your trusted partner in corporate transportation solutions. 
              With 30 years of experience in the industry, we specialize in providing reliable, 
              efficient, and comfortable cab services tailored specifically for corporate clients.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/services")}
                className="btn btn-primary group"
              >
                Our Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="btn btn-secondary"
              >
                Get Quote
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl transform rotate-3"></div>
              <img
                src={aboutImage}
                alt="Shree Travels Service"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;