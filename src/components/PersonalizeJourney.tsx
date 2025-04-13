
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectBuilder from './ProjectBuilder';

const PersonalizeJourney = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    projectType: '',
    hasTeam: null,
    goal: '',
    budget: ''
  });
  const [showProjectBuilder, setShowProjectBuilder] = useState(false);
  
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Form completed, show project builder
      setShowProjectBuilder(true);
    }
  };
  
  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  
  const formSteps = [
    {
      question: "What are you building?",
      type: "dropdown",
      field: "projectType",
      options: ["Website", "Mobile App", "SaaS Platform", "AI Tool", "Not Sure Yet"]
    },
    {
      question: "Do you have a team?",
      type: "radio",
      field: "hasTeam",
      options: ["Yes", "No"]
    },
    {
      question: "Your goal this month?",
      type: "text",
      field: "goal"
    },
    {
      question: "Estimated budget?",
      type: "dropdown",
      field: "budget",
      options: ["< $1k", "$1k–$5k", "$5k–$10k", "$10k+"]
    }
  ];
  
  const currentStep = formSteps[step];
  
  const renderFormField = () => {
    switch(currentStep.type) {
      case "dropdown":
        return (
          <select 
            value={formData[currentStep.field]} 
            onChange={(e) => handleInputChange(currentStep.field, e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary mt-2"
          >
            <option value="">Select an option</option>
            {currentStep.options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        );
      case "radio":
        return (
          <div className="flex flex-col space-y-4 mt-4">
            {currentStep.options.map((option, index) => (
              <label key={index} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  checked={formData[currentStep.field] === option}
                  onChange={() => handleInputChange(currentStep.field, option)}
                  className="w-5 h-5 text-brand-primary"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        );
      case "text":
        return (
          <input
            type="text"
            value={formData[currentStep.field] || ''}
            onChange={(e) => handleInputChange(currentStep.field, e.target.value)}
            placeholder="Type your answer here"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary mt-2"
          />
        );
      default:
        return null;
    }
  };
  
  const isFormStepComplete = () => {
    const value = formData[currentStep.field];
    return value !== null && value !== undefined && value !== '';
  };
  
  if (showProjectBuilder) {
    return <ProjectBuilder formData={formData} />;
  }
  
  return (
    <div className="section-container">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Personalize Your Journey</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          Tell us about your project, and we'll customize our approach to fit your specific needs.
        </p>
      </motion.div>
      
      <div className="max-w-2xl mx-auto mt-12">
        <div className="flex justify-between mb-8">
          {formSteps.map((_, index) => (
            <div 
              key={index}
              className={`w-full h-2 ${index === 0 ? 'rounded-l-full' : ''} ${index === formSteps.length - 1 ? 'rounded-r-full' : ''} ${index <= step ? 'bg-brand-primary' : 'bg-gray-200'} ${index < formSteps.length - 1 ? 'mr-1' : ''}`}
            />
          ))}
        </div>
        
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6">{currentStep.question}</h3>
          {renderFormField()}
          
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              className={`px-6 py-2 rounded-lg transition-colors ${step === 0 ? 'invisible' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Back
            </button>
            
            <button
              onClick={nextStep}
              disabled={!isFormStepComplete()}
              className={`px-6 py-2 rounded-lg transition-colors ${isFormStepComplete() ? 'bg-brand-primary text-white hover:bg-opacity-90' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
            >
              {step < formSteps.length - 1 ? 'Next' : 'Build Your Project'}
            </button>
          </div>
        </motion.div>
        
        <motion.div
          className="mt-6 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          After completing this form, you'll be able to drag and drop components to build your project.
        </motion.div>
      </div>
    </div>
  );
};

export default PersonalizeJourney;
