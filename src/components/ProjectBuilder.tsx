
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, LayoutDashboard, CreditCard, MessageSquare, Brain } from 'lucide-react';

const componentData = [
  { 
    type: "Login System", 
    icon: <Lock size={24} />, 
    complexity: "medium", 
    cost: 300,
    description: "Secure authentication with email, social, and password recovery"
  },
  { 
    type: "Admin Dashboard", 
    icon: <LayoutDashboard size={24} />, 
    complexity: "complex", 
    cost: 800,
    description: "Full control panel with user management and analytics"
  },
  { 
    type: "Payment Integration", 
    icon: <CreditCard size={24} />, 
    complexity: "complex", 
    cost: 500,
    description: "Stripe/PayPal integration with subscription management"
  },
  { 
    type: "Live Chat", 
    icon: <MessageSquare size={24} />, 
    complexity: "medium", 
    cost: 400,
    description: "Real-time messaging with notifications and history"
  },
  { 
    type: "AI Features", 
    icon: <Brain size={24} />, 
    complexity: "complex", 
    cost: 900,
    description: "Smart recommendations, content generation, and automation"
  }
];

const ProjectBuilder = ({ formData }) => {
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [showEstimate, setShowEstimate] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);
  
  const handleDragStart = (component) => {
    setActiveComponent(component);
  };
  
  const handleDragEnd = () => {
    if (activeComponent) {
      // Add component to selected if not already there
      if (!selectedComponents.some(comp => comp.type === activeComponent.type)) {
        setSelectedComponents([...selectedComponents, activeComponent]);
      }
      setActiveComponent(null);
    }
  };
  
  const removeComponent = (componentToRemove) => {
    setSelectedComponents(selectedComponents.filter(
      comp => comp.type !== componentToRemove.type
    ));
  };
  
  const calculateTotalCost = () => {
    return selectedComponents.reduce((total, comp) => total + comp.cost, 0);
  };
  
  const calculateTimeEstimate = () => {
    const totalComponents = selectedComponents.length;
    
    if (totalComponents <= 1) return "2-3 weeks";
    if (totalComponents <= 3) return "4-6 weeks";
    if (totalComponents <= 5) return "6-8 weeks";
    return "8-12 weeks";
  };
  
  return (
    <div className="section-container">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Build Your App</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          Drag and drop components to build your custom application and get an instant estimate.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-4">
            <div className="bg-brand-secondary bg-opacity-20 p-2 rounded-full">
              <Lock size={18} />
            </div>
            <h3 className="text-xl font-bold ml-2">Available Components</h3>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="space-y-4">
              {componentData.map((component, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200 cursor-move"
                  draggable
                  onDragStart={() => handleDragStart(component)}
                  onDragEnd={handleDragEnd}
                  whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <div className="bg-brand-background p-3 rounded-full mr-3">
                      {component.icon}
                    </div>
                    <div>
                      <p className="font-bold">{component.type}</p>
                      <div className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${
                        component.complexity === 'complex' 
                          ? 'bg-red-100 text-red-600' 
                          : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {component.complexity}
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl text-brand-primary">+</div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-8">
            <div className="flex items-center mb-4">
              <div className="bg-brand-secondary bg-opacity-20 p-2 rounded-full">
                <MessageSquare size={18} />
              </div>
              <h3 className="text-xl font-bold ml-2">How It Works</h3>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <ol className="list-decimal ml-5 space-y-3 text-gray-700">
                <li>Drag components from the left panel to "Your Application"</li>
                <li>Remove any components you don't want</li>
                <li>Click "Calculate Estimate" to see cost and timeline</li>
                <li>Submit your selections to request a detailed proposal</li>
              </ol>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-brand-primary bg-opacity-20 p-2 rounded-full">
                <CreditCard size={18} />
              </div>
              <h3 className="text-xl font-bold ml-2">Your Application</h3>
            </div>
            <div className="text-sm bg-gray-100 px-3 py-1 rounded-full">
              {selectedComponents.length} components
            </div>
          </div>
          
          <div 
            className="bg-white p-6 rounded-xl shadow-lg min-h-[320px] border-2 border-dashed border-gray-200"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDragEnd}
          >
            {selectedComponents.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <img 
                  src="public/lovable-uploads/ba101e34-e71d-4901-a186-98804de206f0.png" 
                  alt="Drag here" 
                  className="w-16 h-16 mb-4 opacity-50"
                />
                <p className="text-gray-400">
                  Drag components here to add them to your application
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {selectedComponents.map((component, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center">
                      <div className="bg-brand-background p-3 rounded-full mr-3">
                        {component.icon}
                      </div>
                      <div>
                        <p className="font-bold">{component.type}</p>
                        <p className="text-sm text-gray-500">{component.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeComponent(component)}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      ✕
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
            
            {selectedComponents.length > 0 && !showEstimate && (
              <motion.div 
                className="mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <button 
                  className="w-full bg-brand-primary text-white py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors"
                  onClick={() => setShowEstimate(true)}
                >
                  Calculate Estimate
                </button>
              </motion.div>
            )}
          </div>
          
          {/* Estimate card */}
          {showEstimate && selectedComponents.length > 0 && (
            <motion.div
              className="mt-8 bg-white p-6 rounded-xl shadow-lg border-l-4 border-brand-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-4">Your Estimate</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Project Type:</span>
                  <span>{formData?.projectType || "Custom Solution"}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium">Timeline:</span>
                  <span className="bg-brand-secondary bg-opacity-20 px-3 py-1 rounded-full">
                    {calculateTimeEstimate()}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium">Estimated Cost:</span>
                  <span className="text-lg font-bold">${calculateTotalCost().toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <button className="w-full bg-brand-primary text-white py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center">
                  <span>Request Full Proposal</span>
                  <span className="ml-2">🚀</span>
                </button>
                
                <button 
                  className="w-full bg-transparent border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setShowEstimate(false)}
                >
                  Go back and modify
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectBuilder;
