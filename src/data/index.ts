import { NavItem, ProjectItem, WorkExperience, Skill } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Blog', href: 'blog' },
  { label: 'Skills', href: 'skills' },
  { label: 'Certifications', href: 'certifications' },
  { label: 'Contact', href: 'contact' },
];

export const personalInfo = {
  name: 'Manne Avinash Reddy',
  title: 'AI/ML Engineer | Generative AI | MLOps | LLM Fine-Tuning',
  description: 'AI/ML professional with 3+ years of experience building production-ready GenAI systems, deploying LLMs, and developing data-driven solutions with modern MLOps and cloud-native tooling.',
  photo: '/profile.jpg',
  email: 'manneds.dev@gmail.com',
  location: 'Kansas, United States',
  socials: {
    github: 'https://github.com/MavinashR88',
    linkedin: 'https://linkedin.com/in/manneavinashreddy',
    twitter: 'https://twitter.com/yourhandle',
  },
};

export const aboutInfo = {
  bio: `AI/ML Engineer with 3+ years of experience building scalable machine learning and Generative AI solutions in enterprise and healthcare domains.

At CBRE, I led the development of a GenAI-powered document summarization system using OpenAI, LangChain, and FAISS, reducing hallucinations by 30% and enabling real-time semantic search. I built robust MLOps pipelines using ZenML and MLflow, deployed FastAPI microservices on AWS, and tracked performance with Power BI dashboards.

Previously at TechCiti, I developed NLP models using LSTM and Word2Vec for mental health diagnostics (92% recall), containerized APIs, and built stakeholder-ready dashboards in Tableau and Power BI.

I bring strong experience with Python, LangChain, Hugging Face, FastAPI, AWS, Docker, and modern GenAI pipelines. Currently open to full-time AI/ML engineering roles (OPT, STEM eligible).`,
  education: [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University of Central Missouri',
      year: '2023 - 2025 (Expected)',
      description: 'Focus on machine learning, deep learning, big data analytics, and distributed systems. Currently maintaining a strong academic record.',
      courses: [
        'Advanced Machine Learning',
        'Deep Learning & Neural Networks',
        'Big Data Analytics',
        'Statistical Computing'
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
      'Built a GenAI-powered Q&A and summarization system using LangChain, OpenAI, and FAISS to improve enterprise search workflows.',
      'Reduced hallucination rate by 30% through prompt engineering and transformer-based optimization.',
      'Designed MLOps pipelines with ZenML and MLflow to streamline CI/CD and experiment tracking.',
      'Developed and deployed FastAPI microservices to AWS (Lambda, EC2) for scalable model access.',
      'Created executive Power BI dashboards for LLM usage analytics, adoption, and KPIs.',
    ],
  },
  {
    id: 2,
    company: 'TechCiti Technologies Private Limited',
    position: 'Machine Learning Engineer',
    duration: 'Oct 2021 - Apr 2023',
    description: [
      'Engineered LSTM models to identify Bipolar I disorder with 92% recall, improving diagnostic capabilities.',
      'Preprocessed large clinical datasets, implemented Word2Vec embeddings, and applied NLP for symptom pattern analysis.',
      'Developed containerized Flask APIs for secure model access in research and clinical tools.',
      'Built visual analytics dashboards using Tableau and Power BI to share insights with healthcare stakeholders.',
      'Adhered to HIPAA compliance via data governance and anonymization best practices.'
    ],
  }
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'GenAI Knowledge Base Q&A System',
    description: 'Developed a production-ready RAG pipeline using LangChain, OpenAI, and FAISS for document Q&A across enterprise systems.',
    preview: {
      type: 'image',
      url: 'https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg'
    },
    technologies: ['LangChain', 'OpenAI', 'FAISS', 'ZenML', 'FastAPI', 'AWS'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com/MavinashR88/genai-docqa',
<<<<<<< HEAD
  },
  {
    id: 2,
    title: 'Mental Health Disorder Classification',
    description: 'Built deep learning models using TensorFlow and NLP for mental health diagnosis, achieving 92% recall for Bipolar I.',
    preview: {
      type: 'image',
      url: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg'
    },
    technologies: ['TensorFlow', 'LSTM', 'NLP', 'Word2Vec', 'Power BI', 'Flask'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com/MavinashR88/mental-health-ai',
=======
>>>>>>> 520b41b (Initial portfolio deployment with AI/ML experience and GenAI projects)
  }
];

export const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'ml' },
  { name: 'SQL', level: 85, category: 'ml' },
  { name: 'Git', level: 85, category: 'dev' },
  { name: 'Bash', level: 75, category: 'dev' },
  { name: 'Docker', level: 80, category: 'dev' },
  { name: 'Linux', level: 80, category: 'dev' },
  { name: 'HTML/CSS', level: 75, category: 'dev' },
  { name: 'React', level: 70, category: 'dev' },
  { name: 'Scikit-learn', level: 85, category: 'ml' },
  { name: 'TensorFlow', level: 85, category: 'ml' },
  { name: 'PyTorch', level: 80, category: 'ml' },
  { name: 'XGBoost', level: 75, category: 'ml' },
  { name: 'LSTM', level: 85, category: 'ml' },
  { name: 'CNN', level: 80, category: 'ml' },
  { name: 'BERT', level: 80, category: 'ml' },
  { name: 'OpenAI', level: 85, category: 'ml' },
  { name: 'LangChain', level: 85, category: 'ml' },
  { name: 'Hugging Face', level: 80, category: 'ml' },
  { name: 'Prompt Engineering', level: 80, category: 'ml' },
  { name: 'RAG', level: 80, category: 'ml' },
  { name: 'FAISS', level: 80, category: 'ml' },
  { name: 'Streamlit', level: 85, category: 'dev' },
  { name: 'LangGraph', level: 70, category: 'ml' },
  { name: 'ADK', level: 70, category: 'ml' },
  { name: 'Agentic AI', level: 70, category: 'ml' },
  { name: 'MLflow', level: 75, category: 'dev' },
  { name: 'ZenML', level: 75, category: 'dev' },
  { name: 'Flask', level: 80, category: 'dev' },
  { name: 'FastAPI', level: 85, category: 'dev' },
  { name: 'AWS (Lambda, EC2, S3)', level: 85, category: 'dev' },
  { name: 'CI/CD', level: 75, category: 'dev' },
  { name: 'Power BI', level: 85, category: 'data' },
  { name: 'Tableau', level: 90, category: 'data' },
  { name: 'Matplotlib', level: 80, category: 'data' },
  { name: 'Seaborn', level: 80, category: 'data' },
  { name: 'Excel', level: 75, category: 'data' },
  { name: 'KPI Monitoring', level: 75, category: 'data' },
  { name: 'Data Cleaning', level: 85, category: 'data' },
  { name: 'Data Wrangling', level: 85, category: 'data' },
  { name: 'Data Profiling', level: 80, category: 'data' },
  { name: 'Apache Spark', level: 70, category: 'ml' },
  { name: 'Feature Engineering', level: 85, category: 'ml' },
  { name: 'Data Preprocessing', level: 90, category: 'ml' }
];
