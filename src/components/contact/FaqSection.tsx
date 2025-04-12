// src/components/contact/FaqSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

// FAQ data
const faqItems = [
  {
    question: "How long does shipping take?",
    answer:
      "We ship all orders within 1-2 business days. Standard shipping typically takes 3-5 business days to arrive. Expedited shipping options are available at checkout for faster delivery."
  },
  {
    question: "Do you offer installation services?",
    answer:
      "Yes, we offer professional installation services for all our smart home products. You can add installation during checkout or contact our customer support team to schedule a service."
  },
  {
    question: "Are your products compatible with other smart home systems?",
    answer:
      "Most of our products are designed to work with major smart home ecosystems including Amazon Alexa, Google Home, Apple HomeKit, and Samsung SmartThings. Specific compatibility information is listed on each product page."
  },
  {
    question: "What is your warranty policy?",
    answer:
      "All of our products come with a standard 1-year manufacturer's warranty that covers defects in materials and workmanship. Premium products may include extended warranty options. Check individual product pages for specific warranty information."
  },
  {
    question: "How secure are your smart home devices?",
    answer:
      "Security is our top priority. All our devices use industry-standard encryption protocols, regular security updates, and two-factor authentication where applicable. Our cloud services are protected with enterprise-grade security measures."
  },
  {
    question: "Do you offer bulk pricing for businesses?",
    answer:
      "Yes, we offer special pricing for business customers and smart home installation professionals. Please contact our sales team at business@nuruforge.com for more information about our business partnerships and volume discounts."
  }
];

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-8 mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-[rgba(122,122,122,1)]">
          Find quick answers to common questions about our products and
          services
        </p>
      </div>

      <div className="space-y-4">
        {faqItems.map((faq, index) => (
          <div
            key={index}
            className="bg-[rgba(22,22,22,1)] border border-[rgba(38,38,38,1)] rounded-xl overflow-hidden"
          >
            <button
              className="flex justify-between items-center w-full px-6 py-4 text-left"
              onClick={() => toggleFaq(index)}
            >
              <span className="text-[rgba(204,204,204,1)] font-medium">
                {faq.question}
              </span>
              <motion.svg
                  className="w-5 h-5 text-[rgba(208,255,0,1)]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  animate={{ rotate: openFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              </button>

              {openFaq === index && (
                <motion.div
                  className="px-6 pb-4"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[rgba(122,122,122,1)]">{faq.answer}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
};

export default FaqSection;