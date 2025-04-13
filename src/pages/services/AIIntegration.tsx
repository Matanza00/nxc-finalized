
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, MessageSquare, Bot, Search, FileText, Sparkles } from 'lucide-react';
import Navbar from '../../components/Navbar';

const AIIntegration = () => {
  return (
    <div className="min-h-screen bg-brand-background">
      <Navbar />
      
      {/* Hero section */}
      <div className="bg-gradient-to-br from-[#6B46C1] to-brand-primary text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              AI Integration
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Enhance your applications with cutting-edge AI capabilities, from natural language processing to intelligent automation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/contact" className="bg-white text-[#6B46C1] font-medium px-8 py-3 rounded-lg inline-block hover:bg-opacity-90 transition-colors">
                Explore AI Solutions
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* AI Services */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">AI Integration Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#6B46C1] bg-opacity-10 p-3 rounded-full mr-4">
                  <MessageSquare className="text-[#6B46C1]" size={24} />
                </div>
                <h3 className="text-xl font-bold">Conversational AI</h3>
              </div>
              <p className="text-gray-600">Intelligent chatbots and virtual assistants powered by advanced NLP models like GPT.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#6B46C1] bg-opacity-10 p-3 rounded-full mr-4">
                  <Bot className="text-[#6B46C1]" size={24} />
                </div>
                <h3 className="text-xl font-bold">Recommendation Systems</h3>
              </div>
              <p className="text-gray-600">Personalized content and product recommendations based on user behavior and preferences.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#6B46C1] bg-opacity-10 p-3 rounded-full mr-4">
                  <Search className="text-[#6B46C1]" size={24} />
                </div>
                <h3 className="text-xl font-bold">Intelligent Search</h3>
              </div>
              <p className="text-gray-600">Semantic search capabilities that understand context and user intent for better results.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#6B46C1] bg-opacity-10 p-3 rounded-full mr-4">
                  <FileText className="text-[#6B46C1]" size={24} />
                </div>
                <h3 className="text-xl font-bold">Document Processing</h3>
              </div>
              <p className="text-gray-600">Extract insights from documents with OCR, text analysis, and automated data extraction.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#6B46C1] bg-opacity-10 p-3 rounded-full mr-4">
                  <Brain className="text-[#6B46C1]" size={24} />
                </div>
                <h3 className="text-xl font-bold">Predictive Analytics</h3>
              </div>
              <p className="text-gray-600">Forecast trends and outcomes with machine learning models trained on your data.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#6B46C1] bg-opacity-10 p-3 rounded-full mr-4">
                  <Sparkles className="text-[#6B46C1]" size={24} />
                </div>
                <h3 className="text-xl font-bold">Custom AI Solutions</h3>
              </div>
              <p className="text-gray-600">Tailored AI systems designed for your unique business challenges and goals.</p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Featured Demo */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">AI in Action</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-6">
                  <h3 className="text-2xl font-bold mb-4">AI Content Generator</h3>
                  <p className="mb-6 text-gray-600">
                    Our AI content generator helps marketing teams create engaging posts with just a few prompts. See how it transforms brief inputs into complete, ready-to-publish content.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-2">
                      <div className="mt-1 text-brand-primary">✓</div>
                      <p>Generate SEO-optimized blog posts</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-1 text-brand-primary">✓</div>
                      <p>Create social media campaigns</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-1 text-brand-primary">✓</div>
                      <p>Adapt tone for different audiences</p>
                    </div>
                  </div>
                  
                  <Link to="/contact" className="btn-primary">
                    See It Live
                  </Link>
                </div>
                
                <div className="lg:w-1/2 bg-gray-100 flex items-center justify-center p-6">
                  <div className="w-full h-[300px] rounded-lg bg-white shadow p-4 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold">Content Generator</h4>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 mb-4 text-sm">
                      <p className="text-gray-500">Topic: Summer Product Launch</p>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded p-3 text-sm overflow-y-auto">
                      <p className="mb-2 font-medium">Generated Content:</p>
                      <p className="text-gray-700">Get ready for the hottest products of the season! Our summer collection launches next week, bringing fresh designs and innovative features...</p>
                    </div>
                    <div className="mt-4">
                      <button className="bg-[#6B46C1] text-white px-4 py-2 rounded text-sm w-full">
                        Generate More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* AI Models and Tech */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">AI Models & Technologies</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "GPT-4", "BERT", "TensorFlow", "PyTorch",
              "OpenAI API", "Hugging Face", "Langchain", "Azure ML",
              "Google Vertex AI", "Computer Vision", "NLP", "Semantic Web"
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="service-card h-20 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="font-medium text-center">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Integration Process */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our AI Integration Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Assess & Define",
                  icon: <Brain size={40} className="text-[#6B46C1]" />,
                  desc: "Identify opportunities for AI to add value to your business."
                },
                {
                  title: "Design & Develop",
                  icon: <Bot size={40} className="text-[#6B46C1]" />,
                  desc: "Build and train custom AI models or integrate existing solutions."
                },
                {
                  title: "Deploy & Optimize",
                  icon: <Sparkles size={40} className="text-[#6B46C1]" />,
                  desc: "Implement AI features and continuously improve based on results."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="service-card flex flex-col items-center text-center p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <div className="py-16 bg-[#6B46C1] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Products with AI?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 opacity-90">
            Let's discuss how AI can transform your business operations and create new opportunities for growth.
          </p>
          <Link to="/contact" className="bg-white text-[#6B46C1] font-medium px-8 py-3 rounded-lg inline-block hover:bg-opacity-90 transition-colors">
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AIIntegration;
