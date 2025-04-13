
import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="min-h-screen bg-brand-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-brand-text">
            Let's Connect
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="text-brand-primary" />
                    <span>1 (519) 671-5431</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-brand-primary" />
                    <span>London, Canada</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-brand-primary" />
                    <span>contact@nxcsol.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-primary">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your Name" 
                      className="mt-2" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your Email" 
                      className="mt-2" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Your Message" 
                      className="mt-2 min-h-[120px]" 
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full hover:bg-brand-primary/90"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
