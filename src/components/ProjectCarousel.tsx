import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data';
import { ProjectItem } from '../types';

const ProjectCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex >= projects.length) nextIndex = 0;
      if (nextIndex < 0) nextIndex = projects.length - 1;
      return nextIndex;
    });
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="w-full"
          >
            <ProjectCard project={projects[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation dots */}
      <div className="absolute left-0 right-0 bottom-[-3rem] flex justify-center gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 transition-all ${
              index === currentIndex 
                ? 'bg-text-primary w-6' 
                : 'bg-text-muted/20 hover:bg-text-muted/40'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute top-1/2 -translate-y-1/2 -left-12 w-10 h-10 bg-text-primary/5 text-text-primary flex items-center justify-center hover:bg-text-primary hover:text-background-dark transition-all"
        onClick={() => paginate(-1)}
        aria-label="Previous project"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button
        className="absolute top-1/2 -translate-y-1/2 -right-12 w-10 h-10 bg-text-primary/5 text-text-primary flex items-center justify-center hover:bg-text-primary hover:text-background-dark transition-all"
        onClick={() => paginate(1)}
        aria-label="Next project"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1">
        <div className="space-y-6">
          <h3 className="text-4xl font-bold">{project.title}</h3>
          <p className="text-text-secondary text-lg leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-3 pt-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-4 py-2 text-sm font-medium bg-text-primary/5 text-text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary"
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
            
            {project.codeUrl && (
              <a 
                href={project.codeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-secondary"
              >
                <Github size={18} /> View Code
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <div className="relative aspect-[4/3] overflow-hidden">
          {project.preview ? (
            project.preview.type === 'video' ? (
              <video 
                src={project.preview.url}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img 
                src={project.preview.url}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )
          ) : (
            <div className="w-full h-full bg-text-primary/5 flex items-center justify-center">
              <p className="text-text-secondary">Preview coming soon</p>
            </div>
          )}
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;