export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  color: string;
  role?: string;
  image?: string;
  imageAlt?: string;
  /** cover for photos, contain for logos */
  imageFit?: "cover" | "contain";
  imageBg?: string;
  location?: string;
  period?: string;
};

export const projects: Project[] = [
  {
    id: "tailrd",
    title: "Tailrd",
    role: "Co-Founder",
    description:
      "Co-founded and built a Flask-based resume optimization tool that extracts technical keywords from job descriptions and automatically enhances resumes to improve ATS compatibility.",
    tags: ["JavaScript", "Tailwind", "React", "Flask", "Python"],
    github: "https://github.com/Ahyan-M/Tailrd",
    demo: "https://tailrd.vercel.app",
    featured: true,
    color: "#B6512F",
    image: "/projects/tailrd-logo.png",
    imageAlt: "Tailrd logo",
    imageFit: "contain",
    imageBg: "#FFFFFF",
  },
  {
    id: "metrolinx",
    title: "Metrolinx Transit Analytics Dashboard",
    location: "Oshawa, Ontario · Personal Project",
    description:
      "Built an end-to-end transit analytics pipeline using Python, PostgreSQL, and Power BI to process and analyze over 1.1 million GO Transit train and bus records from GTFS datasets and public transit APIs.",
    tags: ["Python", "PostgreSQL", "Power BI", "pandas", "SQL", "GTFS"],
    github: "https://github.com/Ahyan-M/Metrolinx-Project",
    featured: true,
    color: "#3D6B4F",
    image: "/projects/metrolinx-go.png",
    imageAlt: "GO Transit logo — Metrolinx Transit Analytics Dashboard",
    imageFit: "contain",
    imageBg: "#FFFFFF",
  },
  {
    id: "soccer-predictor",
    title: "Soccer Match Predictor",
    description:
      "ML model predicting Premier League outcomes at 68% accuracy using logistic regression and feature engineering.",
    tags: ["Python", "Jupyter", "Scikit-learn", "pandas", "NumPy"],
    github: "https://github.com/Ahyan-M/Soccer-Match-Predictor",
    featured: true,
    color: "#2C4A6E",
    image: "/projects/soccer.png",
    imageAlt: "Soccer balls on a stadium pitch — Soccer Match Predictor project",
    imageFit: "cover",
  },
  {
    id: "movie-recommender",
    title: "Movie Recommendation System",
    description:
      "Content-based recommendation system using NLP and cosine similarity on cast, crew, and genre metadata.",
    tags: ["Python", "Jupyter", "Scikit-learn", "pandas", "NumPy"],
    github: "https://github.com/Ahyan-M/Movie-Recommendation-System",
    featured: false,
    color: "#3D5A4C",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
