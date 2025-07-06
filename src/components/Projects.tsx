import React from 'react';
import { motion } from 'framer-motion';
import ProjectCarousel from './ProjectCarousel';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.p 
          className="text-center text-text-secondary text-lg max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Explore my recent projects showcasing my expertise in data science, machine learning, 
          and software development.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-6xl mx-auto px-8"
        >
          <ProjectCarousel />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;