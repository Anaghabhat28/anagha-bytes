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
    slug: "electrohack-4-0",

title: "ELECTROHACK 4.0",

subtitle: "AI-Based Tower Classification",

description:

"An AI-powered tower classification system developed during ELECTROHACK 4.0 to identify supporting and monopole towers from uploaded images using YOLOv8. The solution includes image-quality validation, object detection, confidence scores, and a web-based dashboard for visualizing detection results.",

technologies: ["Python", "YOLOv8", "OpenCV", "FastAPI", "React", "JavaScript"],

image: portfolioImage,

imageAlt: "AI-based tower detection and classification dashboard.",

github: "https://github.com/Anaghabhat28/ELECTROHACK",
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
    title: "ELECTROHACK 4.0 Hackathon",
    description: "Participated in ELECTROHACK 4.0, a 24-hour hackathon held at KSIT, Bengaluru, where I collaborated with a team to develop an AI-based tower classification solution.",
  },
];

/** Add internships or roles here as they happen. */
export const internships: Activity[] = [
  {
    title: "Web Development Intern",
    organization: "Thiranex",
    description:
      "Currently working as a Web Development Intern at Thiranex, contributing to web development tasks and building practical, hands-on experience.",
  },
];

export const experienceAreas: string[] = [
  "Web development internship",
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
