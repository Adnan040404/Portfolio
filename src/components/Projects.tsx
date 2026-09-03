"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./ui/Reveal";
import { GithubIcon } from "./icons";
import { categories, projects, type Category } from "@/data/projects";

const filters: Array<Category | "All"> = ["All", ...categories];

export function Projects() {
  const [active, setActive] = useState<Category | "All">("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-text">Projects</h2>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    active === f
                      ? "border-accent bg-accent text-accent-text"
                      : "border-border text-text-muted hover:text-text"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.a
                layout
                key={project.title}
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -3 }}
                className="group flex flex-col rounded-xl border border-border bg-bg-elevated p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-text">{project.title}</h3>
                  <ArrowUpRight
                    size={16}
                    className="mt-1 shrink-0 text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-bg-subtle px-2.5 py-1 text-[11px] font-medium text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-text-muted">
                  <GithubIcon size={13} />
                  View on GitHub
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
