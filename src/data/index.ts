import { NavItem, ProjectItem, WorkExperience, Skill } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Skills', href: 'skills' },
  { label: 'Contact', href: 'contact' },
];

export const personalInfo = {
  name: 'Manne Avinash Reddy',
  title: 'Data Scientist | Machine Learning Engineer',
  description: 'Data science professional passionate about transforming complex data into actionable business insights. Specializing in statistical modeling, machine learning, and data visualization.',
  photo: '/gray.png',
  email: 'manneavinashreddy2@gmail.com',
  location: 'Kansas, United States',
  socials: {
    github: 'https://github.com/MavinashR88',
    linkedin: 'https://linkedin.com/in/manneavinashreddy',
    twitter: 'https://twitter.com/yourhandle',
  },
};

export const aboutInfo = {
  bio: `I'm a data science professional passionate about transforming complex data into actionable business insights. With expertise in statistical modeling, machine learning, and data visualization, I specialize in building solutions that drive data-informed decision-making.

Currently pursuing my Master's in Computer Science with Data Science Specialization at the University of Central Missouri, I combine strong academic foundations with practical experience in predictive analytics and AI applications. My work with large-scale datasets has equipped me to tackle challenging data problems across various industries.

I thrive in collaborative environments where I can leverage my technical skills to create innovative solutions. My experience spans healthcare analytics, customer behavior prediction, and NLP applications—always with a focus on delivering measurable business impact.`,
  
  education: [
    {
      degree: 'Master of Science in Computer Science with Data Science Specialization',
      institution: 'University of Central Missouri',
      year: '2023 - 2025 (Expected)',
      description: 'Focusing on advanced machine learning, deep learning, and big data analytics. Maintaining a 4.0 GPA.',
      courses: [
        'Advanced Machine Learning',
        'Deep Learning & Neural Networks',
        'Big Data Analytics'
      ]
    }
  ],
};

export const workExperiences: WorkExperience[] = [
  {
    id: 1,
    company: 'TechCiti Technologies Private Limited',
    position: 'Machine Learning Intern',
    duration: 'April 2022 - April 2023',
    description: [
      'Led development of statistical models and machine learning algorithms for healthcare classification using TensorFlow and neural networks, achieving 85% accuracy',
      'Processed and analyzed datasets exceeding 500,000 records using Python, Pandas, and PyTorch on Azure and GCP cloud platforms',
      'Created 8 interactive Tableau dashboards translating complex findings into actionable business insights',
      'Applied NLP and Large Language Models to sensitive healthcare data, improving statistical model reliability',
      'Collaborated with cross-functional teams to translate business needs into effective data science solutions'
    ],
  }
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'Customer Churn Prediction & Retention Dashboard',
    description: 'Developed an end-to-end machine learning solution to predict customer attrition with 85% accuracy, enabling proactive retention strategies.',
    preview: {
      type: 'image',
      url: 'https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Tableau', 'Azure'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com/example',
  },
  {
    id: 2,
    title: 'AI-Powered Resume Screening System',
    description: 'Built an NLP-driven application to automate resume screening and improve candidate-job matching efficiency with 90% accuracy.',
    preview: {
      type: 'image',
      url: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    technologies: ['Python', 'BERT', 'PyTorch', 'Streamlit', 'Flask'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com/example',
  }
];

export const skills: Skill[] = [
  // Data Analytics & Visualization
  { name: 'SQL', level: 85, category: 'data' },
  { name: 'Tableau', level: 90, category: 'data' },
  { name: 'Power BI', level: 85, category: 'data' },
  { name: 'Matplotlib', level: 80, category: 'data' },
  
  // Machine Learning & AI
  { name: 'Python', level: 90, category: 'ml' },
  { name: 'Machine Learning', level: 85, category: 'ml' },
  { name: 'Deep Learning', level: 80, category: 'ml' },
  { name: 'TensorFlow', level: 85, category: 'ml' },
  { name: 'PyTorch', level: 80, category: 'ml' },
  { name: 'NLP', level: 85, category: 'ml' },
  { name: 'Large Language Models', level: 80, category: 'ml' },
  { name: 'Pandas', level: 90, category: 'ml' },
  { name: 'NumPy', level: 90, category: 'ml' },
  { name: 'Scikit-learn', level: 85, category: 'ml' },
  
  // Development & Tools
  { name: 'Git', level: 85, category: 'dev' },
  { name: 'Linux', level: 80, category: 'dev' },
  { name: 'HTML/CSS', level: 75, category: 'dev' },
  { name: 'Bootstrap', level: 75, category: 'dev' },
  { name: 'React', level: 70, category: 'dev' },
  { name: 'Streamlit', level: 85, category: 'dev' },
  { name: 'LaTeX', level: 80, category: 'dev' }
];