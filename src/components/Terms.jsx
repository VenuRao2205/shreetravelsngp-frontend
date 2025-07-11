import React from "react";
import { FileText, CreditCard, Shield, AlertCircle } from "lucide-react";

const Terms = () => {
  const terms = [
    {
      id: 1,
      content: "The customer shall pay the car rental fare as per the applicable rates and payment schedules mentioned on the website of Shree Travels at the time of booking. The customer shall also pay parking charges, toll-charges, service tax, state tax and any other fee or levy presently payable or imposed hereinafter under applicable law/s for availing the car rental services."
    },
    {
      id: 2,
      content: "The payment has to be transferred to the Shree Travels account for the transaction to be completed. The client will have the responsibility to confirm the transaction with Shree Travels and send all relevant details and proof to confirm the same."
    },
    {
      id: 3,
      content: "The billing shall be done after the completion of the transaction and the bill shall be sent through email. The client shall pay the amount communicated on email through the payment gateway and shall send us the confirmation of the transaction separately through email to shreetravelsngp@yahoo.com."
    },
    {
      id: 4,
      content: "In case of a payment made before the commencement of a booking, the amount shall be treated as advance / part payment and the final amount nett of the advance paid shall be cleared by the client as per the amount intimated to the client on email."
    },
    {
      id: 5,
      content: "The transaction / payment has to be made within the office hours of 0930 to 1900 hrs on a monday to saturday basis excluding public holidays for the vehicle to be dispatched. alternatively, for other hours / days, the client has the option to come to our 24x7 operations office and complete the physical swiping of the credit card and make the payment and confirm the booking."
    },
    {
      id: 6,
      content: "The Customer agrees and acknowledges that the use of the services offered by Shree Travels is at the sole risk of the Customer. Shree Travels disclaims all representations and warranties of any kind, whether express or implied as to condition, suitability, quality, merchantability and fitness of the services offered by Shree Travels. The liability of Shree Travels is excluded to the fullest extent permitted by law."
    },
    {
      id: 7,
      content: "The pricing rates are subject to revision in petroleum product in the future."
    }
  ];

  const getIcon = (id) => {
    switch (id) {
      case 1:
      case 2:
      case 3:
      case 4:
        return CreditCard;
      case 5:
        return AlertCircle;
      case 6:
        return Shield;
      case 7:
        return FileText;
      default:
        return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <FileText size={16} />
            <span className="text-sm font-medium">Terms & Conditions</span>
          </div>
          <h1 className="text-white mb-6">Terms & Conditions</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our services. 
            By booking our services, you agree to be bound by these terms.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            {terms.map((term, index) => {
              const IconComponent = getIcon(term.id);
              return (
                <div key={term.id} className="card">
                  <div className="card-body">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-lg">
                          <IconComponent size={20} className="text-primary-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-primary-600 text-white text-sm font-bold rounded-full">
                            {term.id}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {term.id <= 4 ? 'Payment Terms' : 
                             term.id === 5 ? 'Operating Hours' :
                             term.id === 6 ? 'Liability Disclaimer' : 'Pricing Policy'}
                          </h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {term.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Important Notice */}
          <div className="card mt-12 bg-amber-50 border-amber-200">
            <div className="card-body">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <AlertCircle size={24} className="text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Important Notice</h3>
                  <p className="text-amber-800 leading-relaxed">
                    These terms and conditions are subject to change without prior notice. 
                    It is the customer's responsibility to review these terms periodically. 
                    Continued use of our services after any modifications constitutes acceptance 
                    of the updated terms and conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="card mt-8 bg-primary-50 border-primary-200">
            <div className="card-body text-center">
              <h3 className="text-xl font-bold text-primary-900 mb-3">Questions about our Terms?</h3>
              <p className="text-primary-800 mb-4">
                If you have any questions about these terms and conditions, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:shreetravelsngp@yahoo.com"
                  className="btn btn-primary"
                >
                  Email Us
                </a>
                <a 
                  href="tel:+919822236802"
                  className="btn btn-secondary"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;