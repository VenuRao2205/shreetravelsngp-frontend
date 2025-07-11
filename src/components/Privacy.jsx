import React from "react";
import { Shield, Eye, Lock, FileText } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      icon: Eye,
      title: "What we collect",
      content: [
        "Name and contact information",
        "Contact information including email address, mobile number and permanent address proof",
        "Demographic information such as postcode, preferences and interests",
        "Other information relevant to customer surveys and/or offers",
        "Identity proof (for security reasons)"
      ]
    },
    {
      icon: FileText,
      title: "Pricing Policy",
      content: [
        "Shree Travels and the User consider the pricing section inside contact us section for booking.",
        "The pricing are subject to change in future based on market conditions and fuel costs."
      ]
    },
    {
      icon: Lock,
      title: "Security",
      content: [
        "We are committed to ensuring that your information is secure.",
        "We have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.",
        "All payment transactions are encrypted and processed through secure payment gateways."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Shield size={16} />
            <span className="text-sm font-medium">Privacy Policy</span>
          </div>
          <h1 className="text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="card mb-8">
            <div className="card-body">
              <p className="text-lg text-gray-700 leading-relaxed">
                Shree Travels is committed to ensuring that your privacy is protected. 
                Should we ask you to provide certain information by which you can be 
                identified when using this website, then you can be assured that it will 
                only be used in accordance with this privacy statement. Shree Travels 
                may change this policy from time to time by updating this page. You 
                should check this page from time to time to ensure that you are happy 
                with any changes. This policy is effective from 16th of May, 2024.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="card">
                <div className="card-body">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <section.icon size={24} className="text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Links to other websites */}
          <div className="card mt-8">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <FileText size={24} className="text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Links to other websites</h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to other websites of interest. However, 
                once you have used these links to leave our site, you should note that 
                we do not have any control over that other website. Therefore, we cannot 
                be responsible for the protection and privacy of any information which 
                you provide whilst visiting such sites and such sites are not governed 
                by this privacy statement. You should exercise caution and look at the 
                privacy statement applicable to the website in question.
              </p>
            </div>
          </div>

          {/* General Note */}
          <div className="card mt-8 bg-primary-50 border-primary-200">
            <div className="card-body">
              <p className="text-primary-800 leading-relaxed">
                <strong>Note:</strong> In general, you can visit our website without telling us who you are or 
                revealing any personal information about yourself. We only collect information 
                when you voluntarily provide it to us through our contact forms or booking services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;