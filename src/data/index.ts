import { NavItem, ProjectItem, WorkExperience, Skill } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Blog', href: 'blog' },
  { label: 'Skills', href: 'skills' },
  { label: 'Contact', href: 'contact' },
];

export const personalInfo = {
  name: 'Manne Avinash Reddy',
  title: 'AI/ML Engineer | Generative AI & MLOps Specialist',
  description: 'AI/ML engineer with 3+ years of experience in developing scalable machine learning systems, GenAI solutions, and analytics tools. Skilled in end-to-end pipelines, MLOps, and dashboarding.',
  photo: '/gray.png',
  email: 'manneds.dev@gmail.com',
  location: 'Kansas City, MO, USA',
  socials: {
    github: 'https://github.com/MavinashR88',
    linkedin: '',
    twitter: 'https://twitter.com/yourhandle',
  },
};

export const aboutInfo = {
  bio: `AI/ML Engineer with a strong foundation in deep learning, LLMs, and MLOps. I specialize in designing end-to-end AI systems that drive real-world impact. Currently working at CBRE where I build GenAI-powered tools and scalable ML pipelines. My background includes developing solutions in healthcare, enterprise search, and customer analytics, with a focus on using OpenAI, LangChain, TensorFlow, and MLflow.`,
  education: [
    {
      degree: 'Master of Science in Computer Science with Data Science Specialization',
      institution: 'University of Central Missouri',
      year: '2023 - 2025 (Expected)',
      description: 'Focused on deep learning, advanced machine learning, and big data analytics. Currently maintaining a 4.0 GPA.',
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
    company: 'CBRE',
    position: 'AI/ML Engineer',
    duration: 'Jan 2024 - Present',
    description: [
      'Built GenAI-powered document summarization and Q&A pipelines using LangChain, OpenAI, and FAISS for enterprise search',
      'Developed MLOps pipelines with ZenML and MLflow for reproducible model training and CI/CD deployment',
      'Fine-tuned LLMs on domain-specific datasets to improve relevance and reduce hallucination by 30%',
      'Deployed scalable APIs using FastAPI and Docker on AWS Lambda and EC2',
      'Created executive dashboards in Power BI to monitor model KPIs and adoption'
    ],
  },
  {
    id: 2,
    company: 'TechCiti Technologies Pvt Ltd',
    position: 'Machine Learning Engineer',
    duration: 'Oct 2021 – Apr 2023',
    description: [
      'Developed deep learning models (MLP, LSTM) for mental health classification using TensorFlow (87% accuracy)',
      'Implemented Word2Vec and NLP techniques to analyze symptom progression in clinical text',
      'Created Tableau and Power BI dashboards to communicate insights to stakeholders',
      'Built REST APIs with Flask and Docker for research/clinical access',
      'Ensured HIPAA-compliant data handling and processing'
    ],
  },
];

export const projects: ProjectItem[] = [
 
];

export const skills: Skill[] = [
  { name: 'SQL', level: 85, category: 'data' },
  { name: 'Tableau', level: 90, category: 'data' },
  { name: 'Power BI', level: 85, category: 'data' },
  { name: 'Matplotlib', level: 80, category: 'data' },
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
  { name: 'Git', level: 85, category: 'dev' },
  { name: 'Linux', level: 80, category: 'dev' },
  { name: 'HTML/CSS', level: 75, category: 'dev' },
  { name: 'Bootstrap', level: 75, category: 'dev' },
  { name: 'React', level: 70, category: 'dev' },
  { name: 'Streamlit', level: 85, category: 'dev' },
  { name: 'LaTeX', level: 80, category: 'dev' }
];
