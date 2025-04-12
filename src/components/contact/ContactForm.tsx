// src/components/contact/ContactForm.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    subscribe: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message should be at least 20 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission with a delay
      setTimeout(() => {
        // In a real app, you would send the data to your server here
        console.log("Form submitted:", formData);
        
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            subscribe: false
          });
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="bg-[rgba(22,22,22,1)] border border-[rgba(38,38,38,1)] mt-[100px] rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">
        Send Us a Message
      </h2>

      {submitSuccess ? (
        <motion.div
          className="bg-[rgba(208,255,0,0.1)] border border-[rgba(208,255,0,0.3)] rounded-lg p-4 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <svg className="w-16 h-16 text-[rgba(208,255,0,1)] mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
          <p className="text-[rgba(204,204,204,0.8)]">
            Thank you for reaching out. Our team will get back to you shortly.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name field */}
            <div>
              <label
                htmlFor="name"
                className="block text-[rgba(204,204,204,1)] mb-2"
              >
                Full Name{" "}
                <span className="text-[rgba(208,255,0,1)]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-[rgba(30,30,30,1)] border ${
                  errors.name
                    ? "border-red-500"
                    : "border-[rgba(38,38,38,1)]"
                } rounded-lg py-3 px-4 text-[rgba(204,204,204,1)] focus:outline-none focus:border-[rgba(208,255,0,0.5)]`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="block text-[rgba(204,204,204,1)] mb-2"
              >
                Email Address{" "}
                <span className="text-[rgba(208,255,0,1)]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-[rgba(30,30,30,1)] border ${
                  errors.email
                    ? "border-red-500"
                    : "border-[rgba(38,38,38,1)]"
                } rounded-lg py-3 px-4 text-[rgba(204,204,204,1)] focus:outline-none focus:border-[rgba(208,255,0,0.5)]`}
                placeholder="email@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-[rgba(204,204,204,1)] mb-2"
              >
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[rgba(30,30,30,1)] border border-[rgba(38,38,38,1)] rounded-lg py-3 px-4 text-[rgba(204,204,204,1)] focus:outline-none focus:border-[rgba(208,255,0,0.5)]"
                placeholder="(123) 456-7890"
              />
            </div>

            {/* Subject field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-[rgba(204,204,204,1)] mb-2"
              >
                Subject{" "}
                <span className="text-[rgba(208,255,0,1)]">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full bg-[rgba(30,30,30,1)] border ${
                  errors.subject
                    ? "border-red-500"
                    : "border-[rgba(38,38,38,1)]"
                } rounded-lg py-3 px-4 text-[rgba(204,204,204,1)] focus:outline-none focus:border-[rgba(208,255,0,0.5)]`}
                placeholder="Product Inquiry"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>
          </div>

          {/* Message field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-[rgba(204,204,204,1)] mb-2"
            >
              Message <span className="text-[rgba(208,255,0,1)]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={`w-full bg-[rgba(30,30,30,1)] border ${
                errors.message
                  ? "border-red-500"
                  : "border-[rgba(38,38,38,1)]"
              } rounded-lg py-3 px-4 text-[rgba(204,204,204,1)] focus:outline-none focus:border-[rgba(208,255,0,0.5)]`}
              placeholder="How can we help you today?"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Newsletter subscription toggle */}
          <div className="mb-8">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
                className="sr-only"
              />
              <div
                className={`relative w-10 h-5 transition rounded-full ${
                  formData.subscribe
                    ? "bg-[rgba(208,255,0,1)]"
                    : "bg-[rgba(38,38,38,1)]"
                }`}
              >
                <div
                  className={`absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition transform ${
                    formData.subscribe ? "translate-x-5" : ""
                  }`}
                ></div>
              </div>
              <span className="ml-3 text-[rgba(204,204,204,1)]">
                Subscribe to our newsletter for product updates and smart
                home tips
              </span>
            </label>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[rgba(208,255,0,0.9)] hover:bg-[rgba(208,255,0,1)] text-black font-medium py-3 rounded-lg transition-colors ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending Message...
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;