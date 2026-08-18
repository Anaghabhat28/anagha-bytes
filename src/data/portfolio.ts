/**
 * Single source of truth for all portfolio content.
 * Update this file to change what appears across the site.
 */

import graphxploreImage from "@/assets/project-graphxplore.jpg";
import kitchenImage from "@/assets/project-kitchen.jpg";
import portfolioImage from "@/assets/project-portfolio.jpg";

export const profile = {
  name: "J Anagha Bhat",
  title: "Computer Science & Engineering Student",
  tagline: "Aspiring Software Developer | Web Developer | AI & Technology Enthusiast",
  location: "Karnataka, India",
  email: "anaghabhat2006@gmail.com",
  phone: "9901616928",
  github: "https://github.com/Anaghabhat28",
  linkedin: "https://www.linkedin.com/in/j-anagha-bhat-81557936a",
};

export const education = {
  institution: "Canara Engineering College, Bantwal",
  degree: "Bachelor of Engineering (B.E.)",
  branch: "Computer Science and Engineering",
  year: "3rd Year",
};

export const skillGroups: { title: string; items: string[] }[] = [
  { title: "Programming Languages", items: ["C", "C++", "Java", "Python"] },
  { title: "Web Development", items: ["HTML5", "CSS", "JavaScript"] },
  { title: "Databases", items: ["SQL", "MongoDB"] },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Scilab", "Microsoft Excel"],
  },
  {
    title: "Areas of Interest",
    items: [
      "Web Development",
      "Artificial Intelligence",
      "Machine Learning",
      "Cybersecurity",
      "Data Structures & Algorithms",
      "Database Management",
      "Software Development",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "graphxplore",
    title: "GraphXplore",
    subtitle: "Graph Theory Visualizer",
    description:
      "An interactive Graph Theory visualization project designed to help users understand graph concepts through visual representations and interactive functionality.",
    technologies: ["Scilab", "GUI development", "Graph Theory"],
    image: graphxploreImage,
    imageAlt: "Illustration of a graph with connected nodes and edges on a light panel.",
    github: "https://github.com/Anaghabhat28/graphXplore.git",
    featured: true,
  },
  {
    slug: "anus-kitchen",
    title: "Anu's Kitchen",
    subtitle: "Recipe Book Website",
    description:
      "A web-based recipe collection project designed to organize and present recipes in a simple and user-friendly interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: kitchenImage,
    imageAlt: "Illustration of recipe cards with simple food icons.",
    github: "https://github.com/Anaghabhat28/Recipe-book.git",
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio Website",
    subtitle: "Accessible semantic portfolio",
    description:
      "An accessible, semantic HTML5 portfolio website designed to showcase my skills, projects, certifications, education, and achievements.",
    technologies: ["HTML5", "CSS", "JavaScript"],
    image: portfolioImage,
    imageAlt: "Illustration of a website layout wireframe with placeholder blocks.",
  },
];

export type Certification = {
  name: string;
  organization: string;
  /** Add a certificate URL here when available. */
  link?: string;
  /** Add a date here only when known. */
  date?: string;
};

export const certifications: Certification[] = [
  { name: "Microsoft Excel", organization: "Coursera" },
  { name: "MongoDB Skill-a-thon 2026", organization: "MongoDB" },
  { name: "Exploring Cybersecurity", organization: "IBM" },
  { name: "Springboard courses", organization: "Infosys" },
  { name: "Courses and training", organization: "Skillsoft" },
];

export type Activity = {
  title: string;
  organization?: string;
  description: string;
  details?: string[];
};

export const hackathons: Activity[] = [
  {
    title: "Scilab GUIVerse Hackathon 2026",
    organization: "FOSSEE, IIT Bombay",
    description:
      "Participated in the Scilab GUIVerse Hackathon 2026, organized through FOSSEE, IIT Bombay. Project: GraphXplore — Graph Theory Visualizer.",
  },
  {
    title: "Cybersecurity Hackathon / Ceriothon",
    description: "Participated in cybersecurity-related activities involving areas such as:",
    details: ["CTF", "OSINT", "Cybersecurity", "Vulnerability assessment concepts"],
  },
  {
    title: "H & P PROJECTS Hackathon Global Challenges 2026",
    description: "Registered for the H & P PROJECTS Hackathon Global Challenges 2026.",
  },
];

/** Add internships or roles here as they happen. */
export const internships: Activity[] = [];

export const experienceAreas: string[] = [
  "Technical projects",
  "Hackathons",
  "Online courses",
  "Certifications",
  "Web development projects",
  "AI/ML learning",
  "Cybersecurity learning",
];

export const navigation = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/certifications", label: "Certifications" },
  { to: "/experience", label: "Experience & Achievements" },
  { to: "/contact", label: "Contact" },
] as const;
