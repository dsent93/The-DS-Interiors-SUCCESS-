import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Palette, Layout } from 'lucide-react';

const Designs = () => {
  const designStyles = [
    {
      id: 1,
      title: "Opal Glow Canvas",
      description: "Elegance and Warmth to Every Space",
      image: "https://i.ibb.co/8vLcr1H/LIGHT-GOLDEN-CANVAS.jpg"
    },
    {
      id: 2,
      title: "Blue Malachite",
      description: "Beauty in Every Shade",
      image: "https://i.ibb.co/ywFzpJ6/BLUE-MALACHITE.jpg"
    },
    {
      id: 3,
      title: "Blue Tree Canvas",
      description: "Where imagination grows, and creativity takes its roots",
      image: "https://i.ibb.co/Kzh1936q/BLUE-TREE-CANVAS.jpg"
    },
    {
      id: 4,
      title: "Fantasy Cloudscape",
      description: " Custom Cloud-inspired designs that elevate your environment",
      image: "https://i.ibb.co/Tq7zKHJV/Fantasy-Cloud-Scape.jpg"
    },
    {
      id: 5,
      title: "Elysian Luxe",
      description: "Exude Sophistication and Opulence",
      image: "https://i.ibb.co/wrxWY7tg/CANTRAVAL-TEXTURE.jpg"
    },
    {
      id: 6,
      title: "Stencil Wall",
      description: "Bold, Delicate motif and Intricate Design",
      image: "https://i.ibb.co/cK1NzMRm/STENCIL-WALL.jpg"
    },
    {
      id: 7,
      title: "Alabaster Stripes",
      description: "Elegant Simplicity in Every Line",
      image: "https://i.ibb.co/XrMvB64T/TEXTURAL-WHITE-CANVAS.jpg"
    },
    {
      id: 8,
      title: "Orange Pastel",
      description: "Soothing Blend of Warmth and Calm to any Space",
      image: "https://i.ibb.co/XrwtqzjW/ORANGE-PASTEL.jpg"
    },
    {
      id: 9,
      title: "Damara Motif",
      description: " A Fusion of Tradition and Elegance",
      image: "https://i.ibb.co/3yg76jdN/Damasak-Pattern.jpg"
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