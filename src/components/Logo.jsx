import { motion } from "framer-motion";
import React from "react";

const Logo = ({ className = "", size = "default" }) => {
  const sizeClasses = {
    small: "w-8 h-8",
    default: "w-12 h-12",
    large: "w-16 h-16"
  };

  return (
    <motion.div
      whileHover={{ rotate: 5 }}
      className={`${sizeClasses[size]} ${className}`}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>
        </defs>
        <rect x="45" y="60" width="10" height="35" fill="url(#logoGradient)" rx="2" />
        <rect x="35" y="50" width="30" height="15" fill="url(#logoGradient)" rx="3" />
        <line x1="35" y1="55" x2="65" y2="55" stroke="#78350F" strokeWidth="1" />
        <line x1="37" y1="60" x2="63" y2="60" stroke="#78350F" strokeWidth="1" />
        <circle cx="50" cy="25" r="15" fill="none" stroke="url(#logoGradient)" strokeWidth="3" />
        <text x="50" y="30" textAnchor="middle" fontSize="12" fill="url(#logoGradient)" fontWeight="bold">T</text>
      </svg>
    </motion.div>
  );
};

export default Logo
