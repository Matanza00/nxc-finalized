
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, PaintBucket, Hammer, Bug, Rocket } from 'lucide-react';

const buildSteps = [
  {
    id: 1,
    name: "Idea Drop",
    icon: <Lightbulb size={24} />,
    iconColor: "#FF7755",
    description: "Share your concept and business goals. We help refine the scope and identify the core features needed for your MVP.",
  },
  {
    id: 2,
    name: "Feature Hunt",
    icon: <Target size={24} />,
    iconColor: "#FF7755",
    description: "We identify and prioritize the most important features based on user needs, technical feasibility, and business value.",
  },
  {
    id: 3,
    name: "Design Sprint",
    icon: <PaintBucket size={24} />,
    iconColor: "#FF7755",
    description: "Our designers create wireframes, mockups, and interactive prototypes focused on intuitive user experience.",
  },
  {
    id: 4,
    name: "Dev Dungeon",
    icon: <Hammer size={24} />,
    iconColor: "#FF7755",
    description: "Our development team brings designs to life, writing clean code with modern technologies and best practices.",
  },
  {
    id: 5,
    name: "Boss Fight",
    icon: <Bug size={24} />,
    iconColor: "#FF7755",
    description: "Rigorous testing across devices and platforms to squash bugs and ensure your product is stable and secure.",
  },
  {
    id: 6,
    name: "Launch Portal",
    icon: <Rocket size={24} />,
    iconColor: "#FF7755",
    description: "Your product goes live! We handle deployment and provide immediate post-launch support to ensure a smooth transition.",
  }
];

const LetsBuildTogether = () => {
  const [activeStep, setActiveStep] = useState(6);

  return (
    <div className="section-container">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Let's Build Together</h2>
      </motion.div>
      
      {/* Progress Path */}
      <div className="max-w-5xl mx-auto mt-12 relative">
        <div className="hidden md:block h-1 bg-brand-primary absolute top-9 left-[10%] right-[10%] z-0"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {buildSteps.map((step) => (
            <motion.div
              key={step.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: step.id * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setActiveStep(step.id)}
            >
              <motion.div 
                className={`relative z-10 w-20 h-20 flex items-center justify-center rounded-full cursor-pointer
                  ${activeStep === step.id ? 'bg-brand-primary' : 'bg-brand-primary bg-opacity-30'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-white">{step.icon}</div>
              </motion.div>
              <p className={`mt-2 font-medium text-center ${activeStep === step.id ? 'text-brand-primary' : 'text-gray-600'}`}>
                {step.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Selected Step Content */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-8 mt-12 max-w-3xl mx-auto"
        key={activeStep} // This forces re-render when activeStep changes
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-start">
          <div 
            className="w-14 h-14 rounded-full bg-brand-primary bg-opacity-20 flex items-center justify-center mr-5 shrink-0"
          >
            {buildSteps.find(step => step.id === activeStep)?.icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-brand-primary">
              {activeStep}. {buildSteps.find(step => step.id === activeStep)?.name}
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              {buildSteps.find(step => step.id === activeStep)?.description}
            </p>
          </div>
        </div>
        
        {activeStep === 6 && (
          <motion.div 
            className="mt-6 border-t border-gray-200 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="font-medium text-gray-700">
              Ready to launch your product? We offer ongoing maintenance packages to keep everything running smoothly.
            </p>
            <button className="mt-4 bg-brand-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
              Start Your Journey
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default LetsBuildTogether;
