import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import ctaImage from "../../images/wall-dark.webp";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ctaImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white mb-6">
            Ready to Experience
            <br />
            <span className="text-primary-400">Premium Transportation?</span>
          </h2>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule a customized demo to understand how we can help you optimize 
            your office transportation and enhance your employee commute experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => navigate("/contact")}
              className="btn btn-primary btn-lg group"
            >
              Request A Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => window.location.href = 'tel:+919822236802'}
              className="btn btn-secondary btn-lg group"
            >
              <Phone size={20} />
              Call Now
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">30+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">1000+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;