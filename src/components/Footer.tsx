import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { personalInfo, navItems } from '../data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-dark pt-16 pb-8 border-t border-text-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">{personalInfo.name}</h3>
            <p className="text-text-secondary mb-6">
              {personalInfo.description}
            </p>
            <div className="flex space-x-4">
              <a 
                href={personalInfo.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none bg-text-primary/5 flex items-center justify-center hover:bg-text-primary/10 transition-colors"
              >
                <Github size={18} className="text-text-primary" />
              </a>
              <a 
                href={personalInfo.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none bg-text-primary/5 flex items-center justify-center hover:bg-text-primary/10 transition-colors"
              >
                <Linkedin size={18} className="text-text-primary" />
              </a>
              <a 
                href={personalInfo.socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none bg-text-primary/5 flex items-center justify-center hover:bg-text-primary/10 transition-colors"
              >
                <Twitter size={18} className="text-text-primary" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-text-secondary hover:text-text-primary cursor-pointer transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-text-secondary">
              <li>
                <span className="block">Email:</span>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-text-primary hover:text-text-secondary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <span className="block">Location:</span>
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-text-muted/10 text-center text-text-muted">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} {personalInfo.name}. All rights reserved. 
            <span className="inline-flex items-center ml-1">
              Made with <Heart size={14} className="mx-1 text-text-primary" /> 
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;