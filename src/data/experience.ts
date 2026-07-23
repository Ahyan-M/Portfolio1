export type Experience = {
  id: string;
  company: string;
  role: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  status?: string;
  logo?: string;
  logoAlt?: string;
  logoBg?: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    id: "td-bsa",
    company: "TD",
    role: "Business Systems Analyst Intern",
    type: "Internship · Co-op",
    period: "Fall 2026",
    duration: "Sep 2026 — Dec 2026 · 4 mos",
    location: "Hybrid · Greater Toronto Area",
    status: "Incoming",
    logo: "/experience/td.png",
    logoAlt: "TD Bank logo",
    logoBg: "#008a00",
    highlights: [
      "Joining TD's Technology group to deliver improvements across core banking, customer servicing, and customer engagement platforms.",
      "Work with business partners to define, develop, and document detailed business requirements within agile pod teams.",
      "Collaborate with software engineers, product owners, and QA to deliver end-to-end capabilities from concept to production deployment.",
      "Participate in proof-of-concept initiatives on emerging technologies, conduct system research, and troubleshoot application defects.",
      "Apply SDLC and agile delivery methodology — leveraging tools like Jira, Confluence, Excel, Visio, and SQL.",
    ],
  },
  {
    id: "vosyn-uiux",
    company: "Vosyn",
    role: "UI/UX Design Intern",
    type: "Internship",
    period: "Sep 2025 — Dec 2025",
    duration: "4 mos",
    location: "Etobicoke, Ontario · Remote",
    logo: "/experience/vosyn.png",
    logoAlt: "Vosyn logo",
    logoBg: "#0a0a0a",
    highlights: [
      "Designed and refined user-facing web and mobile interfaces, applying HTML, CSS, and JavaScript to ensure responsive and accessible designs.",
      "Collaborated with product managers, designers, and developers to translate Figma prototypes into functional, scalable front-end components.",
      "Conducted user research and usability testing to inform wireframes, prototypes, and mockups.",
      "Contributed to the design system and style guide, maintaining visual consistency across platforms.",
    ],
  },
  {
    id: "tailrd-cofounder",
    company: "Tailrd",
    role: "Co-Founder",
    type: "Startup",
    period: "2025 — Present",
    duration: "Ongoing",
    location: "Remote",
    logo: "/experience/tailrd.png",
    logoAlt: "Tailrd logo",
    logoBg: "#FFFFFF",
    highlights: [
      "Co-founded Tailrd, a Flask-based resume optimization tool that extracts technical keywords from job descriptions and enhances resumes for ATS compatibility.",
      "Led product development across the full stack — React and Tailwind front end, Flask and Python back end.",
      "Shipped and deployed the product to production at tailrd.vercel.app, iterating on user feedback and keyword-matching accuracy.",
      "Defined product direction, feature roadmap, and go-to-market strategy as a founding team member.",
    ],
  },
];
