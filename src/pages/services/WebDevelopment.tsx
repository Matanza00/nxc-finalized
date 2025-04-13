
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Palette, LineChart, BarChart, Laptop, Globe } from 'lucide-react';
import Navbar from '../../components/Navbar';

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-brand-background">
      <Navbar />
      
      {/* Hero section */}
      <div className="bg-gradient-to-br from-brand-primary to-brand-accent text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Web Development
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We build responsive, high-performance websites and web applications that deliver exceptional user experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/contact" className="bg-white text-brand-primary font-medium px-8 py-3 rounded-lg inline-block hover:bg-opacity-90 transition-colors">
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Services grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Web Development Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-brand-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <Globe className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Business Websites</h3>
              </div>
              <p className="text-gray-600">Professional websites that effectively showcase your brand, products, and services with a focus on conversion.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-brand-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <LineChart className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">E-Commerce</h3>
              </div>
              <p className="text-gray-600">Scalable online stores with secure payment gateways, inventory management, and seamless shopping experiences.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-brand-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <Laptop className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Web Applications</h3>
              </div>
              <p className="text-gray-600">Custom web applications with powerful functionality, from booking systems to admin dashboards and more.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-brand-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <Palette className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">UI/UX Design</h3>
              </div>
              <p className="text-gray-600">User-centric design with beautiful interfaces that encourage engagement and simplify complex interactions.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-brand-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <Code className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Frontend Development</h3>
              </div>
              <p className="text-gray-600">Responsive, fast-loading frontends built with modern frameworks like React, Vue, and Angular.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-brand-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <BarChart className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">SEO & Analytics</h3>
              </div>
              <p className="text-gray-600">Performance optimization, analytics integration, and SEO best practices to improve visibility and track results.</p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Process section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Development Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-[15px] top-0 bottom-0 w-1 bg-brand-primary bg-opacity-20 md:left-1/2 md:-ml-[0.5px]"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {[
                  {
                    title: "Discovery & Planning",
                    desc: "We analyze your requirements, target audience, and business goals to create a strategic development plan."
                  },
                  {
                    title: "Design & Prototyping",
                    desc: "Our designers create wireframes and interactive prototypes to visualize the user experience."
                  },
                  {
                    title: "Development",
                    desc: "Our developers bring the designs to life using the latest technologies and coding standards."
                  },
                  {
                    title: "Testing",
                    desc: "Rigorous testing across devices and browsers to ensure functionality and responsiveness."
                  },
                  {
                    title: "Launch & Support",
                    desc: "We handle deployment and provide ongoing maintenance and support."
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={index}
                    className="relative flex flex-col md:flex-row"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex md:justify-end md:w-1/2 md:pr-8">
                      <div className="md:text-right md:mt-0 mt-8 md:mb-0 mb-8 md:ml-auto">
                        {index % 2 === 0 && (
                          <>
                            <h3 className="text-xl font-bold">{step.title}</h3>
                            <p className="text-gray-600 mt-2">{step.desc}</p>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-10 md:mt-0">
                      <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 md:pl-8">
                      <div className="md:ml-0 ml-10">
                        {index % 2 === 1 && (
                          <>
                            <h3 className="text-xl font-bold">{step.title}</h3>
                            <p className="text-gray-600 mt-2">{step.desc}</p>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <div className="py-16 bg-brand-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Next Website?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 opacity-90">
            Let's create a website that drives results for your business. Our team is ready to bring your vision to life.
          </p>
          <Link to="/contact" className="bg-white text-brand-primary font-medium px-8 py-3 rounded-lg inline-block hover:bg-opacity-90 transition-colors">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
