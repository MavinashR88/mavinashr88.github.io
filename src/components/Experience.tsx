import React from 'react';
import { motion } from 'framer-motion';
import { workExperiences } from '../data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <motion.h2 
          className="section-title text-center text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          {workExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative pl-8 pb-12 ${
                index !== workExperiences.length - 1 ? 'border-l border-text-muted/20' : ''
              }`}
            >
              <div className="absolute left-[-4px] top-0 w-2 h-2 bg-text-primary"></div>
              
              <div className="card hover:border-text-primary/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold">{experience.position}</h3>
                    <p className="text-text-primary text-xl mt-1">{experience.company}</p>
                  </div>
                  <span className="text-text-secondary text-lg md:text-xl mt-2 md:mt-0">
                    {experience.duration}
                  </span>
                </div>
                
                <ul className="space-y-3 text-text-secondary text-lg">
                  {experience.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-text-primary mt-2 mr-3"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;