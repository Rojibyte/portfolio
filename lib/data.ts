import React from "react";
import { CgWorkAlt, CgFolder } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuBrush } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Junior Web Designer",
    location: "Lipa City, Batangas",
    description:
      "After graduating I started as a Junior Web Designer learning UI/UX and website building using Duda.",
    icon: React.createElement(LuBrush),
    date: "Feb 2018 - Nov 2018",
  },
  {
    title: "Junior Web Developer",
    location: "Lipa City, Batangas",
    description:
      "After a few months, I have been promoted to a Junior Web Developer focusing on JavaScript and jQuery as well on developing Custom Widgets in Duda Platform.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2018 - March 2021",
  },
  {
    title: "Web Development Specialist 1",
    location: "Pasig City, NCR",
    description:
      "I worked as an Email Front-end Developer using Eloqua, learning more about marketing automation, designing and developing emails.",
    icon: React.createElement(MdOutlineEmail),
    date: "March 2021 - April 2023",
  },
  {
    title: "Web Development Specialist 2",
    location: "Pasig City, NCR",
    description:
      "I got promoted to Specialist 2, I provide recommendations and guidance to clients and managed client email campaigns by scheduling, sending, and tracking performance metrics.",
    icon: React.createElement(MdOutlineEmail),
    date: "April 2023 - Sept 2024",
  },
  {
    title: "Email Front-end Developer",
    location: "Cebu City, Cebu",
    description:
      "I'm now a React Developer specializing in designing and developing emails that are fully compatible with Braze using an in-house built React App.",
    icon: React.createElement(FaReact),
    date: "Sept 2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "eCommerce App",
    description:
      "A full-stack e-commerce application I built using Next.js 15 with the latest App Router.",
    tags: [
      "Next.js 15",
      "TypeScript",
      "MongoDB",
      "Tailwind",
      "DaisyUI",
      "Prisma",
    ],
    altText: "ecommerce-app",
    link: "https://ecommerce-app-rojibytes-projects.vercel.app/",
    imageUrl: corpcommentImg,
  },
  {
    title: "Golf Club Website",
    description: "A simple website I made in webflow.",
    tags: ["Webflow", "Web Design", "Mobile Responsive"],
    altText: "champion-club-website-thumbnail",
    link: "https://golf-club-website-5987cd.webflow.io/",
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SASS",
  "JavaScript",
  "jQuery",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PHP",
  "Git",
  "Github",
  "BitBucket",
  "Tailwind",
  "Bootstrap",
  "Webflow",
  "Duda",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
