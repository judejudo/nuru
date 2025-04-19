import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set visible after component mounts for animations to trigger
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
    
    const section = document.getElementById('how-it-works-section');
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.6
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
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
  
  const titleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay: i * 0.2 + 0.5 
      }
    })
  };
  
  const iconVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -10 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 150, 
        damping: 13 
      }
    }
  };
  
  const cardHoverVariants = {
    rest: { 
      scale: 1,
      y: 0,
      boxShadow: "0px 0px 0px rgba(0,0,0,0.1)",
      borderColor: "rgba(38,38,38,1)"
    },
    hover: { 
      scale: 1.03, 
      y: -5,
      boxShadow: "0px 15px 25px rgba(0,0,0,0.2)",
      borderColor: "rgba(208,255,0,0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };
  
  const textGlowVariants = {
    rest: {
      textShadow: "0px 0px 0px rgba(208,255,0,0)"
    },
    hover: {
      textShadow: "0px 0px 8px rgba(208,255,0,0.3)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section 
      id="how-it-works-section"
      className="bg-[rgba(13,13,13,1)] flex w-full flex-col items-center justify-center mt-36 px-6 sm:px-10 md:px-20 py-16 sm:py-20 md:py-24 max-w-full max-md:mt-10 overflow-hidden"
    >
      <motion.div 
        className="flex w-full max-w-[1280px] flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div 
          className="flex w-full max-w-[159px] items-stretch gap-[9px] text-lg text-[rgba(208,255,0,1)] font-normal tracking-[-0.18px] leading-[1.4]"
          variants={itemVariants}
        >
          <motion.img
            src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/d919a27d37896d14c89ba84df0eaf5cb175b4ea2?placeholderIfAbsent=true"
            alt="How it works icon"
            className="aspect-[1.22] object-contain w-11 shrink-0"
            variants={iconVariants}
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          />
          <motion.div 
            className="grow shrink w-[97px] my-auto"
            whileHover={{ 
              color: "rgba(220,255,80,1)",
              scale: 1.05,
              transition: { duration: 0.2 } 
            }}
          >
            How it works
          </motion.div>
        </motion.div>
        
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-[44px] font-normal leading-tight sm:leading-[1.2] md:leading-[53px] tracking-[-1px] md:tracking-[-1.32px] text-center mt-5 md:mt-[19px] max-w-full px-4"
          variants={titleVariants}
        >
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ 
              color: ["rgba(204,204,204,1)", "rgba(230,230,230,1)", "rgba(204,204,204,1)"]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            "Top-notch smart home solutions, delivered at your doorstep."
          </motion.span>
        </motion.h2>
        
        <div className="self-stretch mt-12 sm:mt-14 md:mt-[61px] w-full">
          <div className="gap-4 sm:gap-5 flex flex-col sm:flex-row flex-wrap justify-center">
            {/* Card 1 */}
            <motion.div 
              className="w-full sm:w-[48%] md:w-[32%]"
              variants={cardVariants}
              custom={0}
            >
              <motion.div 
                className="bg-[rgba(22,22,22,1)] grow font-normal w-full rounded-3xl overflow-hidden h-full"
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                animate={isVisible ? "rest" : "hidden"}
              >
                <motion.div 
                  className="border-neutral-800 border flex flex-col p-6 sm:p-7 md:pl-8 md:pr-8 md:py-[43px] rounded-3xl border-solid relative h-full"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[rgba(30,30,30,0.3)] to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.img
                    src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/dd91d38e47fac750bb5081c6481dfaa14edc2f04?placeholderIfAbsent=true"
                    alt="Vision icon"
                    className="aspect-[1] object-contain w-20 sm:w-24 md:w-[100px] max-w-full relative z-10"
                    variants={iconVariants}
                    whileHover={{ 
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  />
                  
                  <motion.h3 
                    className="text-[rgba(204,204,204,1)] text-xl sm:text-2xl md:text-[26px] leading-[1.2] tracking-[-0.52px] mt-8 sm:mt-10 md:mt-[62px] relative z-10"
                    variants={textGlowVariants}
                    whileHover="hover"
                  >
                    Tell us your vision
                  </motion.h3>
                  
                  <motion.p 
                    className="text-[rgba(122,122,122,1)] text-base sm:text-lg leading-[1.5] sm:leading-[25px] tracking-[-0.18px] mt-4 md:mt-[23px] relative z-10"
                    whileHover={{ color: "rgba(150,150,150,1)" }}
                  >
                    "Choose a plan and share your smart home project details
                    with us: we're here to listen."
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="w-full sm:w-[48%] md:w-[32%] mt-4 sm:mt-0"
              variants={cardVariants}
              custom={1}
            >
              <motion.div 
                className="bg-[rgba(22,22,22,1)] grow font-normal w-full rounded-3xl overflow-hidden h-full"
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                animate={isVisible ? "rest" : "hidden"}
              >
                <motion.div 
                  className="border-neutral-800 border flex flex-col p-6 sm:p-7 md:px-8 md:py-12 rounded-3xl border-solid relative h-full"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[rgba(30,30,30,0.3)] to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.img
                    src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/a1832d97db4333897e0aef9d54048391e983f32f?placeholderIfAbsent=true"
                    alt="Innovation icon"
                    className="aspect-[1] object-contain w-20 sm:w-24 md:w-[100px] max-w-full relative z-10"
                    variants={iconVariants}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 300, damping: 10 }
                    }}
                  />
                  
                  <motion.h3 
                    className="text-[rgba(204,204,204,1)] text-xl sm:text-2xl md:text-[26px] leading-[1.2] tracking-[-0.52px] mt-8 sm:mt-10 md:mt-[61px] relative z-10"
                    variants={textGlowVariants}
                    whileHover="hover"
                  >
                    "Receive the innovation"
                  </motion.h3>
                  
                  <motion.p 
                    className="text-[rgba(122,122,122,1)] text-base sm:text-lg leading-[1.5] sm:leading-[25px] tracking-[-0.18px] self-stretch mt-4 md:mt-[15px] relative z-10"
                    whileHover={{ color: "rgba(150,150,150,1)" }}
                  >
                    "Sit back while our expert AIoT designers bring your
                    connected home to reality."
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="w-full sm:w-[48%] md:w-[32%] mt-4 md:mt-0"
              variants={cardVariants}
              custom={2}
            >
              <motion.div 
                className="bg-[rgba(22,22,22,1)] grow font-normal w-full rounded-3xl overflow-hidden h-full"
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                animate={isVisible ? "rest" : "hidden"}
              >
                <motion.div 
                  className="border-neutral-800 border flex flex-col p-6 sm:p-7 md:pl-8 md:pr-8 md:py-[41px] rounded-3xl border-solid relative h-full"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[rgba(30,30,30,0.3)] to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.img
                    src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/f4b362048335b8f5b46276f4584b2936d317e12b?placeholderIfAbsent=true"
                    alt="Support icon"
                    className="aspect-[1] object-contain w-20 sm:w-24 md:w-[100px] max-w-full relative z-10"
                    variants={iconVariants}
                    whileHover={{ 
                      rotate: [0, 10, -10, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                  />
                  
                  <motion.h3 
                    className="text-[rgba(204,204,204,1)] text-xl sm:text-2xl md:text-[26px] leading-[1.2] tracking-[-0.52px] mt-8 sm:mt-10 md:mt-[62px] relative z-10"
                    variants={textGlowVariants}
                    whileHover="hover"
                  >
                    Get ongoing support
                  </motion.h3>
                  
                  <motion.p 
                    className="text-[rgba(122,122,122,1)] text-base sm:text-lg leading-[1.5] sm:leading-[25px] tracking-[-0.18px] mt-4 md:mt-[21px] relative z-10"
                    whileHover={{ color: "rgba(150,150,150,1)" }}
                  >
                    "Your subscription ensures you have continuous access to our
                    smart home technology team."
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;