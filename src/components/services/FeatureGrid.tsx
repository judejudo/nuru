import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";

const featureData = [
  {
    title: "Smart Sensors",
    description:
      "Including motion, temperature, humidity, and waterleak sensors for improved home automation and safety.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef1dc0abcd3f2398f0e903bea5bdcc2fe85960eb",
    imageAlt: "Smart sensors illustration",
    icon: `<svg id="1:4565" layer-name="SVG" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[25px] h-[25px]"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2.73389 12.81C2.73389 7.20059 7.28076 2.65372 12.8901 2.65372C18.4995 2.65372 23.0464 7.20059 23.0464 12.81C23.0464 18.4193 18.4995 22.9662 12.8901 22.9662C7.28076 22.9662 2.73389 18.4193 2.73389 12.81ZM8.98389 10.2704C8.98389 9.51622 9.59639 8.90372 10.3516 8.90372H15.4287C16.1839 8.90372 16.7964 9.51622 16.7964 10.2714V15.3485C16.7964 16.1037 16.1839 16.7162 15.4287 16.7162H10.3526C10.173 16.7164 9.99508 16.6811 9.82908 16.6124C9.66308 16.5437 9.51225 16.443 9.38522 16.3159C9.25818 16.1889 9.15744 16.0381 9.08876 15.8721C9.02007 15.7061 8.98479 15.5282 8.98493 15.3485V10.2725L8.98389 10.2704Z" fill="#D0FF00"></path> </svg>`,
  },
  {
    title: "Home Automation",
    description:
      "Hubs and Controllers – Devices and software that centralize control of all smart home systems, ensuring seamless integration",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/61be04c0bcf14e5af11f85f5d377d0be36f781a2",
    imageAlt: "Home automation interface",
    icon: `<svg id="1:4592" layer-name="SVG" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[25px] h-[25px]"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2.73389 12.81C2.73389 7.20059 7.28076 2.65372 12.8901 2.65372C18.4995 2.65372 23.0464 7.20059 23.0464 12.81C23.0464 18.4193 18.4995 22.9662 12.8901 22.9662C7.28076 22.9662 2.73389 18.4193 2.73389 12.81ZM8.98389 10.2704C8.98389 9.51622 9.59639 8.90372 10.3516 8.90372H15.4287C16.1839 8.90372 16.7964 9.51622 16.7964 10.2714V15.3485C16.7964 16.1037 16.1839 16.7162 15.4287 16.7162H10.3526C10.173 16.7164 9.99508 16.6811 9.82908 16.6124C9.66308 16.5437 9.51225 16.443 9.38522 16.3159C9.25818 16.1889 9.15744 16.0381 9.08876 15.8721C9.02007 15.7061 8.98479 15.5282 8.98493 15.3485V10.2725L8.98389 10.2704Z" fill="#D0FF00"></path> </svg>`,
  },
  {
    title: "Smart Cleaning",
    description:
      "Featuring robot vacuums and other automated cleaning devices to simplify household maintenance.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3aec267c34f2c67c0cf2292b501bc08f86d08aa",
    imageAlt: "Robot vacuum cleaner",
    icon: `<svg id="1:4574" layer-name="SVG" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[25px] h-[25px]"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2.73389 12.81C2.73389 7.20062 7.28076 2.65375 12.8901 2.65375C18.4995 2.65375 23.0464 7.20062 23.0464 12.81C23.0464 18.4194 18.4995 22.9662 12.8901 22.9662C7.28076 22.9662 2.73389 18.4194 2.73389 12.81ZM8.98389 10.2704C8.98389 9.51625 9.59639 8.90375 10.3516 8.90375H15.4287C16.1839 8.90375 16.7964 9.51625 16.7964 10.2715V15.3485C16.7964 16.1037 16.1839 16.7162 15.4287 16.7162H10.3526C10.173 16.7164 9.99508 16.6811 9.82908 16.6124C9.66308 16.5437 9.51225 16.443 9.38522 16.316C9.25818 16.1889 9.15744 16.0381 9.08876 15.8721C9.02007 15.7061 8.98479 15.5282 8.98493 15.3485V10.2725L8.98389 10.2704Z" fill="#D0FF00"></path> </svg>`,
  },
  {
    title: "Smart Energy",
    description:
      "Including smart plugs, energy monitors, and solar panel integration to track and optimize power usage.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e404562a702956030c2cd024ba111daae94a22b6",
    imageAlt: "Smart energy monitoring",
    icon: `<svg id="1:4601" layer-name="SVG" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[25px] h-[25px]"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2.73389 12.81C2.73389 7.20062 7.28076 2.65375 12.8901 2.65375C18.4995 2.65375 23.0464 7.20062 23.0464 12.81C23.0464 18.4194 18.4995 22.9662 12.8901 22.9662C7.28076 22.9662 2.73389 18.4194 2.73389 12.81ZM8.98389 10.2704C8.98389 9.51625 9.59639 8.90375 10.3516 8.90375H15.4287C16.1839 8.90375 16.7964 9.51625 16.7964 10.2715V15.3485C16.7964 16.1037 16.1839 16.7162 15.4287 16.7162H10.3526C10.173 16.7164 9.99508 16.6811 9.82908 16.6124C9.66308 16.5437 9.51225 16.443 9.38522 16.316C9.25818 16.1889 9.15744 16.0381 9.08876 15.8721C9.02007 15.7061 8.98479 15.5282 8.98493 15.3485V10.2725L8.98389 10.2704Z" fill="#D0FF00"></path> </svg>`,
  },
];

export const FeatureGrid: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set visible when component mounts
    setIsVisible(true);
    
    // Optional: Use Intersection Observer for scroll-based animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('feature-grid-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Grid container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  // Individual grid item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 12,
        delay: index * 0.1 // Staggered delay based on index
      }
    })
  };

  return (
    <section id="feature-grid-section" className="relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[rgba(208,255,0,0.02)] blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 0.5 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div 
        className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-[rgba(208,255,0,0.01)] blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 0.4 : 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
      
      {/* Section header with animations */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2 
          className="text-4xl sm:text-5xl font-medium text-[rgba(204,204,204,1)]"
          animate={{ 
            color: ["rgba(204,204,204,1)", "rgba(230,230,230,1)", "rgba(204,204,204,1)"]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >

        </motion.h2>
        <motion.p 
          className="text-[rgba(122,122,122,1)] max-w-2xl mx-auto mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          
        </motion.p>
      </motion.div>
      
      {/* Feature grid with staggered animations and equal height cards */}
      <motion.div 
        className="grid grid-cols-4 gap-5 px-[60px] max-md:grid-cols-2 max-md:px-[30px] max-sm:grid-cols-1 max-sm:px-5"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {featureData.map((feature, index) => (
          <motion.div
            key={index}
            className="h-full" // Ensure wrapper has full height
            variants={itemVariants}
            custom={index}
          >
            <FeatureCard
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
              icon={feature.icon}
            />
          </motion.div>
        ))}
      </motion.div>
      

    </section>
  );
};

export default FeatureGrid;