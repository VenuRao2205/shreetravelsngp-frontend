import React, { useState } from "react";
import { CreditCard, Shield, Clock, CheckCircle } from "lucide-react";
import axios from "axios";

const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [payerDetails, setPayerDetails] = useState({
    payerName: '',
    payerEmail: '',
    amount: '',
    remarks: '',
    amountType: 'INR'
  });

  const handleInput = (e) => {
    setPayerDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const { payerName, payerEmail, amount, remarks, amountType } = payerDetails;

    let data = {
      name: payerName,
      email: payerEmail,
      amount: amount * 100,
      remarks,
      currency: amountType,
      merchantUserId: "MUID" + Date.now(),
      merchantTrxnId: "MT" + Date.now(),
    };

    try {
      let res = await axios.post(
        "https://shree-travels-backend.onrender.com/payment",
        { ...data }
      );
      
      if (res.data && res.data.result.data.instrumentResponse.redirectInfo.url) {
        window.location.href = res.data.result.data.instrumentResponse.redirectInfo.url;
      }
    } catch (error) {
      console.error("Payment error:", error);
      setLoading(false);
    }
  };

  const features = [
    {
      icon: Shield,
      title: "Secure Payment",
      description: "Your payment information is encrypted and secure"
    },
    {
      icon: Clock,
      title: "Instant Processing",
      description: "Payments are processed immediately"
    },
    {
      icon: CheckCircle,
      title: "Confirmation",
      description: "Receive instant confirmation via email"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <CreditCard size={16} />
            <span className="text-sm font-medium">Quick Payment</span>
          </div>
          <h1 className="text-white mb-6">Secure Online Payment</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Make quick and secure payments for your transportation services. 
            Fast, reliable, and completely secure payment processing.
          </p>
        </div>
      </section>

      {/* Payment Form */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <div className="card-body">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                    <CreditCard className="text-primary-600" />
                    Payment Details
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="payerName" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="payerName"
                          name="payerName"
                          value={payerDetails.payerName}
                          onChange={handleInput}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="payerEmail" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="payerEmail"
                          name="payerEmail"
                          value={payerDetails.payerEmail}
                          onChange={handleInput}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                          Amount *
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            id="amount"
                            name="amount"
                            value={payerDetails.amount}
                            onChange={handleInput}
                            className="w-full px-4 py-3 pr-16 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                            placeholder="Enter amount"
                            min="1"
                            required
                          />
                          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                            {payerDetails.amountType}
                          </span>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="remarks" className="block text-sm font-medium text-gray-700 mb-2">
                          Remarks
                        </label>
                        <input
                          type="text"
                          id="remarks"
                          name="remarks"
                          value={payerDetails.remarks}
                          onChange={handleInput}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="Payment description (optional)"
                        />
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary btn-lg w-full group"
                      >
                        {loading ? (
                          <div className="flex items-center gap-3">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Processing Payment...
                          </div>
                        ) : (
                          <>
                            Proceed to Payment
                            <CreditCard size={20} className="group-hover:scale-110 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Payment Features */}
            <div className="space-y-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Why Choose Our Payment?</h4>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="p-2 bg-primary-100 rounded-lg">
                          <feature.icon size={20} className="text-primary-600" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-1">{feature.title}</h5>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Payment Methods</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CreditCard size={20} className="text-gray-600" />
                      <span className="text-sm font-medium">Credit/Debit Cards</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-5 h-5 bg-blue-600 rounded"></div>
                      <span className="text-sm font-medium">UPI Payments</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-5 h-5 bg-green-600 rounded"></div>
                      <span className="text-sm font-medium">Net Banking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;