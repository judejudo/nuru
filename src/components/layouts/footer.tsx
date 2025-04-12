import React, { useState, useEffect } from 'react';
import { Instagram, Twitter, Youtube, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const [glowing, setGlowing] = useState(false);
  
  // Animation effect for the brand name
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowing(prev => !prev);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Brand Name with animation */}
        <div className="flex justify-center mb-10 font-sansDoto overflow-hidden">
          <h1 
            className={`text-6xl md:text-7xl lg:text-8xl font-extralight tracking-widest text-white 
              ${glowing ? 'scale-105 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]' : 'text-gray-100'} 
              transition-all duration-1000 ease-in-out`}
          >
            NURUFORGE
          </h1>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Two-column layout for small screens, single row for larger screens */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            {/* Social Media Icons - Now with hover animations */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-0">
              <a href="https://instagram.com/nuruforge" className="group transform hover:scale-110 transition-transform duration-300">
                <div className="bg-gray-900 p-3 rounded-full group-hover:bg-gray-800 transition-colors shadow-lg">
                  <Instagram size={20} className="text-gray-300 group-hover:text-white transition-colors" />
                </div>
              </a>
              
              <a href="https://tiktok.com/@nuruforge" className="group transform hover:scale-110 transition-transform duration-300">
                <div className="bg-gray-900 p-3 rounded-full group-hover:bg-gray-800 transition-colors shadow-lg">
                  <svg 
                    viewBox="0 0 24 24" 
                    width="20" 
                    height="20" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-gray-300 group-hover:text-white transition-colors"
                  >
                    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
                    <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                    <path d="M15 8v8a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h8"/>
                  </svg>
                </div>
              </a>
              
              <a href="https://twitter.com/nuruforge" className="group transform hover:scale-110 transition-transform duration-300">
                <div className="bg-gray-900 p-3 rounded-full group-hover:bg-gray-800 transition-colors shadow-lg">
                  <Twitter size={20} className="text-gray-300 group-hover:text-white transition-colors" />
                </div>
              </a>
              
              <a href="https://youtube.com/@nuruforge" className="group transform hover:scale-110 transition-transform duration-300">
                <div className="bg-gray-900 p-3 rounded-full group-hover:bg-gray-800 transition-colors shadow-lg">
                  <Youtube size={20} className="text-gray-300 group-hover:text-white transition-colors" />
                </div>
              </a>
              
              <a href="https://threads.net/@nuruforge" className="group transform hover:scale-110 transition-transform duration-300">
                <div className="bg-gray-900 p-3 rounded-full group-hover:bg-gray-800 transition-colors shadow-lg">
                  {/* Custom Threads icon */}
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-gray-300 group-hover:text-white transition-colors"
                  >
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/>
                    <path d="M12 6v12"/>
                    <path d="M6 12h12"/>
                  </svg>
                </div>
              </a>
              
              <a href="https://t.me/nuruforge" className="group transform hover:scale-110 transition-transform duration-300">
                <div className="bg-gray-900 p-3 rounded-full group-hover:bg-gray-800 transition-colors shadow-lg">
                  {/* Custom Telegram icon */}
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-gray-300 group-hover:text-white transition-colors"
                  >
                    <path d="M21.5 4.5L2.5 12.5l5 2 10-7-7 9 2 5 5-14"/>
                  </svg>
                </div>
              </a>
              
              <a href="https://linkedin.com/company/nuruforge" className="group transform hover:scale-110 transition-transform duration-300">
                <div className="bg-gray-900 p-3 rounded-full group-hover:bg-gray-800 transition-colors shadow-lg">
                  <Linkedin size={20} className="text-gray-300 group-hover:text-white transition-colors" />
                </div>
              </a>
              
              <a href="https://facebook.com/nuruforge" className="group transform hover:scale-110 transition-transform duration-300">
                <div className="bg-gray-900 p-3 rounded-full group-hover:bg-gray-800 transition-colors shadow-lg">
                  <Facebook size={20} className="text-gray-300 group-hover:text-white transition-colors" />
                </div>
              </a>
            </div>
            
            {/* Footer Links - Now with animated underlines */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/contact" className="relative group text-gray-400 hover:text-white font-medium transition-colors">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="/privacy" className="relative group text-gray-400 hover:text-white font-medium transition-colors">
                Privacy & Cookie Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="/terms" className="relative group text-gray-400 hover:text-white font-medium transition-colors">
                Terms & Conditions
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
          
          {/* Copyright with fade-in animation */}
          <div className="text-center text-gray-500 text-sm pt-4 border-t border-gray-800">
            <p className="animate-pulse">© {new Date().getFullYear()} NURUFORGE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;