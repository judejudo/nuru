import React, { useState, useEffect } from 'react';

// Import custom icons
import facebook from "@/assets/icons/facebook.png";
import linkedin from "@/assets/icons/linkedin.png";
import instagram from "@/assets/icons/instagram.png";
import telegram from "@/assets/icons/telegram.png";
import mastodon from "@/assets/icons/mastodon.png";
import bluesky from "@/assets/icons/bluesky.png";
import threads from "@/assets/icons/threads.png";
import tiktok from "@/assets/icons/tiktok.png";
import youtube from "@/assets/icons/youtube.png";
import x from "@/assets/icons/x.png";

const Footer = () => {
  const [glowing, setGlowing] = useState(false);
  
  // Animation effect for the brand name
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowing(prev => !prev);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Social media links data
  const socialLinks = [
    { name: 'Instagram', icon: instagram, url: 'https://instagram.com/nuruforge' },
    { name: 'TikTok', icon: tiktok, url: 'https://tiktok.com/@nuruforge' },
    { name: 'X', icon: x, url: 'https://twitter.com/nuruforge' },
    { name: 'YouTube', icon: youtube, url: 'https://youtube.com/@nuruforge' },
    { name: 'Threads', icon: threads, url: 'https://threads.net/@nuruforge' },
    { name: 'Telegram', icon: telegram, url: 'https://t.me/nuruforge' },
    { name: 'LinkedIn', icon: linkedin, url: 'https://linkedin.com/company/nuruforge' },
    { name: 'Facebook', icon: facebook, url: 'https://facebook.com/nuruforge' },
    { name: 'Mastodon', icon: mastodon, url: 'https://mastodon.social/@nuruforge' },
    { name: 'Bluesky', icon: bluesky, url: 'https://bsky.app/profile/nuruforge' }
  ];

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
            {/* Social Media Icons with custom images */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-0">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  className="group transform hover:scale-110 transition-transform duration-300"
                  aria-label={social.name}
                >
                  <div className="bg-gray-900 p-3 rounded-full group-hover:bg-gray-800 transition-colors shadow-lg flex items-center justify-center">
                    <img 
                      src={social.icon} 
                      alt={`${social.name} icon`} 
                      className="w-9 object-contain filter brightness-75 group-hover:brightness-100 transition-all"
                    />
                  </div>
                </a>
              ))}
            </div>
            
            {/* Footer Links - with animated underlines */}
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