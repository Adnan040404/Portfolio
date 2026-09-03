import { Mail } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./icons";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-text">
            Let&apos;s work together
          </h2>
          <p className="mt-3 max-w-lg text-text-muted">
            I&apos;m open to opportunities in Data Analytics, Business Intelligence, and Data
            Engineering. Feel free to reach out.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-text transition-transform hover:-translate-y-0.5"
            >
              <Mail size={16} />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:bg-bg-subtle"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:bg-bg-subtle"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          </div>

          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
