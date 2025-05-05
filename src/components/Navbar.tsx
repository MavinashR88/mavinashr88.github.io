import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { navItems, personalInfo } from '../data';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background-dark bg-opacity-90 backdrop-blur-sm border-b border-text-muted/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <Link 
            to="home" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500}
            className="text-xl font-bold cursor-pointer"
          >
            {personalInfo.name}
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active"
                  className="nav-link cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a 
                href={personalInfo.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href={personalInfo.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={personalInfo.socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <ThemeToggle />
            </div>

            <button
              className="md:hidden text-text-secondary hover:text-text-primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background-dark bg-opacity-95 backdrop-blur-sm"
        >
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="block py-3 nav-link cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="flex items-center justify-between pt-4">
              <div className="flex space-x-6">
                <a 
                  href={personalInfo.socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={personalInfo.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={personalInfo.socials.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;