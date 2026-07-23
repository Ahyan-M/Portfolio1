export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  image: string;
};

export const certificates: Certificate[] = [
  {
    id: "intro-ai",
    title: "Introduction to Artificial Intelligence",
    issuer: "LinkedIn Learning",
    image: "/certificates/intro-ai.png",
  },
  {
    id: "data-engineering",
    title: "Data Engineering on AWS — Foundations",
    issuer: "AWS Training & Certification",
    image: "/certificates/data-engineering.png",
  },
  {
    id: "data-analytics",
    title: "Data Analytics Job Simulation",
    issuer: "Quantium · Forage",
    image: "/certificates/data-analytics.png",
  },
  {
    id: "pandas",
    title: "Data Manipulation with pandas",
    issuer: "DataCamp",
    image: "/certificates/pandas.png",
  },
  {
    id: "python-toolbox",
    title: "Python Data Science Toolbox (Part 2)",
    issuer: "DataCamp",
    image: "/certificates/python-toolbox.png",
  },
  {
    id: "matplotlib",
    title: "Introduction to Data Visualization with Matplotlib",
    issuer: "DataCamp",
    image: "/certificates/matplotlib.png",
  },
  {
    id: "google-analytics",
    title: "Advanced Google Analytics",
    issuer: "Google Analytics Academy",
    image: "/certificates/google-analytics.png",
  },
];
