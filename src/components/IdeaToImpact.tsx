
import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Lightbulb, Layout, Code, Rocket } from 'lucide-react';

const steps = [
  {
    title: "You Imagine",
    icon: <Lightbulb size={48} className="text-brand-primary" />,
    text: "Your vision becomes a sketch",
    graphic: "/assets/imagine.gif", // placeholder path
    animation: {
      icon: {
        y: [0, -15, 0],
        transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
      },
      content: {
        rotate: [0, 5, 0, -5, 0],
        transition: { repeat: Infinity, duration: 7, ease: "easeInOut" }
      }
    }
  },
  {
    title: "We Structure",
    icon: <Layout size={48} className="text-brand-primary" />,
    text: "UX flow built using mind-mapping animation",
    graphic: "/assets/structure.gif", // placeholder path
    animation: {
      icon: {
        scale: [1, 1.2, 1],
        transition: { repeat: Infinity, duration: 2, ease: "easeInOut" }
      },
      content: {
        x: [0, 5, 0, -5, 0],
        transition: { repeat: Infinity, duration: 5, ease: "easeInOut" }
      }
    }
  },
  {
    title: "We Build",
    icon: <Code size={48} className="text-brand-primary" />,
    text: "Frontend, backend, and AI connect in real time",
    graphic: "/assets/build.gif", // placeholder path
    animation: {
      icon: {
        rotateY: [0, 180, 360],
        transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
      },
      content: {
        y: [0, 5, 0, -5, 0],
        transition: { repeat: Infinity, duration: 6, ease: "easeInOut" }
      }
    }
  },
  {
    title: "We Launch",
    icon: <Rocket size={48} className="text-brand-primary" />,
    text: "MVP or full product shipped globally",
    graphic: "/assets/launch.gif", // placeholder path
    animation: {
      icon: {
        y: [0, -20, 0],
        transition: { repeat: Infinity, duration: 2, ease: "easeInOut" }
      },
      content: {
        scale: [1, 1.05, 1],
        transition: { repeat: Infinity, duration: 4, ease: "easeInOut" }
      }
    }
  }
];

const StepCard = ({ step, index, isActive, onClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={`flex-1 min-w-[250px] cursor-pointer service-card ${
        isActive ? 'ring-2 ring-brand-primary bg-brand-background' : ''
      }`}
      onClick={() => onClick(index)}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5, delay: index * 0.2 }
        }
      }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.div 
        className="flex flex-col items-center justify-center p-6"
        animate={isActive ? step.animation.content : {}}
      >
        <motion.div
          className="mb-4"
          animate={isActive ? step.animation.icon : {}}
        >
          {step.icon}
        </motion.div>
        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
        <p className="text-gray-600 text-center">{step.text}</p>
      </motion.div>
    </motion.div>
  );
};

const IdeaToImpact = () => {
  const [activeStep, setActiveStep] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const handleStepClick = (index) => {
    setActiveStep(index === activeStep ? null : index);
  };

  return (
    <div className="section-container" ref={containerRef}>
      <motion.div
        className="section-title"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.7 } }
        }}
      >
        <h2>From Idea to Impact</h2>
      </motion.div>

      {/* Steps Cards */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            step={step}
            index={index}
            isActive={activeStep === index}
            onClick={handleStepClick}
          />
        ))}
      </div>

      {/* Interactive Content */}
      {activeStep !== null && (
        <motion.div
          className="bg-white rounded-xl shadow-xl p-6 mt-8"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <motion.div
                className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">
                    {steps[activeStep].icon}
                  </div>
                  <p className="text-gray-500">
                    Interactive {steps[activeStep].title} animation would appear here
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="w-full md:w-1/2">
              <motion.h3
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {steps[activeStep].title}
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <p className="text-gray-600 mb-4">
                  {steps[activeStep].text}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {['Interactive', 'Animated', 'Creative', 'Engaging'].map((tag, i) => (
                    <span
                      key={i}
                      className="bg-brand-secondary bg-opacity-30 text-brand-text px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Call to action */}
      <motion.div 
        className="flex justify-center mt-12"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 1, duration: 0.7 } }
        }}
      >
        <button className="btn-secondary">
          Learn More About Our Process
        </button>
      </motion.div>
    </div>
  );
};

export default IdeaToImpact;
