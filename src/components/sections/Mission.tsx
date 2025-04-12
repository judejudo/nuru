import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Mission = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set visible after component mounts for animations to trigger
    setIsVisible(true);
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2 
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      }
    }
  };
  
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        duration: 0.8 
      }
    }
  };
  
  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };
  
  const headingVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  const cardHoverVariants = {
    rest: { 
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0,0,0,0.1)" 
    },
    hover: { 
      scale: 1.03, 
      boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="bg-[rgba(13,13,13,1)] flex w-full flex-col items-center mt-[211px] pt-12 pb-[74px] px-[70px] max-md:max-w-full max-md:mt-10 max-md:px-5 overflow-hidden">
      <motion.div 
        className="w-full max-w-[1513px] max-md:max-w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <motion.div 
            className="w-[22%] max-md:w-full max-md:ml-0"
            variants={imageVariants}
          >
            <motion.img
              src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/d57aab9992ef5c57f71864fc97a3f2ff01f616c9?placeholderIfAbsent=true"
              alt="Mission illustration"
              className="aspect-[1.22] object-contain w-72 shrink-0 max-w-full self-stretch my-auto max-md:mt-10"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
          </motion.div>
          
          <motion.div 
            className="w-[30%] ml-5 max-md:w-full max-md:ml-0"
            variants={itemVariants}
          >
            <motion.div 
              className="grow overflow-hidden font-normal rounded-[30px] max-md:mt-10"
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
            >
              <div className="flex flex-col relative aspect-[0.949] w-full pt-[21px] pb-[111px] px-[45px] rounded-[30px] max-md:pb-[100px] max-md:px-5 overflow-hidden">
                <motion.div
                  className="absolute h-full w-full inset-0 bg-gradient-to-br from-purple-900/20 to-black/60"
                  animate={{ 
                    background: [
                      "linear-gradient(135deg, rgba(81,41,111,0.2) 0%, rgba(0,0,0,0.6) 100%)",
                      "linear-gradient(135deg, rgba(41,61,111,0.2) 0%, rgba(0,0,0,0.6) 100%)",
                      "linear-gradient(135deg, rgba(41,111,91,0.2) 0%, rgba(0,0,0,0.6) 100%)",
                      "linear-gradient(135deg, rgba(81,41,111,0.2) 0%, rgba(0,0,0,0.6) 100%)"
                    ]
                  }}
                  transition={{ 
                    duration: 15, 
                    ease: "linear", 
                    repeat: Infinity 
                  }}
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/763db52002b8a3d6bfa9e95226e76baf501e7888?placeholderIfAbsent=true"
                  alt="Mission background"
                  className="absolute h-full w-full object-cover inset-0"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
                <motion.h2 
                  className="relative text-[rgba(204,204,204,1)] text-[64px] leading-[0] tracking-[-0.52px] max-md:text-[40px]"
                  variants={headingVariants}
                >
                  <motion.span
                    initial={{ color: "rgba(204,204,204,1)" }}
                    animate={{ 
                      color: [
                        "rgba(204,204,204,1)", 
                        "rgba(241,241,241,1)", 
                        "rgba(204,204,204,1)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Mission
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className="relative text-[rgba(122,122,122,1)] text-2xl leading-[25px] tracking-[-0.18px] mt-[78px] max-md:mt-10 max-md:mb-2.5"
                  variants={textRevealVariants}
                >
                  To make homes smarter, safer, and more energy-efficient by
                  integrating cutting-edge AI and IoT technology into everyday
                  appliances.
                  <br />
                  needs.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-[30%] ml-5 max-md:w-full max-md:ml-0"
            variants={itemVariants}
          >
            <motion.div 
              className="grow overflow-hidden font-normal rounded-[30px] max-md:mt-10"
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
            >
              <div className="flex flex-col relative aspect-[0.949] w-full pt-[21px] pb-[111px] px-[45px] rounded-[30px] max-md:pb-[100px] max-md:px-5 overflow-hidden">
                <motion.div
                  className="absolute h-full w-full inset-0 bg-gradient-to-br from-blue-900/20 to-black/60"
                  animate={{ 
                    background: [
                      "linear-gradient(135deg, rgba(41,61,111,0.2) 0%, rgba(0,0,0,0.6) 100%)",
                      "linear-gradient(135deg, rgba(41,111,91,0.2) 0%, rgba(0,0,0,0.6) 100%)",
                      "linear-gradient(135deg, rgba(81,41,111,0.2) 0%, rgba(0,0,0,0.6) 100%)",
                      "linear-gradient(135deg, rgba(41,61,111,0.2) 0%, rgba(0,0,0,0.6) 100%)"
                    ]
                  }}
                  transition={{ 
                    duration: 15, 
                    ease: "linear", 
                    repeat: Infinity,
                    delay: 5 
                  }}
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/763db52002b8a3d6bfa9e95226e76baf501e7888?placeholderIfAbsent=true"
                  alt="Vision background"
                  className="absolute h-full w-full object-cover inset-0"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
                <motion.h2 
                  className="relative text-[rgba(204,204,204,1)] text-[64px] leading-[0] tracking-[-0.52px] max-md:text-[40px]"
                  variants={headingVariants}
                >
                  <motion.span
                    initial={{ color: "rgba(204,204,204,1)" }}
                    animate={{ 
                      color: [
                        "rgba(204,204,204,1)", 
                        "rgba(241,241,241,1)", 
                        "rgba(204,204,204,1)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  >
                    Vision
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className="relative text-[rgba(122,122,122,1)] text-2xl leading-[25px] tracking-[-0.18px] mt-[78px] max-md:mt-10 max-md:mb-2.5"
                  variants={textRevealVariants}
                >
                  To be a global leader in AIoT innovation, expanding beyond smart living solutions to revolutionize industries such as manufacturing, agriculture, and energy management.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-[18%] ml-5 max-md:w-full max-md:ml-0"
            variants={imageVariants}
          >
            <motion.img
              src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/cc3945f0aebd61803a77c9e359d88c8ef158875d?placeholderIfAbsent=true"
              alt="Additional illustration"
              className="aspect-[0.84] object-contain w-[237px] shrink-0 max-w-full self-stretch my-auto max-md:mt-10"
              whileHover={{ rotate: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Mission;