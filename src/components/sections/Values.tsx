import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import green from "@/assets/icons/green-technology.png";
import security from "@/assets/icons/security.png";
import design from "@/assets/icons/design.png";
import reliability from "@/assets/icons/shield.png";

const ValueCard = ({ title, description, icon, custom }) => {
  // Simplified animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.1 }
    }
  };

  return (
    <motion.div
      className="flex-1 min-w-[280px] m-2"
      variants={cardVariants}
      custom={custom}
    >
      <motion.div 
        className="border border-neutral-800 rounded-[20px] p-6 h-full"
        whileHover={{ 
          y: -5, 
          boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
          borderColor: "rgba(208,255,0,0.3)"
        }}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3 border border-neutral-800 rounded-[14px] p-3">
            <motion.img
              src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/7e5339524f09ff37814ba185517b9051b74f7977?placeholderIfAbsent=true"
              alt={`${title} icon`}
              className="w-6 h-6 object-contain"
              whileHover={{ rotate: [0, 10, -10, 0], transition: { duration: 0.5 } }}
            />
            <motion.div 
              className="text-lg text-[rgba(122,122,122,1)]"
              whileHover={{ color: "rgba(208,255,0,1)" }}
            >
              {title}
            </motion.div>
          </div>
          <motion.img
            src={icon}
            alt={`${title} illustration`}
            className="w-16 h-16 object-contain rounded-full"
            whileHover={{ scale: 1.1 }}
          />
        </div>
        <p className="text-xl leading-6 text-[rgba(122,122,122,1)] mt-6">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export const Values = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("values-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const valueCards = [
    {
      title: "Reliability",
      description: "We prioritize high-quality, durable solutions that our customers can depend on for seamless automation.",
      icon: reliability,
      custom: 1
    },
    {
      title: "Sustainability",
      description: "We are committed to energy-efficient solutions that reduce environmental impact and promote responsible resource management.",
      icon: green,
      custom: 2
    },
    {
      title: "Customer-Design",
      description: "We design intuitive, future-ready technology that enhances efficiency and improves everyday life.",
      icon: design,
      custom: 3
    },
    {
      title: "Security & Privacy",
      description: "Our AIoT solutions are built with strong security protocols to protect user data and ensure safe device interactions.",
      icon: security,
      custom: 4
    }
  ];

  return (
    <section
      id="values-section"
      className="bg-[#0d0d0d] py-16 px-4 sm:px-8 lg:px-16 w-full"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Title Section */}
        <motion.div 
          className="text-center mb-12"
          variants={titleVariants}
        >
          <div className="flex items-center justify-center gap-2 text-lg text-[rgba(208,255,0,1)] mb-4">
            <motion.img
              src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/e70032a469838839b8099a09b3aa4a833bcdc451?placeholderIfAbsent=true"
              alt="Values icon"
              className="w-6 h-6 object-contain"
              animate={{
                rotate: [0, 5, -5, 0],
                transition: { duration: 2, repeat: Infinity, repeatDelay: 3 }
              }}
            />
            <span>what we believe in</span>
          </div>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            <motion.span
              initial={{ color: "white" }}
              animate={{
                color: [
                  "rgba(255,255,255,1)",
                  "rgba(208,255,0,0.9)",
                  "rgba(255,255,255,1)"
                ]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              OUR VALUES
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Cards Grid - Responsive layout */}
        <div className="flex flex-wrap justify-center">
          {valueCards.map((card) => (
            <ValueCard
              key={card.title}
              title={card.title}
              description={card.description}
              icon={card.icon}
              custom={card.custom}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Values;