import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Brain, Wrench } from 'lucide-react';
import { skills } from '../data';

const SkillTimeline: React.FC<{
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
  index: number;
}> = ({ title, icon, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 pb-16 last:pb-0"
    >
      {/* Timeline line */}
      {index !== 2 && (
        <div className="absolute left-[15px] top-[60px] bottom-0 w-[1px] bg-text-muted/20" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-3 w-8 h-8 bg-text-primary/5 flex items-center justify-center">
        {React.cloneElement(icon as React.ReactElement, { 
          size: 20,
          className: "text-text-primary"
        })}
      </div>

      <div className="pt-1">
        <h3 className="text-2xl font-semibold mb-6">{title}</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden border border-text-muted/10 hover:border-text-primary/20 transition-all duration-300">
                <div className="p-4">
                  <span className="text-lg text-text-secondary group-hover:text-text-primary transition-colors">
                    {skill.name}
                  </span>
                </div>
                <div 
                  className="absolute bottom-0 left-0 h-[2px] bg-text-primary/20 transition-all duration-500 group-hover:bg-text-primary"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const dataSkills = skills.filter(skill => skill.category === 'data');
  const mlSkills = skills.filter(skill => skill.category === 'ml');
  const devSkills = skills.filter(skill => skill.category === 'dev');

  const skillCategories = [
    { title: 'Data Analytics', icon: <LineChart />, skills: dataSkills },
    { title: 'Machine Learning', icon: <Brain />, skills: mlSkills },
    { title: 'Development', icon: <Wrench />, skills: devSkills }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-background-card to-background-dark opacity-50" />
      
      <div className="section-container relative z-10">
        <motion.h2 
          className="section-title text-center text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.p 
          className="text-center text-text-secondary text-xl max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A comprehensive overview of my technical skills in data science, machine learning, 
          and software development.
        </motion.p>

        <div className="max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillTimeline
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;