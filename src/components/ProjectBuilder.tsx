
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const availableComponents = [
  { type: "Login Page", icon: "🔑", cost: 300 },
  { type: "Booking System", icon: "📅", cost: 700 },
  { type: "Admin Dashboard", icon: "📊", cost: 800 },
  { type: "Live Chat", icon: "💬", cost: 400 },
  { type: "Payment", icon: "💳", cost: 500 },
  { type: "AI Features", icon: "🤖", cost: 900 }
];

const ProjectBuilder = ({ formData }) => {
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [draggingComponent, setDraggingComponent] = useState(null);
  const [showEstimate, setShowEstimate] = useState(false);
  
  const handleDragStart = (component) => {
    setDraggingComponent(component);
  };
  
  const handleDragEnd = () => {
    if (draggingComponent) {
      // Add component to selected if not already there
      if (!selectedComponents.some(comp => comp.type === draggingComponent.type)) {
        setSelectedComponents([...selectedComponents, draggingComponent]);
      }
      setDraggingComponent(null);
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
  
  const totalCost = calculateTotalCost();
  
  const calculateTimeEstimate = () => {
    const totalPoints = selectedComponents.length;
    
    if (totalPoints <= 1) return "2-3 weeks";
    if (totalPoints <= 3) return "4-6 weeks";
    if (totalPoints <= 5) return "6-8 weeks";
    return "8-12 weeks";
  };
  
  return (
    <div className="section-container">
      <div className="section-title">
        <h2>Drag to Build Your Product</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div>
          <h3 className="text-xl font-bold mb-4">Available Components</h3>
          <div className="bg-white p-6 rounded-xl shadow-lg min-h-[300px]">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {availableComponents.map((component, index) => (
                <motion.div
                  key={index}
                  className="service-card flex flex-col items-center text-center p-4 cursor-move"
                  draggable
                  onDragStart={() => handleDragStart(component)}
                  onDragEnd={handleDragEnd}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-3xl mb-2">{component.icon}</div>
                  <p className="font-medium text-sm">{component.type}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Instructions</h3>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <ol className="list-decimal ml-5 space-y-2">
                <li>Drag components you need to the "Your Project" area</li>
                <li>Remove any components you don't want</li>
                <li>See your estimated cost and timeline</li>
                <li>Submit to request a detailed proposal</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Your Project</h3>
          <div 
            className="bg-white p-6 rounded-xl shadow-lg min-h-[300px] border-2 border-dashed border-gray-300 flex flex-col"
            onDragOver={(e) => e.preventDefault()}
          >
            {selectedComponents.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-400 text-center">
                  Drag and drop components here to build your project
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedComponents.map((component, index) => (
                  <motion.div
                    key={index}
                    className="service-card flex items-center justify-between p-4 bg-brand-background"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">{component.icon}</div>
                      <span>{component.type}</span>
                    </div>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeComponent(component)}
                    >
                      ✕
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
            
            {selectedComponents.length > 0 && (
              <motion.div 
                className="mt-auto pt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <button 
                  className="btn-secondary w-full"
                  onClick={() => setShowEstimate(true)}
                >
                  Get Estimate
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
                  <span>{formData.projectType || "Custom Solution"}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium">Timeline:</span>
                  <span>{calculateTimeEstimate()}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium">Estimated Cost:</span>
                  <span className="text-lg font-bold">${totalCost.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium">Components:</span>
                  <span>{selectedComponents.length}</span>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="btn-primary w-full">
                  Request Full Proposal 🚀
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectBuilder;
