import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Phone, Star, Award, Users, Clock } from "lucide-react";
import ctaImage from "../../images/wall-dark.webp";

const CTA = () => {
  const navigate = useNavigate();

  const stats = [
    { number: "30+", label: "Years Experience", icon: Award },
    { number: "10K+", label: "Happy Clients", icon: Users },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "100%", label: "Satisfaction Rate", icon: Star }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ctaImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 mb-8 animate-fade-in-up">
            <Star size={18} className="text-accent-400" />
            <span className="text-base font-semibold">Ready to Get Started?</span>
          </div>

          <h2 className="text-white mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Experience Premium
            <br />
            <span className="text-accent-400">Transportation Today</span>
          </h2>
          
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Schedule a customized consultation to understand how we can optimize 
            your transportation needs and enhance your travel experience with our premium services.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => navigate("/contact")}
              className="btn btn-accent btn-xl group shadow-2xl"
            >
              <span className="flex items-center gap-3">
                Request A Quote
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button
              onClick={() => window.location.href = 'tel:+919822236802'}
              className="btn btn-outline btn-xl group border-white text-white hover:bg-white hover:text-gray-900 shadow-2xl"
            >
              <Phone size={20} />
              Call Now
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 group-hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center mb-3">
                    <stat.icon size={28} className="text-accent-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-accent-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;