
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Placeholders for portfolio images until real ones are added
const portfolioData = [
  {
    level: 1,
    name: "Primade",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&auto=format&fit=crop",
    features: [
      "Shopify",
      "Brand Videos",
      "3D Product Design",
      "Marketing"
    ],
    description: "E-commerce brand specializing in premium packaging with 3D product visualization",
    style: "hover-rotate",
    category: "3D Design & E-commerce"
  },
  {
    level: 2,
    name: "DaakandCo",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
    features: [
      "Corporate Website",
      "Minimal UI",
      "Fast Performance"
    ],
    description: "Minimalist corporate site with lightning-fast performance and optimized SEO",
    style: "sliding-panel",
    category: "Web Development"
  },
  {
    level: 3,
    name: "SOS Globals",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop",
    features: [
      "Inspection Forms",
      "Offline Capability",
      "PDF Export"
    ],
    description: "Mobile inspection platform that works offline with sophisticated data synchronization",
    style: "paper-card",
    category: "Mobile App"
  },
  {
    level: 4,
    name: "Saudi Pak",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    features: [
      "Facility Logs",
      "Tenant System",
      "Role-based Access"
    ],
    description: "Enterprise facility management system with complex user roles and permissions",
    style: "flip-card",
    category: "SaaS Platform"
  },
  {
    level: 5,
    name: "GaragePal",
    image: "https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=800&auto=format&fit=crop",
    features: [
      "Live Map",
      "Garage Booking",
      "Service Manager"
    ],
    description: "AI-powered garage booking platform with integrated maps and automated suggestions",
    style: "pulse-glow",
    category: "AI Integration"
  }
];

const PortfolioCard = ({ project, index, active, setActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [flipped, setFlipped] = useState(false);
  
  const isActive = active === index;
  
  const cardVariants = {
    initial: { opacity: 0.7, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    active: { opacity: 1, y: 0, scale: 1.03, transition: { duration: 0.3 } }
  };
  
  const handleFlip = (e) => {
    e.stopPropagation();
    setFlipped(!flipped);
  };
  
  return (
    <motion.div
      className={`relative ${isActive ? 'z-20' : 'z-10'} my-8 mx-4`}
      variants={cardVariants}
      initial="initial"
      whileInView="visible"
      animate={isActive ? "active" : "visible"}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      onClick={() => setActive(index)}
    >
      <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-brand-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold z-10">
        Lvl {project.level}
      </div>
      
      <motion.div 
        className={`max-w-xl w-full bg-white rounded-xl shadow-lg overflow-hidden ${isActive ? 'ring-2 ring-brand-primary' : ''}`}
        style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          rotateY: flipped ? 180 : 0,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of card */}
        <div 
          className="flex flex-col md:flex-row items-stretch"
          style={{ 
            backfaceVisibility: "hidden",
            position: flipped ? "absolute" : "relative",
            width: "100%",
            height: "100%",
            opacity: flipped ? 0 : 1
          }}
        >
          <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
            <img 
              src={project.image} 
              alt={project.name} 
              className={`w-full h-full object-cover transition-all duration-700 
                ${isHovered ? 'scale-110' : 'scale-100'}
                ${isActive ? 'brightness-110' : 'brightness-100'}`}
            />
          </div>
          
          <div className="md:w-3/5 p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                  {project.category}
                </span>
              </div>
              <p className="text-gray-600 mt-2">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.features.map((feature, i) => (
                  <span 
                    key={i}
                    className="bg-brand-secondary bg-opacity-20 px-2 py-1 rounded text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-6 flex justify-between items-center">
              <button 
                className="bg-brand-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-opacity-90 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = "/portfolio";
                }}
              >
                View Details
              </button>
              
              <button 
                className="text-gray-500 hover:text-brand-primary p-2 transition-colors"
                onClick={handleFlip}
              >
                View Insights →
              </button>
            </div>
          </div>
        </div>
        
        {/* Back of card - insights */}
        <div 
          className="p-6 absolute inset-0 flex flex-col"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            opacity: flipped ? 1 : 0
          }}
        >
          <h3 className="text-2xl font-bold mb-4">Project Insights</h3>
          <div className="space-y-4 flex-grow">
            <div>
              <h4 className="font-medium text-gray-700">Tech Stack</h4>
              <p className="text-sm text-gray-600">React, Node.js, MongoDB, AWS</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700">Development Time</h4>
              <p className="text-sm text-gray-600">6 Weeks</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700">Key Challenge</h4>
              <p className="text-sm text-gray-600">Implementing real-time data synchronization with offline capability</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700">Results</h4>
              <p className="text-sm text-gray-600">47% increase in user engagement, 30% reduction in support tickets</p>
            </div>
          </div>
          
          <button 
            className="mt-4 text-gray-500 hover:text-brand-primary transition-colors self-end"
            onClick={handleFlip}
          >
            Back to overview ←
          </button>
        </div>
      </motion.div>
      
      {isActive && (
        <motion.div 
          className="absolute left-0 top-0 w-full h-full -z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-brand-primary opacity-10 blur-3xl rounded-full"></div>
        </motion.div>
      )}
    </motion.div>
  );
};

const PortfolioHighlight = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.3]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Automatically change active card on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const trigger = scrollPosition + (windowHeight / 2);
      
      // Get all card elements
      const cards = document.querySelectorAll('.portfolio-card-container');
      
      // Find which card is currently in view
      let activeCardIndex = 0;
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardMiddle = rect.top + (rect.height / 2);
        
        if (cardMiddle < windowHeight * 0.6) {
          activeCardIndex = index;
        }
      });
      
      setActiveIndex(activeCardIndex);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="section-container relative">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Explore Our Work</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          Scroll down to discover our journey through various projects, each representing a new level of innovation.
        </p>
      </motion.div>
      
      <div className="mt-12 md:mt-24 relative">
        {/* Timeline track */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 z-0 transform md:translate-x-[-0.5px]"></div>
        
        <div className="space-y-12 md:space-y-24 relative z-10">
          {portfolioData.map((project, index) => (
            <div key={index} className="portfolio-card-container flex flex-col md:items-center relative">
              {/* Timeline circle */}
              <div 
                className={`absolute left-4 md:left-1/2 transform md:translate-x-[-50%] w-5 h-5 rounded-full z-20
                  ${activeIndex >= index ? 'bg-brand-primary' : 'bg-gray-300'}`}
                style={{
                  top: "50%",
                  transform: "translate(-50%, -50%)"
                }}
              ></div>
              
              {/* Year or milestone label */}
              <div 
                className={`absolute left-12 md:left-[calc(50%-30px)] text-sm font-medium
                  ${activeIndex >= index ? 'text-brand-primary' : 'text-gray-400'}`}
                style={{
                  top: "50%",
                  transform: "translateY(-50%)"
                }}
              >
                {2019 + index}
              </div>
              
              <div className="md:w-1/2 md:odd:pr-12 md:even:pl-12 md:even:ml-auto">
                <PortfolioCard 
                  project={project} 
                  index={index}
                  active={activeIndex}
                  setActive={setActiveIndex}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <motion.div 
        className="flex justify-center mt-12"
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
