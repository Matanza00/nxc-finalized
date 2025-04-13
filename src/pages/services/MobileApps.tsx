
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smartphone, Layers, Database, BarChart3, Zap, Shield } from 'lucide-react';
import Navbar from '../../components/Navbar';

const MobileApps = () => {
  return (
    <div className="min-h-screen bg-brand-background">
      <Navbar />
      
      {/* Hero section */}
      <div className="bg-gradient-to-br from-brand-secondary to-brand-accent text-brand-text pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Mobile App Development
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We build native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/contact" className="bg-brand-primary text-white font-medium px-8 py-3 rounded-lg inline-block hover:bg-opacity-90 transition-colors">
                Start Your App
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Features grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Mobile App Development Features</h2>
          
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
                  <Smartphone className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Cross-Platform Apps</h3>
              </div>
              <p className="text-gray-600">Build once, deploy everywhere with React Native and Flutter. Reach both iOS and Android users with a single codebase.</p>
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
                  <Layers className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Native Development</h3>
              </div>
              <p className="text-gray-600">Pure native apps for iOS and Android with Swift, Kotlin, and Java for maximum performance and platform integration.</p>
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
                  <Database className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Backend Integration</h3>
              </div>
              <p className="text-gray-600">Powerful server-side solutions with API development, database design, and cloud services integration.</p>
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
                  <BarChart3 className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Analytics & Insights</h3>
              </div>
              <p className="text-gray-600">Integrate analytics to track user behavior, feature usage, and app performance to drive data-informed decisions.</p>
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
                  <Zap className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Performance Optimization</h3>
              </div>
              <p className="text-gray-600">Ensure fast load times, smooth animations, and efficient battery usage through performance tuning.</p>
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
                  <Shield className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Security & Compliance</h3>
              </div>
              <p className="text-gray-600">Implement robust security measures and ensure compliance with GDPR, HIPAA, or other relevant regulations.</p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* App showcase */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Mobile App Portfolio</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                title: "GaragePal",
                type: "Booking App",
                image: "https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=800&auto=format&fit=crop"
              },
              {
                title: "HealthSync",
                type: "Healthcare App",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop"
              },
              {
                title: "DeliverEase",
                type: "Delivery App",
                image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&auto=format&fit=crop"
              }
            ].map((app, index) => (
              <motion.div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg aspect-[9/16] max-w-[300px] mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="text-xl font-bold">{app.title}</h3>
                  <p>{app.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-primary">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </div>
      
      {/* Technologies */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technologies We Use</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "React Native",
              "Flutter",
              "Swift",
              "Kotlin",
              "Firebase",
              "GraphQL",
              "AWS",
              "Google Cloud"
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="text-center service-card h-24 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <div className="py-16 bg-brand-secondary text-brand-text">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 opacity-90">
            Turn your app idea into reality. Our team will guide you through the entire process from concept to launch.
          </p>
          <Link to="/contact" className="bg-brand-primary text-white font-medium px-8 py-3 rounded-lg inline-block hover:bg-opacity-90 transition-colors">
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileApps;
