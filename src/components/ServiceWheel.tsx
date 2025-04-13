
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Smartphone, 
  Cloud, 
  Brain, 
  Package, 
  Film
} from 'lucide-react';

const services = [
  {
    title: "Website",
    icon: <Monitor size={32} />,
    desc: "Business, Portfolio, E-Com",
    color: "#FF7755",
    path: "/services/web-development"
  },
  {
    title: "Mobile App",
    icon: <Smartphone size={32} />,
    desc: "iOS/Android hybrid apps",
    color: "#FFD580",
    path: "/services/mobile-apps"
  },
  {
    title: "SaaS Platform",
    icon: <Cloud size={32} />,
    desc: "Full SaaS MVPs",
    color: "#ff9980",
    path: "/services/saas-platforms"
  },
  {
    title: "AI Integration",
    icon: <Brain size={32} />,
    desc: "Chatbots, NLP, LLMs",
    color: "#FF7755",
    path: "/services/ai-integration"
  },
  {
    title: "3D Design",
    icon: <Package size={32} />,
    desc: "WebGL, product mockups",
    color: "#FFD580",
    path: "/services/3d-experiences"
  },
  {
    title: "3D Animator",
    icon: <Film size={32} />,
    desc: "Blender, Unreal Engine",
    color: "#ff9980",
    path: "/services/3d-experiences"
  }
];

const ServiceWheel = () => {
  const [activeService, setActiveService] = useState(null);
  
  return (
    <div className="section-container">
      <div className="section-title">
        <h2>What Do You Need?</h2>
      </div>
      
      <div className="flex justify-center mb-16">
        <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
          {/* Center Circle */}
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-lg z-10"
            animate={{ 
              boxShadow: [
                '0 4px 6px rgba(255, 119, 85, 0.1)', 
                '0 10px 15px rgba(255, 119, 85, 0.2)', 
                '0 4px 6px rgba(255, 119, 85, 0.1)'
              ],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <img 
              src="/nxc-logo.png" 
              alt="NXCSOL" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain opacity-90" 
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/80?text=NXCSOL";
              }}
            />
          </motion.div>
          
          {/* Orbiting services */}
          {services.map((service, index) => {
            // Calculate position on the circle
            const angle = (index * (2 * Math.PI / services.length)) - Math.PI/2;
            const radius = 130; // Adjust the distance from center
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <motion.div
                key={index}
                className="absolute top-1/2 left-1/2 cursor-pointer"
                style={{ 
                  x: x, 
                  y: y,
                }}
                animate={{ 
                  scale: activeService === index ? 1.1 : 1,
                  boxShadow: activeService === index ? '0 10px 25px rgba(0, 0, 0, 0.2)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setActiveService(index === activeService ? null : index)}
              >
                <div 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg border-2"
                  style={{ borderColor: service.color }}
                >
                  <div className="text-brand-primary">
                    {service.icon}
                  </div>
                </div>
              </motion.div>
            );
          })}
          
          {/* Connecting lines */}
          <svg 
            className="absolute top-0 left-0 w-full h-full -z-10"
            viewBox="0 0 400 400" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {services.map((_, index) => {
              const angle = (index * (2 * Math.PI / services.length)) - Math.PI/2;
              const innerRadius = 20; // Distance from center to start the line
              const outerRadius = 120; // Distance from center to end the line
              const x1 = 200 + Math.cos(angle) * innerRadius;
              const y1 = 200 + Math.sin(angle) * innerRadius;
              const x2 = 200 + Math.cos(angle) * outerRadius;
              const y2 = 200 + Math.sin(angle) * outerRadius;
              
              return (
                <motion.line
                  key={index}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={services[index].color}
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 0.6, pathLength: 1 }}
                  transition={{ delay: index * 0.1, duration: 1.5 }}
                />
              );
            })}
          </svg>
        </div>
      </div>
      
      {/* Service details */}
      <AnimatePresence>
        {activeService !== null && (
          <motion.div 
            className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-brand-background">
                <div className="text-brand-primary">
                  {services[activeService].icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{services[activeService].title}</h3>
                <p className="text-gray-600 mb-4">{services[activeService].desc}</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 text-brand-primary">✓</div>
                    <p>Custom design and development tailored to your needs</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 text-brand-primary">✓</div>
                    <p>Experienced team with proven results</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 text-brand-primary">✓</div>
                    <p>Timely delivery and ongoing support</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link to={services[activeService].path} className="btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceWheel;
