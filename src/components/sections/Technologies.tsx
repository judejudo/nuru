import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import wave from "@/assets/technologies/Z-Wave Alliance_idr-SHyQJ8_0.png"
import zed from "@/assets/technologies/idl5Z2fp7B_1743261125046.png"
import freescale from "@/assets/technologies/freescale-semiconductor-seeklogo.png"
import alexa from "@/assets/technologies/alexa-amazon-seeklogo.png"
import wifi from "@/assets/technologies/wifi-seeklogo.png"
import smartthings from  "@/assets/technologies/home_assistant.png"
import bluetooth from "@/assets/technologies/bluetooth-seeklogo.png"
import matter from "@/assets/technologies/matter.png"
import googleHome from "@/assets/technologies/google-home-seeklogo.png"
import wirelessProtocol from "@/assets/technologies/wireless protocol.png"
import homekit from "@/assets/technologies/homekit.png"


export const Technologies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);
  
  // Sample logo array - in production you would dynamically import these from assets/technologies
  // This is a placeholder that would be replaced with your actual logos
  const logos = [
    wave,
    homekit,
    freescale,
    googleHome,
    wirelessProtocol,
    alexa,
    zed,
    wifi,
    smartthings,
    bluetooth,
    matter

  ];
  
  useEffect(() => {
    setIsVisible(true);
    
    // Optional: Intersection Observer for scroll-based animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('technologies-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        delayChildren: 0.3
      }
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 20
      }
    }
  };

  return (
    <section 
      id="technologies-section"
      className="bg-[rgba(13,13,13,1)] flex flex-col items-center py-20 px-4 overflow-hidden"
    >
      <motion.div 
        className="w-full max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-12"
          variants={titleVariants}
        >
          <motion.div 
            className="flex items-center justify-center gap-2 text-lg text-[rgba(208,255,0,1)]"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="w-6 h-6 rounded-full bg-[rgba(22,22,22,1)] border border-[rgba(38,38,38,1)] flex items-center justify-center"
              whileHover={{ borderColor: "rgba(208,255,0,0.5)" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="rgba(208,255,0,1)" strokeWidth="2"/>
                <path d="M12 6V18M6 12H18" stroke="rgba(208,255,0,1)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </motion.div>
            <span>Our Technology Partners</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl font-medium text-[rgba(204,204,204,1)] mt-4"
            animate={{ 
              color: ["rgba(204,204,204,1)", "rgba(230,230,230,1)", "rgba(204,204,204,1)"]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Powered by Leading Technologies
          </motion.h2>
          <p className="text-[rgba(122,122,122,1)] max-w-2xl mx-auto mt-4">
            We collaborate with industry leaders to deliver cutting-edge AIoT solutions for your smart home needs
          </p>
        </motion.div>
        
        {/* Carousel Container */}
        <div className="w-full overflow-hidden">
          <motion.div
            ref={carouselRef}
            className="flex gap-6 py-8"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
                repeatDelay: 0
              }
            }}
            style={{ width: "fit-content" }}
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <motion.div
                key={`logo-${index}`}
                className="flex-shrink-0 w-48 h-48 flex items-center justify-center bg-[rgba(18,18,18,0.9)] rounded-xl overflow-hidden border border-[rgba(30,30,30,1)]"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                  borderColor: "rgba(38,38,38,1)"
                }}
              >
                <div className="w-32 h-32 relative flex items-center justify-center">
                  <img 
                    src={logo} 
                    alt={`Technology partner ${index + 1}`}
                    className="max-w-full max-h-full object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
            
            {/* Duplicate logos to ensure seamless looping */}
            {logos.map((logo, index) => (
              <motion.div
                key={`logo-dup-${index}`}
                className="flex-shrink-0 w-48 h-48 flex items-center justify-center bg-[rgba(18,18,18,0.9)] rounded-xl overflow-hidden border border-[rgba(30,30,30,1)]"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                  borderColor: "rgba(38,38,38,1)"
                }}
              >
                <div className="w-32 h-32 relative flex items-center justify-center">
                  <img 
                    src={logo} 
                    alt={`Technology partner ${index + 1}`}
                    className="max-w-full max-h-full object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Additional feature: Pause on hover */}
        {/* <motion.div 
          className="flex justify-center mt-8 text-[rgba(122,122,122,1)] text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span>* Hover over a logo to pause the carousel</span>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Technologies;