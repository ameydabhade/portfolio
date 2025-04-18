export type Project = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  demoLink: string;
  githubLink: string;
  technologies: string[];
  category: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Testimonial = {
  id: string;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  avatar: string;
};

export type Skill = {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "soft";
};

export const skills: Skill[] = [
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "Redux", level: 80, category: "frontend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "MongoDB", level: 85, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "Python", level: 70, category: "backend" },
  { name: "Git", level: 85, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "AWS", level: 75, category: "tools" },
  { name: "Azure", level: 70, category: "tools" },
  { name: "Firebase", level: 80, category: "tools" },
  { name: "Postman/Axios", level: 85, category: "tools" },
  { name: "SEO", level: 75, category: "tools" },
  { name: "English", level: 95, category: "soft" },
  { name: "German (A1)", level: 60, category: "soft" },
  { name: "Communication", level: 90, category: "soft" },
  { name: "Problem Solving", level: 90, category: "soft" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "OVmLeads CRM",
    description: "A real-time customer relationship management tool designed to help organizations improve efficiency, streamline human resources, and perform detailed analytics. Built with Next.js and optimized for performance.",
    coverImage: "/images/projects/crm.jpg",
    demoLink: "https://ovmleads.com",
    githubLink: "https://github.com/ameydabhade/ovmleads-crm",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "ShadCn UI", "MongoDB"],
    category: "web",
  },
  {
    id: "2",
    title: "Event Management System",
    description: "A full-stack event management system developed for Persist Ventures with user-based authentication and CRUD operations. Includes an integrated image processing module for character detection, search, and manipulation.",
    coverImage: "/images/projects/event-management.jpg",
    demoLink: "https://event-management-demo.dev",
    githubLink: "https://github.com/ameydabhade/event-management",
    technologies: ["Node.js", "Express", "MongoDB", "React", "Image Processing"],
    category: "web",
  },
  {
    id: "3",
    title: "Vigomerge Corporate Website",
    description: "A high-performance, SEO-optimized corporate website developed for Vigomerge. Features responsive design and optimized user engagement metrics.",
    coverImage: "/images/projects/vigomerge.jpg",
    demoLink: "https://vigomerge.com",
    githubLink: "https://github.com/ameydabhade/vigomerge-site",
    technologies: ["React.js", "Tailwind CSS", "SEO Optimization", "Performance Optimization"],
    category: "web",
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Shadcn UI components, featuring animations and a responsive design to showcase my projects and skills.",
    coverImage: "/images/projects/portfolio.jpg",
    demoLink: "https://ameydabhade.com",
    githubLink: "https://github.com/ameydabhade/portfolio",
    technologies: ["Next.js", "Shadcn UI", "Tailwind CSS", "Framer Motion", "TypeScript"],
    category: "web",
  },
  {
    id: "5",
    title: "Cybersecurity Testing Lab",
    description: "A personal project to practice ethical hacking skills and web security testing. Implements various security protocols and vulnerability assessments.",
    coverImage: "/images/projects/security-lab.jpg",
    demoLink: "https://security-lab-demo.dev",
    githubLink: "https://github.com/ameydabhade/security-lab",
    technologies: ["Penetration Testing", "Security Protocols", "Vulnerability Assessment", "AWS Security"],
    category: "security",
  },
  {
    id: "6",
    title: "Cloud Infrastructure Project",
    description: "Developed scalable cloud infrastructure solutions using AWS and Azure, implementing best practices for security, performance, and cost optimization.",
    coverImage: "/images/projects/cloud-infra.jpg",
    demoLink: "https://cloud-infra-demo.dev",
    githubLink: "https://github.com/ameydabhade/cloud-infrastructure",
    technologies: ["AWS", "Azure", "Docker", "Linux", "Cloud Security"],
    category: "cloud",
  },
];

export const services: Service[] = [
  {
    id: "1",
    title: "Full Stack Development",
    description: "I develop complete web applications from frontend to backend using modern frameworks like React, Next.js, Node.js, and Express.",
    icon: "code",
  },
  {
    id: "2",
    title: "Frontend Development",
    description: "I build beautiful, responsive user interfaces with React.js, Next.js, and Tailwind CSS optimized for performance and user experience.",
    icon: "layout",
  },
  {
    id: "3",
    title: "Backend Development",
    description: "I create robust server-side applications and APIs using Node.js, Express, MongoDB, and PostgreSQL to power your applications.",
    icon: "server",
  },
  {
    id: "4",
    title: "CRM System Development",
    description: "I design and develop custom CRM solutions to help businesses manage their customer relationships effectively and improve workflow efficiency.",
    icon: "layers",
  },
  {
    id: "5",
    title: "SEO & Performance Optimization",
    description: "I optimize websites for search engines and performance, improving loading times and ensuring better visibility in search results.",
    icon: "zap",
  },
  {
    id: "6",
    title: "Cloud & Security Solutions",
    description: "I implement secure cloud infrastructure using AWS, Azure, and Firebase, with a focus on security best practices and performance optimization.",
    icon: "shield",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    position: "CEO",
    company: "Vigomerge",
    testimonial: "Working with Amey was an absolute pleasure. He delivered our CRM system on time and exceeded our expectations in terms of quality and attention to detail.",
    avatar: "/images/testimonials/sarah.jpg",
  },
  {
    id: "2",
    name: "Michael Chen",
    position: "Product Manager",
    company: "Persist Ventures",
    testimonial: "Amey's technical expertise and problem-solving abilities are exceptional. He quickly understood our requirements and delivered an event management system that perfectly met our needs.",
    avatar: "/images/testimonials/michael.jpg",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    position: "Marketing Director",
    company: "Vigomerge",
    testimonial: "Our website redesign project was handled with professionalism and creativity. Amey's ability to translate our brand vision into a functional website with SEO optimization was impressive.",
    avatar: "/images/testimonials/emily.jpg",
  },
  {
    id: "4",
    name: "David Park",
    position: "Dean",
    company: "Maharashtra State Skills University",
    testimonial: "Amey has been an outstanding Technical Club Head, demonstrating leadership and technical expertise. His mentoring of students in Data Structures and Algorithms has significantly improved our program.",
    avatar: "/images/testimonials/david.jpg",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/ameydabhade", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/ameydabhade", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/ameydabhade", icon: "twitter" },
  { name: "Instagram", url: "https://instagram.com/ameydabhade", icon: "instagram" },
]; 