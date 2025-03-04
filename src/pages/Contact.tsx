import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin as LinkedIn } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl text-secondary mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to transform your space? Contact us for inquiries about our services or to schedule a consultation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary/20"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary/20"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-primary/90 text-white rounded-lg hover:bg-primary transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-display text-secondary">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-secondary">dsenterprises24.in@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="text-secondary">+91 9372823338</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-secondary">Shop No 3 Plot No 20-21, Sawan Heritage Sector 15 Kalamboli, Navi Mumbai-410218</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-display text-secondary">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: <Instagram size={24} />, label: "Instagram", url: "https://www.instagram.com/shri_nirmal_/?hl=fr" },
                  { icon: <Facebook size={24} />, label: "Facebook" },
                  { icon: <LinkedIn size={24} />, label: "LinkedIn" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;