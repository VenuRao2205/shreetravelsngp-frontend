import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Shield, Clock, Users, Star, Award } from "lucide-react";
import heroImage from "../../images/night.webp";

const Hero = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      text: "30+ Years Trusted"
    },
    {
      icon: Clock,
      text: "24/7 Available"
    },
    {
      icon: Users,
      text: "Professional Drivers"
    }
  ];

  const stats = [
    { number: "30+", label: "Years Experience" },
    { number: "10K+", label: "Happy Customers" },
    { number: "24/7", label: "Support Available" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/90 via-secondary-800/70 to-primary-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/50 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary-400/30 rounded-full blur-lg animate-bounce" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white py-20">
        <div className="max-w-5xl mx-auto">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in-down">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-accent-400 fill-current" />
              ))}
            </div>
            <span className="text-sm font-semibold">Premium Transportation Since 1994</span>
            <Award size={16} className="text-accent-400" />
          </div>

          {/* Main Heading */}
          <h1 className="text-white mb-8 animate-fade-in-up">
            Your Journey,
            <br />
            <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400 bg-clip-text text-transparent">
              Our Excellence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl text-secondary-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
            Experience premium corporate transportation with three decades of unmatched service. 
            <span className="text-primary-300 font-medium"> Professional drivers, luxury vehicles, absolute reliability.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => navigate("/contact")}
              className="btn btn-primary btn-xl group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Book Your Ride
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            <button
              onClick={() => navigate("/payment")}
              className="btn btn-secondary btn-xl group bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-secondary-900"
            >
              <span className="flex items-center gap-3">
                Quick Payment
                <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
              </span>
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 text-secondary-200 group">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 group-hover:bg-primary-500/20 transition-all duration-300">
                  <feature.icon size={24} className="text-primary-300 group-hover:text-primary-200 transition-colors duration-300" />
                </div>
                <span className="font-semibold text-lg">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 group-hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl font-bold text-primary-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-secondary-300 font-medium">{stat.label}</div>
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

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  );
};

export default Hero;