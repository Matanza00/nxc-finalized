
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Placeholders for portfolio images until real ones are added
const portfolioData = [
  {
    name: "Primade",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&auto=format&fit=crop",
    features: [
      "Shopify",
      "Brand Videos",
      "3D Product Design",
      "Marketing"
    ],
    style: "hover-rotate"
  },
  {
    name: "DaakandCo",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
    features: [
      "Corporate Website",
      "Minimal UI",
      "Fast Performance"
    ],
    style: "sliding-panel"
  },
  {
    name: "SOS Globals",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop",
    features: [
      "Inspection Forms",
      "Offline Capability",
      "PDF Export"
    ],
    style: "paper-card"
  },
  {
    name: "Saudi Pak",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    features: [
      "Facility Logs",
      "Tenant System",
      "Role-based Access"
    ],
    style: "flip-card"
  },
  {
    name: "GaragePal",
    image: "https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=800&auto=format&fit=crop",
    features: [
      "Live Map",
      "Garage Booking",
      "Service Manager"
    ],
    style: "pulse-glow"
  }
];

const PortfolioCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getCardStyle = () => {
    const baseStyle = "relative overflow-hidden rounded-xl shadow-lg aspect-[4/3] cursor-pointer";
    
    switch(project.style) {
      case "hover-rotate":
        return `${baseStyle} transform transition-all duration-500 ${isHovered ? "rotate-1 scale-[1.02]" : ""}`;
      case "sliding-panel":
        return `${baseStyle}`;
      case "paper-card":
        return `${baseStyle} transform transition-all duration-300 ${isHovered ? "translate-y-[-8px] shadow-xl" : ""}`;
      case "flip-card":
        return `${baseStyle} transform-style-3d transition-all duration-500`;
      case "pulse-glow":
        return `${baseStyle} ${isHovered ? "animate-pulse-glow" : ""}`;
      default:
        return baseStyle;
    }
  };
  
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div 
        className={getCardStyle()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project image */}
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-cover"
        />
        
        {/* Overlay with details */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.features.map((feature, i) => (
                  <span 
                    key={i}
                    className="bg-brand-primary bg-opacity-80 px-2 py-1 rounded text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <button className="bg-white text-brand-text font-medium px-4 py-2 rounded-full text-sm mt-2 self-start hover:bg-opacity-90 transition-colors">
                View Project
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <h3 className="font-medium mt-3">{project.name}</h3>
    </motion.div>
  );
};

const PortfolioHighlight = () => {
  return (
    <div className="section-container">
      <div className="section-title">
        <h2>Explore Our Work</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {portfolioData.map((project, index) => (
          <PortfolioCard 
            key={index} 
            project={project} 
            index={index} 
          />
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <button className="btn-primary">
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default PortfolioHighlight;
