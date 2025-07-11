import React from "react";
import { XCircle, RefreshCw, Clock, AlertTriangle } from "lucide-react";

const Cancellation = () => {
  const cancellationRules = [
    {
      icon: Clock,
      title: "24-Hour Cancellation Policy",
      content: "The customer agrees and acknowledges that refund shall be processed if the cancellation request is received before 24 hour of scheduled pickup. (Refer point 3 for special cases)"
    },
    {
      icon: RefreshCw,
      title: "Cancellation Process",
      content: "The Cancellation can be done over the phone or by email. All cancellation to be made against the booking ID provided at the time of booking the cab."
    },
    {
      icon: XCircle,
      title: "Special Occasions",
      content: "No cancellations are entertained in any case for those products/Service that Shree travels marketing team has obtained on special occasions like Dussehra, Pongal, Diwali, New year etc. These are limited occasion offers and therefore cancellations are not possible."
    },
    {
      icon: AlertTriangle,
      title: "Force Majeure",
      content: "Shree travels will not be responsible for any cancellation/delay of service in case of any natural calamity, agitation, Strike or Road Jam/traffic etc. Hence no refund would be made."
    }
  ];

  const additionalPolicies = [
    "The customer agrees and acknowledges that no refund shall be processed if the cancellation request is received within 24 hours of scheduled pickup.",
    "Shree travels might change driver & cab details prior to boarding the taxi in case of vehicle breakdown or other genuine reasons at Driver's end. No Cancellation request shall be entertained in such cases.",
    "Shree travels reserves the right to cancel/change the booking of vehicle at any point of time."
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <RefreshCw size={16} />
            <span className="text-sm font-medium">Cancellation Policy</span>
          </div>
          <h1 className="text-white mb-6">Cancellation & Return Policy</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Please review our cancellation and refund policies carefully before making a booking. 
            These policies are designed to ensure fair treatment for all parties involved.
          </p>
        </div>
      </section>

      {/* Main Policies */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {cancellationRules.map((rule, index) => (
              <div key={index} className="card">
                <div className="card-body">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <rule.icon size={24} className="text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{rule.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{rule.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Policies */}
          <div className="card mb-8">
            <div className="card-body">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Cancellation Terms</h3>
              <div className="space-y-4">
                {additionalPolicies.map((policy, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-600 text-sm font-bold">{index + 5}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{policy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Refund Policy */}
          <div className="card bg-green-50 border-green-200">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <RefreshCw size={24} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-900">Refund Policy</h3>
              </div>
              <p className="text-green-800 leading-relaxed mb-4">
                If you are eligible for refunds based on the <strong>"Cancellation and Returns"</strong> policy above, 
                then the refund will be remitted back to you in 5-7 working days.
              </p>
              <div className="bg-green-100 rounded-lg p-4">
                <p className="text-green-800 font-medium">
                  In case of any issues, write to us at{" "}
                  <a href="mailto:shreetravelsngp@yahoo.com" className="text-green-600 hover:text-green-700 underline">
                    shreetravelsngp@yahoo.com
                  </a>{" "}
                  or call us at{" "}
                  <a href="tel:+919822236802" className="text-green-600 hover:text-green-700 underline">
                    +91 9822236802
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact for Cancellations */}
          <div className="card mt-8 bg-primary-50 border-primary-200">
            <div className="card-body text-center">
              <h3 className="text-xl font-bold text-primary-900 mb-3">Need to Cancel Your Booking?</h3>
              <p className="text-primary-800 mb-6">
                Contact us immediately with your booking ID to process your cancellation request.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:shreetravelsngp@yahoo.com"
                  className="btn btn-primary"
                >
                  Email Cancellation
                </a>
                <a 
                  href="tel:+919822236802"
                  className="btn btn-secondary"
                >
                  Call for Cancellation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cancellation;