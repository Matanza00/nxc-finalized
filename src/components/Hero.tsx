
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Smartphone, Code, Cloud, Package } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-brand-tertiary to-brand-background">
      {/* Background particles - simplified version */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-brand-primary opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 left-2/3 w-6 h-6 rounded-full bg-brand-secondary opacity-20 animate-pulse"></div>
        <div className="absolute top-2/3 left-1/5 w-3 h-3 rounded-full bg-brand-accent opacity-25 animate-pulse"></div>
        <div className="absolute top-3/4 left-3/4 w-5 h-5 rounded-full bg-brand-primary opacity-15 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full bg-brand-secondary opacity-10 animate-pulse"></div>
      </div>
      
      {/* Animated wave */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-background to-transparent opacity-70 z-10">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          className="absolute bottom-0"
        >
          <path 
            fill="#FFD580" 
            fillOpacity="0.3" 
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          className="absolute bottom-0"
        >
          <path 
            fill="#FF7755" 
            fillOpacity="0.2" 
            d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,154.7C672,128,768,96,864,106.7C960,117,1056,171,1152,176C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      {/* Orbiting icons */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full z-10">
        <div className="relative w-full h-full">
          <motion.div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
            animate={{ 
              x: [0, 70, 0, -70, 0], 
              y: [-70, 0, 70, 0, -70],
              transition: { repeat: Infinity, duration: 10, ease: "linear" }
            }}
          >
            <Brain size={24} className="text-brand-primary" />
          </motion.div>
          
          <motion.div 
            className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
            animate={{ 
              x: [70, 0, -70, 0, 70], 
              y: [0, 70, 0, -70, 0],
              transition: { repeat: Infinity, duration: 10, ease: "linear", delay: 2 }
            }}
          >
            <Smartphone size={24} className="text-brand-primary" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
            animate={{ 
              x: [0, -70, 0, 70, 0], 
              y: [70, 0, -70, 0, 70],
              transition: { repeat: Infinity, duration: 10, ease: "linear", delay: 4 }
            }}
          >
            <Code size={24} className="text-brand-primary" />
          </motion.div>
          
          <motion.div 
            className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
            animate={{ 
              x: [-70, 0, 70, 0, -70], 
              y: [0, -70, 0, 70, 0],
              transition: { repeat: Infinity, duration: 10, ease: "linear", delay: 6 }
            }}
          >
            <Cloud size={24} className="text-brand-primary" />
          </motion.div>
          
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
            animate={{ 
              scale: [1, 1.1, 1, 1.1, 1],
              transition: { repeat: Infinity, duration: 4, ease: "easeInOut" }
            }}
          >
            <Package size={24} className="text-brand-primary" />
          </motion.div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-brand-text mb-6"
            animate={{ 
              textShadow: ["0px 0px 0px rgba(255,119,85,0)", "0px 0px 10px rgba(255,119,85,0.5)", "0px 0px 0px rgba(255,119,85,0)"],
              transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
            }}
          >
            NXCSOL
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl mb-12 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Where Innovation Meets Execution
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link to="/contact" className="btn-primary animate-pulse-glow">
              Get Started
            </Link>
            <Link to="/portfolio" className="btn-secondary">
              Explore Work
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
