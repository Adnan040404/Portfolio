"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section id="home" className="mx-auto max-w-5xl px-6 pb-20 pt-20 md:pt-28">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p variants={item} className="mb-4 text-sm font-medium text-accent">
          Hi, I&apos;m
        </motion.p>
        <motion.h1
          variants={item}
          className="text-4xl font-semibold tracking-tight text-text sm:text-5xl md:text-6xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p variants={item} className="mt-4 text-xl font-medium text-text-muted md:text-2xl">
          {profile.title} <span className="text-border">·</span> {profile.subtitle}
        </motion.p>
        <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-text-muted">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-text transition-transform hover:-translate-y-0.5"
          >
            View my work <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:bg-bg-subtle"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-muted transition-colors hover:text-text"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted transition-colors hover:text-text"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-text-muted transition-colors hover:text-text"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
