import React, { useEffect } from "react";
import { EmailInput } from "@/components/ui/EmailInput";

export const Hero = () => {
  // Add animation classes when component mounts
  useEffect(() => {
    const textElements = document.querySelectorAll('.animate-fade');
    const imageElement = document.querySelector('.animate-slide');
    
    // Stagger the text animations
    textElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('opacity-100', 'translate-y-0');
      }, 300 * index);
    });
    
    // Animate the image
    setTimeout(() => {
      if (imageElement) {
        imageElement.classList.add('opacity-100', 'translate-x-0');
      }
    }, 600);
  }, []);

  return (
    <section className="bg-black flex flex-col md:flex-row rounded-lg max-sm:p-6 max-md:p-10 overflow-hidden">
      <div className="flex flex-col md:flex-row w-full">
        <div className="self-center flex flex-col max-md:max-w-full">
          <div className="bg-black flex max-w-full flex-col pb-[178px] px-20 rounded-[30px] max-md:px-5 max-md:py-[60px] max-md:pb-[80px]">
            <div className="w-[475px] max-w-full -mb-9 max-md:mb-2.5">
              <div className="flex flex-col items-stretch text-lg font-medium text-center tracking-[-2.4px] pl-[17px] max-md:pl-0 max-md:max-w-full">
                <div className="text-[60px] leading-none max-md:max-w-full max-md:text-[40px] max-sm:text-[32px] animate-fade opacity-0 translate-y-4 transition-all duration-700 ease-out">
                  NURUFORGE
                </div>
                <div className="text-3xl leading-loose  max-md:max-w-full max-md:text-[40px] max-sm:text-[28px] max-md:mt-6 max-sm:leading-tight animate-fade opacity-0 translate-y-4 transition-all duration-700 ease-out delay-100">
                  The efficient way
                </div>
                <div className="text-[rgba(125,127,120,1)] font-normal leading-[25px] tracking-[-0.18px]  max-md:max-w-full max-md:mt-10 max-sm:mt-6 animate-fade opacity-0 translate-y-4 transition-all duration-700 ease-out delay-200">
                  Innovative design solutions for technology firms and{" "}
                  <br className="max-sm:hidden" />
                  emerging businesses weary of the typical aesthetic{" "}
                </div>
                <div className="text-[rgba(125,127,120,1)] font-normal leading-[1.4] tracking-[-0.18px] self-center mt-2 animate-fade opacity-0 translate-y-4 transition-all duration-700 ease-out delay-300">
                  methodology. Arriving shortly.
                </div>
              </div>
              <div className="mt-[76px] max-md:mt-10 max-sm:mt-8 animate-fade opacity-0 translate-y-4 transition-all duration-700 ease-out delay-400">
                <EmailInput />
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:flex items-center justify-center max-md:mt-0 max-h-screen hidden sm:block overflow-hidden">
          <img 
            src="/iot.png" 
            alt="IoT Illustration" 
            className="w-[850px] md:h-[600px] max-md:w-full max-md:h-auto object-contain animate-slide opacity-0 translate-x-12 transition-all duration-1000 ease-out" 
          />
        </div>
      </div>
    </section>
  );
};