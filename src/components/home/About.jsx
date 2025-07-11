import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Award, Users, Shield, Clock } from "lucide-react";
import aboutImage from "../../images/gif.jpeg";

const About = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      icon: Award,
      text: "30+ years of trusted service in Nagpur",
      color: "primary"
    },
    {
      icon: Users,
      text: "Professional and courteous chauffeurs",
      color: "accent"
    },
    {
      icon: Shield,
      text: "Well-maintained fleet of vehicles",
      color: "success"
    },
    {
      icon: CheckCircle,
      text: "Customizable corporate packages",
      color: "primary"
    },
    {
      icon: Clock,
      text: "24/7 customer support",
      color: "accent"
    },
    {
      icon: CheckCircle,
      text: "Competitive and transparent pricing",
      color: "success"
    }
  ];

  const stats = [
    { number: "30+", label: "Years of Excellence", icon: Award },
    { number: "10K+", label: "Happy Customers", icon: Users },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "100%", label: "Satisfaction Rate", icon: Shield }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'primary':
        return 'text-primary-500';
      case 'accent':
        return 'text-accent-500';
      case 'success':
        return 'text-success-500';
      default:
        return 'text-primary-500';
    }
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full blur-3xl opacity-30 -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-accent-100 to-success-100 rounded-full blur-3xl opacity-30 translate-x-1/2"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <Award size={16} />
              <span>About Shree Travels</span>
            </div>
            
            <h2 className="mb-8">
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Excellence.</span> 
              <span className="text-secondary-900"> Reliability. </span>
              <span className="bg-gradient-to-r from-accent-500 to-success-500 bg-clip-text text-transparent">Trust.</span>
            </h2>
            
            <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
              Welcome to Shree Travels, your trusted partner in corporate transportation solutions. 
              With <span className="font-semibold text-primary-600">30 years of excellence</span> in the industry, 
              we specialize in providing reliable, efficient, and comfortable cab services tailored 
              specifically for corporate clients and discerning individuals.
            </p>

            <p className="text-lg text-secondary-600 mb-10 leading-relaxed">
              Our commitment to quality, safety, and customer satisfaction has made us the 
              <span className="font-semibold text-accent-600"> preferred choice for businesses</span> across Nagpur. 
              We don't just provide transportation; we deliver experiences that exceed expectations.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-10">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="p-2 bg-secondary-100 rounded-xl group-hover:bg-primary-100 transition-colors duration-300">
                    <highlight.icon size={20} className={`${getColorClasses(highlight.color)} transition-colors duration-300`} />
                  </div>
                  <span className="text-secondary-700 font-medium leading-relaxed group-hover:text-secondary-900 transition-colors duration-300">
                    {highlight.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/services")}
                className="btn btn-primary btn-lg group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore Services
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="btn btn-outline btn-lg group"
              >
                Get Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Image & Stats */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                  <img
                    src={aboutImage}
                    alt="Shree Travels Premium Service"
                    className="rounded-2xl w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Stats */}
                  <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-bounce" style={{ animationDelay: '1s' }}>
                    <div className="text-2xl font-bold text-primary-600">30+</div>
                    <div className="text-sm text-secondary-600">Years</div>
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-bounce" style={{ animationDelay: '2s' }}>
                    <div className="text-2xl font-bold text-accent-600">10K+</div>
                    <div className="text-sm text-secondary-600">Customers</div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-secondary-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary-100 rounded-lg group-hover:bg-primary-500 transition-colors duration-300">
                        <stat.icon size={20} className="text-primary-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="text-2xl font-bold text-primary-600 group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                    </div>
                    <div className="text-sm text-secondary-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;