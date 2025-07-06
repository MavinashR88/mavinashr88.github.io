import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 1,
    name: "Microsoft Certified: Azure AI Fundamentals",
    organization: "Microsoft",
    issueDate: "March 2024",
    credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/MavinashR88/B6F5F0F5F0F5F0F5",
    skills: ["Azure AI", "Machine Learning", "Cognitive Services", "Azure Machine Learning"]
  },
  {
    id: 2,
    name: "Microsoft Certified: Azure Data Fundamentals",
    organization: "Microsoft",
    issueDate: "March 2024",
    credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/MavinashR88/B6F5F0F5F0F5F0F5",
    skills: ["Azure Data", "Data Analytics", "Data Processing", "Azure Databases"]
  },
  {
    id: 3,
    name: "Microsoft Certified: Azure Fundamentals",
    organization: "Microsoft",
    issueDate: "March 2024",
    credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/MavinashR88/B6F5F0F5F0F5F0F5",
    skills: ["Azure", "Cloud Computing", "Cloud Services", "Azure Infrastructure"]
  },
  {
    id: 4,
    name: "Data Science Methodology",
    organization: "IBM",
    issueDate: "January 2024",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/QWERTY123456",
    skills: ["Data Science", "Research Methods", "Data Analysis", "Problem Solving"]
  },
  {
    id: 5,
    name: "Tools for Data Science",
    organization: "IBM",
    issueDate: "January 2024",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/ASDFGH123456",
    skills: ["Python", "R", "Jupyter Notebooks", "Data Science Tools"]
  },
  {
    id: 6,
    name: "Data Science Orientation",
    organization: "IBM",
    issueDate: "December 2023",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/ZXCVBN123456",
    skills: ["Data Science", "Analytics", "Big Data", "Data Mining"]
  }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>
        
        <motion.p 
          className="text-center text-text-secondary text-lg max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Professional certifications and achievements that validate my expertise in Data Science, 
          Machine Learning, and Cloud Technologies
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background-card border border-text-primary/10 p-6 h-full
                            transition-all duration-300 hover:border-text-primary/30
                            hover:shadow-lg rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-text-primary/5 rounded-bl-[100%] -z-1" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-text-primary/5 flex items-center justify-center rounded-lg">
                    <Award className="text-text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-text-primary transition-colors">
                    {cert.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-text-secondary font-medium">
                      {cert.organization}
                    </p>
                    <div className="flex items-center gap-2 text-text-secondary text-sm">
                      <Calendar size={14} />
                      <span>{cert.issueDate}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="text-sm bg-text-primary/5 text-text-secondary px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-text-primary hover:text-text-secondary transition-colors mt-4 group-hover:underline"
                  >
                    View Credential <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;