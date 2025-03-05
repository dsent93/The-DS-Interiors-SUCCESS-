import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Palette, Layout } from 'lucide-react';

const Designs = () => {
  const designStyles = [
    {
      id: 1,
      title: "Modern Minimalist",
      description: "Clean lines and uncluttered spaces define this contemporary style",
      image: "https://imgur.com/a/1vVi87T"
    },
    {
      id: 2,
      title: "Scandinavian",
      description: "Light, airy spaces with natural elements and functional design",
      image: "https://ibb.co/FS4QXt5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Industrial Chic",
      description: "Raw materials meet refined design for an urban aesthetic",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Coward Replish Style",
      description: "Authorized Camen",
      image: "https://plus.unsplash.com/premium_photo-1683134520102-a7b65579c4bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Sanco Denish Puster",
      description: "Usaine",
      image: "https://images.pexels.com/photos/227396/pexels-photo-227396.jpeg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl text-secondary mb-4">
            Design Styles
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of design styles and find the perfect inspiration for your space.
          </p>
        </motion.div>

        {/* Design Tools */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Upload size={24} />,
              title: "Upload Your Space",
              description: "Share photos of your space for personalized design recommendations"
            },
            {
              icon: <Palette size={24} />,
              title: "Explore Materials",
              description: "Browse our selection of premium materials and finishes"
            },
            {
              icon: <Layout size={24} />,
              title: "3D Visualization",
              description: "See your design come to life with our 3D rendering service"
            }
          ].map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                {tool.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
              <p className="text-gray-600">{tool.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Design Styles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designStyles.map((style, index) => (
            <motion.div
              key={style.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={style.image} 
                  alt={style.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">{style.title}</h3>
                    <p className="text-white/90">{style.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Designs;