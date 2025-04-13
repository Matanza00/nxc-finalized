
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import IdeaToImpact from '../components/IdeaToImpact';
import ServiceWheel from '../components/ServiceWheel';
import PortfolioHighlight from '../components/PortfolioHighlight';
import PersonalizeJourney from '../components/PersonalizeJourney';
import InteractiveDemo from '../components/InteractiveDemo';
import LetsBuildTogether from '../components/LetsBuildTogether';

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-background">
      <Navbar />
      <Hero />
      <IdeaToImpact />
      <ServiceWheel />
      <InteractiveDemo />
      <PortfolioHighlight />
      <PersonalizeJourney />
      <LetsBuildTogether />
      
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
            "3D Animation"
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
