import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
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
    
    const section = document.getElementById('testimonials-section');
    if (section) observer.observe(section);
    
    // Automatic testimonial highlight cycling
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 4000);
    
    return () => {
      if (section) observer.unobserve(section);
      clearInterval(interval);
    };
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  
  const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 60,
        damping: 15,
        delay: i * 0.2
      }
    })
  };
  
  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };
  
  const quoteVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: 0.4
      }
    }
  };
  
  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.6
      }
    }
  };
  
  const testimonialHoverVariants = {
    rest: { 
      scale: 1,
      y: 0,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)"
    },
    hover: { 
      scale: 1.03, 
      y: -8,
      boxShadow: "0px 15px 30px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    active: { 
      scale: 1.05, 
      y: -10,
      boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      id="testimonials-section"
      className="bg-[rgba(13,13,13,1)] flex w-full flex-col overflow-hidden items-center mt-10 sm:mt-14 md:mt-[77px] pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 md:px-10 lg:px-[70px]"
    >
      <motion.div 
        className="w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="flex flex-col md:flex-row gap-5">
          {/* Testimonial 1 */}
          <motion.div 
            className="w-full md:w-1/3"
            variants={testimonialVariants}
            custom={0}
            onMouseEnter={() => setActiveTestimonial(0)}
          >
            <motion.div 
              className="flex grow flex-col items-center text-base sm:text-lg text-[rgba(122,122,122,1)] font-normal text-center tracking-[-0.18px] leading-[22px] sm:leading-[25px] p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-6 md:mb-0"
              variants={testimonialHoverVariants}
              initial="rest"
              animate={activeTestimonial === 0 ? "active" : "rest"}
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-[rgba(22,22,22,0.3)] to-transparent rounded-xl sm:rounded-2xl opacity-0"
                animate={activeTestimonial === 0 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              
              <motion.img
                src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/96221b775c39c3bc200182f9d5d5d4b120943a47?placeholderIfAbsent=true"
                alt="Company logo"
                className="aspect-[3.37] object-contain w-[90px] sm:w-[111px] max-w-full"
                variants={logoVariants}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              />
              
              <motion.p 
                className="self-stretch mt-2 sm:mt-[13px] relative"
                variants={quoteVariants}
              >
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={activeTestimonial === 0 ? 
                    { color: "rgba(180,180,180,1)" } : 
                    { color: "rgba(122,122,122,1)" }
                  }
                  transition={{ duration: 0.5 }}
                >
                  "Creative, innovative and strategic. NuruForge has helped us
                  transform our living spaces with intelligent automation that
                  truly enhances daily life."
                </motion.span>
              </motion.p>
              
              <motion.img
                src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/eeb780dbd37c697d797a3b4c29ee56d37211ef4d?placeholderIfAbsent=true"
                alt="Testimonial avatar"
                className="aspect-[5.85] object-contain w-[100px] sm:w-[117px] max-w-full mt-6 sm:mt-[39px]"
                variants={avatarVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 0px 10px rgba(208,255,0,0.3)",
                  transition: { duration: 0.3 }
                }}
              />
              
              <motion.div 
                className="leading-[1.4] mt-2 sm:mt-[11px]"
                animate={activeTestimonial === 0 ? 
                  { color: "rgba(208,255,0,1)" } : 
                  { color: "rgba(122,122,122,1)" }
                }
                transition={{ duration: 0.3 }}
              >
                Henry Arthur
              </motion.div>
              
              <motion.div 
                className="text-[rgba(204,204,204,1)] text-sm sm:text-base mt-1 sm:mt-[9px]"
                animate={activeTestimonial === 0 ? 
                  { opacity: 1 } : 
                  { opacity: 0.8 }
                }
              >
                Head of Engineering, SmartLiving
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div 
            className="w-full md:w-1/3"
            variants={testimonialVariants}
            custom={1}
            onMouseEnter={() => setActiveTestimonial(1)}
          >
            <motion.div 
              className="flex flex-col items-center text-base sm:text-lg text-[rgba(122,122,122,1)] font-normal text-center tracking-[-0.18px] leading-[22px] sm:leading-[25px] p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-6 md:mb-0"
              variants={testimonialHoverVariants}
              initial="rest"
              animate={activeTestimonial === 1 ? "active" : "rest"}
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-[rgba(22,22,22,0.3)] to-transparent rounded-xl sm:rounded-2xl opacity-0"
                animate={activeTestimonial === 1 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              
              <motion.img
                src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/1c44490d729e02977f9e962880a36d27a6c482ef?placeholderIfAbsent=true"
                alt="Company logo"
                className="aspect-[4.27] object-contain w-[120px] sm:w-[141px] max-w-full"
                variants={logoVariants}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              />
              
              <motion.p 
                className="self-stretch mt-2 sm:mt-3 relative"
                variants={quoteVariants}
              >
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={activeTestimonial === 1 ? 
                    { color: "rgba(180,180,180,1)" } : 
                    { color: "rgba(122,122,122,1)" }
                  }
                  transition={{ duration: 0.5 }}
                >
                  "Incredible team of experts and talented professionals. Focused
                  on the development of energy-efficient and secure connected
                  solutions."
                </motion.span>
              </motion.p>
              
              <motion.img
                src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/8228c4388cef68dd9795070ea7b74e474cce2ed7?placeholderIfAbsent=true"
                alt="Testimonial avatar"
                className="aspect-[5.81] object-contain w-[100px] sm:w-[116px] max-w-full mt-6 sm:mt-[39px]"
                variants={avatarVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 0px 10px rgba(208,255,0,0.3)",
                  transition: { duration: 0.3 }
                }}
              />
              
              <motion.div 
                className="leading-[1.4] mt-2 sm:mt-[11px]"
                animate={activeTestimonial === 1 ? 
                  { color: "rgba(208,255,0,1)" } : 
                  { color: "rgba(122,122,122,1)" }
                }
                transition={{ duration: 0.3 }}
              >
                Jerome Bell
              </motion.div>
              
              <motion.div 
                className="text-[rgba(204,204,204,1)] text-sm sm:text-base mt-1 sm:mt-[13px]"
                animate={activeTestimonial === 1 ? 
                  { opacity: 1 } : 
                  { opacity: 0.8 }
                }
              >
                Product Analyst, HomeConnect
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div 
            className="w-full md:w-1/3"
            variants={testimonialVariants}
            custom={2}
            onMouseEnter={() => setActiveTestimonial(2)}
          >
            <motion.div 
              className="flex grow flex-col items-center text-base sm:text-lg text-[rgba(122,122,122,1)] font-normal text-center tracking-[-0.18px] leading-[22px] sm:leading-[25px] p-4 sm:p-6 rounded-xl sm:rounded-2xl"
              variants={testimonialHoverVariants}
              initial="rest"
              animate={activeTestimonial === 2 ? "active" : "rest"}
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-[rgba(22,22,22,0.3)] to-transparent rounded-xl sm:rounded-2xl opacity-0"
                animate={activeTestimonial === 2 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              
              <motion.img
                src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/74fd87bc5b4c28a5d4ba230f91f551ab8970d190?placeholderIfAbsent=true"
                alt="Company logo"
                className="aspect-[3.94] object-contain w-[110px] sm:w-[134px] max-w-full"
                variants={logoVariants}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              />
              
              <motion.p 
                className="self-stretch mt-3 sm:mt-[25px] relative"
                variants={quoteVariants}
              >
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={activeTestimonial === 2 ? 
                    { color: "rgba(180,180,180,1)" } : 
                    { color: "rgba(122,122,122,1)" }
                  }
                  transition={{ duration: 0.5 }}
                >
                  "A truly innovative approach to AIoT integration that sets this
                  company apart from its peers within the smart home industry"
                </motion.span>
              </motion.p>
              
              <motion.img
                src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/62ebc5bb0ae7968af2bbf8893de01b12a348e358?placeholderIfAbsent=true"
                alt="Testimonial avatar"
                className="aspect-[5.85] object-contain w-[100px] sm:w-[117px] max-w-full mt-6 sm:mt-[47px]"
                variants={avatarVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 0px 10px rgba(208,255,0,0.3)",
                  transition: { duration: 0.3 }
                }}
              />
              
              <motion.div 
                className="leading-[1.4] mt-2 sm:mt-[11px]"
                animate={activeTestimonial === 2 ? 
                  { color: "rgba(208,255,0,1)" } : 
                  { color: "rgba(122,122,122,1)" }
                }
                transition={{ duration: 0.3 }}
              >
                Eleanor Pena
              </motion.div>
              
              <motion.div 
                className="text-[rgba(204,204,204,1)] text-sm sm:text-base w-full sm:w-[280px] mt-1 sm:mt-3"
                animate={activeTestimonial === 2 ? 
                  { opacity: 1 } : 
                  { opacity: 0.8 }
                }
              >
                Head of Product Design, FutureHomes
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Testimonial Navigation Dots */}
        <motion.div 
          className="flex justify-center mt-6 sm:mt-8 gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.button
              key={index}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-neutral-800"
              animate={{ 
                backgroundColor: activeTestimonial === index ? 
                  "rgba(208,255,0,1)" : 
                  "rgba(38,38,38,1)",
                scale: activeTestimonial === index ? 1.2 : 1
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveTestimonial(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;