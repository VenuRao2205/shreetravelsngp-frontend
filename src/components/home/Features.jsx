import React from "react";
import { Shield, Clock, Users, Award, MapPin, Headphones, Star, CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "30+ Years Excellence",
      description: "Three decades of trusted service with an impeccable safety record and thousands of satisfied customers.",
      color: "primary",
      stats: "10,000+ Safe Rides"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock service to meet your transportation needs, whenever and wherever you need us.",
      color: "accent",
      stats: "Always Available"
    },
    {
      icon: Users,
      title: "Professional Drivers",
      description: "Highly trained, courteous, and experienced chauffeurs committed to your comfort and safety.",
      color: "success",
      stats: "Verified & Trained"
    },
    {
      icon: Award,
      title: "Premium Fleet",
      description: "Well-maintained vehicles from hatchbacks to luxury SUVs, all equipped with modern amenities.",
      color: "primary",
      stats: "Latest Models"
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Deep knowledge of Nagpur and surrounding areas ensures efficient routes and timely arrivals.",
      color: "accent",
      stats: "City Specialists"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated customer support team available around the clock to assist with your travel needs.",
      color: "success",
      stats: "Instant Response"
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
          accent: 'text-primary-600'
        };
      case 'accent':
        return {
          bg: 'bg-accent-100',
          icon: 'text-accent-600',
          hoverBg: 'group-hover:bg-accent-500',
          hoverIcon: 'group-hover:text-white',
          accent: 'text-accent-600'
        };
      case 'success':
        return {
          bg: 'bg-success-100',
          icon: 'text-success-600',
          hoverBg: 'group-hover:bg-success-500',
          hoverIcon: 'group-hover:text-white',
          accent: 'text-success-600'
        };
      default:
        return {
          bg: 'bg-primary-100',
          icon: 'text-primary-600',
          hoverBg: 'group-hover:bg-primary-500',
          hoverIcon: 'group-hover:text-white',
          accent: 'text-primary-600'
        };
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
            <Star size={16} className="text-primary-600" />
            <span>Why Choose Us</span>
          </div>
          
          <h2 className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Excellence in Every 
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent"> Journey</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We've been setting the standard for corporate transportation in Nagpur for over three decades. 
            Here's what makes us the preferred choice for discerning businesses and individuals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <div 
                key={index} 
                className="card group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="card-body text-center relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <feature.icon size={128} className="text-secondary-400" />
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${colors.bg} rounded-3xl mb-6 ${colors.hoverBg} transition-all duration-300 relative z-10`}>
                    <feature.icon 
                      size={36} 
                      className={`${colors.icon} ${colors.hoverIcon} transition-all duration-300`} 
                    />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Stats Badge */}
                  <div className={`inline-flex items-center gap-2 ${colors.bg} px-4 py-2 rounded-full`}>
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
          <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 border border-white rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 border border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Experience Premium Transportation?
              </h3>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust Shree Travels for their transportation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn btn-secondary btn-lg bg-white text-primary-600 hover:bg-primary-50">
                  Get Started Today
                </button>
                <button className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary-600">
                  Learn More
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