
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, Calendar, Star, Award } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

// Placeholders for portfolio images until real ones are added
const portfolioData = [
  {
    year: 2019,
    name: "Primade",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&auto=format&fit=crop",
    features: [
      "Shopify",
      "Brand Videos",
      "3D Product Design",
      "Marketing"
    ],
    description: "E-commerce brand specializing in premium packaging with 3D product visualization",
    achievement: "48% increase in conversion rate",
    category: "3D Design & E-commerce"
  },
  {
    year: 2020,
    name: "DaakandCo",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
    features: [
      "Corporate Website",
      "Minimal UI",
      "Fast Performance"
    ],
    description: "Minimalist corporate site with lightning-fast performance and optimized SEO",
    achievement: "3.2s to 0.9s load time improvement",
    category: "Web Development"
  },
  {
    year: 2021,
    name: "SOS Globals",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop",
    features: [
      "Inspection Forms",
      "Offline Capability",
      "PDF Export"
    ],
    description: "Mobile inspection platform that works offline with sophisticated data synchronization",
    achievement: "Deployed to 8 countries, 3,000+ daily users",
    category: "Mobile App"
  },
  {
    year: 2022,
    name: "Saudi Pak",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    features: [
      "Facility Logs",
      "Tenant System",
      "Role-based Access"
    ],
    description: "Enterprise facility management system with complex user roles and permissions",
    achievement: "Managing 120+ buildings with real-time updates",
    category: "SaaS Platform"
  },
  {
    year: 2023,
    name: "GaragePal",
    image: "https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=800&auto=format&fit=crop",
    features: [
      "Live Map",
      "Garage Booking",
      "Service Manager"
    ],
    description: "AI-powered garage booking platform with integrated maps and automated suggestions",
    achievement: "97% user satisfaction rating, 22,000+ bookings",
    category: "AI Integration"
  }
];

const TimelineItem = ({ project, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="timeline-item my-32 md:my-64 first:mt-0 last:mb-0">
      <motion.div 
        className={`flex flex-col md:flex-row items-center ${isEven ? '' : 'md:flex-row-reverse'}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Content side */}
        <div className={`md:w-1/2 p-6 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
          <div className="inline-flex items-center gap-2 mb-2">
            <Calendar className="h-4 w-4 text-brand-primary" />
            <span className="text-sm text-brand-primary font-medium">{project.year}</span>
          </div>
          
          <h3 className="text-3xl font-bold mb-3">{project.name}</h3>
          
          <div className="mb-3">
            <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              {project.category}
            </span>
          </div>
          
          <p className="text-gray-700 mb-6">{project.description}</p>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.features.map((feature, i) => (
                <span 
                  key={i}
                  className="bg-brand-secondary bg-opacity-20 px-3 py-1 rounded-full text-xs"
                >
                  {feature}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <Award className="h-4 w-4 text-brand-primary" />
              <span>{project.achievement}</span>
            </div>
          </div>
        </div>
        
        {/* Image side */}
        <motion.div 
          className="md:w-1/2 h-64 md:h-96 overflow-hidden rounded-xl shadow-2xl"
          whileInView={{ 
            rotateY: isEven ? [0, 5, 0] : [0, -5, 0],
            scale: [0.9, 1]
          }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 pointer-events-none"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const PortfolioHighlight = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.3]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  return (
    <div className="section-container relative overflow-hidden">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Explore Our Work</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          Scroll through our journey of innovation and excellence
        </p>
      </motion.div>
      
      <div className="mt-12 relative">
        {/* Timeline track */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-brand-primary to-transparent z-0 transform translate-x-[-0.5px] hidden md:block"></div>
        
        {/* Timeline nodes */}
        <div className="absolute left-1/2 top-0 bottom-0 transform translate-x-[-0.5px] hidden md:block">
          {portfolioData.map((project, index) => (
            <motion.div
              key={index}
              className="absolute w-6 h-6 bg-white rounded-full border-4 border-brand-primary shadow-lg z-10"
              style={{ top: `${(index / (portfolioData.length - 1)) * 100}%` }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-150px" }}
            >
              <span className="sr-only">{project.year}</span>
            </motion.div>
          ))}
        </div>
        
        <div className="space-y-32 md:space-y-64 relative z-10">
          {portfolioData.map((project, index) => (
            <TimelineItem key={index} project={project} index={index} />
          ))}
        </div>
      </div>
      
      <motion.div 
        className="flex justify-center mt-20"
        style={{ y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <a href="/portfolio" className="btn-primary inline-block">
          View All Projects
        </a>
      </motion.div>
    </div>
  );
};

export default PortfolioHighlight;
