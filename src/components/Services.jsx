import React from "react";
import { Car, Users, Clock, Shield, Award, Headphones } from "lucide-react";
import car1 from '../images/car1.webp';
import car2 from '../images/car2.webp';
import car3 from '../images/car3.webp';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Corporate Car Rental",
      description: "Professional transportation solutions for businesses with flexible packages.",
      features: [
        "Hourly, daily, and monthly rental options",
        "Hatchback to luxury SUV fleet",
        "Professional chauffeurs",
        "Competitive pricing"
      ]
    },
    {
      icon: Users,
      title: "Employee Transportation",
      description: "Reliable daily commute solutions for your workforce.",
      features: [
        "Customized route planning",
        "Group transportation services",
        "Regular schedule maintenance",
        "Cost-effective packages"
      ]
    },
    {
      icon: Clock,
      title: "Airport Transfers",
      description: "Punctual airport pickup and drop services for business travelers.",
      features: [
        "24/7 availability",
        "Flight tracking service",
        "Meet and greet service",
        "Luggage assistance"
      ]
    },
    {
      icon: Shield,
      title: "Executive Travel",
      description: "Premium transportation for executives and VIP clients.",
      features: [
        "Luxury vehicle options",
        "Experienced chauffeurs",
        "Confidentiality assured",
        "Flexible scheduling"
      ]
    },
    {
      icon: Award,
      title: "Event Transportation",
      description: "Specialized transportation for corporate events and conferences.",
      features: [
        "Group coordination",
        "Multiple vehicle deployment",
        "Event schedule synchronization",
        "Dedicated support team"
      ]
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your transportation needs.",
      features: [
        "Emergency assistance",
        "Real-time tracking",
        "Booking modifications",
        "Customer care hotline"
      ]
    }
  ];

  const vehicleTypes = [
    {
      image: car1,
      title: "Hatchback",
      description: "Perfect for city rides and short distances",
      capacity: "4 passengers",
      features: ["AC", "GPS", "Professional Driver"]
    },
    {
      image: car2,
      title: "Sedan",
      description: "Comfortable for business meetings and airport transfers",
      capacity: "4 passengers",
      features: ["AC", "GPS", "Professional Driver", "Spacious"]
    },
    {
      image: car3,
      title: "SUV",
      description: "Ideal for group travel and executive transportation",
      capacity: "6-7 passengers",
      features: ["AC", "GPS", "Professional Driver", "Premium Comfort"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container text-center">
          <h1 className="text-white mb-6">
            Corporate Car Rental Services
            <br />
            <span className="text-primary-200">In Nagpur</span>
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            We are the best Corporate Car Rental service provider in Nagpur for the last 30 years. 
            We offer comprehensive car rental services to various industries including IT, BPO, KPO, 
            and other corporate offices.
          </p>
        </div>
      </section>

      {/* Vehicle Fleet */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our <span className="text-primary-600">Vehicle Fleet</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our well-maintained fleet of vehicles, all equipped with modern amenities 
              and driven by professional chauffeurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicleTypes.map((vehicle, index) => (
              <div key={index} className="card group">
                <div className="overflow-hidden rounded-t-xl">
                  <img
                    src={vehicle.image}
                    alt={vehicle.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="card-body">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {vehicle.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{vehicle.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <Users size={16} className="text-primary-500" />
                    <span className="text-sm font-medium text-gray-700">{vehicle.capacity}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our <span className="text-primary-600">Services</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive transportation solutions designed to meet all your corporate needs 
              with reliability, comfort, and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group">
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

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8">
              Why Choose <span className="text-primary-600">Shree Travels?</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Shree Travels holds the top-notch position in corporate car rental service in Nagpur 
                  for large and small organizations. We are one of the best Corporate car rental service 
                  providers in Nagpur with pocket-friendly, reasonable, and competitive charges.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our cars are well maintained and come with professionally trained chauffeurs who 
                  prioritize your safety, comfort, and punctuality above everything else.
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Shree Travels provides a one-stop professional Corporate car rental service for all 
                  your travel needs. We offer best-in-class various kinds of packages for corporate 
                  including hourly, daily, and monthly rentals.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  We also have the liberty to choose from best-in-class well maintained all kinds of 
                  cars ranging from Hatchback, Sedan, and SUV's for your Corporate car rentals requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;