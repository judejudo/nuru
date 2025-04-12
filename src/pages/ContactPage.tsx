// src/pages/ContactPage.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";

// Import Components
import Hero from "../components/contact/Hero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import FaqSection from "../components/contact/FaqSection";
// import MapSection from "../components/contact/MapSection";

const ContactPage = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 12 
      }
    }
  };

  return (
    <motion.div
      className="bg-[rgba(13,13,13,1)] min-h-screen pb-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <Hero />
      
      {/* Contact Information and Form */}
      <div className="max-w-6xl mx-auto px-8 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-1"
            variants={itemVariants}
          >
            <ContactInfo />
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <motion.div variants={itemVariants}>
        <FaqSection />
      </motion.div>
      
      {/* Map Section */}
      <motion.div variants={itemVariants}>
        {/* <MapSection /> */}
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;