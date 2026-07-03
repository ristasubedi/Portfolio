
export interface Project {
  id: string;
  title: string;
  tag: 'Systems & SWE' | 'AI & Data Science';
  date?: string;
  repositoryUrl?: string;
  summary: string;
  engineeringImpact: string;
  technicalDepth: string;
  techStack: string[];
}

export const projectsData: Project[] = [
  {
    id: "bettersafe",
    title: "BetterSafe: Real-Time Incident Management & Alerting iOS App",
    tag: "Systems & SWE",
    date: "March 2026",
    summary: "Predictive safety application with a One-Touch Quick Help emergency pipeline for safety-critical incident response.",
    engineeringImpact: "Engineered a resilient Swift application backed by scalable distributed services designed around a 99.9% uptime standard.",
    technicalDepth: "Built a multi-threaded, event-driven incident pipeline with WebSockets, optimized B-Tree indexing, and CoreLocation geofencing that reduced battery consumption by 30%.",
    techStack: ["Swift", "CoreLocation", "WebSockets", "B-Tree Indexing", "iOS"]
  },
  {
    id: "fashionista",
    title: "Fashionista: AI-Powered Fashion Recommendation System",
    tag: "AI & Data Science",
    date: "November 2025",
    summary: "ML-driven web app that recommends outfit combinations from clothing images and user preferences using visual similarity scoring.",
    engineeringImpact: "Led the full SDLC using object-oriented design principles, then containerized inference with Docker and deployed a scalable FastAPI service on Kubernetes.",
    technicalDepth: "Combined CNN-based visual feature extraction with KNN similarity scoring, plus logging and monitoring hooks for production debugging and reliability.",
    techStack: ["Python", "CNNs", "KNN", "FastAPI", "Docker", "Kubernetes"]
  },
  {
    id: "ai-tag-prediction",
    title: "AI Tag Prediction Web App",
    tag: "AI & Data Science",
    date: "April 2025",
    summary: "Full-stack application that predicts programming topic tags from unstructured user questions with 85%+ accuracy.",
    engineeringImpact: "Delivered a React and Python application backed by MySQL with a scalable, resilient API-driven architecture for real-time predictions.",
    technicalDepth: "Engineered a multi-label classification backend using TF-IDF vectorization and Logistic Regression with rich tag explanations.",
    techStack: ["React", "Python", "MySQL", "TF-IDF", "Logistic Regression"]
  },
  {
    id: "student-services-chatbot",
    title: "Chatbot for Student Services",
    tag: "AI & Data Science",
    date: "January 2025",
    summary: "NLP-driven Python chatbot that automates common campus service questions and reduces administrative overhead.",
    engineeringImpact: "Built through an iterative SDLC with optimized data structures, production-grade debugging hooks, and monitoring logs for interaction patterns.",
    technicalDepth: "Implemented decision trees and SVMs to improve response accuracy and personalize student interactions over time.",
    techStack: ["Python", "NLP", "Decision Trees", "SVM", "Monitoring"]
  },
  {
    id: "netflix-analysis-sql",
    title: "Netflix Movies and TV Shows Data Analysis using SQL",
    tag: "AI & Data Science",
    repositoryUrl: "https://github.com/ristasubedi/Netflix_analysis_SQL_Project",
    summary: "SQL analytics project exploring Netflix movies and TV shows data to answer business questions around content mix, ratings, geography, genres, and release trends.",
    engineeringImpact: "Structured a reproducible analysis workflow around a Kaggle-backed Netflix dataset, translating business questions into targeted SQL queries and interpretable findings.",
    technicalDepth: "Created relational schema and analytical SQL covering aggregation, ranking windows, string splitting, date conversion, filtering, and keyword-based content classification.",
    techStack: ["SQL", "PostgreSQL", "Data Analysis", "Kaggle Dataset"]
  }
];
