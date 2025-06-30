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
  description:
    'AI/ML and data science professional with 3+ years of experience designing and deploying scalable machine learning systems, Generative AI applications, and analytics tools across industries.',
  photo: '/gray.png',
  email: 'manneds.dev@gmail.com',
  location: 'Kansas City, MO, USA',
  socials: {
    github: 'https://github.com/MavinashR88',
    linkedin: 'https://linkedin.com/in/manneavinashreddy',
    twitter: 'https://twitter.com/yourhandle',
  },
};

export const aboutInfo = {
  bio: `AI/ML Engineer with a strong foundation in deep learning, LLMs, and MLOps. I specialize in designing end-to-end AI systems that drive real-world impact. Currently working at CBRE where I build GenAI-powered tools and scalable ML pipelines. My background includes developing solutions in healthcare, enterprise search, and customer analytics, with a focus on using OpenAI, LangChain, TensorFlow, and MLflow.`,
  education: [
    {
      degree: "Master of Science in Computer Science (Data Science Specialization)",
      institution: "University of Central Missouri",
      year: "2023 - 2025 (Expected)",
      description: "Focused on advanced machine learning, deep learning, and big data analytics. Currently maintaining a 4.0 GPA.",
      courses: [
        "Advanced Machine Learning",
        "Deep Learning & Neural Networks",
        "Big Data Analytics"
      ]
    }
  ],
};

export const workExperiences: WorkExperience[] = [
  {
    id: 1,
    company: "CBRE",
    position: "AI/ML Engineer",
    duration: "Jan 2024 – Present",
    description: [
      "Designed and deployed GenAI-powered document summarization and Q&A pipelines using OpenAI, LangChain, and FAISS to improve enterprise search workflows.",
      "Engineered RAG pipelines and optimized prompts to reduce hallucination by 30% and improve contextual response quality.",
      "Built MLOps pipelines with ZenML and MLflow for CI/CD, monitoring, and reproducible experimentation.",
      "Fine-tuned LLMs using custom scoring metrics and evaluation frameworks for domain-specific applications.",
      "Developed Flask and FastAPI REST APIs, containerized with Docker and deployed on AWS Lambda and EC2.",
      "Conducted A/B testing and hyperparameter tuning to increase precision by 15% in critical NLP tasks.",
      "Designed Power BI dashboards for executive insights on model adoption, performance, and usage metrics."
    ],
  },
  {
    id: 2,
    company: "TechCiti Technologies Pvt Ltd",
    position: "Machine Learning Engineer",
    duration: "Oct 2021 – Apr 2023",
    description: [
      "Developed MLP and LSTM models in TensorFlow to classify mental health disorders, achieving 87% accuracy and 92% recall.",
      "Applied Word2Vec and sequential modeling to analyze symptom progression in clinical data.",
      "Preprocessed and integrated large-scale clinical datasets using Pandas and NumPy with strict HIPAA-compliance.",
      "Created dashboards in Tableau, Power BI, and Matplotlib to present findings to non-technical stakeholders.",
      "Built Dockerized Flask APIs for scalable model access in clinical and research use cases.",
      "Collaborated in Agile teams, versioned with Git, and maintained documentation for reproducibility and scalability.",
      "Ensured HIPAA-compliant workflows through secure data governance and regular audits."
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'Customer Churn Prediction & Retention Dashboard',
    description: 'Developed an ML-based system to predict customer attrition with 85% accuracy, enabling proactive retention strategies and stakeholder-friendly visual dashboards.',
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
    description: 'Built an NLP-based tool using BERT and Streamlit to automate resume screening and improve candidate-job matching efficiency with 90% accuracy.',
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
  // Data & Analytics
  { name: 'SQL', level: 85, category: 'data' },
  { name: 'Tableau', level: 90, category: 'data' },
  { name: 'Power BI', level: 85, category: 'data' },
  { name: 'Matplotlib', level: 80, category: 'data' },
  { name: 'Seaborn', level: 80, category: 'data' },
  { name: 'Excel', level: 75, category: 'data' },

  // ML & AI
  { name: 'Python', level: 90, category: 'ml' },
  { name: 'TensorFlow', level: 85, category: 'ml' },
  { name: 'PyTorch', level: 80, category: 'ml' },
  { name: 'Scikit-learn', level: 85, category: 'ml' },
  { name: 'XGBoost', level: 75, category: 'ml' },
  { name: 'LSTM', level: 80, category: 'ml' },
  { name: 'CNN', level: 80, category: 'ml' },
  { name: 'BERT', level: 80, category: 'ml' },
  { name: 'NLP', level: 85, category: 'ml' },
  { name: 'LangChain', level: 85, category: 'ml' },
  { name: 'OpenAI', level: 85, category: 'ml' },
  { name: 'FAISS', level: 75, category: 'ml' },
  { name: 'Streamlit', level: 85, category: 'ml' },
  { name: 'LangGraph', level: 70, category: 'ml' },
  { name: 'Agentic AI', level: 70, category: 'ml' },

  // MLOps & Deployment
  { name: 'MLflow', level: 85, category: 'dev' },
  { name: 'ZenML', level: 80, category: 'dev' },
  { name: 'Flask', level: 85, category: 'dev' },
  { name: 'FastAPI', level: 85, category: 'dev' },
  { name: 'Docker', level: 80, category: 'dev' },
  { name: 'AWS (Lambda, EC2)', level: 75, category: 'dev' },
  { name: 'CI/CD', level: 75, category: 'dev' },

  // Development
  { name: 'Git', level: 85, category: 'dev' },
  { name: 'Linux', level: 80, category: 'dev' },
  { name: 'React', level: 70, category: 'dev' },
  { name: 'HTML/CSS', level: 75, category: 'dev' },
  { name: 'Bash', level: 70, category: 'dev' }
];
