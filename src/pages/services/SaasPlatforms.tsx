
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cloud, Users, Lock, BarChart3, Cpu, Repeat } from 'lucide-react';
import Navbar from '../../components/Navbar';

const SaasPlatforms = () => {
  return (
    <div className="min-h-screen bg-brand-background">
      <Navbar />
      
      {/* Hero section */}
      <div className="bg-gradient-to-br from-brand-accent to-brand-primary text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              SaaS Platform Development
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We build scalable, secure, and innovative Software-as-a-Service platforms that transform businesses and create recurring revenue.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/contact" className="bg-white text-brand-primary font-medium px-8 py-3 rounded-lg inline-block hover:bg-opacity-90 transition-colors">
                Build Your SaaS
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Key features */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Benefits of SaaS</h2>
          
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
                  <Repeat className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Recurring Revenue</h3>
              </div>
              <p className="text-gray-600">Establish predictable income streams through subscription-based pricing models.</p>
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
                  <Cloud className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Scalability</h3>
              </div>
              <p className="text-gray-600">Easily grow your user base without significant infrastructure changes.</p>
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
                  <Users className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Multi-tenancy</h3>
              </div>
              <p className="text-gray-600">Serve multiple customers from a single instance while keeping data secure and separate.</p>
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
                  <Lock className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Security</h3>
              </div>
              <p className="text-gray-600">Enterprise-grade security with regular updates, data encryption, and compliance.</p>
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
                  <BarChart3 className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Analytics</h3>
              </div>
              <p className="text-gray-600">Built-in reporting and insights to help you understand user behavior and optimize performance.</p>
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
                  <Cpu className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Integration</h3>
              </div>
              <p className="text-gray-600">Connect with other tools and systems through APIs and webhooks for a seamless workflow.</p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* How we work */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our SaaS Development Process</h2>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Validate Your Idea",
                desc: "We help you validate your SaaS concept through market research and competitive analysis to ensure product-market fit."
              },
              {
                step: "02",
                title: "Define MVP Features",
                desc: "Identify core features for your minimum viable product to quickly launch and start gathering user feedback."
              },
              {
                step: "03",
                title: "Architecture & Design",
                desc: "Create a scalable system architecture and user experience design that supports your business goals."
              },
              {
                step: "04",
                title: "Development & Testing",
                desc: "Build your SaaS platform using modern technologies, with continuous testing for quality assurance."
              },
              {
                step: "05",
                title: "Launch & Iteration",
                desc: "Deploy your SaaS and implement a continuous improvement cycle based on user feedback and analytics."
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="flex mb-12 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-brand-primary text-white text-2xl font-bold h-14 w-14 flex items-center justify-center rounded-full flex-shrink-0 mr-6">
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
      
      {/* Technologies */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technologies We Use</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              "Node.js", "React", "Python", "Django",
              "PostgreSQL", "MongoDB", "AWS", "Docker",
              "Kubernetes", "GraphQL", "Redis", "Stripe"
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="service-card h-16 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Case Study */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured SaaS Case Study</h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop" 
                  alt="SaaS Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-4">PropManager</h3>
                <p className="mb-4 text-gray-600">
                  A comprehensive property management SaaS for landlords and property managers to streamline operations.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 text-brand-primary">✓</div>
                    <p>Tenant portal with maintenance requests</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 text-brand-primary">✓</div>
                    <p>Automated rent collection & accounting</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 text-brand-primary">✓</div>
                    <p>Property inspection management</p>
                  </div>
                </div>
                
                <p className="mb-6 text-gray-600">
                  <strong>Results:</strong> 200% client growth in the first year with 92% customer retention rate.
                </p>
                
                <Link to="/portfolio" className="btn-primary">
                  View Case Study
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <div className="py-16 bg-brand-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your SaaS Platform?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 opacity-90">
            Let's turn your SaaS idea into a scalable, profitable business. Our team will help you from concept to launch.
          </p>
          <Link to="/contact" className="bg-white text-brand-primary font-medium px-8 py-3 rounded-lg inline-block hover:bg-opacity-90 transition-colors">
            Schedule Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SaasPlatforms;
