import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";
import heroImage from "../../images/night.webp";

const Hero = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      text: "30+ Years Experience"
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white py-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Shield size={16} className="text-primary-400" />
            <span className="text-sm font-medium">Trusted Since 1994</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-white mb-6 animate-fade-in-up">
            Your Comfort,
            <br />
            <span className="text-primary-400">Our Priority</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Experience premium corporate transportation services with 30 years of excellence. 
            Professional drivers, well-maintained vehicles, and unmatched reliability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => navigate("/contact")}
              className="btn btn-primary btn-lg group"
            >
              Request A Ride
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate("/payment")}
              className="btn btn-secondary btn-lg"
            >
              Quick Payment
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-200">
                <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                  <feature.icon size={20} className="text-primary-400" />
                </div>
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;