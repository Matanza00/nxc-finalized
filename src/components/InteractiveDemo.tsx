
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const demoItems = [
  {
    label: "Smart Booking Flow",
    description: "Auto-filled garages, slots & map routes",
    preview: "https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=800&auto=format&fit=crop",
    features: ["Map Integration", "Garage API", "Payment Processing"],
    color: "#FFD580"
  },
  {
    label: "AI Content Generator",
    description: "Generate posts using GPT and schedule them",
    preview: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop",
    features: ["GPT Integration", "Scheduling", "Templates"],
    color: "#FF7755"
  },
  {
    label: "3D Viewer + Configurator",
    description: "Live rotate and change shoe or product colors",
    preview: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop",
    features: ["WebGL Rendering", "Color Picker", "Lighting Effects"],
    color: "#ff9980"
  }
];

const InteractiveDemo = () => {
  const [activeDemo, setActiveDemo] = useState(demoItems[0]);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <div className="section-container overflow-hidden">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>See AI & SaaS In Action</h2>
      </motion.div>

      <div className="mt-12 max-w-6xl mx-auto">
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="max-w-full"
        >
          <CarouselContent>
            {demoItems.map((demo, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-0">
                    <motion.div
                      className="overflow-hidden rounded-xl cursor-pointer"
                      whileHover={{ 
                        scale: 1.03,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      }}
                      onClick={() => setActiveDemo(demo)}
                    >
                      <div 
                        className="h-[220px] relative overflow-hidden" 
                        style={{ backgroundColor: demo.color }}
                      >
                        <img
                          src={demo.preview}
                          alt={demo.label}
                          className="w-full h-full object-cover mix-blend-multiply opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white">
                          <h3 className="text-xl font-bold">{demo.label}</h3>
                          <p className="text-sm opacity-80">{demo.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative -left-0 top-0 translate-y-0 bg-brand-primary/10 hover:bg-brand-primary/20 text-brand-primary border-none" />
            <CarouselNext className="relative -right-0 top-0 translate-y-0 bg-brand-primary/10 hover:bg-brand-primary/20 text-brand-primary border-none" />
          </div>
        </Carousel>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">{activeDemo.label}</h3>
            <p className="text-gray-700 mb-8">{activeDemo.description}</p>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Key Features:</h4>
              {activeDemo.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div 
                    className="w-3 h-3 rounded-full mr-3"
                    style={{ backgroundColor: activeDemo.color }}
                  ></div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <button className="mt-8 bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
              Try Demo
            </button>
          </motion.div>
          
          <motion.div 
            className="relative h-[400px] order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div 
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl" 
              style={{ perspective: "1000px" }}
            >
              <motion.div 
                className="relative w-full h-full"
                animate={{ 
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [0, -5, 0, 5, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut"
                }}
              >
                <img
                  src={activeDemo.preview}
                  alt={activeDemo.label}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0"
                  style={{ 
                    background: `radial-gradient(circle at ${hoveredFeature !== null ? '50% 50%' : '70% 30%'}, 
                    transparent 0%, rgba(0,0,0,0.6) 100%)`,
                    mixBlendMode: "multiply"
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl text-white">
                    <h3 className="text-2xl font-bold">{activeDemo.label}</h3>
                    <p className="mt-2">Interactive Preview</p>
                    <button className="mt-4 bg-white text-brand-primary px-4 py-2 rounded-lg text-sm">
                      Explore Features
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemo;
