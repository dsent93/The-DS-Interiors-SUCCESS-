import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Palette, Layout } from 'lucide-react';

const Designs = () => {
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
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [newDesign, setNewDesign] = useState({ title: '', description: '', image: '' });
  
  const handleLogin = () => {
    if (credentials.email === "dhajare94@gmail.com" && credentials.password === "Sbr00216@") {
      setIsLoggedIn(true);
      setShowUploadForm(true);
    } else {
      alert("Invalid credentials");
    }
  };
  
  const handleUpload = () => {
    if (newDesign.title && newDesign.description && newDesign.image) {
      setDesignStyles([...designStyles, { ...newDesign, id: designStyles.length + 1 }]);
      setNewDesign({ title: '', description: '', image: '' });
      setShowUploadForm(false);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center mb-6">Design Styles</h1>
        
        {/* Upload Section */}
        <div className="mb-6">
          {!isLoggedIn ? (
            <div className="p-6 bg-white rounded shadow-md w-96 mx-auto">
              <h2 className="text-xl mb-4">Login</h2>
              <input type="email" placeholder="Email" className="border p-2 w-full mb-2" onChange={e => setCredentials({ ...credentials, email: e.target.value })} />
              <input type="password" placeholder="Password" className="border p-2 w-full mb-4" onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
              <button className="bg-primary text-white p-2 w-full" onClick={handleLogin}>Login</button>
            </div>
          ) : showUploadForm ? (
            <div className="p-6 bg-white rounded shadow-md w-96 mx-auto">
              <h2 className="text-xl mb-4">Upload Design</h2>
              <input type="text" placeholder="Title" className="border p-2 w-full mb-2" value={newDesign.title} onChange={e => setNewDesign({ ...newDesign, title: e.target.value })} />
              <input type="text" placeholder="Description" className="border p-2 w-full mb-2" value={newDesign.description} onChange={e => setNewDesign({ ...newDesign, description: e.target.value })} />
              <input type="text" placeholder="Image URL" className="border p-2 w-full mb-4" value={newDesign.image} onChange={e => setNewDesign({ ...newDesign, image: e.target.value })} />
              <button className="bg-primary text-white p-2 w-full" onClick={handleUpload}>Upload</button>
            </div>
          ) : (
            <button className="bg-primary text-white p-2" onClick={() => setShowUploadForm(true)}>Upload Your Space</button>
          )}
        </div>
        
        {/* Design Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designStyles.map((style) => (
            <motion.div key={style.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img src={style.image} alt={style.title} className="w-full h-80 object-cover" />
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
