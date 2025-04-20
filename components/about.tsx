"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 ">
        After earning my degree in{" "}
        <span className="font-medium">Information Systems</span>, I dove into my
        passion for web development and programming. I began by exploring online
        courses in web design and full-stack development, and quickly found that{" "}
        <span className="font-medium">solving problems</span> through code is
        what truly excites me. There's nothing quite like the satisfaction of
        cracking a tough bug or building something from scratch. My core stack
        includes{" "}
        <span className="font-medium">React, Next.js, and Node.js</span>. I’m
        also comfortable working with{" "}
        <span className="font-medium">TypeScript and Figma</span>, and I’m
        always eager to explore and learn new technologies. Right now, I'm
        actively seeking a <span className="font-medium">full-time role</span>{" "}
        as a <span className="italic">software developer</span> where I can
        continue growing and contribute to meaningful projects.
      </p>
      <p>
        <span className="italic">Outside of coding</span>, I enjoy playing video
        games, watching movies, and spending time with my two cats. I also love{" "}
        <span className="font-medium">picking up new hobbies</span>—recently,
        I’ve started{" "}
        <span className="font-medium">
          learning golf and getting more into sports.
        </span>
        .
      </p>
    </motion.section>
  );
}
