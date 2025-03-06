import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Palette, Layout } from 'lucide-react';

const Designs = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newDesign, setNewDesign] = useState({ title: '', description: '', image: '' });
  const [designStyles, setDesignStyles] = useState([
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
  ]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'dhajare94@gmail.com' && password === 'Sbr00216@') {
      setIsAuthenticated(true);
      setShowLogin(false);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleUpload = () => {
    if (!isAuthenticated) {
      setShowLogin(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDesignStyles([...designStyles, { id: designStyles.length + 1, ...newDesign }]);
    setNewDesign({ title: '', description: '', image: '' });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl text-secondary mb-4">Design Styles</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our curated collection of design styles and find the perfect inspiration for your space.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[{
            icon: <Upload size={24} />, title: "Upload Your Space", description: "Share photos of your space for personalized design recommendations", onClick: handleUpload
          }, {
            icon: <Palette size={24} />, title: "Explore Materials", description: "Browse our selection of premium materials and finishes"
          }, {
            icon: <Layout size={24} />, title: "3D Visualization", description: "See your design come to life with our 3D rendering service"
          }].map((tool, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer" onClick={tool.onClick}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">{tool.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
              <p className="text-gray-600">{tool.description}</p>
            </motion.div>
          ))}
        </div>

        {showLogin && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl mb-4">Login</h2>
              <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" className="border p-2 w-full mb-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" className="border p-2 w-full mb-4" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Login</button>
              </form>
            </div>
          </div>
        )}

        {isAuthenticated && (
          <div className="mb-16">
            <h2 className="text-2xl mb-4">Upload New Design</h2>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <input type="text" placeholder="Title" className="border p-2 w-full" value={newDesign.title} onChange={(e) => setNewDesign({ ...newDesign, title: e.target.value })} required />
              <input type="text" placeholder="Description" className="border p-2 w-full" value={newDesign.description} onChange={(e) => setNewDesign({ ...newDesign, description: e.target.value })} required />
              <input type="text" placeholder="Image URL" className="border p-2 w-full" value={newDesign.image} onChange={(e) => setNewDesign({ ...newDesign, image: e.target.value })} required />
              <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Upload</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Designs;
