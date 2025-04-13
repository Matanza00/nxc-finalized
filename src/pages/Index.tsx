
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import IdeaToImpact from '../components/IdeaToImpact';
import ServiceWheel from '../components/ServiceWheel';
import PortfolioHighlight from '../components/PortfolioHighlight';
import PersonalizeJourney from '../components/PersonalizeJourney';

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-background">
      <Navbar />
      <Hero />
      <IdeaToImpact />
      <ServiceWheel />
      
      {/* Interactive Demo Section */}
      <div className="section-container">
        <div className="section-title">
          <h2>See AI & SaaS In Action</h2>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            {
              label: "Smart Booking Flow",
              description: "Auto-filled garages, slots & map routes",
              preview: "https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=800&auto=format&fit=crop"
            },
            {
              label: "AI Content Generator",
              description: "Generate posts using GPT and schedule them",
              preview: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop"
            },
            {
              label: "3D Viewer + Configurator",
              description: "Live rotate and change shoe or product colors",
              preview: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop"
            }
          ].map((demo, index) => (
            <motion.div
              key={index}
              className="service-card overflow-hidden"
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={demo.preview} 
                  alt={demo.label} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{demo.label}</h3>
                <p className="text-gray-600">{demo.description}</p>
                <button className="mt-4 bg-brand-secondary text-brand-text px-4 py-2 rounded hover:bg-opacity-90 transition">
                  Try Demo
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <PortfolioHighlight />
      <PersonalizeJourney />
      
      {/* Service Badges */}
      <div className="section-container">
        <div className="section-title">
          <h2>What We Offer</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Web Development",
            "Mobile Apps",
            "SaaS MVPs",
            "AI Integrations",
            "Workflow Automation",
            "3D Web Experiences",
            "UI/UX Design",
            "Video Production"
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white px-4 py-2 rounded-full shadow cursor-pointer hover:bg-brand-primary hover:text-white transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {service}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-brand-text text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">NXCSOL</h3>
              <p className="max-w-xs">Where innovation meets execution. Building digital products that make a difference.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="/services/web-development" className="hover:text-brand-primary">Web Development</a></li>
                <li><a href="/services/mobile-apps" className="hover:text-brand-primary">Mobile Apps</a></li>
                <li><a href="/services/saas-platforms" className="hover:text-brand-primary">SaaS Platforms</a></li>
                <li><a href="/services/ai-integration" className="hover:text-brand-primary">AI Integration</a></li>
                <li><a href="/services/3d-experiences" className="hover:text-brand-primary">3D Experiences</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-brand-primary">About</a></li>
                <li><a href="/portfolio" className="hover:text-brand-primary">Portfolio</a></li>
                <li><a href="/contact" className="hover:text-brand-primary">Contact</a></li>
                <li><a href="/careers" className="hover:text-brand-primary">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>hello@nxcsol.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Innovation Street</li>
                <li>San Francisco, CA 94105</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} NXCSOL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
