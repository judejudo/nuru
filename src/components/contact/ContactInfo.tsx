// src/components/contact/ContactInfo.jsx
import React from "react";
import { motion } from "framer-motion";
import SocialIcons from "../common/SocialIcons";

const ContactInfo = () => {
  return (
    <div className="bg-[rgba(22,22,22,1)] border border-[rgba(38,38,38,1)] mt-[100px] rounded-2xl p-6 h-full">
      <h2 className="text-2xl font-bold text-white mb-6">
        Contact Information
      </h2>

      <div className="space-y-6">
        {/* Phone */}
        <div className="flex items-start">
          <div className="bg-[rgba(30,30,30,1)] p-3 rounded-full mr-4">
            <svg
              className="w-6 h-6 text-[rgba(208,255,0,1)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-[rgba(204,204,204,1)] font-medium">
              Phone
            </h3>
            <p className="text-[rgba(122,122,122,1)]">+1 (800) 123-4567</p>
            <p className="text-[rgba(122,122,122,1)]">
              Mon-Fri, 9am-6pm EST
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start">
          <div className="bg-[rgba(30,30,30,1)] p-3 rounded-full mr-4">
            <svg
              className="w-6 h-6 text-[rgba(208,255,0,1)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-[rgba(204,204,204,1)] font-medium">
              Email
            </h3>
            <p className="text-[rgba(122,122,122,1)]">
              support@nuruforge.com
            </p>
            <p className="text-[rgba(122,122,122,1)]">
              We respond within 24 hours
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start">
          <div className="bg-[rgba(30,30,30,1)] p-3 rounded-full mr-4">
            <svg
              className="w-6 h-6 text-[rgba(208,255,0,1)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-[rgba(204,204,204,1)] font-medium">
              Office
            </h3>
            <p className="text-[rgba(122,122,122,1)]">
              123 Innovation Drive
            </p>
            <p className="text-[rgba(122,122,122,1)]">
              Silicon Valley, CA 94025
            </p>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 pt-8 border-t border-[rgba(38,38,38,1)]">
        <h3 className="text-[rgba(204,204,204,1)] font-medium mb-4">
          Follow Us
        </h3>
        <SocialIcons />
      </div>
    </div>
  );
};

export default ContactInfo;