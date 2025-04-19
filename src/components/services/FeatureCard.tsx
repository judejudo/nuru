import React, { useState } from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  imageSrc: string;
  imageAlt: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  imageSrc,
  imageAlt,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Card animation variants
  const cardVariants = {
    initial: { 
      y: 20, 
      opacity: 0 
    },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12
      }
    },
    hover: { 
      y: -8,
      boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 20 
      }
    }
  };

  // Image animation variants
  const imageVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      }
    }
  };

  // Title bar animation variants
  const titleBarVariants = {
    initial: { 
      backgroundColor: "rgba(22, 22, 22, 1)",
      borderColor: "rgba(38, 38, 38, 1)"
    },
    hover: { 
      backgroundColor: "rgba(28, 28, 28, 1)",
      borderColor: "rgba(208, 255, 0, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  // Icon animation variants
  const iconVariants = {
    initial: { rotate: 0 },
    hover: { 
      rotate: [0, -10, 10, 0],
      transition: { 
        duration: 0.6, 
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 1]
      }
    }
  };

  // Text animation variants
  const textVariants = {
    initial: { color: "rgba(122, 122, 122, 1)" },
    hover: { 
      color: "rgba(160, 160, 160, 1)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      className="flex flex-col bg-[linear-gradient(180deg,#1E1E1E_0%,#141414_100%)] border border-neutral-800 p-3 md:p-5 rounded-[20px] md:rounded-[30px] overflow-hidden h-full"
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Animated background gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(208,255,0,0.03)] opacity-0 rounded-[20px] md:rounded-[30px]"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Title bar with icon */}
      <motion.div 
        className="flex items-center bg-[#161616] border border-neutral-800 gap-2 md:gap-3 p-3 md:p-4 rounded-[10px] md:rounded-[14px] relative z-10"
        variants={titleBarVariants}
      >
        <motion.div 
          variants={iconVariants}
          dangerouslySetInnerHTML={{ __html: icon }} 
          className="w-5 md:w-auto"
        />
        <motion.div 
          className="text-[#7A7A7A] text-base md:text-lg font-normal leading-[22px] md:leading-[25.2px] tracking-[-0.18px]"
          variants={textVariants}
        >
          {title}
        </motion.div>
      </motion.div>

      {/* Image container with animation */}
      <div className="relative overflow-hidden rounded-[20px] md:rounded-[30px] my-[15px] md:my-[20px] h-[140px] md:h-[195px]">
        <motion.img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover rounded-[20px] md:rounded-[30px]"
          variants={imageVariants}
        />
        {/* Overlay gradient on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent opacity-0"
          animate={{ opacity: isHovered ? 0.6 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Description text */}
      <motion.div 
        className="text-[#7A7A7A] text-center text-lg md:text-2xl font-normal leading-[22px] md:leading-[25.2px] tracking-[-0.18px] relative z-10 flex-grow"
        variants={textVariants}
      >
        {description}
      </motion.div>

      {/* Accent line at bottom */}
      <motion.div 
        className="h-[2px] md:h-[3px] w-0 bg-[rgba(208,255,0,0.3)] rounded-full mt-3 md:mt-4 mx-auto"
        animate={{ width: isHovered ? '40%' : '0%' }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default FeatureCard;