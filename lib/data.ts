import React from "react";
import { CgWorkAlt, CgFolder } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuBrush } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import corpcommentImg from "@/public/corpcomment.png";
import flowmazonImg from "@/public/flowmazonImg.png";
import golfClubImg from "@/public/golfClub.png";

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
      "I started my career as a Junior Web Designer, learning UI/UX principles and website construction using Duda.",
    icon: React.createElement(LuBrush),
    date: "Feb 2018 - Nov 2018",
  },
  {
    title: "Junior Web Developer",
    location: "Lipa City, Batangas",
    description:
      "Advanced to Junior Web Developer, concentrating on JavaScript and jQuery, and developing custom widgets within the Duda platform.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2018 - March 2021",
  },
  {
    title: "Web Development Specialist 1",
    location: "Pasig City, NCR",
    description:
      "Focused on front-end email development using Eloqua, I honed skills in marketing automation, email design, and development.",
    icon: React.createElement(MdOutlineEmail),
    date: "March 2021 - April 2023",
  },
  {
    title: "Web Development Specialist 2",
    location: "Pasig City, NCR",
    description:
      "Promoted to Specialist II, I provided strategic recommendations and guidance to clients, managing email campaigns by scheduling, dispatching, and analyzing performance metrics.",
    icon: React.createElement(MdOutlineEmail),
    date: "April 2023 - Sept 2024",
  },
  {
    title: "Email Front-end Developer",
    location: "Cebu City, Cebu",
    description:
      "Currently serving as a React Developer, I specialize in designing and developing responsive emails fully compatible with Braze, utilizing an in-house React application.",
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
    imageUrl: flowmazonImg,
  },
  {
    title: "Golf Club Website",
    description: "A simple landing page website I made in webflow.",
    tags: ["Webflow", "Web Design", "Mobile Responsive"],
    altText: "champion-club-website-thumbnail",
    link: "https://golf-club-website-5987cd.webflow.io/",
    imageUrl: golfClubImg,
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
