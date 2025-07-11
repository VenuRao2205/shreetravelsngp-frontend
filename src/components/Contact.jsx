import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import pricing from "../images/pricing.webp";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    number: "",
    query: "", // eslint-disable-line no-unused-vars
  });
  const [error, setError] = useState(false);
  const [show, setShow] = useState({ isVisible: false, message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, number, query } = contact;

    if (!name || !email || !number) {
      setError(true);
      return;
    }

    setError(false);
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setShow({ isVisible: true, message: "Thank you! Your query has been submitted successfully." });
      setContact({ name: "", email: "", number: "", query: "" });

      setTimeout(() => {
        setShow({ isVisible: false, message: "" });
      }, 3000);
    } catch (error) {
      setShow({ isVisible: true, message: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setContact((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Plot No. 1066, Near Law College Square, Gorepeth, Nagpur- 440010"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9822236802"
    },
    {
      icon: Mail,
      title: "Email",
      content: "shreetravelsngp@yahoo.com"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Sat: 10:00 AM - 10:00 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container text-center">
          <h1 className="text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Ready to experience premium transportation services? Contact us today 
            for a customized quote or to discuss your transportation needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card">
              <div className="card-body">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Send Your Query</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contact.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        error && !contact.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contact.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        error && !contact.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      id="number"
                      name="number"
                      value={contact.number}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        error && !contact.number ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your contact number"
                    />
                  </div>

                  <div>
                    <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Query
                    </label>
                    <textarea
                      id="query"
                      name="query"
                      value={contact.query}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Tell us about your transportation requirements..."
                    />
                  </div>

                  {error && (
                    <div className="text-red-600 text-sm">
                      Please fill all the required fields!
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary w-full group"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {show.isVisible && (
                    <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                      <CheckCircle size={20} />
                      <span>{show.message}</span>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card">
                <div className="card-body">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="p-3 bg-primary-100 rounded-lg">
                          <info.icon size={24} className="text-primary-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                          <p className="text-gray-600">{info.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing Image */}
              <div className="card">
                <div className="card-body">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Pricing</h3>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={pricing}
                      alt="Pricing Information"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    * Prices are subject to change based on fuel costs and market conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;