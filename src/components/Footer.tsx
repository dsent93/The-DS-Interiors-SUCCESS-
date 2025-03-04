import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="font-display text-2xl text-secondary">
              The Ds Interiors
            </Link>
            <p className="text-gray-600">
              Transforming spaces into extraordinary experiences through innovative design and unparalleled attention to detail.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/projects" className="text-gray-600 hover:text-primary transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/designs" className="text-gray-600 hover:text-primary transition-colors">
                  Design Styles
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-gray-600 hover:text-primary transition-colors">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">123 Design Street</li>
              <li className="text-gray-600">Creative City, ST 12345</li>
              <li className="text-gray-600">+1 (555) 123-4567</li>
              <li>
                <a 
                  href="mailto:dsenterprises24.in@gmail.com" 
                  className="text-gray-600 hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <Mail size={16} />
                 dsenterprises24.in@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
                { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
                { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} The Ds Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;