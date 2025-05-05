import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { personalInfo } from '../data';
import TypewriterText from './TypewriterText';

const Hero: React.FC = () => {
  const titles = [
    'Data Scientist',
    'Machine Learning Engineer',
    'Deep Learning Specialist',
    'Data Analyst'
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-background-dark to-background-dark">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 text-left space-y-8"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-text-primary"
            >
              Hello, I'm
            </motion.h2>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-text-primary"
            >
              {personalInfo.name}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl text-text-primary"
            >
              <TypewriterText 
                words={titles}
                className="text-accent-neon font-semibold"
              />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-text-primary text-xl max-w-3xl leading-relaxed"
            >
              {personalInfo.description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-6 pt-6"
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button className="btn-primary text-lg px-8 py-4">
                  View Projects
                </button>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button className="btn-secondary text-lg px-8 py-4">
                  Contact Me
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent-primary/20 rounded-full blur-3xl" />
              <div 
                className="relative rounded-full border-4 border-accent-primary/20 shadow-2xl overflow-hidden"
                style={{ width: '25rem', height: '25rem' }}
              >
                <img 
                  src="src/data/gray.png"
                  alt={personalInfo.name}
                  className="absolute w-full h-full object-cover object-center"
                  style={{ 
                    objectPosition: "center center", 
                    transform: "translate(-55%, -50%)",
                    top: "50%",
                    left: "50%" 
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex flex-col items-center cursor-pointer group"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-accent-primary group-hover:text-accent-neon transition-colors duration-300"
          >
            <ChevronDown size={24} />
          </motion.div>
          <span className="text-sm text-text-primary group-hover:text-text-secondary transition-colors duration-300">
            Scroll Down
          </span>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;