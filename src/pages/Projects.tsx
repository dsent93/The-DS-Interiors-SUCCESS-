import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Home Renovation",
      category: "Residential",
      location: "Kalamboli",
      image: "https://i.ibb.co/zVmMXrL2/1.jpg",
      description: "Complete renovation of a 2BHK House"
    },
    {
      id: 2,
      title: "Renovation of a 3BHK",
      category: "Residential",
      location: "Platinum Experia Kalamboli",
      image: "https://i.ibb.co/9mMmcGvp/2.jpg",
      description: "Luxurious Transformation of a 3BHK Residence"
    },
    {
      id: 3,
      title: "2BHK INTERIOR DESIGN",
      category: "Commercial",
      location: "Krishna Apt Kamothe",
      image: "https://media.designcafe.com/wp-content/uploads/2020/09/25151904/2bhk-apartment-living-room-interior-design.jpg",
      description: "Exquisite 2BHK Luxury Suite Design Showcasing Local Artistry"
    },
    {
      id: 4,
      title: "2BHK INTERIOR RENOVATE",
      category: "Residential",
      location: "Kharghar",
      image: "https://media.designcafe.com/wp-content/uploads/2021/06/30163556/modern-2bhk-kitchen-design-with-breakfast-countertop-with-two-tall-chairs.jpg",
      description: "Industrial loft transformed into modern living space"
    }
  ];

  // Filter projects based on category and search query
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl text-secondary mb-4">
            Our Projects
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of carefully crafted spaces that reflect our commitment to excellence in interior design.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-primary/20 rounded-full hover:bg-primary/5">
              <Filter size={18} />
              <span>Filter</span>
            </button>
            <div className="flex gap-2">
              <button 
                onClick={() => setSelectedCategory('All')} 
                className={`px-4 py-2 rounded-full ${selectedCategory === 'All' ? 'bg-primary/90 text-white' : 'hover:bg-primary/5'}`}
              >
                All
              </button>
              <button 
                onClick={() => setSelectedCategory('Residential')} 
                className={`px-4 py-2 rounded-full ${selectedCategory === 'Residential' ? 'bg-primary/90 text-white' : 'hover:bg-primary/5'}`}
              >
                Residential
              </button>
              <button 
                onClick={() => setSelectedCategory('Commercial')} 
                className={`px-4 py-2 rounded-full ${selectedCategory === 'Commercial' ? 'bg-primary/90 text-white' : 'hover:bg-primary/5'}`}
              >
                Commercial
              </button>
              <button 
                onClick={() => setSelectedCategory('Hospitality')} 
                className={`px-4 py-2 rounded-full ${selectedCategory === 'Hospitality' ? 'bg-primary/90 text-white' : 'hover:bg-primary/5'}`}
              >
                Hospitality
              </button>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-primary/20"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6">
                    <p className="text-white/80 text-sm mb-2">{project.category} • {project.location}</p>
                    <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-white/90 text-sm">{project.description}</p>
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

export default Projects;
