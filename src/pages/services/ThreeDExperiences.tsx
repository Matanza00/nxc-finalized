
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cube, Eye, RotateCw, PenTool, Laptop, Film } from 'lucide-react';
import Navbar from '../../components/Navbar';

const ThreeDExperiences = () => {
  return (
    <div className="min-h-screen bg-brand-background">
      <Navbar />
      
      {/* Hero section */}
      <div className="bg-gradient-to-br from-brand-secondary via-brand-accent to-brand-primary text-brand-text pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              3D Experiences
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Immersive 3D experiences for web, product visualization, and interactive animations to captivate your audience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/contact" className="bg-brand-text text-white font-medium px-8 py-3 rounded-lg inline-block hover:bg-opacity-90 transition-colors">
                Create 3D Experiences
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* 3D Services */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">3D Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-brand-secondary bg-opacity-20 p-3 rounded-full mr-4">
                  <Laptop className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">WebGL Experiences</h3>
              </div>
              <p className="text-gray-600">Interactive 3D environments directly in the browser for product showcases and immersive storytelling.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-brand-secondary bg-opacity-20 p-3 rounded-full mr-4">
                  <Cube className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">3D Product Modeling</h3>
              </div>
              <p className="text-gray-600">Photorealistic 3D models of your products for e-commerce, marketing, and virtual showrooms.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-brand-secondary bg-opacity-20 p-3 rounded-full mr-4">
                  <RotateCw className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Product Configurators</h3>
              </div>
              <p className="text-gray-600">Interactive tools allowing customers to customize products in real-time 3D before purchasing.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-brand-secondary bg-opacity-20 p-3 rounded-full mr-4">
                  <Eye className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">AR/VR Experiences</h3>
              </div>
              <p className="text-gray-600">Augmented and virtual reality applications for immersive brand experiences and product visualization.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-brand-secondary bg-opacity-20 p-3 rounded-full mr-4">
                  <Film className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">3D Animation</h3>
              </div>
              <p className="text-gray-600">Captivating 3D animations created with Blender and Unreal Engine for marketing videos and presentations.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-brand-secondary bg-opacity-20 p-3 rounded-full mr-4">
                  <PenTool className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">3D Design</h3>
              </div>
              <p className="text-gray-600">Custom 3D design services for product visualization, architectural rendering, and promotional materials.</p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Example Projects */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">3D Project Showcase</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Primade Bottle Model",
                desc: "Interactive 3D bottle visualization for e-commerce product page",
                image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&auto=format&fit=crop"
              },
              {
                title: "Shoe Configurator",
                desc: "Customizable 3D shoe model with color and material options",
                image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop"
              },
              {
                title: "Falcon Render",
                desc: "Photorealistic 3D aircraft model for marketing materials",
                image: "https://images.unsplash.com/photo-1559163499-413811fb2344?w=800&auto=format&fit=crop"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.desc}</p>
                  <button className="text-brand-primary font-medium flex items-center">
                    View Project
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Technologies */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">3D Technologies We Use</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Three.js", "WebGL", "Blender", "React Three Fiber", 
              "Unreal Engine", "Unity", "GLSL", "Babylon.js",
              "Maya", "GLTF", "Substance Painter", "AR/VR"
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
      
      {/* Process */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our 3D Creation Process</h2>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Concept & Planning",
                desc: "Define project requirements, visual style, and technical specifications for your 3D experience."
              },
              {
                step: "02",
                title: "Modeling & Texturing",
                desc: "Create 3D models with detailed textures that accurately represent your products or vision."
              },
              {
                step: "03",
                title: "Rigging & Animation",
                desc: "Add movement and interactivity to bring your 3D models to life."
              },
              {
                step: "04",
                title: "Lighting & Rendering",
                desc: "Perfect the visual appearance with proper lighting and high-quality rendering."
              },
              {
                step: "05",
                title: "Integration & Optimization",
                desc: "Incorporate 3D elements into your website or application with performance optimization."
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="flex mb-10 md:mb-16 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white text-xl font-bold h-12 w-12 flex items-center justify-center rounded-full flex-shrink-0 mr-6">
                  {process.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <div className="py-16 bg-gradient-to-r from-brand-secondary to-brand-accent text-brand-text">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Immersive 3D Experiences?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 opacity-90">
            Let's bring your products and ideas to life with stunning 3D visualization that engages your audience.
          </p>
          <Link to="/contact" className="bg-brand-text text-white font-medium px-8 py-3 rounded-lg inline-block hover:bg-opacity-90 transition-colors">
            Start Your 3D Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThreeDExperiences;
