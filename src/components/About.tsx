import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, User, Award, BookOpen, Calendar, Building2 } from 'lucide-react';
import { aboutInfo } from '../data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.h2 
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-text-primary/10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-text-primary/10" />
            
            <div className="relative bg-background-card border border-text-primary/10 p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-text-primary/5 flex items-center justify-center">
                  <User className="text-text-primary" size={24} />
                </div>
                <h3 className="text-3xl font-semibold">My Background</h3>
              </div>
              
              <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                {aboutInfo.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-background-card border border-text-primary/10 p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-text-primary/5 flex items-center justify-center">
                  <GraduationCap className="text-text-primary" size={24} />
                </div>
                <h3 className="text-3xl font-semibold">Education Journey</h3>
              </div>
              
              <div className="space-y-12">
                {aboutInfo.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="group"
                  >
                    <div className="relative bg-text-primary/5 p-8 border border-text-primary/10 transition-all duration-300 hover:border-text-primary/30">
                      <div className="absolute -top-3 -right-3 w-6 h-6 bg-text-primary" />
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-2xl font-semibold mb-4 group-hover:text-text-primary transition-colors">
                              {edu.degree}
                            </h4>
                            
                            <div className="flex flex-col gap-2">
                              <div className="flex items-center gap-2 text-text-secondary">
                                <Building2 size={18} />
                                <span>{edu.institution}</span>
                              </div>
                              <div className="flex items-center gap-2 text-text-secondary">
                                <Calendar size={18} />
                                <span>{edu.year}</span>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-text-secondary leading-relaxed">
                            {edu.description}
                          </p>
                        </div>
                        
                        <div className="bg-text-primary/[0.03] p-6 border border-text-primary/10">
                          <div className="flex items-center gap-3 mb-6">
                            <BookOpen className="text-text-primary" size={20} />
                            <h5 className="text-lg font-semibold">Key Courses</h5>
                          </div>
                          
                          <ul className="grid grid-cols-1 gap-3">
                            {edu.courses.map((course, courseIndex) => (
                              <li 
                                key={courseIndex}
                                className="flex items-center gap-3 text-text-secondary group-hover:text-text-primary/90 transition-colors"
                              >
                                <span className="w-2 h-2 bg-text-primary rounded-full"></span>
                                <span>{course}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-background-card border border-text-primary/10 p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-text-primary/5 flex items-center justify-center">
                  <Award className="text-text-primary" size={24} />
                </div>
                <h3 className="text-3xl font-semibold">Core Competencies</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <h4 className="text-xl font-semibold mb-4">Data Science</h4>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-text-primary"></span>
                      Statistical Analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-text-primary"></span>
                      Data Visualization
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-text-primary"></span>
                      Predictive Modeling
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-4"
                >
                  <h4 className="text-xl font-semibold mb-4">Machine Learning</h4>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-text-primary"></span>
                      Deep Learning
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-text-primary"></span>
                      Natural Language Processing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-text-primary"></span>
                      Computer Vision
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="space-y-4"
                >
                  <h4 className="text-xl font-semibold mb-4">Tools & Technologies</h4>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-text-primary"></span>
                      Python & R
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-text-primary"></span>
                      TensorFlow & PyTorch
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-text-primary"></span>
                      SQL & NoSQL Databases
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;