import React from "react";
import { useNavigate } from "react-router-dom";
import { Car, Users, Clock, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Car,
      title: "Corporate Car Rental",
      description: "Professional transportation solutions for businesses with flexible hourly, daily, and monthly packages.",
      features: ["Hatchback to SUV options", "Professional chauffeurs", "Flexible packages"]
    },
    {
      icon: Users,
      title: "Employee Transportation",
      description: "Reliable daily commute solutions for your workforce with customized routes and schedules.",
      features: ["Daily commute service", "Customized routes", "Group transportation"]
    },
    {
      icon: Clock,
      title: "Airport Transfers",
      description: "Punctual and comfortable airport pickup and drop services for business travelers.",
      features: ["24/7 availability", "Flight tracking", "Meet & greet service"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Our <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive transportation solutions designed to meet all your corporate travel needs 
            with reliability, comfort, and professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card group hover:shadow-2xl transition-all duration-300"
            >
              <div className="card-body">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                  <service.icon 
                    size={32} 
                    className="text-primary-600 group-hover:text-white transition-colors duration-300" 
                  />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate("/services")}
            className="btn btn-primary btn-lg group"
          >
            View All Services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;