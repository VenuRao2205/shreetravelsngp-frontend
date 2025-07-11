import React from "react";
import { useNavigate } from "react-router-dom";
import { Car, Users, Clock, ArrowRight, Shield, Award, Headphones, Star, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Car,
      title: "Corporate Car Rental",
      description: "Professional transportation solutions for businesses with flexible hourly, daily, and monthly packages tailored to your specific needs.",
      features: ["Hatchback to SUV options", "Professional chauffeurs", "Flexible packages", "Corporate billing"],
      color: "primary",
      popular: true,
      gradient: "from-primary-500 to-primary-600"
    },
    {
      icon: Users,
      title: "Employee Transportation",
      description: "Reliable daily commute solutions for your workforce with customized routes, schedules, and group transportation services.",
      features: ["Daily commute service", "Customized routes", "Group transportation", "Cost-effective packages"],
      color: "accent",
      popular: false,
      gradient: "from-accent-500 to-accent-600"
    },
    {
      icon: Clock,
      title: "Airport Transfers",
      description: "Punctual and comfortable airport pickup and drop services for business travelers with flight tracking and meet & greet.",
      features: ["24/7 availability", "Flight tracking", "Meet & greet service", "Luggage assistance"],
      color: "success",
      popular: false,
      gradient: "from-green-500 to-green-600"
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: "Executive Travel",
      description: "Premium luxury transportation for executives and VIP clients.",
      color: "primary"
    },
    {
      icon: Award,
      title: "Event Transportation",
      description: "Specialized transportation coordination for corporate events.",
      color: "accent"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your needs.",
      color: "success"
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100 to-accent-100 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-100 to-success-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-primary-100 text-primary-700 px-8 py-4 rounded-full text-base font-semibold mb-8 animate-fade-in-up">
            <Car size={18} />
            <span>Our Premium Services</span>
          </div>
          
          <h2 className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Transportation Solutions
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              Tailored for Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Comprehensive transportation solutions designed to meet all your corporate and personal travel needs 
            with unmatched reliability, comfort, and professionalism.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div 
                key={index} 
                className={`card group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up relative overflow-hidden border-0 bg-white/90 backdrop-blur-sm ${
                  service.popular ? 'ring-2 ring-primary-500 ring-opacity-50 shadow-xl' : ''
                }`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                )}

                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <service.icon size={128} className="text-gray-400" />
                </div>

                <div className="card-body relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${colors.bg} rounded-3xl mb-6 ${colors.hoverBg} transition-all duration-300 shadow-lg ${colors.border} border`}>
                    <service.icon 
                      size={36} 
                      className={`${colors.icon} ${colors.hoverIcon} transition-all duration-300`} 
                    />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm text-gray-600">
                        <CheckCircle size={16} className={colors.icon} />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button 
                    onClick={() => navigate("/services")}
                    className={`w-full btn btn-outline group-hover:bg-gradient-to-r group-hover:${service.gradient} group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-md`}
                  >
                    Learn More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {additionalServices.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div 
                key={index} 
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 group animate-fade-in-up shadow-sm"
                style={{ animationDelay: `${0.6 + 0.1 * index}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 ${colors.bg} rounded-xl ${colors.hoverBg} transition-colors duration-300 shadow-sm ${colors.border} border`}>
                    <service.icon size={24} className={`${colors.icon} ${colors.hoverIcon} transition-colors duration-300`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="bg-gradient-to-r from-gray-900 to-primary-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 border border-white rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 border border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Star size={32} className="text-accent-400" />
                <h3 className="text-4xl font-bold">
                  Ready to Experience Premium Service?
                </h3>
              </div>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover all our transportation solutions and find the perfect service for your needs. 
                Experience the difference that 30+ years of excellence makes.
              </p>
              <button
                onClick={() => navigate("/services")}
                className="btn btn-accent btn-xl group relative overflow-hidden shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-3">
                  View All Services
                  <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-700 to-accent-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;