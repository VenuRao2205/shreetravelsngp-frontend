import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Shield, Clock, Users, Star, Award, Phone } from "lucide-react";
import heroImage from "../../images/night.webp";

const Hero = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      text: "30+ Years Trusted",
      color: "text-accent-400"
    },
    {
      icon: Clock,
      text: "24/7 Available",
      color: "text-primary-400"
    },
    {
      icon: Users,
      text: "Professional Drivers",
      color: "text-accent-400"
    }
  ];

  const stats = [
    { number: "30+", label: "Years Experience", icon: Award },
    { number: "10K+", label: "Happy Customers", icon: Users },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "100%", label: "Satisfaction Rate", icon: Shield }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/85 to-primary-900/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent-400/30 rounded-full blur-lg animate-bounce" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white py-20">
        <div className="max-w-6xl mx-auto">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 mb-12 animate-fade-in-down">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-accent-400 fill-current" />
              ))}
            </div>
            <span className="text-base font-semibold">Premium Transportation Since 1994</span>
            <Award size={18} className="text-accent-400" />
          </div>

          {/* Main Heading */}
          <h1 className="text-white mb-12 animate-fade-in-up leading-tight">
            Your Journey,
            <br />
            <span className="bg-gradient-to-r from-accent-400 via-accent-300 to-primary-400 bg-clip-text text-transparent">
              Our Excellence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl text-gray-200 mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
            Experience premium corporate transportation with three decades of unmatched service excellence. 
            <span className="text-accent-300 font-medium block mt-2">Professional drivers • Luxury vehicles • Absolute reliability</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => navigate("/contact")}
              className="btn btn-primary btn-xl group relative overflow-hidden shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                Book Your Ride Now
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            <button
              onClick={() => window.location.href = 'tel:+919822236802'}
              className="btn btn-accent btn-xl group shadow-2xl"
            >
              <span className="flex items-center gap-3">
                <Phone size={22} />
                Call Now
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </span>
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-12 mb-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 text-gray-200 group">
                <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                  <feature.icon size={28} className={`${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <span className="font-semibold text-xl">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 group-hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center mb-4">
                    <stat.icon size={32} className="text-accent-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-4xl font-bold text-accent-300 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center p-2">
          <div className="w-1 h-4 bg-white/60 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 via-gray-50/50 to-transparent"></div>
    </section>
  );
};

export default Hero;