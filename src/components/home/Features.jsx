import React from "react";
import { Shield, Clock, Users, Award, MapPin, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "30+ Years Experience",
      description: "Three decades of trusted service in corporate transportation with an impeccable safety record."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock service to meet your transportation needs, whenever and wherever you need us."
    },
    {
      icon: Users,
      title: "Professional Drivers",
      description: "Highly trained, courteous, and experienced chauffeurs committed to your comfort and safety."
    },
    {
      icon: Award,
      title: "Premium Fleet",
      description: "Well-maintained vehicles ranging from hatchbacks to luxury SUVs, all equipped with modern amenities."
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Deep knowledge of Nagpur and surrounding areas ensures efficient routes and timely arrivals."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated customer support team available around the clock to assist with your travel needs."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Why Choose <span className="text-primary-600">Shree Travels</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've been setting the standard for corporate transportation in Nagpur for over three decades. 
            Here's what makes us the preferred choice for businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card group hover:shadow-2xl transition-all duration-300"
            >
              <div className="card-body text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                  <feature.icon 
                    size={32} 
                    className="text-primary-600 group-hover:text-white transition-colors duration-300" 
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;