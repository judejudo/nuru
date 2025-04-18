// src/components/common/SocialIcons.jsx
import React from "react";

// Import icons from assets directory
import twitter from "@/assets/icons/x.png";
import instagram from "@/assets/icons/instagram.png";
import linkedin from "@/assets/icons/linkedin.png";
import facebook from "@/assets/icons/facebook.png";
// Import additional icons if needed
// import youtube from "@/assets/icons/youtube.png";
// import telegram from "@/assets/icons/telegram.png";

const SocialIcons = () => {
  const socialLinks = [
    { name: "x", icon: twitter, url: "https://x.com/nuruforge" },
    { name: "Instagram", icon: instagram, url: "https://instagram.com/nuruforge" },
    { name: "LinkedIn", icon: linkedin, url: "https://linkedin.com/company/nuruforge" },
    { name: "Facebook", icon: facebook, url: "https://facebook.com/nuruforge" },
    // Add more social platforms as needed
    // { name: "YouTube", icon: youtube, url: "#" },
    // { name: "Telegram", icon: telegram, url: "#" },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <a 
          key={social.name} 
          href={social.url} 
          className="bg-[rgba(30,30,30,1)] p-3 rounded-full hover:bg-[rgba(35,35,35,1)] transition-colors flex items-center justify-center"
          aria-label={social.name}
        >
          <img 
            src={social.icon} 
            alt={`${social.name} icon`} 
            className="w-5 h-5 object-contain text-[rgba(208,255,0,1)]" 
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;