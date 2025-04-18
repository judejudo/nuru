import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import green from '@/assets/icons/green-technology.png';
import security from '@/assets/icons/security.png';
import design from '@/assets/icons/design.png';
// Assuming we have a reliability icon - you'll need to import the actual icon
import reliability from '@/assets/icons/shield.png';


export const Values = () => {
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
    
    const section = document.getElementById('values-section');
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
        duration: 0.8
      }
    }
  };
  
  const titleSectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10,
        delay: 0.2
      }
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.5
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 70,
        damping: 14,
        delay: i * 0.2 + 0.3
      }
    })
  };
  
  const topCardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 70,
        damping: 14,
        delay: 0.2
      }
    }
  };
  
  const iconBoxVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };
  
  const cardHoverVariants = {
    rest: { 
      borderColor: "rgba(38,38,38,1)",
      boxShadow: "0px 0px 0px rgba(0,0,0,0)"
    },
    hover: { 
      borderColor: "rgba(208,255,0,0.3)",
      boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };
  
  const iconHoverVariants = {
    rest: { 
      scale: 1,
      backgroundColor: "rgba(22,22,22,1)",
      borderColor: "rgba(38,38,38,1)"
    },
    hover: { 
      scale: 1.03,
      backgroundColor: "rgba(30,30,30,1)",
      borderColor: "rgba(208,255,0,0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };
  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -10 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 14,
        delay: 0.6
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 70,
        damping: 12,
        delay: 0.8
      }
    }
  };

  return (
    <section 
      id="values-section"
      className="bg-[rgba(13,13,13,1)] z-10 flex w-full flex-col items-center -mt-5 pt-24 px-[70px] max-md:max-w-full max-md:px-5 overflow-hidden"
    >
      {/* Mobile-only Header (shows first on mobile) */}
      <div className="hidden max-md:block w-full max-w-[1396px] mb-10">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-lg text-[rgba(208,255,0,1)] leading-[1.4]">
            <motion.img
              src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/e70032a469838839b8099a09b3aa4a833bcdc451?placeholderIfAbsent=true"
              alt="Values icon"
              className="aspect-[1] object-contain w-[25px]"
              animate={{ 
                rotate: [0, 5, -5, 0],
                transition: { duration: 2, repeat: Infinity, repeatDelay: 3 }
              }}
            />
            <div>what we believe in</div>
          </div>
          
          <motion.h2 
            className="text-[40px] leading-none tracking-[-1.32px] text-center mt-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.span
              initial={{ color: "white" }}
              animate={{ 
                color: ["rgba(255,255,255,1)", "rgba(208,255,0,0.9)", "rgba(255,255,255,1)"] 
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              OUR VALUES
            </motion.span>
          </motion.h2>
        </motion.div>
      </div>
  
      {/* Regular desktop and mobile content */}
      <motion.div 
        className="w-full max-w-[1396px] max-md:max-w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Reliability Card - Above OUR VALUES on desktop, below OUR VALUES on mobile */}
        <div className="flex justify-center mb-10 max-md:hidden">
          <motion.div 
            className="w-[33%]"
            variants={topCardVariants}
          >
            <motion.div 
              className="self-stretch overflow-hidden text-[rgba(122,122,122,1)] font-normal tracking-[-0.18px] my-auto rounded-[30px]"
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              animate={isVisible ? "rest" : "hidden"}
            >
              <motion.div 
                className="border-neutral-800 border w-full pl-[15px] pr-[45px] pt-[17px] pb-[120px] rounded-[30px] border-solid max-md:pr-5 max-md:pb-[100px] relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[rgba(30,30,30,0.2)] to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="flex items-stretch gap-5 text-lg whitespace-nowrap leading-[1.4] justify-between relative z-10">
                  <motion.div 
                    variants={iconBoxVariants}
                    whileHover={iconHoverVariants}
                  >
                    <div className="border-neutral-800 border flex items-stretch gap-2 px-5 py-4 rounded-[14px] border-solid">
                      <motion.img
                        src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/7e5339524f09ff37814ba185517b9051b74f7977?placeholderIfAbsent=true"
                        alt="Reliability icon"
                        className="aspect-[1] object-contain w-[25px] shrink-0"
                        whileHover={{ 
                          rotate: [0, 10, -10, 0],
                          transition: { duration: 0.5 }
                        }}
                      />
                      <motion.div 
                        className="grow shrink w-[150px] my-auto"
                        whileHover={{ 
                          color: "rgba(208,255,0,1)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        Reliability
                      </motion.div>
                    </div>
                  </motion.div>
                  <motion.img
                    src={reliability || security} // Fallback to security icon if reliability isn't available
                    alt="Reliability illustration"
                    className="aspect-[1] object-contain w-[81px] shrink-0 rounded-[50%]"
                    variants={imageVariants}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0px 0px 15px rgba(208,255,0,0.2)",
                      transition: { duration: 0.3 }
                    }}
                  />
                </div>
                <motion.p 
                  className="text-2xl leading-[25px] ml-[30px] mr-[25px]  -mb-6 max-md:mt-10 max-md:mb-2.5 max-md:mx-2.5 relative z-10"
                  variants={paragraphVariants}
                  whileHover={{ color: "rgba(150,150,150,1)" }}
                >
                  We prioritize high-quality, durable solutions that our customers
                  can depend on for seamless automation.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
  
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {/* Sustainability Card */}
          <motion.div 
            className="w-[33%] max-md:w-full max-md:ml-0"
            variants={cardVariants}
            custom={0}
          >
            <motion.div 
              className="self-stretch overflow-hidden text-[rgba(122,122,122,1)] font-normal tracking-[-0.18px] my-auto rounded-[30px] max-md:mt-10"
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              animate={isVisible ? "rest" : "hidden"}
            >
              <motion.div 
                className="border-neutral-800 border w-full pl-[15px] pr-[45px] pt-[17px] pb-[120px] rounded-[30px] border-solid max-md:pr-5 max-md:pb-[100px] relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[rgba(30,30,30,0.2)] to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="flex items-stretch gap-5 text-lg whitespace-nowrap leading-[1.4] justify-between relative z-10">
                  <motion.div 
                    variants={iconBoxVariants}
                    whileHover={iconHoverVariants}
                  >
                    <div className="border-neutral-800 border flex items-stretch gap-2 px-5 py-4 rounded-[14px] border-solid">
                      <motion.img
                        src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/7e5339524f09ff37814ba185517b9051b74f7977?placeholderIfAbsent=true"
                        alt="Sustainability icon"
                        className="aspect-[1] object-contain w-[25px] shrink-0"
                        whileHover={{ 
                          rotate: [0, 10, -10, 0],
                          transition: { duration: 0.5 }
                        }}
                      />
                      <motion.div 
                        className="grow shrink w-[150px] my-auto"
                        whileHover={{ 
                          color: "rgba(208,255,0,1)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        Sustainability
                      </motion.div>
                    </div>
                  </motion.div>
                  <motion.img
                    src={green}
                    alt="Sustainability illustration"
                    className="aspect-[1] object-contain w-[81px] shrink-0 rounded-[50%]"
                    variants={imageVariants}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0px 0px 15px rgba(208,255,0,0.2)",
                      transition: { duration: 0.3 }
                    }}
                  />
                </div>
                <motion.p 
                  className="text-2xl leading-[25px] ml-[30px] mr-[25px]  -mb-6 max-md:mt-10 max-md:mb-2.5 max-md:mx-2.5 relative z-10"
                  variants={paragraphVariants}
                  whileHover={{ color: "rgba(150,150,150,1)" }}
                >
                  We are committed to energy-efficient solutions that reduce
                  environmental impact and promote responsible resource
                  management.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
  
          {/* Center Values Section - Hidden on mobile */}
          <motion.div 
            className="w-[33%] ml-5 max-md:hidden"
            variants={cardVariants}
            custom={1}
          >
            <div className="flex w-full flex-col items-stretch font-normal tracking-[-0.18px] max-md:mt-10">
              <motion.div 
                className="self-center flex w-[185px] max-w-full items-stretch gap-2 text-lg text-[rgba(208,255,0,1)] leading-[1.4]"
                variants={titleSectionVariants}
              >
                <motion.img
                  src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/e70032a469838839b8099a09b3aa4a833bcdc451?placeholderIfAbsent=true"
                  alt="Values icon"
                  className="aspect-[1] object-contain w-[25px] shrink-0"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 2, repeat: Infinity, repeatDelay: 3 }
                  }}
                />
                <motion.div 
                  className="grow shrink w-[147px] my-auto"
                  whileHover={{ 
                    scale: 1.05,
                    color: "rgba(220,255,80,1)",
                    transition: { duration: 0.2 }
                  }}
                >
                  what we believe in
                </motion.div>
              </motion.div>
              
              <motion.h2 
                className="text-[46px] leading-none tracking-[-1.32px] text-center self-center "
                variants={titleVariants}
                whileHover={{ 
                  scale: 1.03,
                  color: "rgba(220,220,220,1)",
                  textShadow: "0px 0px 10px rgba(255,255,255,0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.span
                  initial={{ color: "white" }}
                  animate={{ 
                    color: ["rgba(255,255,255,1)", "rgba(208,255,0,0.9)", "rgba(255,255,255,1)"] 
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  OUR VALUES
                </motion.span>
              </motion.h2>
              
              <motion.div 
                className="overflow-hidden text-[rgba(122,122,122,1)] mt-[80px] rounded-[30px]"
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                animate={isVisible ? "rest" : "hidden"}
              >
                <motion.div 
                  className="border-neutral-800 border w-full pl-[15px] pr-[42px] pt-3.5 pb-[146px] rounded-[30px] border-solid max-md:pr-5 max-md:pb-[100px] relative"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[rgba(30,30,30,0.2)] to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="flex items-stretch gap-5 text-lg whitespace-nowrap leading-[1.4] justify-between relative z-10">
                    <motion.div 
                      variants={iconBoxVariants}
                      whileHover={iconHoverVariants}
                    >
                      <div className="border-neutral-800 border flex items-stretch gap-3 px-5 py-4 rounded-[14px] border-solid">
                        <motion.img
                          src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/1c241eedb878c53864a6b8b1e433c0ec21aa92ad?placeholderIfAbsent=true"
                          alt="Customer Design icon"
                          className="aspect-[0.84] object-contain w-[21px] shrink-0"
                          whileHover={{ 
                            scale: 1.2,
                            transition: { duration: 0.3 }
                          }}
                        />
                        <motion.div 
                          className="grow shrink w-[147px]"
                          whileHover={{ 
                            color: "rgba(208,255,0,1)",
                            transition: { duration: 0.2 }
                          }}
                        >
                          Customer-Design
                        </motion.div>
                      </div>
                    </motion.div>
                    <motion.img
                      src={design}
                      alt="Customer Design illustration"
                      className="aspect-[1] object-contain w-[81px] shrink-0 rounded-[50%]"
                      variants={imageVariants}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0px 0px 15px rgba(208,255,0,0.2)",
                        transition: { duration: 0.3 }
                      }}
                    />
                  </div>
                  <motion.p 
                    className="text-2xl leading-[25px] mb-[-29px] ml-[30px] mr-5  max-md:mt-10 max-md:mb-2.5 max-md:mx-2.5 relative z-10"
                    variants={paragraphVariants}
                    whileHover={{ color: "rgba(150,150,150,1)" }}
                  >
                    We design intuitive, future-ready technology that enhances
                    efficiency and improves everyday life.
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
  
          {/* Customer-Design Card - Mobile only version */}
          <motion.div 
            className="hidden max-md:block w-full ml-0"
            variants={cardVariants}
            custom={1}
          >
            <motion.div 
              className="self-stretch overflow-hidden text-[rgba(122,122,122,1)] font-normal tracking-[-0.18px] my-auto rounded-[30px] mt-10"
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              animate={isVisible ? "rest" : "hidden"}
            >
              <motion.div 
                className="border-neutral-800 border w-full pl-[15px] pr-[42px] pt-3.5 pb-[120px] rounded-[30px] border-solid max-md:pr-5 max-md:pb-[100px] relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[rgba(30,30,30,0.2)] to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="flex items-stretch gap-5 text-lg whitespace-nowrap leading-[1.4] justify-between relative z-10">
                  <motion.div 
                    className="bg-[rgba(22,22,22,1)] mt-1.5 rounded-[14px]"
                    variants={iconBoxVariants}
                    whileHover={iconHoverVariants}
                  >
                    <div className="border-neutral-800 border flex items-stretch gap-3 px-5 py-4 rounded-[14px] border-solid">
                      <motion.img
                        src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/1c241eedb878c53864a6b8b1e433c0ec21aa92ad?placeholderIfAbsent=true"
                        alt="Customer Design icon"
                        className="aspect-[0.84] object-contain w-[21px] shrink-0"
                        whileHover={{ 
                          scale: 1.2,
                          transition: { duration: 0.3 }
                        }}
                      />
                      <motion.div 
                        className="grow shrink w-[147px]"
                        whileHover={{ 
                          color: "rgba(208,255,0,1)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        Customer-Design
                      </motion.div>
                    </div>
                  </motion.div>
                  <motion.img
                    src={design}
                    alt="Customer Design illustration"
                    className="aspect-[1] object-contain w-[81px] shrink-0 rounded-[50%]"
                    variants={imageVariants}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0px 0px 15px rgba(208,255,0,0.2)",
                      transition: { duration: 0.3 }
                    }}
                  />
                </div>
                <motion.p 
                  className="text-2xl leading-[25px] ml-[30px] mr-5 max-md:mt-10 max-md:mb-2.5 max-md:mx-2.5 relative z-10"
                  variants={paragraphVariants}
                  whileHover={{ color: "rgba(150,150,150,1)" }}
                >
                  We design intuitive, future-ready technology that enhances
                  efficiency and improves everyday life.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
  
          {/* Security Card */}
          <motion.div 
            className="w-[33%] ml-5 max-md:w-full max-md:ml-0"
            variants={cardVariants}
            custom={2}
          >
            <motion.div 
              className="self-stretch overflow-hidden text-[rgba(122,122,122,1)] font-normal tracking-[-0.18px] my-auto rounded-[30px] max-md:mt-10"
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              animate={isVisible ? "rest" : "hidden"}
            >
              <motion.div 
                className="border-neutral-800 border w-full pl-[15px] pr-[45px] pt-5 pb-[137px] rounded-[30px] border-solid max-md:pr-5 max-md:pb-[100px] relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[rgba(30,30,30,0.2)] to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="flex items-stretch gap-5 text-lg leading-[1.4] justify-between relative z-10">
                  <motion.div 
                    variants={iconBoxVariants}
                    whileHover={iconHoverVariants}
                  >
                    <div className="border-neutral-800 border flex items-stretch gap-2 px-5 py-4 rounded-[14px] border-solid">
                      <motion.img
                        src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/7e5339524f09ff37814ba185517b9051b74f7977?placeholderIfAbsent=true"
                        alt="Security icon"
                        className="aspect-[1] object-contain w-[25px] shrink-0"
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 360,
                          transition: { duration: 0.7 }
                        }}
                      />
                      <motion.div 
                        className="grow shrink w-[150px] my-auto"
                        whileHover={{ 
                          color: "rgba(208,255,0,1)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        Security & Privacy
                      </motion.div>
                    </div>
                  </motion.div>
                  <motion.img
                    src={security}
                    alt="Security illustration"
                    className="aspect-[1] object-contain w-[81px] shrink-0 rounded-[50%]"
                    variants={imageVariants}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0px 0px 15px rgba(208,255,0,0.2)",
                      transition: { duration: 0.3 }
                    }}
                  />
                </div>
                <motion.p 
                  className="text-2xl leading-[25px] mb-[-27px] ml-[30px]  max-md:ml-2.5 max-md:mr-[3px] max-md:mt-10 max-md:mb-2.5 relative z-10"
                  variants={paragraphVariants}
                  whileHover={{ color: "rgba(150,150,150,1)" }}
                >
                  Our AIoT solutions are built with strong security protocols to
                  protect user data and ensure safe device interactions.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
  
        {/* Reliability Card - Mobile only version (appears after OUR VALUES) */}
        <motion.div 
          className="hidden max-md:block w-full mt-10"
          variants={cardVariants}
          custom={3}
        >
          <motion.div 
            className="self-stretch overflow-hidden text-[rgba(122,122,122,1)] font-normal tracking-[-0.18px] my-auto rounded-[30px]"
            variants={cardHoverVariants}
            initial="rest"
            whileHover="hover"
            animate={isVisible ? "rest" : "hidden"}
          >
            <motion.div 
              className="border-neutral-800 border w-full pl-[15px] pr-[45px] pt-[17px] pb-[120px] rounded-[30px] border-solid max-md:pr-5 max-md:pb-[100px] relative"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[rgba(30,30,30,0.2)] to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="flex items-stretch gap-5 text-lg whitespace-nowrap leading-[1.4] justify-between relative z-10">
                <motion.div 
                  className="bg-[rgba(22,22,22,1)] rounded-[14px]"
                  variants={iconBoxVariants}
                  whileHover={iconHoverVariants}
                >
                  <div className="border-neutral-800 border flex items-stretch gap-2 px-5 py-4 rounded-[14px] border-solid">
                    <motion.img
                      src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/7e5339524f09ff37814ba185517b9051b74f7977?placeholderIfAbsent=true"
                      alt="Reliability icon"
                      className="aspect-[1] object-contain w-[25px] shrink-0"
                      whileHover={{ 
                        rotate: [0, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                    />
                    <motion.div 
                      className="grow shrink w-[150px] my-auto"
                      whileHover={{ 
                        color: "rgba(208,255,0,1)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      Reliability
                    </motion.div>
                  </div>
                </motion.div>
                <motion.img
                  src={reliability || security} // Fallback to security icon if reliability isn't available
                  alt="Reliability illustration"
                  className="aspect-[1] object-contain w-[81px] shrink-0 rounded-[50%]"
                  variants={imageVariants}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0px 0px 15px rgba(208,255,0,0.2)",
                    transition: { duration: 0.3 }
                  }}
                />
              </div>
              <motion.p 
                className="text-2xl leading-[25px] ml-[30px] mr-[25px]  mb-6 max-md:mt-10 max-md:mb-2.5 max-md:mx-2.5 relative z-10"
                variants={paragraphVariants}
                whileHover={{ color: "rgba(150,150,150,1)" }}
              >
                We prioritize high-quality, durable solutions that our customers
                can depend on for seamless automation.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Values;