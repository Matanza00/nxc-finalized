
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Clock, Calendar, Star, Award, ExternalLink, ChevronRight, Eye, Code, Layers } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

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
    category: "3D Design & E-commerce",
    stats: {
      users: "12,400+",
      countries: 8,
      rating: 4.8
    }
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
    category: "Web Development",
    stats: {
      users: "25,000+",
      countries: 12,
      rating: 4.9
    }
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
    category: "Mobile App",
    stats: {
      users: "3,000+",
      countries: 8,
      rating: 4.7
    }
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
    category: "SaaS Platform",
    stats: {
      users: "1,200+",
      countries: 2,
      rating: 4.6
    }
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
    category: "AI Integration",
    stats: {
      users: "22,000+",
      countries: 4,
      rating: 4.9
    }
  }
];

const TimelineItem = ({ project, index, isActive, onClick }) => {
  const isEven = index % 2 === 0;
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`timeline-item my-32 md:my-64 first:mt-0 last:mb-0 ${isActive ? 'active' : ''}`}
      onClick={() => onClick(index)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: isActive ? 1.2 : 1 }}
              transition={{ duration: 0.5 }}
            >
              <Calendar className={`h-4 w-4 ${isActive ? 'text-brand-primary' : 'text-gray-400'}`} />
            </motion.div>
            <span className={`text-sm font-medium ${isActive ? 'text-brand-primary' : 'text-gray-400'}`}>{project.year}</span>
          </div>
          
          <motion.h3 
            className="text-3xl font-bold mb-3"
            animate={{ 
              color: isActive ? '#FF7755' : '#333333',
              scale: isActive ? 1.05 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            {project.name}
          </motion.h3>
          
          <motion.div 
            className="mb-3"
            animate={{ y: isActive ? [0, -5, 0] : 0 }}
            transition={{ duration: 0.5, repeat: isActive ? 1 : 0 }}
          >
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? 'bg-brand-primary text-white' : 'bg-gray-100 text-gray-800'}`}>
              {project.category}
            </span>
          </motion.div>
          
          <p className="text-gray-700 mb-6">{project.description}</p>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.features.map((feature, i) => (
                <motion.span 
                  key={i}
                  className={`px-3 py-1 rounded-full text-xs transition-colors duration-300 ${isActive ? 'bg-brand-secondary text-brand-text' : 'bg-brand-secondary bg-opacity-20'}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {feature}
                </motion.span>
              ))}
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <Award className={`h-4 w-4 ${isActive ? 'text-brand-primary' : 'text-gray-400'}`} />
              <span>{project.achievement}</span>
            </div>
            
            {isActive && (
              <motion.div 
                className="grid grid-cols-3 gap-4 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">Users</p>
                  <p className="font-bold text-brand-primary">{project.stats.users}</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">Countries</p>
                  <p className="font-bold text-brand-primary">{project.stats.countries}</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">Rating</p>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="h-3 w-3 fill-brand-primary text-brand-primary" />
                    <p className="font-bold text-brand-primary">{project.stats.rating}</p>
                  </div>
                </div>
              </motion.div>
            )}
            
            {isActive && (
              <motion.button
                className="flex items-center gap-2 text-brand-primary hover:underline mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ x: 5 }}
              >
                View case study <ChevronRight className="h-4 w-4" />
              </motion.button>
            )}
          </div>
        </div>
        
        {/* Image side */}
        <motion.div 
          className="relative md:w-1/2 h-64 md:h-96 overflow-hidden rounded-xl shadow-2xl group cursor-pointer"
          whileInView={{ 
            rotateY: isEven ? [0, 5, 0] : [0, -5, 0],
            scale: [0.9, 1]
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img 
            src={project.image} 
            alt={project.name} 
            className={`w-full h-full object-cover transition-all duration-700 ${isActive || isHovered ? 'scale-105 brightness-110' : ''}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 pointer-events-none"></div>
          
          {/* Interactive overlay elements */}
          <AnimatePresence>
            {(isActive || isHovered) && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center gap-4">
                  <motion.div 
                    className="bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-full cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Eye className="h-5 w-5 text-white" />
                  </motion.div>
                  <motion.div 
                    className="bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-full cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Code className="h-5 w-5 text-white" />
                  </motion.div>
                  <motion.div 
                    className="bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-full cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Layers className="h-5 w-5 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

const ProjectHighlights = ({ projects }) => {
  return (
    <div className="mt-12 md:mt-20">
      <motion.h3 
        className="text-2xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Project Highlights
      </motion.h3>
      
      <Carousel
        opts={{ loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/3">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 bg-brand-primary text-white text-xs px-2 py-1 rounded-full">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold mb-1">{project.name}</h4>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{project.year}</span>
                      <motion.button 
                        className="text-brand-primary text-sm flex items-center gap-1"
                        whileHover={{ x: 3 }}
                      >
                        View <ChevronRight className="h-3 w-3" />
                      </motion.button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:flex">
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </div>
      </Carousel>
    </div>
  );
};

const PortfolioHighlight = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.3]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const [activeProject, setActiveProject] = useState(0);
  
  // Auto-rotate active project every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject(prev => (prev + 1) % portfolioData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="section-container relative overflow-hidden">
      <motion.div 
        className="absolute -top-20 -right-20 w-64 h-64 bg-brand-secondary bg-opacity-20 rounded-full blur-3xl z-0"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute -bottom-32 -left-32 w-64 h-64 bg-brand-primary bg-opacity-10 rounded-full blur-3xl z-0"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      <motion.div 
        className="section-title relative z-10"
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
              className={`absolute w-6 h-6 bg-white rounded-full border-4 shadow-lg z-10 cursor-pointer transition-all duration-300 ${
                activeProject === index 
                  ? 'border-brand-primary scale-110'
                  : 'border-gray-300'
              }`}
              style={{ top: `${(index / (portfolioData.length - 1)) * 100}%` }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-150px" }}
              onClick={() => setActiveProject(index)}
            >
              <span className="sr-only">{project.year}</span>
              {activeProject === index && (
                <motion.div
                  className="absolute inset-0 border-4 border-brand-primary rounded-full"
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1.6, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="space-y-32 md:space-y-64 relative z-10">
          {portfolioData.map((project, index) => (
            <TimelineItem 
              key={index} 
              project={project} 
              index={index} 
              isActive={activeProject === index}
              onClick={setActiveProject}
            />
          ))}
        </div>
      </div>
      
      <ProjectHighlights projects={portfolioData} />
      
      <motion.div 
        className="flex justify-center mt-20"
        style={{ y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.a 
          href="/portfolio" 
          className="btn-primary inline-flex items-center gap-2 group"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          View All Projects
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <ExternalLink className="h-4 w-4" />
          </motion.div>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default PortfolioHighlight;
