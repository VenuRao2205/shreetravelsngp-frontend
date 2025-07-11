import React from "react";
import { Shield, Clock, Users, Award, MapPin, Headphones, Star, CheckCircle, Car, Phone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "30+ Years Excellence",
      description: "Three decades of trusted service with an impeccable safety record and thousands of satisfied customers across Nagpur.",
      color: "primary",
      stats: "10,000+ Safe Rides",
      gradient: "from-primary-500 to-primary-600"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock service to meet your transportation needs, whenever and wherever you need us most.",
      color: "accent",
      stats: "Always Available",
      gradient: "from-accent-500 to-accent-600"
    },
    {
      icon: Users,
      title: "Professional Drivers",
      description: "Highly trained, courteous, and experienced chauffeurs committed to your comfort, safety, and satisfaction.",
      color: "success",
      stats: "Verified & Trained",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Award,
      title: "Premium Fleet",
      description: "Well-maintained vehicles from hatchbacks to luxury SUVs, all equipped with modern amenities and GPS tracking.",
      color: "primary",
      stats: "Latest Models",
      gradient: "from-primary-500 to-primary-600"
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Deep knowledge of Nagpur and surrounding areas ensures efficient routes, timely arrivals, and local insights.",
      color: "accent",
      stats: "City Specialists",
      gradient: "from-accent-500 to-accent-600"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated customer support team available around the clock to assist with bookings, changes, and emergencies.",
      color: "success",
      stats: "Instant Response",
      gradient: "from-green-500 to-green-600"
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary-100',
          icon: 'text-primary-600',
          hoverBg: 'group-hover:bg-primary-500',
          hoverIcon: 'group-hover:text-white',
          accent: 'text-primary-600',
          border: 'border-primary-200'
        };
      case 'accent':
        return {
          bg: 'bg-accent-100',
          icon: 'text-accent-600',
          hoverBg: 'group-hover:bg-accent-500',
          hoverIcon: 'group-hover:text-white',
          accent: 'text-accent-600',
          border: 'border-accent-200'
        };
      case 'success':
        return {
          bg: 'bg-success-100',
          icon: 'text-success-600',
          hoverBg: 'group-hover:bg-success-500',
          hoverIcon: 'group-hover:text-white',
          accent: 'text-success-600',
          border: 'border-green-200'
        };
      default:
        return {
          bg: 'bg-primary-100',
          icon: 'text-primary-600',
          hoverBg: 'group-hover:bg-primary-500',
          hoverIcon: 'group-hover:text-white',
          accent: 'text-primary-600',
          border: 'border-primary-200'
        };
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-primary-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-primary-100 text-primary-700 px-8 py-4 rounded-full text-base font-semibold mb-8 animate-fade-in-up">
            <Star size={18} className="text-primary-600" />
            <span>Why Choose Shree Travels</span>
          </div>
          
          <h2 className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Excellence in Every 
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent"> Journey</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We've been setting the standard for corporate transportation in Nagpur for over three decades. 
            Here's what makes us the preferred choice for discerning businesses and individuals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <div 
                key={index} 
                className="card group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up border-0 bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="card-body text-center relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <feature.icon size={128} className="text-gray-400" />
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${colors.bg} rounded-3xl mb-6 ${colors.hoverBg} transition-all duration-300 relative z-10 shadow-lg`}>
                    <feature.icon 
                      size={36} 
                      className={`${colors.icon} ${colors.hoverIcon} transition-all duration-300`} 
                    />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Stats Badge */}
                  <div className={`inline-flex items-center gap-2 ${colors.bg} px-4 py-2 rounded-full ${colors.border} border`}>
                    <CheckCircle size={16} className={colors.icon} />
                    <span className={`text-sm font-semibold ${colors.accent}`}>
                      {feature.stats}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-gray-900 to-primary-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 border border-white rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 border border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Car size={32} className="text-accent-400" />
                <h3 className="text-4xl font-bold">
                  Ready to Experience Premium Transportation?
                </h3>
              </div>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join thousands of satisfied customers who trust Shree Travels for their transportation needs. 
                Experience the difference that 30+ years of excellence makes.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="btn btn-accent btn-lg shadow-xl hover:shadow-2xl">
                  <Car size={20} />
                  Book Your Ride
                </button>
                <button className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-gray-900">
                  <Phone size={20} />
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;