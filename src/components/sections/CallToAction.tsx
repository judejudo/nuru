import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EmailInput } from "../ui/EmailInput";

export const CallToAction = () => {
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

    const section = document.getElementById("cta-section");
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
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        delay: 0.4,
      },
    },
  };

  const shadowPulse = {
    initial: {
      boxShadow: "0px 0px 0px rgba(208,255,0,0)",
    },
    animate: {
      boxShadow: [
        "0px 0px 0px rgba(208,255,0,0)",
        "0px 0px 30px rgba(208,255,0,0.15)",
        "0px 0px 0px rgba(208,255,0,0)",
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const bgPatternVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.05,
      transition: { duration: 1.5, delay: 0.5 },
    },
  };

  return (
    <section
      id="cta-section"
      className="bg-[rgba(13,13,13,1)] flex w-full flex-col overflow-hidden items-center pt-24 pb-16 px-20 max-md:max-w-full max-md:pt-16 max-md:px-5 relative"
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute left-0 top-0 w-full h-full overflow-hidden opacity-0"
        variants={bgPatternVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div
          className="absolute left-8 top-16 w-32 h-32 rounded-full border border-[rgba(208,255,0,0.2)] opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute right-16 bottom-16 w-48 h-48 rounded-full border border-[rgba(208,255,0,0.15)] opacity-15"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute left-1/4 bottom-8 w-24 h-24 rounded-full border border-[rgba(208,255,0,0.1)] opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </motion.div>

      <motion.div
        className="flex w-[1060px] max-w-full flex-col overflow-hidden items-center justify-center px-20 py-16 rounded-3xl max-md:px-5 relative"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        initial={shadowPulse.initial}
        animate={shadowPulse.animate}
      >
        {/* Background gradient for the CTA box */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[rgba(22,22,22,0.9)] to-[rgba(15,15,15,0.9)] rounded-3xl border border-[rgba(38,38,38,0.8)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Subtle animated accent line at the top */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 h-1 bg-[rgba(208,255,0,0.7)] rounded-b-lg"
          initial={{ width: "0%" }}
          animate={{ width: "40%" }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        />

        <div className="flex w-[605px] max-w-full flex-col items-center relative z-10">
          <motion.h2
            className="text-[rgba(204,204,204,1)] text-[54px] font-medium leading-[1.2] tracking-[-1.62px] text-center self-stretch max-md:max-w-full max-md:text-[40px]"
            variants={titleVariants}
          >
            <motion.span
              initial={{ color: "rgba(204,204,204,1)" }}
              animate={{
                color: [
                  "rgba(204,204,204,1)",
                  "rgba(235,235,235,1)",
                  "rgba(204,204,204,1)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Elevate the way you live
            </motion.span>
          </motion.h2>

          <motion.div
            className="text-[rgba(204,204,204,1)] text-[54px] font-medium leading-[1.2] tracking-[-1.62px] text-center mt-[19px] max-md:max-w-full max-md:text-[40px]"
            variants={titleVariants}
          >
            <motion.span
              initial={{ color: "rgba(204,204,204,1)" }}
              animate={{
                color: [
                  "rgba(204,204,204,1)",
                  "rgba(208,255,0,0.9)",
                  "rgba(204,204,204,1)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              using our designs
            </motion.span>
          </motion.div>

          <motion.div className="mt-12 w-full flex justify-center" variants={itemVariants}>
            {/* EmailInput component wrapped in motion div for animations */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full flex justify-center"
            >
              <EmailInput />
            </motion.div>
          </motion.div>

          {/* Benefits list */}
          <motion.div
            className="flex justify-center gap-8 mt-10 w-full"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                className="w-5 h-5 rounded-full bg-[rgba(208,255,0,0.8)] mr-2 flex items-center justify-center"
                whileHover={{ backgroundColor: "rgba(208,255,0,1)" }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="rgba(13,13,13,1)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              <span className="text-[rgba(180,180,180,1)] text-sm">
                Personalized Design
              </span>
            </motion.div>

            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                className="w-5 h-5 rounded-full bg-[rgba(208,255,0,0.8)] mr-2 flex items-center justify-center"
                whileHover={{ backgroundColor: "rgba(208,255,0,1)" }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="rgba(13,13,13,1)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              <span className="text-[rgba(180,180,180,1)] text-sm">
                Premium Support
              </span>
            </motion.div>
          </motion.div>

          {/* Subtle trust indicator */}
          <motion.div
            className="mt-12 text-center text-[rgba(122,122,122,1)] text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Trusted by 2,500+ homeowners and 100+ smart home partners worldwide
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;