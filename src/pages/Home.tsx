import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-secondary mb-6">
                Transform Your Space Into Art
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Elevate your living spaces with our award-winning interior design services. 
                Where luxury meets functionality.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://calendly.com/dsenterprises24-in/30min" 
                  className="px-8 py-3 bg-primary/90 text-white rounded-full hover:bg-primary transition-colors inline-flex items-center gap-2"
                >
                  Book Consultation <ArrowRight size={20} />
                </a>
                <a 
                  href="/projects" 
                  className="px-8 py-3 border border-primary/20 text-secondary rounded-full hover:bg-primary/5 transition-colors"
                >
                  View Projects
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Luxury Interior Design"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="text-yellow-400" size={20} />
                  <span className="font-semibold">4.5/5 Rating</span>
                </div>
                <p className="text-sm text-gray-600">From 150+ Happy Clients</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <h2 className="font-display text-4xl text-secondary mb-12 text-center">
            Our Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Minimalist Villa",
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                category: "Residential"
              },
              {
                title: "Luxury Penthouse",
                image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                category: "Residential"
              },
              {
                title: "Contemporary Office",
                image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                category: "Commercial"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 p-6">
                      <p className="text-white/80 text-sm mb-2">{project.category}</p>
                      <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;